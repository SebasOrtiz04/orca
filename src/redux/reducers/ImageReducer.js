import { imageTypes } from "../types"

 const InitialState = {
    allImages:[],
    imageById:null,
    isLoading:{
        getAll:false,
        create:false,
        getById:false,
        deleteById:false,
    },
    status:{
        getAll:-1,
        create:-1,
        getById:-1,
        deleteById:-1,
    }
 }

 export default function(state=InitialState,action){
    switch(action.type){
        case imageTypes.CREATE_IMAGE:
            return{
                ...state,
                isLoading:{
                    ...state.isLoading,
                    create:false
                },
                status:{
                    ...state.status,
                    create:201
                }
            }
        case imageTypes.CREATE_IMAGE_STATUS:
            return{
                ...state,
                isLoading:{
                    ...state.isLoading,
                    create:action.payload.loading
                },
                status:{
                    ...state.status,
                    create:action.payload.status
                }
            }
        case imageTypes.GET_ALL_IMAGES:
            return{
                ...state,
                allImages:action.payload,
                isLoading:{
                    ...state.isLoading,
                    getAll:false
                },
                status:{
                    ...state.status,
                    getAll:201
                }
            }
        case imageTypes.GET_ALL_IMAGES_STATUS:
            return{
                ...state,
                isLoading:{
                    ...state.isLoading,
                    getAll:action.payload.loading
                },
                status:{
                    ...state.status,
                    getAll:action.payload.status
                }
            }
        case imageTypes.DELETE_IMAGE_BY_ID:
            return{
                ...state,
                isLoading:{
                    ...state.isLoading,
                    deleteById:false
                },
                status:{
                    ...state.status,
                    deleteById:200
                }
            }
        case imageTypes.DELETE_IMAGE_BY_ID_STATUS:
            return{
                ...state,
                isLoading:{
                    ...state.isLoading,
                    deleteById:action.payload.loading
                },
                status:{
                    ...state.status,
                    deleteById:action.payload.status
                }
            }
        default:
            return state
    }
 }