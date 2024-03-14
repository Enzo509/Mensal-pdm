let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/23",
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        matriculadoEm: "2024/04/23",
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        matriculadoEm: "2024/02/25",
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/29",
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
];

function listarAlunos(listaDeAlunos) {
    for (let aluno of listaDeAlunos) {
    console.log(`${aluno.numeroChamada} - ${aluno.nome}`);
    }
}

function buscarAlunoPeloNumeroDaChamada(numeroChamada) {
    let alunoEncontrado = chamadaDeAlunos.find(aluno => aluno.numeroChamada === numeroChamada);
    if (alunoEncontrado) {
    console.log(`${alunoEncontrado.numeroChamada} - ${alunoEncontrado.nome}`);
    } else {
    console.log("Aluno não encontrado");
    }
}

function listarAlunosAprovados(listaDeAlunos) {
    for (let aluno of listaDeAlunos) {
        let aprovado = aluno.materias.every(materia => materia.nota >= 6 && materia.presenca >= 75);
        if (aprovado) {
        console.log(`${aluno.numeroChamada} - ${aluno.nome}`);
        }
    }
}

function listarAlunosReprovados(listaDeAlunos) {
    for (let aluno of listaDeAlunos) {
        let reprovado = aluno.materias.some(materia => materia.nota < 6 || materia.presenca < 75);
        if (reprovado) {
        console.log(`${aluno.numeroChamada} - ${aluno.nome}`);
        }
    }
}

function listarAlunoPorMesMatricula(listaDeAlunos, mes, ano) {
    for (let aluno of listaDeAlunos) {
        let dataMatricula = new Date(aluno.matriculadoEm);
        if (dataMatricula.getMonth() + 1 === mes && dataMatricula.getFullYear() === ano) {
            console.log(`${aluno.numeroChamada} - ${aluno.nome}`);
        }
    }
}



listarAlunos(chamadaDeAlunos);
console.log("\nLista de alunos");
listarAlunosAprovados(chamadaDeAlunos);
console.log("\nAlunos aprovados:");
listarAlunosReprovados(chamadaDeAlunos);
console.log("\nAlunos reprovados:");
listarAlunoPorMesMatricula(chamadaDeAlunos, 2, 2024);
