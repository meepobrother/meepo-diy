import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverComponent, CoverContent } from './cover';

const components = [
  CoverComponent, CoverContent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
