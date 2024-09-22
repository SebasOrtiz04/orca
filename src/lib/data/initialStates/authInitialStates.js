export const loginFormInitialState = {
    email:'',
    password:''
}

export const validateFormLoginInitialState = {
    email: {
        status: false,
        regex: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), // Dirección de correo electrónico válida
        helpText:'El email debe tener una forma válida correo@dominio.com.',
    },
    password: {
        status: false,
        regex: new RegExp(/^.+$/)
    },
};

export const formInputsLogin = [
    {
        label:'Email',
        required:true,
        name:'email',
        width:'100%'
    },
    {
        label:'Contraseña',
        required:true,
        name:'password',
        width:'100%',
        type:'password'
    }
]
export const createAccountFormInitialState = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    passwordConfirmation:''
}

export const validateFormCreateAccountInitialState = {
    firstName: {
        status: false,
        regex: new RegExp(/^[a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%81%C3%89%C3%8D%C3%93%C3%9A%C3%B1%C3%91\s'-]+$/),
        helpText: 'El nombre(s) es obligatorio'
    },
    lastName: {
        status: false,
        regex: new RegExp(/^[a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%81%C3%89%C3%8D%C3%93%C3%9A%C3%B1%C3%91\s'-]+$/),
        helpText: 'El apellido(s) es obligatorio'
    },
    email: {
        status: false,
        regex: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), // Dirección de correo electrónico válida
        helpText:'El email debe tener una forma válida correo@dominio.com.',
    },
    password: {
        status: false,
        regex: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/),
        helpText:'La contraseña debe contener al menos 1 letra mayúscula, 1 letra minúscula, un número y un caracter especial'
    },
    passwordConfirmation: {
        status: false,
        regex: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/),
        helpText:'Las contraseñas no coinciden'
    },
};

export const formInputsCreateAccount = [
    {
        label:'Nombre(s)',
        required:true,
        name:'firstName',
        width:'100%'
    },
    {
        label:'Apellido(s)',
        required:true,
        name:'lastName',
        width:'100%'
    },
    {
        label:'Email',
        required:true,
        name:'email',
        width:'100%'
    },
    {
        label:'Contraseña',
        required:true,
        name:'password',
        width:'100%',
        type:'password'
    },
    {
        label:'Confirma tu contraseña',
        required:true,
        name:'passwordConfirmation',
        width:'100%',
        type:'password'
    },

]