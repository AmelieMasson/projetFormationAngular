import { Historique } from "./historique";
import { Rdv } from "./rdv";
import { Role } from "./role";
import { Utilisateur } from "./utilisateur";

export class Commercial extends Utilisateur {

    rdvsCommercial!:Rdv[];
    historiquesCommercial!:Historique[];


    
    constructor(id?:number,nom?:string,prenom?:string,age?:number,email?:string,rdvs?:Rdv[],historiques?:Historique[], username?:string, password?:string, role?:Role, rdvsCommercial?:Rdv[], historiquesCommercial?:Historique[])
    {  
        super(id,nom,prenom,age,email,rdvs,historiques,username,password,role)

        if(rdvsCommercial)
        this.rdvsCommercial=this.rdvsCommercial;
        if(historiquesCommercial)
        this.historiquesCommercial=historiquesCommercial

    }  

}
