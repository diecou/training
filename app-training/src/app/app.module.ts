import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap'; // Importar TabsModule para trabajar con tabs de bootstrap
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule para utilizar Reactive Forms
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule para poder acceder a la API

import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { AppRoutingModule } from './app-routing.module';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    NameEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(), // Importar TabsModule
    ReactiveFormsModule,  // Importar ReactiveFormsModule
    BrowserModule,        // Importar BrowserModule
    HttpClientModule      // Importar HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
