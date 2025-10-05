export default class StatusEtapa{
    status: "Pendente" | "Em andamento" | "Concluída";
    num: number;
    
    constructor(status: number){
        (status === 1 ? this.status = "Pendente" : 
        (status === 2) ? this.status = "Em andamento" : this.status = "Concluída");
        this.num = status;
    }
}