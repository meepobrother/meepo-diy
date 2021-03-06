import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as store from 'store';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as uuid from 'uuid';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/common';
import { ApiService } from '../../core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef;

  form: FormGroup;
  swiperJs: string = 'https://meepo.com.cn/meepo/libs/qrcode.min.js';
  swiper: any;

  laodSuccess: Subject<any> = new Subject();
  rcode: string = uuid();

  timer: any;
  QRCode: any;
  siteroot: string;
  sitehttp: string = 'https://';

  showNext: boolean = false;

  pages: any[] = [];

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public ele: ElementRef,
    @Inject(DOCUMENT) public document: any,
    public http: HttpClient,
    public api: ApiService
  ) {
    this.rcode = store.get('__meepo_rcode', uuid());
    this.siteroot = store.get('__meepo_siteroot', 'meepo.com.cn');

    if (this.siteroot.startsWith('https://')) {
      this.siteroot = this.siteroot.replace('https://', '');
    }
    if (this.siteroot.startsWith('http://')) {
      this.siteroot = this.siteroot.replace('http://', '');
    }
    if (this.siteroot.endsWith('/')) {
      this.siteroot = this.siteroot.replace('/', '');
    }
    this.laodSuccess.subscribe(QRCode => {
      this.QRCode = QRCode;
    });
    this.api.onInit.subscribe(sysinfo => { });
  }

  next() {
    this.showNext = true;

    this.api.setSiteroot(this.sitehttp + this.siteroot + '/');
    store.set('__meepo_siteroot', this.siteroot);
    document.getElementById('qrcode').innerHTML = '';

    this.autoCheck();
    // 
    this.api.mpost('login.getOauthUniacid', {}).subscribe((res: any) => {
      this.api.sysinfo.uniacid = res.info;
      this.api.sysinfo.acid = res.info;
      this.api.onInit.next(this.api.sysinfo);

      const qrcode = new this.QRCode(document.getElementById('qrcode'), {
        text: '' + this.api.murl('entry/site/open', { __do: 'login.qrcode', m: 'imeepos_runner', r: this.rcode }),
        width: 328,
        height: 328,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: this.QRCode.CorrectLevel.H
      });
    });
  }

  autoCheck() {
    this.timer = setInterval(() => {
      this.api.mpost('login.autologin', { r: this.rcode }).subscribe((res: any) => {
        const date = res.info;
        const { openid, rcode, uid, info, uniacid, acid, siteroot, account } = date;
        if (openid) {
          store.set('__meepo_uid', uid);
          store.set('__meepo_openid', openid);
          store.set('__meepo_rcode', rcode);
          store.set('__meepo_myuserinfo', info);

          store.set('__meepo_uniacid', uniacid);
          store.set('__meepo_acid', acid);
          store.set('__meepo_siteroot', siteroot);

          store.set('__meepo_account', account);

          if (uniacid) {
            store.set('isLogin', true);
            this.router.navigate(['themes']);
            clearInterval(this.timer);
          }
        }
      });
    }, 1500);
  }

  ngOnInit() {
    this.api.mpost('login.update', {}).subscribe(res => { });
  }

  ngAfterViewInit() {
    this.loadJScript();
  }

  loadJScript() {
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.swiperJs;
    script.onload = () => {
      this.swiper = window['QRCode'];
      this.laodSuccess.next(this.swiper);
    };
    script.onerror = () => {
      console.log('Swiper插件加载失败');
    };
    this.document.body.appendChild(script);
  }

}
