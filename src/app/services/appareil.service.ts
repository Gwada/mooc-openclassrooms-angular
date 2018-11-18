import { Subject } from 'rxjs';
import { Appareil } from '../models/Appareils.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {

    appareilSubjet = new Subject<Appareil[]>();

    private appareils = [];

    constructor(private httpClient: HttpClient) {}

    emitAppareilSubject() {
        this.appareilSubjet.next(this.appareils.slice());
    }

    saveAppareilsToServer() {
        this.httpClient
            .put('https://mooc-openclassrooms-angular.firebaseio.com/appareils.json', this.appareils)
            .subscribe(
                () => {
                    console.log('enregistrement terminé');
                    this.getAppareilsFromServer();
                },
                (error) => {
                    console.log(`erreur!!!! ${error}`);
                }
            )
        ;
    }

    getAppareilsFromServer() {
        this.httpClient
            .get<Appareil[]>('https://mooc-openclassrooms-angular.firebaseio.com/appareils.json')
            .subscribe(
                (response) => {
                    this.appareils = response;
                    this.emitAppareilSubject();
                },
                (error) => {
                    console.log(`erreur!!!! ${error}`);
                }
            )
        ;
    }

    addAppareil(name: string, status: string) {
        const newId = this.appareils[this.appareils.length - 1].id + 1;

        this.appareils.push(new Appareil(newId, name, status));
        this.saveAppareilsToServer();
        this.emitAppareilSubject();
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (a) => {
                return a.id === id;
            }
        );
        return appareil;
    }
    switchOnAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.saveAppareilsToServer();
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.saveAppareilsToServer();
        this.emitAppareilSubject();
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';

        this.saveAppareilsToServer();
        this.emitAppareilSubject();
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';

        this.saveAppareilsToServer();
        this.emitAppareilSubject();
    }
}
