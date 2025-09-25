export default [
  {
    id: 1,
    name: 'The Dancing Grannies of the Lower East Side',
    location: 'Where: Seward Park, New York, NY.',
    mapsLink:
      'https://www.google.com/maps/place/Seward+Park+Library/@40.7144457,-73.9895625,17z/data=!4m6!3m5!1s0x89c25a2a2f1beb67:0x7779594c59331d08!8m2!3d40.7144701!4d-73.9884896!16s%2Fg%2F1td7v2vy?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D',
    img: {
      src: '/assets/pin1.png',
      alt: 'googlePin',
    },
    hours: 'When: 10 am, mon - Fri',
    description:
      'What began in China as the Dancing Grannies (mostly retired women dancing together in public spaces) has grown into a global fitness wave, rooted in the 1950s, boosted by the Beijing Olympics and even echoing in New York’s neighborhood parks.',
    commentsTitle: 'Comments:',
    videoSrc: '/videos/dancing-grannies-down-size.mp4',
    frame: '/assets/dancingGrannieTV.png',

    comments: [
      { id: 1, text: 'Best Dance crew ever' },
      { id: 2, text: 'Go grannies go!' },
    ],
  },

  {
    id: 2,
    name: 'Dancing Generations',
    location: 'Where: Barrancas de Belgrano, Buenos Aires, Argentina.',
    mapsLink:
      'https://www.google.com/maps/place/La+Glorieta/@-34.5565148,-58.4663015,15z/data=!4m6!3m5!1s0x95bcb5cda141d42f:0xf45ef084455f7ea!8m2!3d-34.5599342!4d-58.4498542!16s%2Fg%2F11bwpyxqvq?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D',
    img: {
      src: '/assets/pin1.png',
      alt: 'googlePin',
    },
    hours: 'When: every Sunday at dusk',
    description:
      'All ages and backgrounds gather under this 115-year-old gazebo, to experience life through dance. Beginners and veterans alike, surrender to the rhythms of tango',
    commentsTitle: 'Comments:',
    videoSrc: '/videos/tango-tango.mp4',
    frame: '/assets/dancingGrannieTV.png',
    comments: [
      { id: 1, text: 'amazing!' },
      { id: 2, text: 'How original!' },
    ],
  },
]
