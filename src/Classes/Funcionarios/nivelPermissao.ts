export default class NivelPermissao{
    tipo: "Administrador" | "Engenheiro" | "Operador"
    num: number

    constructor(tipo: number){
        (tipo === 1 ? this.tipo = "Administrador" : 
        (tipo === 2) ? this.tipo = "Engenheiro" : this.tipo = "Operador");
        this.num = tipo;
    }
}