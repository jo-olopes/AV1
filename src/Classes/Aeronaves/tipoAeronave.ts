export default class TipoAeronave{
    tipo: "Comercial" | "Militar";
    num: number

    constructor(tipo: number){
        tipo === 1 ? this.tipo = "Comercial" : this.tipo = "Militar";
        this.num = tipo;
    }
}