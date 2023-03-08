import { Utilisateur } from "./utilisateur";

export class Role {

    id!:number;
    nom_role!:string;
    utilisateurs!:Utilisateur[];

    constructor(id?:number,nom_role?:string,utilisateurs?:Utilisateur[])
    {
        if(id)
        this.id=id;
        if(nom_role)
        this.nom_role=nom_role
        if(utilisateurs)
        this.utilisateurs=utilisateurs
    }
}
