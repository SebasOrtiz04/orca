import { alertatypes } from "../types";

const InitialState={
    open:false,
    severity:'info',
    msg:''
}

export default function (state=InitialState,action){
    switch(action.type){
        case alertatypes.MOSTRAR_ALERTA:
            return {
                ...state,
                open:true,
                severity:action.payload.severity ?? 'info',
                msg:action.payload.msg ?? ''
            }
        case alertatypes.CERRAR_ALERTA:
            return{
                ...state,
                open:false,
            }
        default:
            return state
    }
}