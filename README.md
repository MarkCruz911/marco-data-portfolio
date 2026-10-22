# Marco Cruz — Software & Data Portfolio

Portafolio en inglés con React, TypeScript, Vite y Tailwind CSS. Diseño oscuro con cian y violeta, tipografías Space Grotesk, Inter y JetBrains Mono instaladas como dependencias locales.

## Ejecutar en Windows

Extrae el ZIP en una carpeta nueva y abre `marco-data-portfolio` en VS Code. Usa tu instalación de Node.js compatible con Vite (tu Node 24 sirve).

```powershell
npm ci
npm run dev
```

Abre la dirección que muestra Vite. Si PowerShell bloquea npm.ps1, usa `npm.cmd ci` y `npm.cmd run dev`; no hace falta cambiar la política de ejecución.

## Compilar y dar formato

```powershell
npm run build
npm run preview
npm run format
```

`build` comprueba TypeScript y genera `dist`. `format` organiza el código con Prettier para que sea cómodo de leer y editar.

## Dónde editar cada cosa

| Archivo o carpeta | Qué contiene |
| --- | --- |
| `src/data/profile.ts` | Presentación, contacto, enlaces, educación y CV |
| `src/data/experience.ts` | Empresas, fechas, responsabilidades y contribuciones |
| `src/data/projects.ts` | Tarjetas de proyectos y contenido de casos genéricos |
| `src/data/case-studies/youtube-data.ts` | Resúmenes de categorías y tamaños de muestra |
| `src/sections/` | About, Projects, Experience, Resume y Contact |
| `src/components/` | Navegación, pie, gráficos y elementos compartidos |
| `src/pages/YouTubeCaseStudy.tsx` | Narrativa y entregables del caso YouTube |
| `src/pages/ProjectCaseStudy.tsx` | Plantilla reutilizable para otros proyectos |
| `src/App.tsx` | Selección de página y navegación por hash |
| `src/styles/theme.css` | Colores, tipografías y estilos comunes |
| `src/styles/layout.css` | Diseño de inicio y adaptación a pantallas pequeñas |
| `src/styles/case-study.css` | Diseño de casos de estudio |
| `public/documents/` | CV PDF y presentaciones PowerPoint |

Los datos están separados de la presentación para que puedas cambiar textos sin buscar entre estilos. Las secciones están divididas en componentes y el código está formateado en varias líneas.

## Recorrido del visitante

About → Projects → Experience → Resume → Contact.

Cada proyecto presenta pregunta, contexto, proceso, hallazgos, entregables, limitaciones y próximos pasos. Hay dos casos: YouTube Shorts y Pharmacy Management & E-commerce. El segundo describe el trabajo documentado en el CV; no incluye capturas, repositorios ni métricas de evaluación que no se hayan proporcionado.

## Añadir un proyecto

1. Añade un objeto a `projects` en `src/data/projects.ts`, usando el segundo proyecto como ejemplo.
2. Usa un `slug` único y completa `caseStudy` con el contenido de cada etapa.
3. La tarjeta y la ruta `#project/tu-slug` se generan automáticamente; la plantilla genérica muestra el contenido.
4. Personaliza la ilustración de portada en `src/sections/Projects.tsx` si el nuevo proyecto necesita otra visualización.
5. Añade sus archivos a `public/documents/` y sus enlaces en el componente correspondiente.

YouTube conserva una página específica porque incluye gráficos y entregables interactivos. No hay un panel administrativo ni subida de archivos desde el navegador: los cambios se hacen en el repositorio.

## CV y documentos

`public/documents/Marco_Cruz_CV.pdf` es el CV más reciente facilitado. La vista integrada, el enlace para abrirlo y la descarga usan exactamente ese mismo archivo. Si el navegador no admite PDF integrado, el enlace para abrirlo sigue disponible.

Para actualizarlo, reemplaza el PDF manteniendo el nombre. Las dos presentaciones ejecutivas originales también están incluidas sin modificar su contenido.

## Datos y procedencia

- El CV más reciente tiene prioridad para fechas, cargos, correo y detalles laborales; CM Motors se conserva del perfil anterior.
- Los resultados de Toffee Up se presentan como contribuciones a iniciativas de equipo, separados del proyecto analítico.
- K-Means aparece como aplicación académica a segmentación de clientes, sin inventar precisión o evaluación de modelos.
- Google Advanced Data Analytics se identifica como formación en curso.
- El caso YouTube usa las tablas y resultados compartidos: 346 videos, 343 categorizados y 3 sin clasificar.
- Los gráficos muestran resúmenes estáticos de medianas por año de publicación, no vistas obtenidas dentro de ese año ni una conexión en vivo a la base de datos.
- Se mantienen tamaños de muestra, clasificaciones provisionales, correlación sin causalidad y la discrepancia no resuelta entre resumen y filas del archivo fuente.
- PostgreSQL en el proyecto YouTube sigue siendo un próximo paso, no trabajo completado.

## Tableau

El dashboard se carga al pulsar “Load interactive dashboard”. Esto evita cargar recursos de Tableau antes de que el visitante los necesite. También existe un enlace externo: la visualización integrada depende de las políticas y disponibilidad de Tableau y del navegador.

## Publicar en tu Vercel

1. Sube este proyecto a tu repositorio de portafolio. No incluyas `node_modules` ni `dist`.
2. Importa el repositorio en Vercel.
3. Selecciona Vite, build `npm run build` y output `dist`.
4. No se necesitan variables de entorno.
5. Comprueba PDF, PowerPoints y Tableau en la URL publicada.

La configuración está incluida en `vercel.json`. Esta entrega no publica ni reemplaza tu web anterior. Los enlaces por hash funcionan en un alojamiento estático.

## Verificación de esta entrega

Compilación TypeScript y Vite verificada. Diseño de escritorio y navegación de casos inspeccionados en navegador; filtro de categorías comprobado. El diseño incluye reglas móviles y respeto por reducción de movimiento. Conviene revisar el resultado en tu teléfono y Tableau en el despliegue final.
