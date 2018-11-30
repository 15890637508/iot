import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { PersonPage } from '../person/person';
import { DiscPage } from '../disc/disc';
import { UnifyPage } from '../unify/unify'
import { ReportPage } from '../report/report'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab3Root = DiscPage;
  tab1Root = HomePage;
  tab2Root = UnifyPage;
  tab4Root = ReportPage;
  tab5Root = PersonPage;

  constructor() {

  }
}
