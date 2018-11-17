import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Appareil } from '../models/appareils';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareil: Appareil;
  @Input() indexOfAppareil: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  eteint() {
    return this.appareil.getStatus() === 'éteint';
  }

  getColor() {
    return this.appareil.getStatus() === 'allumé' ? 'green' : 'red';
  }

  onSwitch() {
    if (this.appareil.getStatus() === 'allumé') {
      this.appareilService.switchOffOne(this.indexOfAppareil);
    } else {
      this.appareilService.switchOnOne(this.indexOfAppareil);
    }
  }
}
