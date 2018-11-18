import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'éteint';
  constructor(private router: Router, private appareilService: AppareilService) { }

  ngOnInit() {
  }

  onGoToAppareils() {
    this.router.navigate(['appareils']);
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    this.appareilService.addAppareil(form.value.name, form.value.status);
    this.router.navigate(['/appareils']);
  }
}
