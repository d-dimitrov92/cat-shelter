import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { CatsService } from './cats/cats.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    CatsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
