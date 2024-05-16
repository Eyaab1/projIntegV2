import { User } from './user';


export class Administrateur extends User{
    constructor(
        
        nom: string,
        prenom: string,
        email: string,
        numtel: number,
        type: string,
        password: string,
       private typeAd:String,
        private role:String
    ) {
        super(nom, prenom, email, numtel, type, password);
    }
}
