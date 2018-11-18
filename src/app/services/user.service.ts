import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {

    userSubjet = new Subject<User[]>();
    private users: User[] = [
        new User('Maëliah', 'LAVAURY-COLLOT', 'maeliah@gmail.com', 'diabolo pèche', ['danse', 'télé', 'jeu', 'art'])
    ];

    emitUsers() {
        this.userSubjet.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}
