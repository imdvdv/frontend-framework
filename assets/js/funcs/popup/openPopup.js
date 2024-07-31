export function openPopup(popup = document.querySelector(".popup")){
    if (popup.classList.contains("hide")){
        popup.classList.remove("hide");
    }
}