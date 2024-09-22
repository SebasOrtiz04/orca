export const handleInputOnChange = (form, target) => {
    const { name, value } = target;
    return { ...form, [name]: value };  // No aplicar trim en cada escritura
};

export const handleInputOnBlur = (form, target) => {
    const { name, value } = target;
    return { ...form, [name]: value.trim() };  // Aplicar trim cuando el input pierde el foco
};

export const handleValidateForm = validateForm => !Object.values(validateForm).every(field => field.status === true) ? false : true 

