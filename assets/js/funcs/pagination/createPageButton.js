export function createPageButton(pagination, pageClass, pageNum = null) {

    const button = document.createElement("button");
    button.classList.add("pagination__button");

    switch (pageClass) {

        case 'first':
            
            button.classList.add("arrow", "arrow_first");
            button.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
            break;

        case 'prev':

            button.classList.add("arrow", "arrow_prev");
            button.innerHTML = `<i class="fa-solid fa-angle-left"></i>`;
            break;

        case 'next':

            button.classList.add("arrow", "arrow_next");
            button.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;
            break;

        case 'last':

            button.classList.add("arrow", "arrow_last");
            button.innerHTML = `<i class="fa-solid fa-angles-right"></i>`;
            break;

        case 'page':

            button.classList.add("page");
            button.innerText = `${pageNum}`;
            break;
            
        case 'active':

            button.classList.add("page", "page_active");
            button.innerText = `${pageNum}`;
            break;     

    }

    pagination.appendChild(button);
    
}