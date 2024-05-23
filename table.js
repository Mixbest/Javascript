function createTable(){
    const rows =document.getElementById('rowInput').value;
    const columns =document.getElementById('columnInput').value;
    const table=document.createElement('table');
    const tableBody= document.createElement('tbody');
    for(let i=0; i<rows;i++){
        const row=document.createElement('tr');
        for(let j=0; j<columns;j++)
            {
                const cell=document.createElement('td');
                const cellText= document.createTextNode('Row ${i+1},Column ${j+1}');
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    const tableContainer=document.getElementsById('TableContainer');
    tableContainer.innerHTML='';
    tableContainer.appendChild(table);
}