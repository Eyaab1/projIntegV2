import { User } from "./user";

export class Enseignant extends User {
    constructor(
        
        nom: string,
        prenom: string,
        email: string,
        numtel: number,
        type: string,
        password: string,
        private TypeEns: string,
        private CodeEns: string
    ){
        super(nom, prenom, email, numtel, type, password)
    }
}
