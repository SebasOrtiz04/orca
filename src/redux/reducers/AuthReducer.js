import {authTypes} from '../types'

const InitialState={
    user :null,
    isLoading:{
        createAccount:false,
        confirmAccount:false,
    },
    status:{
        createAccount:-1,
        confirmAccount:-1,
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
        case authTypes.CONFIRM_ACCOUNT:
            return {
                ...state,
                isLoading:{
                    ...state.isLoading,
                    confirmAccount:false
                },
                status:{
                    ...state.status,
                    confirmAccount:200
                }
            }
        case authTypes.CONFIRM_ACCOUNT_STATUS:
            return{
                ...state,
                status:{
                    ...state.status,
                    confirmAccount:action.payload.status
                },
                isLoading:{
                    ...state.isLoading,
                    confirmAccount:action.payload.loading
                }
            }
        default:
            return state
        }
}