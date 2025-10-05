export default class TipoPeça{
    tipo: "Nacional" | "Importada";
    num: number

    constructor(tipo: number){
        tipo === 1 ? this.tipo = "Nacional" : this.tipo = "Importada";
        this.num = tipo;
    }
}