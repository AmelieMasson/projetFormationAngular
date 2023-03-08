import { Formation } from "./formation";
import { Participant } from "./participant";

export class Paiement {

    id!:number;
    montant!:number;
    participant!:Participant;
    formations!:Formation[];

    constructor(id?:number,montant?:number,participant?:Participant,formations?:Formation[])
    {
        if(id)
        this.id=id
        if(montant)
        this.montant=montant
        if(participant)
        this.participant=participant
        if(formations)
        this.formations=formations 

    }
}
