import { Formation } from "./formation";
import { Historique } from "./historique";
import { Paiement } from "./paiement";
import { Rdv } from "./rdv";
import { Role } from "./role";
import { Utilisateur } from "./utilisateur";

export class Participant extends Utilisateur {

    paiements!:Paiement[];
    formations!:Formation[];

    constructor(id?:number,nom?:string,prenom?:string,age?:number,email?:string, rdvs?:Rdv[], historiques?:Historique[], username?:string, password?:string, role?:Role, paiements?:Paiement[], formations?:Formation[])
    {  
        super(id,nom,prenom,age,email,rdvs,historiques,username,password,role)
        if(paiements)
        this.paiements=paiements
        if(formations)
        this.formations=this.formations
    }


}
