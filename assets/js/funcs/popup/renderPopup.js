import {openPopup} from "./openPopup.js";
import {closePopup} from "./closePopup.js";
import {showMessage} from "../messages/showMessage.js";

export async function renderPopup (params, element = null) {
    if (document.querySelector(".popup")){
        const popup = document.querySelector(".popup");
        const popupContent = popup.children[0].children[1];
        const response = await fetch(`/components/popup/content/${params.contentName}`);
        popupContent.innerHTML = await response.text();
        openPopup(popup);

        // Close the popup window when a key Escape is pressed
        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                closePopup(popup);
            }
        });

        // Close the popup window when button with "close-popup" class is clicked
        if (popupContent.querySelector(".close-popup")){
            const closeButtons = popupContent.querySelectorAll(".close-popup");
            closeButtons.forEach((closeButton) => {
                closeButton.addEventListener("click", () => {
                    closePopup(popup);
                });
            });
        }

        // Close the popup window when clicking on an area outside the window
        popup.addEventListener("click", (e) => {
            if (!e.target.closest(".popup__content")){
                closePopup(popup);
            }
        });

        // Calling a callback after opening a popup
        if (typeof params.contentAction === "function"){
            try {
                await params.contentAction(element);
            } catch {
                closePopup(popup);
                showMessage(false, "Something went wrong. Please try again later.");
            }

        }
    } else {
        showMessage(false, "Something went wrong. Please try again later.");
    }
}