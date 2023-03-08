import { Formateur } from "./formateur";

export class Formation {

    id!:number;
    nom!:string;
    prix!:number;
    date_debut!:Date;
    date_fin!:Date;
    formateur!:Formateur;

    constructor(id?:number,nom?:string,prix?:number,date_debut?:Date,date_fin?:Date,formateur?:Formateur)
    {
        if(id)
        this.id=id
        if(nom)
        this.nom=nom
        if(prix)
        this.prix=prix
        if(date_debut)
        this.date_debut=date_debut
        if(date_fin)
        this.date_fin=date_fin
        if(formateur)
        this.formateur=formateur
    }
}
