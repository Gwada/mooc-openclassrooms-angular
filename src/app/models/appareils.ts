export class Appareil {
    id: number;
    name: string;
    status: string;

    constructor(id: number, name: string, status: string) {
        this.setId(id);
        this.setName(name);
        this.setStatus(status);
    }

    getId() {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status: string) {
        this.status = status;
    }
}
