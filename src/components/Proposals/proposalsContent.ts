/* Contenido de las 8 propuestas (textos del XD). Lo usa la versión mobile, que va en flujo */

export type Measure = {
  title: string
  text: string
  bullets?: string[]
}

export type ProposalContent = {
  number: string
  /** Claves de las fotos (las mismas que usa el layout de escritorio) */
  image: string
  cardImage: string
  /** Rótulo de la tarjeta, en dos renglones */
  card: [string, string]
  title: string[]
  subtitle: string
  text: string[]
  measures: Measure[]
  alt: string
}

export const PROPOSALS: ProposalContent[] = [
  {
    number: '01',
    image: 'surquillo-seguro',
    cardImage: 'surquillo-seguro',
    card: ['Surquillo', 'Seguro'],
    title: ['Surquillo seguro'],
    subtitle: 'Más seguridad y tranquilidad para nuestras familias',
    text: [
      'La seguridad de nuestros vecinos será una prioridad. Trabajaremos para recuperar la tranquilidad en nuestras calles con mayor prevención, tecnología y coordinación.',
    ],
    measures: [
      {
        title: 'Más serenazgo en las calles:',
        text: 'Duplicaremos la presencia de serenazgo para fortalecer la vigilancia y brindar una respuesta más rápida ante cualquier emergencia.',
      },
      {
        title: 'Patrullaje integrado con la Policía Nacional:',
        text: 'Implementaremos un trabajo coordinado entre serenazgo y policía para reforzar la seguridad en todo el distrito.',
      },
      {
        title: 'Serenos mejor preparados:',
        text: 'Capacitaremos a nuestros agentes en preparación física, defensa personal y manejo seguro de situaciones de riesgo.',
      },
      {
        title: 'Más iluminación para calles seguras:',
        text: 'Instalaremos iluminación LED en las zonas con menor iluminación para recuperar espacios públicos.',
      },
      {
        title: 'Cámaras con inteligencia artificial:',
        text: 'Implementaremos tecnología de monitoreo inteligente para prevenir y detectar hechos delictivos.',
      },
    ],
    alt: 'Central de video vigilancia de Surquillo con serenazgo',
  },
  {
    number: '02',
    image: 'surquillo-preparado',
    cardImage: 'surquillo-preparado',
    card: ['Surquillo', 'Preparado'],
    title: ['Surquillo preparado'],
    subtitle: 'Un distrito listo ante cualquier emergencia',
    text: [
      'Surquillo debe estar preparado para responder rápidamente frente a terremotos u otras situaciones de emergencia.',
    ],
    measures: [
      {
        title: 'Almacenes subterráneos de emergencia:',
        text: 'Crearemos puntos estratégicos de abastecimiento en lugares como el estadio municipal, parques y canchitas.',
      },
      {
        title: 'Equipamiento para emergencias:',
        text: 'Estos espacios contarán con alimentos no perecibles, agua, botiquines y herramientas de rescate para atender rápidamente a nuestros vecinos.',
      },
    ],
    alt: 'Enfermera tomando la presión a una vecina adulta mayor',
  },
  {
    number: '03',
    image: 'surquillo-limpio',
    cardImage: 'card-limpio',
    card: ['Surquillo', 'Limpio'],
    title: ['Surquillo limpio'],
    subtitle: 'Calles limpias y espacios públicos recuperados',
    text: ['Trabajaremos por un distrito más limpio, ordenado y saludable para todos.'],
    measures: [
      {
        title: 'Contenedores subterráneos de residuos:',
        text: 'Instalaremos contenedores de basura subterráneos en puntos estratégicos para mejorar la limpieza urbana.',
      },
      {
        title: 'Recojo especial para comercios:',
        text: 'Implementaremos horarios diferenciados para establecimientos que generan residuos fuera del horario tradicional.',
      },
      {
        title: 'Lavado periódico de calles:',
        text: 'Realizaremos jornadas de lavado de calles con camión cisterna para mantener espacios públicos en mejores condiciones.',
      },
    ],
    alt: 'Personal de limpieza lavando una calle de Surquillo',
  },
  {
    number: '04',
    image: 'surquillo-ordenado',
    cardImage: 'card-ordenado',
    card: ['Surquillo', 'Ordenado'],
    title: ['Surquillo ordenado'],
    subtitle: 'Mejor tránsito y recuperación del espacio público',
    text: ['Ordenaremos las calles para que vecinos y visitantes puedan movilizarse mejor.'],
    measures: [
      {
        title: 'Mayor fiscalización del tránsito:',
        text: 'Reforzaremos la presencia de fiscalizadores en los puntos de mayor congestión.',
      },
      {
        title: 'Ordenamiento del transporte público:',
        text: 'Controlaremos paraderos y maniobras indebidas que generan tráfico y desorden.',
      },
      {
        title: 'Estacionamientos subterráneos en concesión:',
        text: 'Impulsaremos alternativas para liberar las calles de vehículos estacionados y mejorar la circulación.',
      },
    ],
    alt: 'Parque ordenado con glorieta y bancas en Surquillo',
  },
  {
    number: '05',
    image: 'surquillo-pet-friendly',
    cardImage: 'card-pet-friendly',
    card: ['Surquillo pet', 'Friendly'],
    title: ['Surquillo pet friendly'],
    subtitle: 'Un distrito que también cuida a sus mascotas',
    text: ['Nuestros animales de compañía también forman parte de nuestras familias.'],
    measures: [
      {
        title: 'Veterinaria Municipal 24 horas:',
        text: 'Implementaremos atención veterinaria permanente para nuestras mascotas.',
      },
      {
        title: 'Registro municipal de mascotas:',
        text: 'Realizaremos un censo con identificación mediante microchip para ayudar a encontrar mascotas extraviadas.',
      },
    ],
    alt: 'Vecina con su perro en una campaña veterinaria de Surquillo',
  },
  {
    number: '06',
    image: 'surquillo-oportunidades',
    cardImage: 'card-oportunidades',
    card: ['Surquillo con', 'Oportunidades'],
    title: ['Surquillo con oportunidades'],
    subtitle: 'Más apoyo para emprendedores, jóvenes y trabajadores',
    text: [
      'Impulsaremos un distrito donde las personas puedan crecer y generar nuevas oportunidades.',
    ],
    measures: [
      {
        title: 'Ordenamiento del comercio ambulatorio:',
        text: 'Trabajaremos para organizar el comercio informal sin quitar la fuente de ingreso de quienes buscan salir adelante.',
      },
      {
        title: 'Municipalidad digital:',
        text: 'Digitalizaremos los trámites para facilitar procesos, ahorrar tiempo y reducir espacios para la corrupción.',
      },
      {
        title: 'Capacitación para emprendedores y comerciantes:',
        text: 'Brindaremos herramientas para mejorar negocios y fortalecer la economía local.',
      },
      {
        title: 'Programa para jóvenes emprendedores:',
        text: 'Capacitaremos a nuestros jóvenes para que puedan desarrollar proyectos y nuevas oportunidades.',
      },
    ],
    alt: 'Emprendedores de Surquillo reunidos en un taller',
  },
  {
    number: '07',
    image: 'surquillo-espacios',
    cardImage: 'card-espacios',
    card: ['Surquillo con', 'Espacios para todos'],
    title: ['Surquillo con espacios', 'para todos'],
    subtitle: 'Recuperemos nuestros espacios para la comunidad',
    text: [
      'Nuestros espacios públicos deben volver a ser lugares de encuentro, aprendizaje y desarrollo.',
    ],
    measures: [
      {
        title: 'Recuperación del Estadio Municipal',
        text: 'Transformaremos el estadio municipal en un espacio al servicio de los vecinos con:',
        bullets: [
          '-Talleres deportivos gratuitos.',
          '-Actividades culturales.',
          '-Programas de capacitación.',
          '-Espacios de integración para niños, jóvenes y adultos',
        ],
      },
    ],
    alt: 'Niños jugando en una losa deportiva de Surquillo',
  },
  {
    number: '08',
    image: 'surquillo-futuro',
    cardImage: 'card-futuro',
    card: ['Surquillo tiene', 'Futuro'],
    title: ['Surquillo tiene futuro'],
    subtitle: 'Una gestión cercana, moderna y al servicio de sus vecinos',
    text: [
      'Trabajaremos por un distrito más:',
      '-Seguro',
      '-limpio',
      '-Ordenado',
      '-Oportunidades para todas las familias.',
    ],
    measures: [],
    alt: 'Vista aérea de Surquillo',
  },
]

