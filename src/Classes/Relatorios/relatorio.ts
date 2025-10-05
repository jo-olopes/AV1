import Aeronave from "../Aeronaves/aeronave.js";
import { writeFileSync } from "fs";

export default class Relatorio{
    public gerarRelatorio(nome: string, aeronave: Aeronave){
        writeFileSync(nome, aeronave.detalhes(), "utf-8")
    }
}