import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1Component }      from './view1/view1.component';
import { View2Component }      from './view2/view2.component';
import { Tab1Component }      from './tab1/tab1.component';
import { Tab2Component }      from './tab2/tab2.component';


const routes: Routes = [
  { path: 'view1', 
    component: View1Component, 
    children: [
                {
                  path: 'tab1',
                  component: Tab1Component
                },
                {
                  path: 'tab2',
                  component: Tab2Component
                },
                { path: '', redirectTo: 'tab1', pathMatch: 'full' }
              ]
  },
  { path: 'view2', 
    component: View2Component,
    children: [ 
                {
                  path: 'tab1',
                  component: Tab1Component
                },
                {
                  path: 'tab2',
                  component: Tab2Component
                },
                { path: '', redirectTo: 'tab1', pathMatch: 'full' }
              ]
  },
  { path: '', redirectTo: '/view1', pathMatch: 'full' },
  { path: '**', redirectTo: '/view1', pathMatch: 'full' },
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}