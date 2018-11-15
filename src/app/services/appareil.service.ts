import { Appareil } from '../prototypes/appareils';

export class AppareilService {
    appareils = [
        new Appareil(1, 'Machine à laver', 'allumé'),
        new Appareil(2, 'Télévision', 'allumé'),
        new Appareil(3, 'Ordinateur', 'éteint')
    ];

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );
        return appareil;
    }
    switchOnAll() {
        for (const appareil of this.appareils) {
            appareil.setStatus('allumé');
        }
    }

    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.setStatus('éteint');
        }
    }

    switchOnOne(index: number) {
        this.appareils[index].setStatus('allumé');
    }

    switchOffOne(index: number) {
        this.appareils[index].setStatus('éteint');
    }
}
