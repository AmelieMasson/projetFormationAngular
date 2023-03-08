import { Formation } from "./formation";
import { Historique } from "./historique";
import { Rdv } from "./rdv";
import { Role } from "./role";
import { Utilisateur } from "./utilisateur";

export class Formateur extends Utilisateur {

    formations!:Formation[];

    constructor(id?:number,nom?:string,prenom?:string,age?:number,email?:string, rdvs?:Rdv[], historiques?:Historique[], username?:string, password?:string, role?:Role, formations?:Formation[])
    {  
        super(id,nom,prenom,age,email,rdvs,historiques,username,password,role)
        if(formations)
        this.formations=formations
       

    }  
}
