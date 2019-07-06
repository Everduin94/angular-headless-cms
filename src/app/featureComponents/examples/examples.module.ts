import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';

import { RouterModule, Routes } from '@angular/router';

const EXAMPLE_ROUTES: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      
    ]
  },
];

@NgModule({
  declarations: [ExamplesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EXAMPLE_ROUTES)
  ]
})
export class ExamplesModule { }
