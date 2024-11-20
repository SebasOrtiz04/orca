import api from "@/services"
import { imageTypes } from "../types"
import { MostrarAlerta } from "./AlertaAction";


export const SetCreateImagetatus = (status = -1, loading = false) => ({
    type: imageTypes.CREATE_IMAGE_STATUS,
    payload: { status, loading },
});

  
export const CreateImage = form => async dispatch => {
  dispatch(SetCreateImagetatus(-1, true));
  try {
    const response = await api.post('/images',form,{
      headers: {
        'Content-Type': 'multipart/form-data' // Axios maneja automáticamente el límite de los archivos
    }
    });
    const {data,status} = response
    // Puedes despachar una acción con los datos recibidos si es necesario
    if(status !== 201) return
    dispatch({type: imageTypes.CREATE_IMAGE});
    const msg = data.message;
    const severity = 'success';
    dispatch(MostrarAlerta({msg,severity}))
  } catch (error) {

    const {response} = error
    const msg = response.data.error
    const severity = 'warning';
    dispatch(MostrarAlerta({msg,severity}))
    dispatch(SetCreateImagetatus(500, false));
  }
};

export const SetGetAllImagestatus = (status = -1, loading = false) => ({
    type: imageTypes.GET_ALL_IMAGES_STATUS,
    payload: { status, loading },
});

  
export const GetAllImages = () => async dispatch => {
  dispatch(SetGetAllImagestatus(-1, true));
  try {
    const response = await api.get('/images');
    const {data,status} = response
    // Puedes despachar una acción con los datos recibidos si es necesario
    if(status !== 200) return
    dispatch({
      type: imageTypes.GET_ALL_IMAGES,
      payload:data
    });
  } catch (error) {

    const {response} = error
    const msg = response.data.error
    const severity = 'warning';
    dispatch(MostrarAlerta({msg,severity}))
    dispatch(SetGetAllImagestatus(500, false));
  }
};

export const SetDeleteImageByIdtatus = (status = -1, loading = false) => ({
    type: imageTypes.DELETE_IMAGE_BY_ID_STATUS,
    payload: { status, loading },
});

  
export const DeleteImageById = id => async dispatch => {
  dispatch(SetDeleteImageByIdtatus(-1, true));
  try {
    const response = await api.delete(`/images/${id}`);
    const {data,status} = response
    // Puedes despachar una acción con los datos recibidos si es necesario
    if(status !== 200) return

    dispatch({type: imageTypes.DELETE_IMAGE_BY_ID});
    const msg = data.message;
    const severity = 'success';
    dispatch(MostrarAlerta({msg,severity}))
  } catch (error) {
    const {response} = error
    const msg = response?.data?.error ?? error
    const severity = 'warning';
    dispatch(MostrarAlerta({msg,severity}))
    dispatch(SetDeleteImageByIdtatus(500, false));
  }
};