document.addEventListener('DOMContentLoaded', () => {
    const chamadoForm = document.getElementById('chamadoForm');
    const chamadosTable = document.getElementById('chamadosTable').getElementsByTagName('tbody')[0];

    chamadoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const mes = document.getElementById('mes').value;
        const recebidos = document.getElementById('recebidos').value;
        const atendidos = document.getElementById('atendidos').value;

        addChamadoToTable(mes, recebidos, atendidos);
        chamadoForm.reset();
    });

    function addChamadoToTable(mes, recebidos, atendidos) {
        const newRow = chamadosTable.insertRow();

        const cellMes = newRow.insertCell(0);
        const cellRecebidos = newRow.insertCell(1);
        const cellAtendidos = newRow.insertCell(2);

        cellMes.textContent = mes;
        cellRecebidos.textContent = recebidos;
        cellAtendidos.textContent = atendidos;
    }
});
