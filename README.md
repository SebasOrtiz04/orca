# 🎉 Sitio Web Salón Jardín Orca - Proyecto Next.js

Este proyecto es un sitio web desarrollado con **Next.js** para la gestión y promoción de un salón de fiestas. Ofrece una interfaz moderna y optimizada, diseñada para mejorar la experiencia de los usuarios que desean conocer, reservar o contactar al salón.

## 🚀 Características

- **Página de inicio atractiva**: Presentación del salón con una galería de imágenes.
- **Sección de eventos**: Muestra los paquetes disponibles y ejemplos de eventos realizados.
- **SEO optimizado**: Mejora de la visibilidad en motores de búsqueda.
- **Responsivo**: Diseño adaptado para dispositivos móviles y de escritorio.

---

## 🛠️ Tecnologías Utilizadas

- **Next.js**: Framework principal para desarrollo del frontend.
- **React**: Biblioteca para componentes interactivos.
- **Material UI MUI**: Librería de componentes UI para React.
- **Axios**: Librería para realizar llamadas a la API.
- **Redux**: Estructura de datos para manejar el estado global.
  
---

## 📂 Estructura del Proyecto

```plaintext
├── public/                # Recursos públicos (imágenes, favicon)
├── src/
│   ├── app/               # Directorio raíz con páginas y componentes de Next.js
│   ├── components/        # Componentes reutilizables
│   ├── styles/            # Archivos de estilos (CSS o Tailwind)
│   ├── services/          # Servicios o llamadas a la API
│   ├── lib/               # Funciones utilitarias
│   ├── pages/             # Archivos de rutas (si no se usa `app/`)
│   ├── redux/             # Gestión del estado global (opcional)
├── .env.local             # Variables de entorno
├── next.config.js         # Configuración de Next.js
├── tailwind.config.js     # Configuración de Tailwind
└── package.json           # Dependencias y scripts
```

---

## ⚙️ Instalación y Configuración

### Requisitos Previos

- Node.js (v14+)
- Yarn o npm
- Conexión con API REST que se puede encontar en el siguiente enlace: [API REST](https://github.com/usuario/salon-de-fiestas-api)

### Pasos de Instalación

1. Clonar el repositorio:

    ```bash
        git clone https://github.com/SebasOrtiz04/orca
        cd salon-de-fiestas
    ```

2. Instalar dependencias:

    ```bash
        npm install
        # o
        yarn install
    ```

3. Configurar las variables de entorno: Crea un archivo .env.local en la raíz del proyecto con las siguientes claves:

    ```env
        NEXT_URL_BASE_API=http://localhost:4000/api
    ```

4. Ejecutar el servidor en desarrollo:

    ```bash
        npm run dev
        
        # o
        
        yarn dev
    ```

5. Abrir en el navegador:

    [Servidor de desarrollo](http://localhost:3000)

---

## 🧩 Scripts Disponibles

- **dev**: Ejecuta el servidor en modo desarrollo.
- **build**: Compila el proyecto para producción.
- **start**: Inicia el servidor de producción.

---

## 📋 Próximos Pasos

- Login y registro de usuarios.
- Interfaz de administración para gestionar reservas, consultas, eventos , fotografias y contactos.
- Filtros y búsqueda avanzada.
- Integración con Stripe para pagos en línea.

---
  
## 📝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas o mejoras, abre un issue o envía un pull request.

---

## 📧 Contacto

Correo: [sebastianortizcastro04@gmail.com](mailto:sebastianortizcastro04@gmail.com)
Sitio Web: [Mi portafolio](https://www.sebastianortiz.dev)
Teléfono: +52 522 26 62 27 78

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
