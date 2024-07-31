export const paginationParams = {
    // FOR EXAMPLE
    table_tablename: {
        pagesLimit: 7,
        rowsLimit: 10,
        tableHeadRender: (tableHead) => {
            const headRow = document.createElement("tr");
            headRow.classList.add("table__row", "table__row_head");
            headRow.innerHTML = `
                <th class="table__head-cell table__head-cell_1">Cell Name 1</th>
                <th class="table__head-cell table__head-cell_2">Cell Name 2</th>
                <th class="table__head-cell table__head-cell_3">Cell Name 3</th>
            `;
            tableHead.appendChild(headRow);
        },
        tableBodyRender: (tableBody, data) => {
            const bodyRow = document.createElement("tr");
            bodyRow.classList.add("table__row");
            bodyRow.innerHTML = `
                <td class="table__body-cell table__body-cell_1">${data[1]}</td>
                <td class="table__body-cell table__body-cell_2">${data[2]}</td>
                <td class="table__body-cell table__body-cell_3">${data[3]}</td>
                </td>`;
            tableBody.appendChild(bodyRow);
        },
    }
}