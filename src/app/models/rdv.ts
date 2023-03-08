import { Commercial } from "./commercial";
import { Personne } from "./personne";

export class Rdv {

    id!:number;
    date!:Date;
    heure!:string;
    commercial!:Commercial;
    personne!:Personne;

    constructor(id?:number,date?:Date,heure?:string,commercial?:Commercial,personne?:Personne)
    {
        if(id)
        this.id=id
        if(date)
        this.date=date
        if(heure)
        this.heure=heure
        if(commercial)
        this.commercial=commercial
        if(personne)
        this.personne=personne
    }
}
