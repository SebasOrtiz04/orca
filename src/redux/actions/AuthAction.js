import api from '@/services'
import {authTypes} from '../types'
import { MostrarAlerta } from './AlertaAction'

export const SetCreateAccounStatus = (loading=false,status=-1) => dispatch =>{
    console.log('aqui')
    dispatch({
        type:authTypes.CREATE_ACCOUNT_STATUS,
        payload:{loading,status}
    })
}   

export const PostCreateAccount = (form) =>{
    return async dispatch => {
        dispatch(SetCreateAccounStatus())
        try{
            const response = await api.post('/auth/create-account',form);

            const {status} = response;

            if(status === 201){
                dispatch({type:authTypes.CREATE_ACCOUNT})
                dispatch(MostrarAlerta({msg:'Cuenta creada exitosamente',severity:'success'}))
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
