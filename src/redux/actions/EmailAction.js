import api from '@/services'
import {emailTypes} from '../types'
import { MostrarAlerta } from './AlertaAction'

export const sendContactMail = (form) =>{
    return async dispatch => {
        dispatch({
            type:emailTypes.SEND_CONTACT_EMAIL_STATUS,
            payload:{loading:true,status:-1}
        })
        try{

            const response = await api.post('/mail/contact',form);
            console.log(response)
            dispatch({type:emailTypes.SEND_CONTACT_EMAIL});
            dispatch(MostrarAlerta({msg:'Correo Enviado Correctamente',severity:'success'}))
        }catch(error){
            dispatch(MostrarAlerta({msg:'Ha ocurrido un error',severity:'error'}))
            dispatch({
                type:emailTypes.SEND_CONTACT_EMAIL_STATUS,
                payload:{loading:false,status:500}
            })
        }
    }
}
