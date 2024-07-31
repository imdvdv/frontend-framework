export function clearFormErrors (form) {
    
    if (form.querySelector(".form__field")) {

        let fields = form.querySelectorAll(".form__field");

        fields.forEach(function (field) {

            if (field.querySelector(".form__error")){

                field.classList.remove("invalid");

                let errors = field.querySelectorAll('.form__error');

                errors.forEach(function (error) {

                    error.remove();  
                      
                });

            }

        });

    }

}