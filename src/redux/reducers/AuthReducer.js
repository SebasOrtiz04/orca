import {authTypes} from '../types'

const InitialState={
    user :null,
    isLoading:{
        createAccount:false,
    },
    status:{
        createAccount:-1
    }
}

export default function (state=InitialState,action){
    switch(action.type){
        case authTypes.CREATE_ACCOUNT:
            return {
                ...state,
                isLoading:{
                    ...state.isLoading,
                    createAccount:false
                },
                status:{
                    ...state.status,
                    createAccount:201
                }
            }
        case authTypes.CREATE_ACCOUNT_STATUS:
            return{
                ...state,
                status:{
                    ...state.status,
                    createAccount:action.payload.status
                },
                isLoading:{
                    ...state.isLoading,
                    createAccount:action.payload.loading
                }
            }
        default:
            return {...state}
        }
}