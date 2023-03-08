import { Commercial } from "./commercial";
import { Personne } from "./personne";

export class Historique {

    id!:number;
    heure!:string;
    date!:Date;
    statut!:number;
    commentaire!:string;
    commercial!:Commercial;
    personne!:Personne;

    constructor(id?:number,heure?:string,date?:Date,statut?:number,commentaire?:string,commercial?:Commercial, personne?:Personne)
    {
        if(id)
        this.id=id
        if(heure)
        this.heure=heure
        if(date)
        this.date=date
        if(statut)
        this.statut=statut
        if(commentaire)
        this.commentaire=commentaire
        if(commercial)
        this.commercial=commercial
        if(personne)
        this.personne=personne
    }

}
