import {validationParams} from "../../conf/validationParams.js";
import {checkRuleExists} from "./checkRuleExists.js";
import {checkErrorParamExists} from "./checkErrorParamExists.js";
import {showFieldError} from "../messages/showFieldError.js";
import {showMessage} from "../messages/showMessage.js";


export function validateForm(form, params = validationParams) {

    let isValid = true;
    
    if (form.querySelector('.form__field')) {
        let fields = form.querySelectorAll('.form__field');

        fields.forEach((field) => {

            let error = '';

            if (typeof field.id !== 'undefined') {

                let fieldName = field.id;

                if (Object.keys(params).includes(fieldName)) {

                    if (field.querySelector(".form__input")) {

                        let input = field.querySelector(".form__input");
                        let inputValue = undefined;
                        let isEmptyField = true;
            
                        if (field.classList.contains('fillable-field')) {
            
                            inputValue = input.value.trim();
                            isEmptyField = inputValue === '';
                
                        } else if (field.classList.contains('checkable-field')) {
            
                            input = field.querySelector('input:checked') ? field.querySelector('input:checked') : undefined;
                            inputValue = typeof input !== 'undefined' ? input.value : undefined;
                            isEmptyField = typeof input === 'undefined';
            
                        }  else if (field.classList.contains('file-field')) {
            
                            isEmptyField = input.files === null || typeof input.files[0] === 'undefined';
                            inputValue = !isEmptyField ? input.files[0] : undefined;
                           
                        } else {
            
                            showFieldError(field, 'UNINITIALIZED FIELD TYPE', 'invalid');
                            return false;
            
                        }
                        
                        // Check required rule
                        if (checkRuleExists(params[fieldName], 'required') && isEmptyField) {
                
                            error = checkErrorParamExists(params[fieldName], 'required') ? params[fieldName]['required']['error'] : 'field is required';
                
                        } else if (!isEmptyField) {
                            
                            // Check file field rules
                            if (input.files !== null && typeof input.files[0] !== 'undefined') {
            
                                if (checkRuleExists(params[fieldName], 'extensions') && !params[fieldName]['extensions']['rule'].includes(inputValue.type)) {
                
                                    error = checkErrorParamExists(params[fieldName], 'extensions') ? params[fieldName]['extensions']['error'] : 'invalid file type';
                    
                                } else if (checkRuleExists(params[fieldName], 'max_size') && params[fieldName]["max_size"]["rule"] < inputValue.size / 1000000){
                    
                                    error = checkErrorParamExists(params[fieldName], 'max_size') && params[fieldName]['max_size']['error'] ? params[fieldName]['max_size']['error'] : `the file should not exceed ${params[fieldName]["max_size"]["rule"]} MB`;
                    
                                }
            
                            } else {

                                // Check pattern rule
                                if (checkRuleExists(params[fieldName], 'pattern')){
                
                                    if (!inputValue.match(params[fieldName]['pattern']['rule'])) {
                    
                                        error = checkErrorParamExists(params[fieldName], 'pattern') ? params[fieldName]['pattern']['error'] : 'invalid value';
                    
                                    }
                    
                                }

                            }
            
                        }
                
                    } else {
                        
                        error = 'INPUT NOT FOUND';
                
                    }

                } else {

                    error = 'UNREGISTERED FIELD';
    
                }

            } else {

                error = 'UNINITIALIZED FIELD NAME';

            }

            if (typeof error !== 'undefined' && error !== '') {

                showFieldError(field, error, 'invalid');
                isValid = false;
        
            }

        });

    } else {

        showMessage(false, 'FIELDS NOT FOUND');
        isValid = false;

    }

    return isValid;
}