import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderContainerComponent } from './components/order/order-container/order-container.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderSingleComponent } from './components/order/order-single/order-single.component';
import { UserContainerComponent } from './components/user/user-container/user-container.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserSingleComponent } from './components/user/user-single/user-single.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    OrderContainerComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderSingleComponent,
    UserContainerComponent,
    UserDetailComponent,
    UserListComponent,
    UserSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
