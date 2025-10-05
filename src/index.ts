import Aeronave from "./Classes/Aeronaves/aeronave.js";
import TipoAeronave from "./Classes/Aeronaves/tipoAeronave.js";
import Etapa from "./Classes/Etapas/etapa.js";
import StatusEtapa from "./Classes/Etapas/statusEtapa.js";
import Funcionario from "./Classes/Funcionarios/funcionario.js";
import NivelPermissao from "./Classes/Funcionarios/nivelPermissao.js";
import Peça from "./Classes/Peças/peça.js";
import StatusPeça from "./Classes/Peças/statusPeça.js";
import TipoPeça from "./Classes/Peças/tipoPeça.js";
import Relatorio from "./Classes/Relatorios/relatorio.js";
import ResultadoTeste from "./Classes/Testes/resultadoTeste.js";
import Teste from "./Classes/Testes/teste.js";
import TipoTeste from "./Classes/Testes/tipoTeste.js";

const permissao_func1_1 = new NivelPermissao(3);
const funcionario1_1 = new Funcionario("Cláudio", "(12) 123123", "Rua Bela Vista", "claudioTrabalhador", "senha123", permissao_func1_1)

const permissao_func1_2 = new NivelPermissao(2);
const funcionario1_2 = new Funcionario("Jorge", "(48) 12738912", "Rua das Pamonhas","dhorge@jorge", "123", permissao_func1_2);

const statusEtapa1 = new StatusEtapa(1);
const etapa1 = new Etapa("Correção de ar", 20, statusEtapa1);
etapa1.associarFuncionario(funcionario1_1)
etapa1.associarFuncionario(funcionario1_2)

const tipoTeste1_1 = new TipoTeste(3);
const resultadoTeste1_1 = new ResultadoTeste(1);
const teste1_1 = new Teste(tipoTeste1_1, resultadoTeste1_1);

const tipoPeça1_1 = new TipoPeça(2);
const StatusPeça1_1 = new StatusPeça(2);
const peça1_1 = new Peça("Motor", tipoPeça1_1, "Produção Espacial", StatusPeça1_1)

const tipoAeronave1 = new TipoAeronave(1);
const aeronave1 = new Aeronave("Avião do Taco", tipoAeronave1, 100, 20);
aeronave1.adicionarEtapa(etapa1)
aeronave1.adicionarTeste(teste1_1)
aeronave1.adicionarPeça(peça1_1)

const relatorio1 = new Relatorio();
relatorio1.gerarRelatorio("aeronave1", aeronave1)

console.log(aeronave1.detalhes())