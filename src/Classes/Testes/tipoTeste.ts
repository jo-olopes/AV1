export default class TipoTeste{
    tipo: "Elétrico" | "Hidráulico" | "Aerodinâmico";
    num: number;

    constructor(tipo: number){
        (tipo === 1 ? this.tipo = "Elétrico" : 
        (tipo === 2) ? this.tipo = "Hidráulico" : this.tipo = "Aerodinâmico");
        this.num = tipo;
    }
}