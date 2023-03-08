import { Historique } from "./historique";
import { Personne } from "./personne";
import { Rdv } from "./rdv";
import { Role } from "./role";

export class Utilisateur extends Personne{

    username!:string;
    password!:string;
    role!:Role;

    constructor(id?:number,nom?:string,prenom?:string,age?:number,email?:string, rdvs?:Rdv[], historiques?:Historique[], username?:string, password?:string, role?:Role)
    {  
        super(id,nom,prenom,age,email,rdvs,historiques)
        if(username)
        this.username=username;
        if(password)
        this.password=password;
        if(role)
        this.role=role;

    }  
}
