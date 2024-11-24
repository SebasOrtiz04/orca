import {authTypes} from '../types'

const InitialState={
    user :null,
    isLoading:{
        createAccount:false,
        confirmAccount:false,
        getAuthUser:false,
        login:false,
        resendCode:false,
    },
    status:{
        createAccount:-1,
        confirmAccount:-1,
        getAuthUser:-1,
        login:-1,
        resendCode:-1,
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
        case authTypes.GET_AUTH_USER:
            return {
                ...state,
                user:action.payload,
                isLoading:{
                    ...state.isLoading,
                    getAuthUser:false
                },
                status:{
                    ...state.status,
                    getAuthUser:200
                }
            }
        case authTypes.GET_AUTH_USER_STATUS:
            return{
                ...state,
                status:{
                    ...state.status,
                    getAuthUser:action.payload.status
                },
                isLoading:{
                    ...state.isLoading,
                    getAuthUser:action.payload.loading
                }
            }
        case authTypes.LOGIN:
            return {
                ...state,
                user:action.payload,
                isLoading:{
                    ...state.isLoading,
                    login:false
                },
                status:{
                    ...state.status,
                    login:200
                }
            }
        case authTypes.LOGIN_STATUS:
            return{
                ...state,
                status:{
                    ...state.status,
                    login:action.payload.status
                },
                isLoading:{
                    ...state.isLoading,
                    login:action.payload.loading
                }
            }
        case authTypes.RESEND_CODE:
            return {
                ...state,
                isLoading:{
                    ...state.isLoading,
                    resendCode:false
                },
                status:{
                    ...state.status,
                    resendCode:200
                }
            }
        case authTypes.RESEND_CODE_STATUS:
            return{
                ...state,
                status:{
                    ...state.status,
                    resendCode:action.payload.status
                },
                isLoading:{
                    ...state.isLoading,
                    resendCode:action.payload.loading
                }
            }
        case authTypes.LOGOUT:
            return{
                ...state,
                user:null
            }
        default:
            return state
        }
}