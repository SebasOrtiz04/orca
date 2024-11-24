'use client'

const DEFAULT_LOCALE = { code: 'en-US', currency: 'USD' };

export const handleInputOnChange = (form, target) => {
    const { name, value } = target;
    return { ...form, [name]: value };  // No aplicar trim en cada escritura
};

export const handleInputOnBlur = (form, target) => {
    const { name, value } = target;
    return { ...form, [name]: value.trim() };  // Aplicar trim cuando el input pierde el foco
};

export const handleValidateForm = validateForm => !Object.values(validateForm).every(field => field.status === true) ? false : true 

function processInput(inputValue){
  if (inputValue == null || Number.isNaN(inputValue)) return null;
  return Number(inputValue);
}

export function varAlpha(color, opacity = 1) {
    const unsupported =
      color?.startsWith('#') ||
      color?.startsWith('rgb') ||
      color?.startsWith('rgba') ||
      (!color?.includes('var') && color?.includes('Channel'));
  
    if (unsupported) {
      throw new Error(
        `[Alpha]: Unsupported color format "${color}".
         Supported formats are:
         - RGB channels: "0 184 217".
         - CSS variables with "Channel" prefix: "var(--palette-common-blackChannel, #000000)".
         Unsupported formats are:
         - Hex: "#00B8D9".
         - RGB: "rgb(0, 184, 217)".
         - RGBA: "rgba(0, 184, 217, 1)".
         `
      );
    }
  
    return `rgba(${color} / ${opacity})`;
}

/**
 * Docs: https://day.js.org/docs/en/display/format
 */
export const formatStr = {
  dateTime: 'DD MMM YYYY h:mm a', // 17 Apr 2022 12:00 am
  date: 'DD MMM YYYY', // 17 Apr 2022
  time: 'h:mm a', // 12:00 am
  split: {
    dateTime: 'DD/MM/YYYY h:mm a', // 17/04/2022 12:00 am
    date: 'DD/MM/YYYY', // 17/04/2022
  },
  paramCase: {
    dateTime: 'DD-MM-YYYY h:mm a', // 17-04-2022 12:00 am
    date: 'DD-MM-YYYY', // 17-04-2022
  },
};


// ----------------------------------------------------------------------

export function fShortenNumber(inputValue, options) {
  const locale = DEFAULT_LOCALE;

  const number = processInput(inputValue);
  if (number === null) return '';

  const fm = new Intl.NumberFormat(locale.code, {
    notation: 'compact',
    maximumFractionDigits: 2,
    ...options,
  }).format(number);

  return fm.replace(/[A-Z]/g, (match) => match.toLowerCase());
}


// ----------------------------------------------------------------------

export function fPercent(inputValue, options) {
  const locale = DEFAULT_LOCALE;

  const number = processInput(inputValue);
  if (number === null) return '';

  const fm = new Intl.NumberFormat(locale.code, {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
    ...options,
  }).format(number / 100);

  return fm;
}

// ----------------------------------------------------------------------

export function fNumber(inputValue, options) {
  const locale = DEFAULT_LOCALE;

  const number = processInput(inputValue);
  if (number === null) return '';

  const fm = new Intl.NumberFormat(locale.code, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  }).format(number);

  return fm;
}


export function bgBlur({ color, blur = 6, imgUrl }){
  if (imgUrl) {
    return {
      position: 'relative',
      backgroundImage: `url(${imgUrl})`,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9,
        content: '""',
        width: '100%',
        height: '100%',
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: color,
      },
    };
  }
  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: color,
  };
}

/**
 * Usage:
 * ...textGradient(`to right, ${theme.vars.palette.text.primary}, ${alpha(theme.vars.palette.text.primary, 0.2)}`
 */
export function textGradient(color){
  return {
    background: `linear-gradient(${color})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    color: 'transparent',
  };
}

export function bgGradient({ color, imgUrl }) {
  if (imgUrl) {
    return {
      background: `linear-gradient(${color}), url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    };
  }
  return { background: `linear-gradient(${color})` };
}