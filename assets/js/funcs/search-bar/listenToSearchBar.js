import {clearMessage} from "../messages/clearMessage.js";
import {paginateTable} from "../pagination/paginateTable.js";

export function listenToSearchBar (searchBar, searchCallback, table = null) {
    const searchLine = searchBar.children[0],
        clearButton = searchBar.children[1],
        searchButton = searchBar.children[2];

    searchLine.addEventListener("input", async () => {
        if (searchLine.value !== ""){
            clearButton.classList.add("show");
        } else {
            clearButton.classList.remove("show");
        }
    });

    clearButton.addEventListener("click", async () => {
        searchLine.value = "";
        clearButton.classList.remove("show");
    });

    searchButton.addEventListener("click", async () => {
        clearMessage();
        let searchValue = searchLine.value.toLowerCase().trim();

        if (searchValue !== "" && typeof searchCallback === "function"){
            let foundResult = await searchCallback(searchValue);
            if (table) {
                paginateTable(table, foundResult);
            } else {
                return foundResult;
            }
            
        }
    });
}
