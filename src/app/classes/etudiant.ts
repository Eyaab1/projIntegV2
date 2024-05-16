import { User } from "./user";

export class Etudiant extends User {
    constructor(
        
        nom: string,
        prenom: string,
        email: string,
        numtel: number,
        type: string,
        password: string,
        private typeEt: string,
        private specialite: string
    ){
        super(nom, prenom, email, numtel, type, password);
    }
}
