// src/data/servicios.ts

import imgElectrico from '../assets/servicios/electrico.jpg';
import imgRenovables from '../assets/foto3.jpg';
import imgRedes from '../assets/servicios/3.jpg';
import imgVideovigilancia from '../assets/servicios/videovigilancia.jpg';
import imgDesarrollo from '../assets/servicios/Desarrollo.jpg';
import imgEstructuras from '../assets/servicios/Estructuraslivianas.jpg';
import imgMantenimiento from '../assets/servicios/Mantenimientoylimpieza.jpg';
import imgPerfileria from '../assets/servicios/PerfileriaPVC.jpg';
import imgGases from '../assets/servicios/Sistemasdegases.jpg';
import imgIndustrial from '../assets/servicios/4.jpg';

import type { ImageMetadata } from 'astro';

export interface Servicio {
  ref: string;
  title: string;
  subtitle: string;
  description: string;
  icon:
    | 'automation' | 'service' | 'electrical' | 'domotics'
    | 'renewable' | 'consulting' | 'network' | 'camera'
    | 'sound' | 'generator' | 'prefab' | 'paint'
    | 'structure' | 'welding' | 'gas' | 'pvc'
    | 'cleaning' | 'software';
  items?: string[];
  image?: ImageMetadata;
  imageAlt?: string;
}

