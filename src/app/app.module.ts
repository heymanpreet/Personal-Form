import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatInputModule,MatSelectModule,MatChipsModule, MatRadioModule,
MatTabsModule,MatTableModule, MatCardModule, MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { RegisterationComponent } from './registeration/registeration.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FamilyInfoComponent } from './family-info/family-info.component';
import { EmergencyContactInfoComponent } from './emergency-contact-info/emergency-contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    ContactInfoComponent,
    FamilyInfoComponent,
    EmergencyContactInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
