# Valentín Audiocar Web

Web comercial para Valentín Audiocar, centro integral automotor ubicado en Wilde.

La web está pensada para desplegarse en Vercel y mantenerse desde el repositorio, sin Firebase, Supabase, login, panel admin ni backend. Los trabajos realizados se cargan agregando imágenes en una carpeta local y editando un archivo de datos.

## Servicios Comunicados

- Audio car
- Baterías
- Polarizados
- Alarmas
- Mecánica
- Electricidad automotor
- Scaneo
- Chapa y pintura

## Tecnologías Usadas

- React
- Vite
- React Router
- Lucide React para íconos
- CSS propio en `src/styles.css`

## Estructura De Carpetas

- `src/components`: componentes reutilizables como `Header`, `Footer`, `Hero`, `ServiceCard`, `WhatsAppButton`, `ContactForm`, `WorkCard` y `WorkFilters`.
- `src/pages`: páginas principales de la web: inicio, servicios, trabajos, ubicación, contacto y 404.
- `src/data`: datos editables del sitio, como negocio, navegación, servicios y trabajos realizados.
- `public/images`: imágenes fijas de la marca y del local usadas en header, hero, footer y ubicación.
- `public/trabajos`: carpeta donde se guardan las imágenes reales de trabajos realizados.
- `dist`: carpeta generada por el build. No se edita a mano.

## Instalar El Proyecto

```bash
npm install
```

## Correr En Local

```bash
npm run dev
```

Luego abrir la URL que muestra Vite, normalmente:

```bash
http://127.0.0.1:5173/
```

## Hacer Build

```bash
npm run build
```

## Probar El Build

```bash
npm run preview
```

## Subir Cambios A GitHub

```bash
git status
git add .
git commit -m "mensaje"
git push
```

## Desplegar En Vercel

Vercel puede conectarse al repositorio de GitHub. Una vez conectado, cada `git push` a la rama principal dispara un deploy automático.

Configuración típica:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

El archivo `vercel.json` ya incluye una regla de rewrite para que las rutas internas de React Router funcionen al abrir URLs como `/servicios`, `/trabajos`, `/ubicacion` o `/contacto` directamente.

## Cómo Agregar Un Trabajo Realizado

1. Guardar la imagen en:

```bash
public/trabajos/
```

2. Usar un nombre simple, sin espacios ni caracteres raros.

Ejemplos:

```text
audio-gol.jpg
polarizado-cronos.jpg
alarma-camioneta.jpg
```

3. Abrir:

```bash
src/data/trabajos.js
```

4. Copiar un objeto de ejemplo.

5. Cambiar los datos:

- `id`
- `titulo`
- `categoria`
- `descripcion`
- `vehiculo`
- `imagen`
- `fecha`
- `publicado`
- `destacado`
- `orden`

Ejemplo:

```js
{
  id: "audio-gol-001",
  titulo: "Instalación de audio completa",
  categoria: "Audio car",
  descripcion: "Instalación prolija de sistema de audio para vehículo.",
  vehiculo: "Volkswagen Gol",
  imagen: "/trabajos/audio-gol.jpg",
  fecha: "Mayo 2026",
  publicado: true,
  destacado: true,
  orden: 1,
}
```

6. En `imagen`, usar la ruta:

```text
"/trabajos/nombre-de-la-imagen.jpg"
```

7. Poner:

```js
publicado: true
```

para que aparezca en la web.

8. Poner:

```js
publicado: false
```

para ocultarlo.

9. Poner:

```js
destacado: true
```

si se quiere destacar.

10. Guardar cambios.

11. Probar localmente:

```bash
npm run dev
```

12. Subir cambios:

```bash
git status
git add .
git commit -m "Agrego nuevo trabajo realizado"
git push
```

13. Vercel detecta el push y actualiza la web automáticamente.

## Cómo Editar Servicios

Los textos de servicios se editan en:

```bash
src/data/services.js
```

Ahí se puede cambiar:

- Título
- Descripción
- Beneficio
- Mensaje de WhatsApp por servicio

No cargar precios, horarios, marcas o promociones si no están confirmados.

## Cómo Editar Datos Del Negocio

Los datos principales del negocio están en:

```bash
src/data/business.js
```

Ahí se puede cambiar:

- Nombre
- Dirección
- WhatsApp
- Instagram
- Mensaje general de WhatsApp

Los textos principales de portada están en:

```bash
src/components/Hero.jsx
```

Los textos por página están en:

```bash
src/pages/
```

## Cómo Cambiar Imágenes Generales

La web usa imágenes reales del local y mantiene algunos recursos visuales hechos con CSS para sostener la estética taller/audiocar.

Imágenes actuales:

- Logo: `public/images/logo-general.png`
- Favicon/icono: `public/images/logo_icon.png`
- Foto del local: `public/images/local-valentin-audiocar.jpg`

El logo se muestra en el header, el hero principal y el footer. La foto del local se muestra en la sección del local y en la página de ubicación.

Para reemplazarlas en el futuro, conviene subir los nuevos archivos manteniendo esos mismos nombres. Así no hace falta tocar código.

Si se cambian los nombres de archivo, actualizar también las rutas en:

- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/Footer.jsx`
- `src/components/LocalSection.jsx`
- `src/pages/Location.jsx`
- `index.html` para el favicon/icono

Usar imágenes optimizadas antes de subirlas. Para el logo conviene PNG con fondo transparente o buen contraste sobre negro. Para la foto del local conviene JPG horizontal, idealmente cerca de 16:9, para que no se recorte de forma incómoda en mobile.

Para usar imágenes reales:

- Hero o imagen principal: revisar `src/components/Hero.jsx`.
- Local/fachada: revisar `src/components/LocalSection.jsx`.
- Trabajos realizados: subir imágenes a `public/trabajos` y editarlas en `src/data/trabajos.js`.

Conviene optimizar las imágenes antes de subirlas para que la web cargue rápido.

## Notas Importantes

- No inventar precios.
- No inventar horarios.
- No inventar marcas específicas.
- Mantener actualizado el WhatsApp.
- Revisar mobile antes de publicar.
- Optimizar imágenes antes de subirlas.
- Usar nombres simples para archivos.
- No subir imágenes extremadamente pesadas.
- No usar Firebase, Supabase, login, panel admin ni backend para esta versión.

## Problemas Comunes

### No aparece un trabajo

Revisar:

- Que tenga `publicado: true`.
- Que `orden` sea un número.
- Que la categoría coincida con las categorías usadas en `workFilters`.
- Que el objeto esté dentro del array `trabajos`.

### No aparece la imagen

Revisar:

- Que la imagen esté en `public/trabajos`.
- Que la ruta empiece con `/trabajos/`.
- Que el nombre del archivo coincida exactamente.
- Que el archivo no tenga espacios ni caracteres raros.

### Vercel No Actualizó

Revisar:

- Que se haya hecho `git push`.
- Que el deploy en Vercel no haya fallado.
- Que la rama conectada en Vercel sea la misma a la que se subieron los cambios.

### Error Al Correr NPM

Ejecutar:

```bash
npm install
```

Después volver a correr:

```bash
npm run dev
```
