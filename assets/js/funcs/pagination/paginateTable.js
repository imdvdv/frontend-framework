import {paginationParams} from "../../conf/paginationParams.js";
import {showMessage} from "../messages/showMessage.js";
import {clearAllMessages} from "../messages/clearAllMessages.js";
import {createPageButton} from "./createPageButton.js";

export function paginateTable (table, data, activePage = 1, params = paginationParams[`${table.id}`]) {
    const tableHead = table.children[0],
        tableBody = table.children[1],
        pagination = document.querySelector(`.pagination_${table.id}`);

        tableHead.innerHTML = "";
        tableBody.innerHTML = "";
        pagination.innerHTML = "";

    if (Array.isArray(data) && data.length > 0) {
        const totalPages = Math.ceil(data.length / params.rowsLimit);

        table.classList.remove("hide");

        (function fillTable() {
            let startTrim = (activePage - 1) * params.rowsLimit;
            let endTrim = startTrim + params.rowsLimit;
            let trimmedData = data.slice(startTrim, endTrim);

            params.tableHeadRender(tableHead);
            for (let i = 0; i < trimmedData.length; i++) {
                const userData = trimmedData[i];
                params.tableBodyRender(tableBody, userData);
            }
        } ());

        if (totalPages > 1){

            (function buildPages() {
                let leftStep = activePage - Math.floor(params.pagesLimit / 2);
                let rightStep = activePage + Math.floor(params.pagesLimit / 2);

                if (leftStep < 1){
                    leftStep = 1;
                    rightStep = params.pagesLimit;
                }

                if (rightStep > totalPages){
                    leftStep = totalPages - (params.pagesLimit - 1);
                    rightStep = totalPages;

                    if (leftStep < 1) {
                        leftStep = 1;
                    }
                }

                totalPages > 2 ? createPageButton(pagination, 'first') : false;
                createPageButton(pagination, 'prev');

                for (let i = leftStep; i <= rightStep; i++) {

                    i === activePage ? createPageButton(pagination, 'active', i) : createPageButton(pagination, 'page', i);

                }

                createPageButton(pagination, 'next');
                totalPages > 2 ? createPageButton(pagination, 'last') : false;

            }());

            (function navigatePages() {
                let pages = document.querySelectorAll(".pagination__button");
                pages.forEach((page) => {
                    page.addEventListener("click", (e) => {
                        e.preventDefault();
                        clearAllMessages();

                        if (page.classList.contains("arrow")){
                            if (page.classList.contains("arrow_first") && activePage !== 1){
                                activePage = 1;
                            } else if (page.classList.contains("arrow_prev") && activePage !== 1){
                                activePage = activePage - 1;
                            } else if (page.classList.contains("arrow_next") && activePage !== totalPages){
                                activePage = activePage + 1;
                            } else if (page.classList.contains("arrow_last") && activePage !== totalPages){
                                activePage = totalPages;
                            }
                        } else {
                            activePage = parseInt(page.innerText);
                        }
                        paginateTable(table, data, activePage, params);
                    });
                });
            }());
        }
    } else {
        table.classList.add("hide");
        showMessage(false, "Nothing was found");
    }
}

