import { Component } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { Article } from '../../intefaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  noticias: Article[]= [];
  slideOpt = {
    allowSlidePrev: false,
    allowSlideNext: false
  }
  constructor(public dataLocalService: DataLocalService) {
  }

}
