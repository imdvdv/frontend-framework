export const validationParams = {
    text_name: {
        required: {
            rule: true,
            error: null,
        },
    },    
    password: {
        required: {
            rule: true,
            error: null,
        },
        pattern: {
            rule: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
            error: "password must be at least 6 character with number, small and capital letter",
        },
    },    
    number_name:{
        required: {
            rule: true,
            error: null,
        },
    },
    file_name: {
        required: {
            rule: true,
            error: 'file is required',
        },
        extensions: {
            rule: ["image/jpeg", "image/jpg", "image/png", "image/gif"],
            error: null,
        },
        max_size: {
            rule: 1, // MB
            error: null,
        },
    },
    checkbox_name: {
        required: {
            rule: true,
            error: 'field must be checked',
        },
    },
    radio_name: {
        required: {
            rule: true,
            error: 'select an option',
        },
    },
}