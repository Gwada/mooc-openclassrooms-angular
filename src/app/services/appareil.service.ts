import { Subject } from 'rxjs';
import { Appareil } from '../models/Appareils.model';

export class AppareilService {

    appareilSubjet = new Subject<Appareil[]>();

    private appareils = [
        new Appareil(1, 'Machine à laver', 'allumé'),
        new Appareil(2, 'Télévision', 'allumé'),
        new Appareil(3, 'Ordinateur', 'éteint')
    ];

    emitAppareilSubject() {
        this.appareilSubjet.next(this.appareils.slice());
    }

    addAppareil(name: string, status: string) {
        const newId = this.appareils[this.appareils.length - 1].id + 1;

        this.appareils.push(new Appareil(newId, name, status));
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
            appareil.setStatus('allumé');
        }
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.setStatus('éteint');
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number) {
        this.appareils[index].setStatus('allumé');
        this.emitAppareilSubject();
    }

    switchOffOne(index: number) {
        this.appareils[index].setStatus('éteint');
        this.emitAppareilSubject();
    }
}
