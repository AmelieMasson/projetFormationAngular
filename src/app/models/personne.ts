import { Historique } from "./historique";
import { Rdv } from "./rdv";

export class Personne {


     id!:number;
    nom!:string;
    prenom!:string;
    age!:number;
    email!:string;
    rdvs!:Rdv[];
    historiques!:Historique[];
   

    

    constructor(id?:number,nom?:string,prenom?:string,age?:number,email?:string,rdvs?:Rdv[],historiques?:Historique[])
    {   
        if(id)
        this.id=id
        if(nom)
        this.nom=nom
        if(prenom)
        this.prenom=prenom
        if(age)
        this.age=age
        if(email)
        this.email=email
        if(rdvs)
        this.rdvs=rdvs
        if(historiques)
        this.historiques=historiques
       
       
    }
}
