export interface VideoItem {
  id: string
  title: string
  src: string
  poster?: string
  description: string
  category: 'contemporary' | 'urban' | 'solo' | 'ensemble'
  duration: string
  year: string
}

export interface LoopItem {
  src: string
  poster: string
}

export const loops: LoopItem[] = [
  { src: "/media/loops/loop1.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop2.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop3.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop4.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop5.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop6.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop7.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop8.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop9.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop10.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop11.mp4", poster: "/poster.jpg" },
  { src: "/media/loops/loop12.mp4", poster: "/poster.jpg" }
]

export const videos: VideoItem[] = [
  {
    id: 'ephemeral-moments',
    title: 'Ephemeral Moments',
    src: '/videos/ephemeral-moments.mp4',
    poster: '/images/ephemeral-moments-poster.jpg',
    description: 'A contemporary exploration of fleeting beauty and lasting impact through fluid movement.',
    category: 'contemporary',
    duration: '2:45',
    year: '2024'
  },
  {
    id: 'urban-pulse',
    title: 'Urban Pulse',
    src: '/videos/urban-pulse.mp4',
    poster: '/images/urban-pulse-poster.jpg',
    description: 'Street-inspired choreography meets classical technique in this dynamic piece.',
    category: 'urban',
    duration: '3:12',
    year: '2024'
  },
  {
    id: 'solitary-reflection',
    title: 'Solitary Reflection',
    src: '/videos/solitary-reflection.mp4',
    poster: '/images/solitary-reflection-poster.jpg',
    description: 'An intimate solo piece exploring inner landscapes and personal transformation.',
    category: 'solo',
    duration: '4:08',
    year: '2024'
  },
  {
    id: 'collective-harmony',
    title: 'Collective Harmony',
    src: '/videos/collective-harmony.mp4',
    poster: '/images/collective-harmony-poster.jpg',
    description: 'Ensemble work celebrating unity through synchronized movement and shared energy.',
    category: 'ensemble',
    duration: '3:34',
    year: '2023'
  },
  {
    id: 'midnight-flow',
    title: 'Midnight Flow',
    src: '/videos/midnight-flow.mp4',
    poster: '/images/midnight-flow-poster.jpg',
    description: 'Contemporary piece inspired by the quiet intensity of late-night creativity.',
    category: 'contemporary',
    duration: '2:58',
    year: '2023'
  },
  {
    id: 'city-rhythms',
    title: 'City Rhythms',
    src: '/videos/city-rhythms.mp4',
    poster: '/images/city-rhythms-poster.jpg',
    description: 'Urban choreography capturing the pulse and energy of metropolitan life.',
    category: 'urban',
    duration: '3:45',
    year: '2023'
  },
  {
    id: 'inner-voice',
    title: 'Inner Voice',
    src: '/videos/inner-voice.mp4',
    poster: '/images/inner-voice-poster.jpg',
    description: 'Solo exploration of personal expression through contemporary movement.',
    category: 'solo',
    duration: '3:21',
    year: '2024'
  },
  {
    id: 'together-apart',
    title: 'Together Apart',
    src: '/videos/together-apart.mp4',
    poster: '/images/together-apart-poster.jpg',
    description: 'Ensemble piece exploring connection and distance in modern relationships.',
    category: 'ensemble',
    duration: '4:15',
    year: '2024'
  },
  {
    id: 'shadow-dance',
    title: 'Shadow Dance',
    src: '/videos/shadow-dance.mp4',
    poster: '/images/shadow-dance-poster.jpg',
    description: 'Contemporary work playing with light, shadow, and the spaces between.',
    category: 'contemporary',
    duration: '2:33',
    year: '2023'
  }
]