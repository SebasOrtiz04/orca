'use client'

import {
    TextField,
    Stack,
} from '@mui/material'
import { useEffect} from 'react'
import { handleInputOnBlur, handleInputOnChange } from '@/lib/helpers';

export default function TextForm({form, setForm, validateForm, setValidateForm, formInputs}) {
 
  
    useEffect(() => {

        const updatedValidateForm = { ...validateForm };
    
        Object.entries(form).forEach(([key, value]) => {
            updatedValidateForm[key] = {
                ...updatedValidateForm[key],
                status: updatedValidateForm[key] && updatedValidateForm[key]?.regex?.test(value)
            };
        });
    
        setValidateForm(updatedValidateForm);
    }, [form]);

    return (
        <Stack direction={'row'} useFlexGap flexWrap='wrap' spacing={3}>
            {formInputs.map(({type = 'text',label,required,width = 250,name,multiline = false},key) =>(
                <TextField
                key={key}
                type={type}
                required={required}
                label={label}
                name={name}
                value={form[name]}
                aria-label={label}
                sx={{width:width}}
                multiline = {multiline}
                error = {validateForm[name] && !validateForm[name].status && form[name ? true : false]}
                color={validateForm[name] && validateForm[name].status ? 'success' : 'error'}
                onChange={e => setForm(handleInputOnChange(form,e.target))}
                helperText={form[name] && validateForm[name] && !validateForm[name].status && validateForm[name].helpText}
                rows={4}
                onBlur={e => handleInputOnBlur(form,e.target)}  // Al perder el foc
                />
            ))}
        </Stack>
  )
}
