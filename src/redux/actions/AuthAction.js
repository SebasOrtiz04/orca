import api from '@/services'
import {authTypes} from '../types'
import { MostrarAlerta } from './AlertaAction'

export const SetCreateAccounStatus = (loading=false,status=-1) => dispatch =>{
    dispatch({
        type:authTypes.CREATE_ACCOUNT_STATUS,
        payload:{loading,status}
    })
}   

export const PostCreateAccount = form =>{
    return async dispatch => {
        dispatch(SetCreateAccounStatus(true))
        try{
            const response = await api.post('/auth/create-account',form);

            const {status,data} = response;

            if(status === 201){
                dispatch({type:authTypes.CREATE_ACCOUNT})
                dispatch(MostrarAlerta({msg:data,severity:'success'}))
            }
        }catch(error){
            const message = error.response.data.error;
            const status = error.response.status;

            if(status === 409){
                dispatch(MostrarAlerta({msg:message,severity:'warning'}))
                dispatch(SetCreateAccounStatus(false,409))
                return
            }

            dispatch(MostrarAlerta({msg:'Ha ocurrido un error',severity:'error'}))
            dispatch(SetCreateAccounStatus(false,500))
        }
    }
}

export const SetConfirmAccounStatus = (loading=false,status=-1) => dispatch =>{
    dispatch({
        type:authTypes.CONFIRM_ACCOUNT_STATUS,
        payload:{loading,status}
    })
}   

export const PostConfirmAccount = form =>{
    return async dispatch => {
        dispatch(SetConfirmAccounStatus(true))
        try{
            const response = await api.post('/auth/confirm-account',form);

            const {status,data} = response;
            console.log(data)
            if(status === 200){
                localStorage.setItem('ACCESS_TOKEN',data)
                dispatch({type:authTypes.CONFIRM_ACCOUNT})
                dispatch(MostrarAlerta({msg:'¡Cuenta confirmada correctamente!',severity:'success'}))
            }

        }catch(error){
            const message = error.response.data.error;
            const status = error.response.status;
            if(status === 404){
                dispatch(MostrarAlerta({msg:message,severity:'warning'}))
                dispatch(SetConfirmAccounStatus(false,404))
                return
            }

            dispatch(MostrarAlerta({msg:'Ha ocurrido un error',severity:'error'}))
            dispatch(SetConfirmAccounStatus(false,500))
        }
    }
}

export const SetGetAuthUserStatus = (loading=false,status=-1) => dispatch =>{
    dispatch({
        type:authTypes.GET_AUTH_USER_STATUS,
        payload:{loading,status}
    })
}   

export const GetAuthUser = () =>{
    return async dispatch => {
        dispatch(SetGetAuthUserStatus(true))
        try{
            const response = await api.get('/auth/user');
            const {status,data} = response;
            if(status === 200){
                dispatch({
                    type: authTypes.GET_AUTH_USER,
                    payload:data
                })
            }
        }catch(error){
            localStorage.removeItem('ACCESS_TOKEN')
            dispatch(SetGetAuthUserStatus(false,500))
        }
    }
}

export const GetUserCheckPoint = () =>{
    return async dispatch => {
        dispatch(SetGetAuthUserStatus(true))
        try{
            const response = await api.get('/auth/user');
            const {status,data} = response;
            console.log(data)
            if(status === 200){
                dispatch({type:authTypes.GET_AUTH_USER,payload:data})
                dispatch(MostrarAlerta({msg:`Bienvenido ${data?.firstName}`,severity:'success'}))
            }

        }catch(error){
            dispatch(SetGetAuthUserStatus(false,500))
        }
    }
}

export const SetLogintatus = (loading=false,status=-1) => dispatch =>{
    dispatch({
        type:authTypes.LOGIN_STATUS,
        payload:{loading,status}
    })
}   

export const HandleLogin = form =>{
    return async dispatch => {
        dispatch(SetLogintatus(true))
        try{
            const response = await api.post('/auth/login',form);
            const {status,data} = response;
            if(status === 200){
                localStorage.setItem('ACCESS_TOKEN',data.token)
                dispatch({
                    type: authTypes.LOGIN,
                    payload:data.user
                })
                dispatch(MostrarAlerta({msg:`Bienvenido ${data?.firstName}`,severity:'success'}))
            }

        }catch(error){
            console.log(error)
            dispatch(SetLogintatus(false,500))
            dispatch(MostrarAlerta({msg:`Error en el servidor`,severity:'success'}))
        }
    }
}
