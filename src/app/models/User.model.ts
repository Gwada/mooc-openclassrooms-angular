export class User {

    constructor(
        private firstName: string,
        private lastName: string,
        private email: string,
        private drinkPreference: string,
        private hobbies?: string[]
    ) { }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setlastName(lastName: string) {
        this.lastName = lastName;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getDrinkPreference() {
        return this.drinkPreference;
    }

    setDrinkPreference(drinkPreference: string) {
        this.drinkPreference = drinkPreference;
    }

    getHobbies() {
        return this.hobbies;
    }

    setHobbies(hobbies: string[]) {
        this.hobbies = hobbies;
    }
}
