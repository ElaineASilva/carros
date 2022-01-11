import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {MegaMenuModule} from 'primeng/megamenu';
import {TableModule} from 'primeng/table';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { HttpClientModule } from '@angular/common/http';

import { CarrosService } from './services/carros.service';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MegaMenuModule,
    TableModule,
    CascadeSelectModule,
    HttpClientModule
  ],
  providers: [CarrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
