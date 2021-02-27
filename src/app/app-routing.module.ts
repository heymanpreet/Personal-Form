import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'register', component: AppComponent  },
  { path: 'login', component: AppComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
