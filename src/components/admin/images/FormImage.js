'use client'

import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Grow, IconButton, ImageList, TextField, Tooltip, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageItem from './ImageItem';
import ImageDetail from './ImageDetail';
import { useDispatch, useSelector } from 'react-redux';
import { MostrarAlerta } from '@/redux/actions/AlertaAction';
import { CreateImage, SetCreateImagetatus } from '@/redux/actions/ImageActions';
import { useRouter } from 'next/navigation';

const regeximageName = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑüÜ._-]{6,50}$/

const InfoUpluad = () => (
    <Tooltip color='info' placement='right'  title={'Arrastrá o selecciona una imagen para ver una vista previa antes de guardarla'}>
        <InfoIcon/>
    </Tooltip>
)

export default function FormImage() {

    const dispatch = useDispatch();
    const router = useRouter();

    const {isLoading, status} = useSelector(state => state.image)

    const [ready, setReady] = useState(false);
    const [form, setForm] = useState(new FormData());
    const [validateImageName, setValidateImageName] = useState(false) // Inicializas un FormData vacío
    const [previewSrc, setPreviewSrc] = useState(null);
    const [lockButton, setLockButton] = useState(false);

    // Configuración de Dropzone
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'image/*': [] }, // Solo acepta imágenes
        maxFiles: 1, // Solo aceptar un archivo
        onDrop: (acceptedFiles, rejectedFiles) => {
            if (rejectedFiles.length > 0) {
                dispatch(MostrarAlerta({msg:'Solo se aceptan imagenes', severity:'warning'}))
                return;
            }
            if (acceptedFiles.length > 0) {
                const file = acceptedFiles[0];
                setForm(prevForm => {
                    prevForm.set('image', file); // Añade la imagen al FormData existente
                    return prevForm;
                });
                // Generar y establecer la URL de vista previa
                const previewUrl = URL.createObjectURL(file);
                setPreviewSrc(previewUrl); // Guardar la URL para la vista previa
            }
        }
    });

    useEffect(() => {
        setReady(true);
        return () => setReady(false);
    }, []);

    useEffect(()=>{
        const imageName = form.get('imageName')
        setValidateImageName(regeximageName.test(imageName))
    },[form])

    useEffect(()=>{
        const {create} = status
        if(create !== 201) return;
        dispatch(SetCreateImagetatus())
        router.push('/admin/images')
    },[status])

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir comportamiento por defecto
        if (!validateImageName) {
            dispatch(MostrarAlerta({msg:'Revise el título de la imagen',severity:'warning'}));
            return;
        }

        if (!form.get('image')) {
            dispatch(MostrarAlerta({msg:'No se ha seleccionado ninguna imagen',severity:'warning'}));
            return;
        }
        setLockButton(true)
        setTimeout(() => setLockButton(false), 500)
       dispatch(CreateImage(form))
        // Aquí puedes realizar el envío de `form` con la imagen
    };

    const handleDeletImage = () => {
        setPreviewSrc(null)
        setForm( prevForm => {
            prevForm.delete('image')
            return prevForm
        })
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        const newForm = new FormData(); // Crea un nuevo FormData vacío
    
        // Agregar todos los campos existentes al nuevo FormData
        for (let [key, val] of form.entries()) {
            newForm.set(key, val);
        }
    
        newForm.set(name, value); // Establecer el nuevo valor
        setForm(newForm); // Actualizar el estado
    };

    return (
        <Grow in={ready}>
            <Card  >
            <form onSubmit={handleSubmit}>
                <CardHeader title={'Agregar imagen'} 
                action={
                    <Button 
                    variant='outlined' 
                    startIcon={
                        isLoading.create
                        ?   <CircularProgress size={14}/> 
                        :   <AddIcon/>
                    } 
                    type="submit"
                    disabled={lockButton || isLoading.create}
                    >
                        Agregar imagen
                    </Button>
                }
                />
                
                <CardActions  sx={{display:'flex',justifyContent:'flex-end'}}>
                         {/* Asegúrate de que el botón tiene type="submit" */}
                    </CardActions>
                    <CardContent sx={{display:'flex', flexDirection:'column', gap : 2}}>
                        <TextField
                            value={form.get('imageName') ?? ''} // Mostrar el nombre del archivo dropeado
                            label={'Título de imagen'}
                            sx={{width:'min(300px, 100%)'}}
                            name='imageName'
                            onChange={handleInputChange}
                            inputProps={{ maxLength: 50 }}
                            color={validateImageName && 'success'}
                            error={!validateImageName && form.get('imageName')}
                            helperText={'El título de la imagen es obligatorio y debe tener de 6 a 50 caracteres'}
                        />
                    </CardContent>
                    <CardHeader
                    action={
                        <Avatar sx={{backgroundColor:'transparent'}}>
                            {
                                !form.get('image')
                                ?   <InfoUpluad/>
                                :   <IconButton onClick={() => handleDeletImage()}>
                                        <DeleteIcon/>
                                    </IconButton>
                            }

                        </Avatar>
                    }
                    />
                    <CardContent>
                        {/* Área de Dropzone */}
                        <div
                            {...getRootProps({ className: 'dropzone' })}
                            style={{
                                border: '2px dashed #ccc',
                                padding: '20px',
                                textAlign: 'center',
                                backgroundColor: isDragActive ? '#f0f0f0' : '#fafafa',
                                cursor: 'pointer',
                                borderRadius: '8px',
                            }}
                        >
                            <input {...getInputProps()} />
                            
                                <Typography variant="body1">
                                    {
                                        isDragActive
                                        ? 'Suelta la imagen aquí...'
                                        : 'Arrastra y suelta una imagen aquí, o haz clic para seleccionar una'
                                    }
                                    
                                </Typography>
                            <ImageList cols={4} rowHeight={150}>
                                {
                                    [...Array(4)].map( el => (
                                        <ImageItem priority src={previewSrc} miniatureSrc={previewSrc} disabled alt={form.get('imageName') ?? 'Título de imagen'} />
                                    ))
                                }
                            </ImageList>
                            <ImageDetail src={previewSrc} priority alt={'Previsualización de imagen'} />
                        </div>                        
                    </CardContent>

                </form>
            </Card>
        </Grow>
    );
}
