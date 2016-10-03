import { Component } from '@angular/core';

import { PopoverReport } from './../../components/popover_report';
import { NavController,PopoverController } from 'ionic-angular';

@Component({
  // selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private popoverCtrl: PopoverController) {

  }

  presentPopover(ev)
  {
    let popover = this.popoverCtrl.create(PopoverReport,{userId:1});
    popover.present(
        {
          ev: ev,
        }
    );
  }
}
