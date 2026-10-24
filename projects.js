/* ═══════════════════════════════════════════════════════════════════════
   PROYECTOS — este es el ÚNICO archivo que hay que editar para agregar,
   quitar o reordenar proyectos. Lo usan la galería (proyectos.html, en
   escritorio y celular) y el visor (proyecto.html).

   • El ORDEN de esta lista es el orden del carrusel y del visor.
   • Para agregar un proyecto: copia un bloque { ... }, cámbiale los datos
     y súbelo junto con sus imágenes a las carpetas portadas-img/ y
     proyectos-img/. No hay que tocar nada más.

   Campos:
     key    → identificador único, sin espacios ni tildes (va en el link: proyecto.html?p=muds)
     title  → nombre que se muestra
     desc   → descripción corta bajo el nombre
     cover  → imagen de la burbuja (portada)
     slides → imágenes del visor, en orden
   ═══════════════════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    key:    'muds',
    title:  'MUDS',
    desc:   'Calzado modular y ecológico. Proyecto de título universitario.',
    cover:  'portadas-img/MUDS_cover.png',
    slides: ['proyectos-img/MUDS_1.jpg', 'proyectos-img/MUDS_2.jpg']
  },
  {
    key:    'neast',
    title:  'Neast Components™',
    desc:   'Empresa dedicada al diseño y desarrollo de componentes MTB.',
    cover:  'portadas-img/Neast_cover.png',
    slides: ['proyectos-img/Neast_1.jpg', 'proyectos-img/Neast_2.jpg']
  },
  {
    key:    'cambridge',
    title:  'Cambridge & José Cruz',
    desc:   'Diseño y fabricación de espacio para exhibición internacional.',
    cover:  'portadas-img/Cambridge_cover.png',
    slides: ['proyectos-img/Cambridge_01.jpg', 'proyectos-img/Cambridge_03.jpg', 'proyectos-img/Cambridge_04.jpg']
  },
  {
    key:    'konatec',
    title:  'Konatec',
    desc:   'Rediseño de máquinas de ingeniería.',
    cover:  'portadas-img/Konatec_cover.png',
    slides: ['proyectos-img/Konatec_01.jpg', 'proyectos-img/Konatec_02.jpg']
  },
  {
    key:    'lontra',
    title:  'Lontra Platform',
    desc:   'Concurso diseño para especies.',
    cover:  'portadas-img/Lontra_cover.png',
    slides: ['proyectos-img/Lontra_Platform_01.jpg', 'proyectos-img/Lontra_Platform_02.jpg', 'proyectos-img/Lontra_Platform_03.jpg']
  },
  {
    key:    'copihue',
    title:  'Espacio Copihue',
    desc:   'Modelado y programación paramétrica.',
    cover:  'portadas-img/Copihue_cover.png',
    slides: ['proyectos-img/Espacio_Copihue_01.jpg', 'proyectos-img/Espacio_Copihue_02.jpg']
  },
  {
    key:    'refugio',
    title:  'Refugio Prisma',
    desc:   'Diseño de espacios arquitectónicos.',
    cover:  'portadas-img/Refugio_cover.png',
    slides: ['proyectos-img/Refugio_Prisma_01.jpg', 'proyectos-img/Refugio_Prisma_02.jpg']
  }
];
