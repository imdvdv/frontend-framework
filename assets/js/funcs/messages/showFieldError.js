export function showFieldError (field, text, validationClass = null) {

    if (validationClass && !field.classList.contains(validationClass)) {

        field.classList.add(validationClass);

    }

    let error = document.createElement("div");
    error.classList.add("form__error", "show", `${validationClass}`);
    error.innerHTML = `
        <i class="form__error-icon form__error-icon_modifier fa-solid fa-circle-exclamation"></i>
        <span class="form__error-text form__error-text_modifier">${text}</span>
    `;
    field.appendChild(error);

}