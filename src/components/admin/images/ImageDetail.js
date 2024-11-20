
import Image from 'next/image'
import React from 'react'

export default function ImageDetail({src,alt}) {
  return (
      <Image
        src={src ?? '/img/Galery/imageNotFount.svg'} // URL de la imagen o la imagen por defecto
        alt={alt ?? ''} // Texto alternativo
        sizes="(max-width: 800px) 100vw" // Controla el tamaño de la imagen
        width={800} // Ancho de la imagen
        loading='lazy'
        height={600} // Alto de la imagen
        style={{ objectFit: 'cover' }} // Asegura que la imagen se ajuste correctamente
      />
  )
}
