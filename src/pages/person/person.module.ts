import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonPage } from './person';
import { PersonService } from './person.service'

@NgModule({
  declarations: [
    PersonPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonPage),
  ],
  providers: [
    PersonService
  ]
})
export class PersonPageModule {}
