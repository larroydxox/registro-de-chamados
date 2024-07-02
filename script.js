let dadosChamados = {};

document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let mes = document.getElementById('mes').value;
    let recebidos = document.getElementById('recebidos').value;
    let atendidos = document.getElementById('atendidos').value;

    if (!dadosChamados[mes]) {
        dadosChamados[mes] = { recebidos: 0, atendidos: 0 };
    }

    dadosChamados[mes].recebidos += parseInt(recebidos);
    dadosChamados[mes].atendidos += parseInt(atendidos);

    alert('Dados registrados com sucesso!');
    document.getElementById('registro-form').reset();

    verificarContinuacao();
});

document.getElementById('exibir-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let mes = document.getElementById('exibir-mes').value;
    let dadosContainer = document.getElementById('dados-container');
    dadosContainer.innerHTML = '';

    if (mes == '0') {
        criarTabela(dadosChamados);
    } else {
        if (dadosChamados[mes]) {
            let dadosFiltrados = {};
            dadosFiltrados[mes] = dadosChamados[mes];
            criarTabela(dadosFiltrados);
        } else {
            dadosContainer.innerHTML = `<p>Nenhum dado registrado para o mês ${mes}.</p>`;
        }
    }

    verificarContinuacao();
});

function criarTabela(dados) {
    let dadosContainer = document.getElementById('dados-container');
    let tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let headRow = document.createElement('tr');
    headRow.innerHTML = `<th>Mês</th><th>Chamados Recebidos</th><th>Chamados Atendidos</th>`;
    thead.appendChild(headRow);

    for (let mes in dados) {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${mes}</td><td>${dados[mes].recebidos}</td><td>${dados[mes].atendidos}</td>`;
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    dadosContainer.appendChild(tableContainer);
}

function verificarContinuacao() {
    let continuar = confirm('Deseja continuar? Clique em OK para continuar ou Cancelar para encerrar.');
    if (!continuar) {
        alert('Programa encerrado.');
        window.close(); // Tentativa de fechar a janela. Nem todos os navegadores permitem isso.
    }
}
