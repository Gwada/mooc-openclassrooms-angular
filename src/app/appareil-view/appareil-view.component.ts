import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Appareil } from '../prototypes/appareils';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: Appareil[];
  appareilSubscription: Subscription;

  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  constructor(private appareilService: AppareilService, private router: Router) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000);
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubjet.subscribe(
      (appareils: Appareil[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  onAjouter() {
    this.router.navigate(['edit']);
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
}
