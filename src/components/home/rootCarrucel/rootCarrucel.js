'use client'

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import styles from './styles.module.css'
import { carrucelStyles } from '@/app/styles/carrucleStyles';
import { imagesInitialState } from '@/lib/data/initialStates/carrucel';
import { useEffect } from 'react';
import Image from 'next/image'

const {container, imageContainer, contentContainer, mobileStepper} = carrucelStyles;

function Carrucel() {
    
  const theme = useTheme();
  
  const [activeStep, setActiveStep] = React.useState(0);
  
  useEffect(()=>{
    
    const intervalId  = setInterval(() => handleNext() , 7000);

    return () =>{
      clearInterval(intervalId)
    }
  },[])

  const maxSteps = imagesInitialState?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
        if (prevActiveStep === maxSteps - 1) {
            return 0;
        }
        return prevActiveStep + 1;
    });
};

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
<Box sx={container}>

        <div style={imageContainer}>
            <Image
                srcSet={imagesInitialState[activeStep].imgPath}
                src={imagesInitialState[activeStep].imgPath}
                alt={imagesInitialState[activeStep].label}
                width={300}
                height={200}
                className={styles.carrucel}
                priority 
            />
        </div>

    
    <Box sx={contentContainer}>
      {imagesInitialState[activeStep].content}
    </Box>

    <MobileStepper
        steps={maxSteps}
        position="bottom"
        color="secondary"
        variant='dots'
        activeStep={activeStep}
        sx={mobileStepper}
        nextButton={
          <Button size="medium" color="white" onClick={handleNext} disabled={activeStep === maxSteps - 1} >
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='medium' color="white" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />


    </Box>
  );
}

export default Carrucel;