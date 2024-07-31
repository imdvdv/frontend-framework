export function clearFieldErrors (fields = document.querySelectorAll(".form__field")) {

    if (typeof fields !== "null") {

        fields.forEach(function (field) {

            if (field.querySelector(".form__error")){

                const error = field.querySelector('.form__error');
                error.classList.remove("show");
                field.classList.remove("invalid");

            }

        });

    }
    
}