export default class NivelPermissao {
    tipo: "Administrador" | "Engenheiro" | "Operador";
    num: number;
    constructor(tipo: number);
}
