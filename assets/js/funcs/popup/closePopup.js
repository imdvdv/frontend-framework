export function closePopup(popup = document.querySelector(".popup")){
    if (!popup.classList.contains("hide")){
        const popupContent = popup.children[0].children[1];
        popupContent.innerHTML = '';
        popup.classList.add("hide");
    }
}