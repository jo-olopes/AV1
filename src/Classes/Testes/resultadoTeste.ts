export default class ResultadoTeste{
    resultado: "Aprovado" | "Reprovado";
    num: number;

    constructor(resultado: number){
        resultado === 1 ? this.resultado = "Aprovado" : this.resultado = "Reprovado";
        this.num = resultado;
    }
}