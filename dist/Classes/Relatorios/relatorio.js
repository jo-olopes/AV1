import { writeFileSync } from "fs";
export default class Relatorio {
    gerarRelatorio(nome, aeronave) {
        writeFileSync(nome, aeronave.detalhes(), "utf-8");
    }
}
//# sourceMappingURL=relatorio.js.map