export const servicios: Servicio[] = [
  {
    ref: 'FS-01',
    title: 'Instalaciones residenciales e industriales',
    subtitle: 'Electricidad general',
    description:
      'Ejecutamos instalaciones eléctricas residenciales e industriales bajo normativa, con materiales certificados y personal calificado.',
    icon: 'electrical',
    image: imgElectrico,
    imageAlt: 'Instalaciones eléctricas residenciales e industriales',
    items: [
      'Instalaciones residenciales',
      'Instalaciones industriales',
      'Instalación de equipo de bombeo',
      'Sistemas de tierra física',
      'Instalación de generadores eléctricos',
      'Estudios de iluminación y calidad de energía',
      'Asesoría, estudio y diseño de sistemas eléctricos',
    ],
  },
  {
    ref: 'FS-02',
    title: 'Energías renovables',
    subtitle: 'Asesoría, diseño e instalación',
    description:
      'Diseñamos e instalamos sistemas solares térmicos y fotovoltaicos adaptados a tu consumo real.',
    icon: 'renewable',
    image: imgRenovables,
    imageAlt: 'Energías renovables',
    items: [
      'Diseño e instalación de sistemas de paneles solares',
      'Instalación de calentadores solares',
    ],
  },
  {
    ref: 'FS-03',
    title: 'Cableado estructurado y redes',
    subtitle: 'Asesoría, diseño e instalación',
    description:
      'Diseñamos e implementamos infraestructura de red confiable para voz, datos y video.',
    icon: 'network',
    image: imgRedes,
    imageAlt: 'Cableado estructurado y redes',
    items: ['Diseño e instalación de sistemas de cableado estructurado'],
  },
  {
    ref: 'FS-04',
    title: 'Videovigilancia',
    subtitle: 'Asesoría, diseño e instalación',
    description:
      'Sistemas de cámaras para interior y exterior, con monitoreo remoto y grabación segura.',
    icon: 'camera',
    image: imgVideovigilancia,
    imageAlt: 'Sistemas de videovigilancia',
    items: [
      'Diseño e instalación de sistemas de cámaras en interior y exterior, residencial, industrial y comercial',
    ],
  },
  {
    ref: 'FS-05',
    title: 'Sonido comercial',
    subtitle: 'Asesoría, diseño e instalación',
    description:
      'Sistemas de audio ambiental y profesional para comercios, oficinas y plantas.',
    icon: 'sound',
    image: imgRedes,                    // ← reutilizada
    imageAlt: 'Sonido comercial',
    items: ['Asesoría, diseño e instalación de sistemas de sonido comercial'],
  },
  {
    ref: 'FS-06',
    title: 'Generadores eléctricos',
    subtitle: 'Venta y distribución',
    description:
      'Venta, distribución e instalación de generadores de baja, media y alta potencia.',
    icon: 'generator',
    image: imgElectrico,                // ← reutilizada
    imageAlt: 'Generadores eléctricos',
    items: [
      'Venta y distribución de generadores eléctricos de baja, media y alta potencia',
    ],
  },
  {
    ref: 'FS-07',
    title: 'Reparación y mantenimiento',
    subtitle: 'Equipos, maquinaria y sistemas',
    description:
      'Mantenimiento preventivo y correctivo para equipos, maquinaria y sistemas industriales y residenciales.',
    icon: 'service',
    image: imgMantenimiento,            // ← reutilizada
    imageAlt: 'Reparación y mantenimiento',
    items: [
      'Reparación y mantenimiento de equipos, maquinaria y sistemas industriales y residenciales',
    ],
  },
  {
    ref: 'FS-08',
    title: 'Automatización de sistemas industriales',
    subtitle: 'Control y monitoreo',
    description:
      'Automatizamos procesos industriales con PLC, sensores y sistemas de control a medida.',
    icon: 'automation',
    image: imgRedes,                    // ← reutilizada
    imageAlt: 'Automatización de sistemas industriales',
    items: ['Automatización de sistemas industriales'],
  },
  {
    ref: 'FS-09',
    title: 'Sistemas prefabricados livianos',
    subtitle: 'Interior y exterior',
    description:
      'Fabricación e instalación de sistemas livianos para muros, cielos y divisiones.',
    icon: 'prefab',
    image: imgEstructuras,              // ← reutilizada
    imageAlt: 'Sistemas prefabricados livianos',
    items: [
      'Sistemas livianos con tablero de yeso, tabla roca, SECUROCK, DUROCK, micro concreto',
      'Cielo falso con tablero de yeso',
      'Cielo falso reticulado: fibra mineral, thermopor, vinyl, fibrocemento, núcleo de yeso, fibra de vidrio, cielo de metal',
      'Cielo falso tipo PVC',
    ],
  },
  {
    ref: 'FS-10',
    title: 'Pintura residencial e industrial',
    subtitle: 'Recubrimientos',
    description:
      'Aplicación de pintura decorativa, impermeabilización y recubrimientos industriales.',
    icon: 'paint',
    image: imgIndustrial,               // ← reutilizada (4.jpg)
    imageAlt: 'Pintura residencial e industrial',
    items: [
      'Pintura interior y exterior, decorativas e impermeabilización',
      'Pintura en áreas industriales, señalización y equipos',
    ],
  },
  {
    ref: 'FS-11',
    title: 'Estructuras livianas',
    subtitle: 'Diseño y fabricación',
    description:
      'Diseñamos y fabricamos estructuras metálicas livianas a medida.',
    icon: 'structure',
    image: imgEstructuras,
    imageAlt: 'Estructuras livianas',
    items: [
      'Puertas, ventanas, balcones, barandas, pasamanos y escaleras',
      'Estructuras tipo pérgola y recubrimientos residenciales e industriales',
      'Fabricación de elementos a base de metal',
      'Reparaciones de estructuras y elementos metálicos',
      'Estanterías',
    ],
  },
  {
    ref: 'FS-12',
    title: 'Soldadura industrial',
    subtitle: 'Procesos certificados',
    description:
      'Aplicamos procesos de soldadura industrial con personal calificado.',
    icon: 'welding',
    image: imgEstructuras,              // ← reutilizada
    imageAlt: 'Soldadura industrial',
    items: [
      'Soldadura al arco voltaico con electrodo revestido (SEA)',
      'Soldadura oxiacetilénica (autógena)',
      'Cortes de metal ferroso por oxicorte',
      'Soldadura con electrodo continuo (MIG-MAG)',
      'Soldadura por arco de tungsteno con gas (TIG)',
      'Soldadura exotérmica aplicada en cables de cobre',
    ],
  },
  {
    ref: 'FS-13',
    title: 'Sistemas de gases',
    subtitle: 'Asesoría, diseño e instalación',
    description:
      'Instalamos sistemas de gas propano, aire comprimido y oxígeno bajo normativa.',
    icon: 'gas',
    image: imgGases,
    imageAlt: 'Sistemas de gases',
    items: ['Sistemas de gas propano', 'Aire comprimido', 'Oxígeno'],
  },
  {
    ref: 'FS-14',
    title: 'Perfilería PVC',
    subtitle: 'Diseño y fabricación',
    description:
      'Fabricamos puertas, ventanas y canceles a base de perfilaría PVC.',
    icon: 'pvc',
    image: imgPerfileria,
    imageAlt: 'Perfilería PVC',
    items: ['Puertas, ventanas y canceles en PVC'],
  },
  {
    ref: 'FS-15',
    title: 'Mantenimiento y limpieza',
    subtitle: 'Espacios comerciales',
    description:
      'Servicios de mantenimiento y limpieza para espacios comerciales e industriales.',
    icon: 'cleaning',
    image: imgMantenimiento,
    imageAlt: 'Mantenimiento y limpieza',
    items: ['Mantenimiento y limpieza de espacios comerciales'],
  },
  {
    ref: 'FS-16',
    title: 'Desarrollo de software',
    subtitle: 'Hardware, software y servidores',
    description:
      'Desarrollamos software a medida y gestionamos la implementación de hardware, software y servidores.',
    icon: 'software',
    image: imgDesarrollo,
    imageAlt: 'Desarrollo de software',
    items: [
      'Desarrollo de software a medida',
      'Manejo de hardware y software',
      'Implementación e instalación de servidores web y físicos',
    ],
  },
];