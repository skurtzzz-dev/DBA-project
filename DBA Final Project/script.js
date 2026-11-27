let events = [
  {
    id: 1,
    name: 'SMX Year-End Gaming Finals',
    type: 'Gaming & Esports',
    venue: 'SMX Convention Center',
    city: 'Pasay City, NCR',
    area: 'NCR',
    start: '2026-12-09T10:00:00',
    end: '2026-12-10T20:00:00',
    freeEntrance: false,
    interested: 128,
    description: 'The loop closes with two days of bracket play at SMX: open qualifiers, creator matchups, and a finals night with a live merch strip and a clear game-by-game schedule.',
    highlights: ['Open qualifiers', 'Creator matchups', 'Finals night'],
    posterTitle: 'YEAR-END\nFINALS',
    posterMark: 'GF',
    posterFooter: 'TWO DAYS / ONE FINALS NIGHT',
    theme: 'gaming'
  },
  {
    id: 2,
    name: 'Baguio December Live Sessions',
    type: 'Music & Concerts',
    venue: 'Baguio Convention Center',
    city: 'Baguio City, Benguet',
    area: 'Outside NCR',
    start: '2026-12-10T16:00:00',
    end: '2026-12-10T22:30:00',
    freeEntrance: false,
    interested: 64,
    description: 'An intimate December night of original songs and familiar favorites from independent Baguio acts, with a short acoustic set before the main lineup.',
    highlights: ['Acoustic opener', 'Independent acts', 'One-night lineup'],
    posterTitle: 'DECEMBER\nLIVE',
    posterMark: 'DL',
    posterFooter: 'BAGUIO / ONE NIGHT ONLY',
    theme: 'music'
  },
  {
    id: 3,
    name: 'Cosplay Holiday Carnival',
    type: 'Cosplay',
    venue: 'The Filinvest Tent',
    city: 'Muntinlupa City, NCR',
    area: 'NCR',
    start: '2026-12-11T09:00:00',
    end: '2026-12-11T18:00:00',
    freeEntrance: false,
    interested: 88,
    description: 'Holiday-themed builds take over the Filinvest Tent with a costume runway, repair tables, and photo corners for groups and full builds.',
    highlights: ['Holiday runway', 'Repair tables', 'Group photo corners'],
    posterTitle: 'HOLIDAY\nCOSPLAY',
    posterMark: 'CH',
    posterFooter: 'BUILDS / RUNWAY / PHOTOS',
    theme: 'cosplay'
  },
  {
    id: 4,
    name: 'WTC Year-End Pop Culture Expo',
    type: 'Anime & Pop Culture',
    venue: 'World Trade Center Metro Manila',
    city: 'Pasay City, NCR',
    area: 'NCR',
    start: '2026-12-12T10:00:00',
    end: '2026-12-13T19:00:00',
    freeEntrance: false,
    interested: 112,
    description: 'A two-day send-off for anime and pop culture fans: panel rooms, a packed merch hall, guest sessions, and afternoon screenings.',
    highlights: ['Panel rooms', 'Merch hall', 'Guest sessions'],
    posterTitle: 'POP\nCULTURE',
    posterMark: 'PC',
    posterFooter: 'PANELS / MERCH / SCREENINGS',
    theme: 'anime'
  },
  {
    id: 5,
    name: 'PICC Tech Wrap-Up Forum',
    type: 'Technology & Innovation',
    venue: 'Philippine International Convention Center',
    city: 'Pasay City, NCR',
    area: 'NCR',
    start: '2026-12-14T09:00:00',
    end: '2026-12-14T17:00:00',
    freeEntrance: false,
    interested: 73,
    description: 'A one-day PICC forum on the tools and teams that shaped Philippine tech in 2026, with short talks, live demos, and hallway conversations.',
    highlights: ['Short talks', 'Live demos', 'Product walks'],
    posterTitle: 'TECH\nEXPO',
    posterMark: 'TE',
    posterFooter: 'TALKS / DEMOS / LIVE STREAM',
    theme: 'technology'
  },
  {
    id: 6,
    name: 'San Fernando Lantern Arts Walk',
    type: 'Arts & Culture',
    venue: 'Downtown Event Hall',
    city: 'San Fernando, Pampanga',
    area: 'Outside NCR',
    start: '2026-12-15T10:00:00',
    end: '2026-12-16T18:00:00',
    freeEntrance: true,
    interested: 41,
    description: 'A self-guided walk through downtown San Fernando with lantern displays, local art, handmade work, and short performances at each stop.',
    highlights: ['Lantern displays', 'Handmade work', 'Short performances'],
    posterTitle: 'LANTERN\nARTS WALK',
    posterMark: 'LA',
    posterFooter: 'WALK / LOOK / BUY LOCAL',
    theme: 'arts'
  },
  {
    id: 7,
    name: 'Nuvali Christmas Food Park',
    type: 'Food & Beverage',
    venue: 'Nuvali Event Grounds',
    city: 'Santa Rosa, Laguna',
    area: 'Outside NCR',
    start: '2026-12-17T10:00:00',
    end: '2026-12-18T21:00:00',
    freeEntrance: true,
    interested: 95,
    description: "Nuvali's grounds turn into a Christmas food park with regional dishes, small vendors, acoustic sets, and picnic tables for the whole weekend.",
    highlights: ['Regional dishes', 'Small vendors', 'Picnic tables'],
    posterTitle: 'CHRISTMAS\nFOOD PARK',
    posterMark: 'CF',
    posterFooter: 'REGIONAL FOOD / PICNIC SPACE',
    theme: 'food'
  },
  {
    id: 8,
    name: 'Antipolo Year-End Sports Fest',
    type: 'Sports & Fitness',
    venue: 'Ynares Center',
    city: 'Antipolo City, Rizal',
    area: 'Outside NCR',
    start: '2026-12-19T08:00:00',
    end: '2026-12-20T18:00:00',
    freeEntrance: true,
    interested: 67,
    description: 'An all-levels sports fest at Ynares Center with friendly matches, fitness stations, and community teams closing out the year together.',
    highlights: ['Friendly matches', 'Fitness stations', 'Community teams'],
    posterTitle: 'YEAR-END\nSPORTS FEST',
    posterMark: 'YS',
    posterFooter: 'ALL LEVELS / COMMUNITY SPORT',
    theme: 'sports'
  },
  {
    id: 9,
    name: 'QC Student Research Showcase',
    type: 'Educational & Academic',
    venue: 'University Activity Center',
    city: 'Quezon City, NCR',
    area: 'NCR',
    start: '2026-12-21T08:00:00',
    end: '2026-12-21T16:00:00',
    freeEntrance: true,
    interested: 34,
    description: 'A Quezon City showcase for students and early-career learners, with research posters, short talks, and mentors who stay after each session.',
    highlights: ['Research posters', 'Student talks', 'Mentor sessions'],
    posterTitle: 'RESEARCH\nSHOWCASE',
    posterMark: 'RS',
    posterFooter: 'STUDENT TALKS / OPEN MENTORS',
    theme: 'education'
  },
  {
    id: 10,
    name: 'Metro Founders Year-End Mixer',
    type: 'Business & Networking',
    venue: 'The Podium Hall',
    city: 'Mandaluyong City, NCR',
    area: 'NCR',
    start: '2026-12-22T15:00:00',
    end: '2026-12-22T20:00:00',
    freeEntrance: false,
    interested: 81,
    description: 'A relaxed year-end mixer for founders, freelancers, and small teams to swap 2026 lessons and make useful introductions before the break.',
    highlights: ['Founder intros', 'Partner matching', 'Year-end recap'],
    posterTitle: 'FOUNDERS\nMIXER',
    posterMark: 'FM',
    posterFooter: 'FOUNDERS / FREELANCERS / TEAMS',
    theme: 'business'
  },
  {
    id: 11,
    name: 'Clark Holiday Auto Showcase',
    type: 'Automotive & Motorsports',
    venue: 'Clark Expo',
    city: 'Mabalacat City, Pampanga',
    area: 'Outside NCR',
    start: '2026-12-23T10:00:00',
    end: '2026-12-23T19:00:00',
    freeEntrance: false,
    interested: 56,
    description: 'A Clark Expo floor filled with custom builds, concept cars, and regional exhibitors, with time set aside for owners to trade year-end stories.',
    highlights: ['Custom builds', 'Concept cars', 'Owner talks'],
    posterTitle: 'HOLIDAY\nAUTO SHOW',
    posterMark: 'HA',
    posterFooter: 'CUSTOM BUILDS / CONCEPT CARS',
    theme: 'automotive'
  },
  {
    id: 12,
    name: 'Megatrade Holiday Style Fair',
    type: 'Fashion & Lifestyle',
    venue: 'Megatrade Hall',
    city: 'Mandaluyong City, NCR',
    area: 'NCR',
    start: '2026-12-24T10:00:00',
    end: '2026-12-24T17:00:00',
    freeEntrance: true,
    interested: 103,
    description: 'A Christmas Eve fair for independent labels and makers, with racks to browse, short style talks, and booths built for slow, last-minute shopping.',
    highlights: ['Independent racks', 'Style talks', 'Maker booths'],
    posterTitle: 'HOLIDAY\nSTYLE FAIR',
    posterMark: 'HS',
    posterFooter: 'INDEPENDENT LABELS / MAKERS',
    theme: 'fashion'
  },
  {
    id: 13,
    name: 'CCP Year-End Film & Photo Week',
    type: 'Film & Photography',
    venue: 'Cultural Center of the Philippines',
    city: 'Pasay City, NCR',
    area: 'NCR',
    start: '2026-12-26T10:00:00',
    end: '2026-12-27T21:00:00',
    freeEntrance: false,
    interested: 49,
    description: 'Screenings, photo walls, and creator conversations at the CCP, looking back at work made outside the mainstream over the past year.',
    highlights: ['Year-end screenings', 'Photo walls', 'Creator conversations'],
    posterTitle: 'FRAME\nBY FRAME',
    posterMark: 'FP',
    posterFooter: 'SCREENINGS / PHOTO WALLS',
    theme: 'film'
  },
  {
    id: 14,
    name: 'Lucena New Year Community Festival',
    type: 'Community & Festivals',
    venue: 'Provincial Event Grounds',
    city: 'Lucena City, Quezon',
    area: 'Outside NCR',
    start: '2026-12-30T09:00:00',
    end: '2026-12-30T21:00:00',
    freeEntrance: true,
    interested: 38,
    description: "Lucena's year-end gathering brings local performances, food stalls, games, and family activities to the provincial grounds before the New Year.",
    highlights: ['Local performances', 'Food stalls', 'Family games'],
    posterTitle: 'NEW YEAR\nCOMMUNITY FEST',
    posterMark: 'NF',
    posterFooter: 'LOCAL / FAMILY / YEAR-END',
    theme: 'community'
  },
  {
    id: 15,
    name: 'LuzonLoop Online NYE Expo',
    type: 'Technology & Innovation',
    venue: 'Online Event Hall',
    city: 'Online',
    area: 'Online',
    start: '2026-12-31T10:00:00',
    end: '2026-12-31T22:00:00',
    freeEntrance: true,
    interested: 74,
    description: 'A full-day online expo with virtual booths, live product walks, and short talks for teams across Luzon, closing with a New Year countdown.',
    highlights: ['Virtual booths', 'Live product walks', 'NYE countdown'],
    posterTitle: 'TECH\nEXPO',
    posterMark: 'TE',
    posterFooter: 'TALKS / DEMOS / LIVE STREAM',
    theme: 'technology'
  },
  {
    id: 16,
    name: 'LuzonLoop Gaming League',
    type: 'Gaming & Esports',
    venue: 'The Filinvest Tent',
    city: 'Muntinlupa City, NCR',
    area: 'NCR',
    start: '2026-12-01T09:00:00',
    end: '2026-12-15T21:00:00',
    freeEntrance: true,
    interested: 142,
    description: 'A two-week gaming league running through December with daily bracket matches, open sign-ups, and a running leaderboard that visitors can follow on the board.',
    highlights: ['Open qualifiers', 'Creator matchups', 'Finals night'],
    posterTitle: 'YEAR-END\nFINALS',
    posterMark: 'GF',
    posterFooter: 'TWO DAYS / ONE FINALS NIGHT',
    theme: 'gaming'
  },
  {
    id: 17,
    name: 'Baguio December Opener',
    type: 'Music & Concerts',
    venue: 'Baguio Convention Center',
    city: 'Baguio City, Benguet',
    area: 'Outside NCR',
    start: '2026-12-05T16:00:00',
    end: '2026-12-05T22:00:00',
    freeEntrance: false,
    interested: 52,
    description: 'The opening night of the Baguio live calendar, with local acts warming up the room ahead of the December sessions later in the month.',
    highlights: ['Acoustic opener', 'Independent acts', 'One-night lineup'],
    posterTitle: 'DECEMBER\nLIVE',
    posterMark: 'DL',
    posterFooter: 'BAGUIO / ONE NIGHT ONLY',
    theme: 'music'
  }
];

const presentationByType = {
  'Gaming & Esports': {
    posterTitle: 'YEAR-END\nFINALS',
    posterMark: 'GF',
    posterFooter: 'TWO DAYS / ONE FINALS NIGHT',
    theme: 'gaming',
    highlights: ['Open qualifiers', 'Creator matchups', 'Finals night']
  },
  'Music & Concerts': {
    posterTitle: 'DECEMBER\nLIVE',
    posterMark: 'DL',
    posterFooter: 'BAGUIO / ONE NIGHT ONLY',
    theme: 'music',
    highlights: ['Acoustic opener', 'Independent acts', 'One-night lineup']
  },
  Cosplay: {
    posterTitle: 'HOLIDAY\nCOSPLAY',
    posterMark: 'CH',
    posterFooter: 'BUILDS / RUNWAY / PHOTOS',
    theme: 'cosplay',
    highlights: ['Holiday runway', 'Repair tables', 'Group photo corners']
  },
  'Anime & Pop Culture': {
    posterTitle: 'POP\nCULTURE',
    posterMark: 'PC',
    posterFooter: 'PANELS / MERCH / SCREENINGS',
    theme: 'anime',
    highlights: ['Panel rooms', 'Merch hall', 'Guest sessions']
  },
  'Technology & Innovation': {
    posterTitle: 'TECH\nEXPO',
    posterMark: 'TE',
    posterFooter: 'TALKS / DEMOS / LIVE STREAM',
    theme: 'technology',
    highlights: ['Short talks', 'Live demos', 'Product walks']
  },
  'Arts & Culture': {
    posterTitle: 'LANTERN\nARTS WALK',
    posterMark: 'LA',
    posterFooter: 'WALK / LOOK / BUY LOCAL',
    theme: 'arts',
    highlights: ['Lantern displays', 'Handmade work', 'Short performances']
  },
  'Food & Beverage': {
    posterTitle: 'CHRISTMAS\nFOOD PARK',
    posterMark: 'CF',
    posterFooter: 'REGIONAL FOOD / PICNIC SPACE',
    theme: 'food',
    highlights: ['Regional dishes', 'Small vendors', 'Picnic tables']
  },
  'Sports & Fitness': {
    posterTitle: 'YEAR-END\nSPORTS FEST',
    posterMark: 'YS',
    posterFooter: 'ALL LEVELS / COMMUNITY SPORT',
    theme: 'sports',
    highlights: ['Friendly matches', 'Fitness stations', 'Community teams']
  },
  'Educational & Academic': {
    posterTitle: 'RESEARCH\nSHOWCASE',
    posterMark: 'RS',
    posterFooter: 'STUDENT TALKS / OPEN MENTORS',
    theme: 'education',
    highlights: ['Research posters', 'Student talks', 'Mentor sessions']
  },
  'Business & Networking': {
    posterTitle: 'FOUNDERS\nMIXER',
    posterMark: 'FM',
    posterFooter: 'FOUNDERS / FREELANCERS / TEAMS',
    theme: 'business',
    highlights: ['Founder intros', 'Partner matching', 'Year-end recap']
  },
  'Automotive & Motorsports': {
    posterTitle: 'HOLIDAY\nAUTO SHOW',
    posterMark: 'HA',
    posterFooter: 'CUSTOM BUILDS / CONCEPT CARS',
    theme: 'automotive',
    highlights: ['Custom builds', 'Concept cars', 'Owner talks']
  },
  'Fashion & Lifestyle': {
    posterTitle: 'HOLIDAY\nSTYLE FAIR',
    posterMark: 'HS',
    posterFooter: 'INDEPENDENT LABELS / MAKERS',
    theme: 'fashion',
    highlights: ['Independent racks', 'Style talks', 'Maker booths']
  },
  'Film & Photography': {
    posterTitle: 'FRAME\nBY FRAME',
    posterMark: 'FP',
    posterFooter: 'SCREENINGS / PHOTO WALLS',
    theme: 'film',
    highlights: ['Year-end screenings', 'Photo walls', 'Creator conversations']
  },
  'Community & Festivals': {
    posterTitle: 'NEW YEAR\nCOMMUNITY FEST',
    posterMark: 'NF',
    posterFooter: 'LOCAL / FAMILY / YEAR-END',
    theme: 'community',
    highlights: ['Local performances', 'Food stalls', 'Family games']
  }
};

const organizerPlaceholder = 'To be announced';
const stockPhotoByEventId = {
  1: 'https://images.pexels.com/photos/30696550/pexels-photo-30696550.jpeg?auto=compress&cs=tinysrgb&w=800',
  2: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=800',
  3: 'https://images.pexels.com/photos/29081303/pexels-photo-29081303.jpeg?auto=compress&cs=tinysrgb&w=800',
  4: 'https://images.pexels.com/photos/29901451/pexels-photo-29901451.jpeg?auto=compress&cs=tinysrgb&w=800',
  5: 'https://images.pexels.com/photos/34774347/pexels-photo-34774347.jpeg?auto=compress&cs=tinysrgb&w=800',
  6: 'https://images.pexels.com/photos/33868629/pexels-photo-33868629.jpeg?auto=compress&cs=tinysrgb&w=800',
  7: 'https://images.pexels.com/photos/20147044/pexels-photo-20147044.jpeg?auto=compress&cs=tinysrgb&w=800',
  8: 'https://images.pexels.com/photos/32835125/pexels-photo-32835125.jpeg?auto=compress&cs=tinysrgb&w=800',
  9: 'https://images.pexels.com/photos/31367499/pexels-photo-31367499.jpeg?auto=compress&cs=tinysrgb&w=800',
  10: 'https://images.pexels.com/photos/30477894/pexels-photo-30477894.jpeg?auto=compress&cs=tinysrgb&w=800',
  11: 'https://images.pexels.com/photos/5287985/pexels-photo-5287985.jpeg?auto=compress&cs=tinysrgb&w=800',
  12: 'https://images.pexels.com/photos/17097094/pexels-photo-17097094.jpeg?auto=compress&cs=tinysrgb&w=800',
  13: 'https://images.pexels.com/photos/33156934/pexels-photo-33156934.jpeg?auto=compress&cs=tinysrgb&w=800',
  14: 'https://images.pexels.com/photos/31644441/pexels-photo-31644441.jpeg?auto=compress&cs=tinysrgb&w=800',
  15: 'https://images.pexels.com/photos/5486096/pexels-photo-5486096.jpeg?auto=compress&cs=tinysrgb&w=800',
  16: 'https://images.pexels.com/photos/30696550/pexels-photo-30696550.jpeg?auto=compress&cs=tinysrgb&w=800',
  17: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=800'
};
events = events.map(applyEventPresentation);

const state = {
  status: 'all',
  location: 'all',
  type: 'all',
  entrance: 'all',
  query: '',
  savedOnly: false,
  saved: new Set(loadSavedEvents()),
  interested: new Set(loadInterestedEvents())
};

let clickAudioContext = null;
let lastClickSoundAt = 0;

function playClickSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  const now = performance.now();
  if (now - lastClickSoundAt < 40) return;
  lastClickSoundAt = now;

  try {
    clickAudioContext = clickAudioContext || new AudioContextClass();
    if (clickAudioContext.state === 'suspended') clickAudioContext.resume();

    const oscillator = clickAudioContext.createOscillator();
    const gain = clickAudioContext.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(760, clickAudioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(380, clickAudioContext.currentTime + 0.04);
    gain.gain.setValueAtTime(0.028, clickAudioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, clickAudioContext.currentTime + 0.05);
    oscillator.connect(gain);
    gain.connect(clickAudioContext.destination);
    oscillator.start();
    oscillator.stop(clickAudioContext.currentTime + 0.055);
  } catch (error) {
    console.warn('Click sound unavailable.', error);
  }
}

function getEventPhoto(event) {
  const url = event.image || event.image_url || stockPhotoByEventId[event.id] || '';
  return /^https?:\/\//i.test(url) ? url : '';
}

function toManilaDateValue(value) {
  if (typeof value !== 'string') return value;
  return /([zZ]|[+-]\d{2}:?\d{2})$/.test(value) ? value : `${value}+08:00`;
}

function applyEventPresentation(event) {
  const design = presentationByType[event.type] || {
    posterTitle: event.type.toUpperCase(),
    posterMark: 'LL',
    posterFooter: 'LUZONLOOP / LISTING',
    theme: 'gaming',
    highlights: ['Event details', 'Venue information', 'Practical notes']
  };
  const normalized = {
    ...event,
    start: toManilaDateValue(event.start),
    end: toManilaDateValue(event.end)
  };
  return {
    ...normalized,
    ...design,
    image: getEventPhoto(normalized),
    organizer: normalized.organizer || normalized.created_by_name || organizerPlaceholder
  };
}

function populateTypeOptions(types) {
  if (!Array.isArray(types) || types.length === 0) return;

  const selected = types.includes(typeFilter.value) ? typeFilter.value : 'all';
  typeFilter.innerHTML = `<option value="all">All categories</option>${types.map(type => `<option value="${escapeHTML(type)}">${escapeHTML(type)}</option>`).join('')}`;
  typeFilter.value = selected;
  state.type = selected;

  const marqueeMarkup = types.map(type => `<span>${escapeHTML(type)}</span>`).join('');
  document.querySelectorAll('.index-group').forEach(group => { group.innerHTML = marqueeMarkup; });
}

async function loadEvents() {
  if (!authBackendAvailable) return;

  try {
    const response = await fetch('events.php', {
      credentials: 'same-origin',
      headers: AJAX_HEADERS
    });
    if (!response.ok) return;

    const data = await response.json();
    if (!Array.isArray(data.events)) return;

    events = data.events.map(applyEventPresentation);
    if (currentUser && Array.isArray(data.saved)) {
      const serverIds = data.saved.map(Number).filter(Number.isFinite);
      state.saved = new Set([...loadSavedEvents(), ...serverIds]);
      persistSaved();
    }

    populateTypeOptions(data.types);
    const heroNote = document.querySelector('.hero-note');
    if (heroNote) heroNote.textContent = `${events.length} listings · Online, NCR, and provinces`;
    renderEvents();
  } catch (error) {
    console.warn('Database event board unavailable.', error);
  }
}

function loadSavedEvents() {
  try {
    const stored = JSON.parse(localStorage.getItem('luzonloopSaved') || '[]');
    return Array.isArray(stored) ? stored.map(Number).filter(Number.isFinite) : [];
  } catch (error) {
    console.warn('Could not read saved events from localStorage.', error);
    return [];
  }
}

function loadInterestedEvents() {
  try {
    const stored = JSON.parse(localStorage.getItem('luzonloopInterested') || '[]');
    return Array.isArray(stored) ? stored.map(Number).filter(Number.isFinite) : [];
  } catch (error) {
    console.warn('Could not read interested events from localStorage.', error);
    return [];
  }
}

const eventGrid = document.getElementById('eventGrid');
const emptyState = document.getElementById('emptyState');
const emptyTitle = document.getElementById('emptyTitle');
const emptyMessage = document.getElementById('emptyMessage');
const emptyReset = document.getElementById('emptyReset');
const eventsSection = document.getElementById('events');
const heroSection = document.getElementById('heroSection');
const indexStrip = document.getElementById('indexStrip');
const closingNote = document.getElementById('closingNote');
const savedHero = document.getElementById('savedHero');
const savedHeroDescription = document.getElementById('savedHeroDescription');
const backToBoardButton = document.getElementById('backToBoardButton');
const boardNavLink = document.getElementById('boardNavLink');
const brandLink = document.getElementById('brandLink');
const sectionKicker = document.getElementById('sectionKicker');
const eventsTitle = document.getElementById('eventsTitle');
const sectionSubtitle = document.getElementById('sectionSubtitle');
const locationFilter = document.getElementById('locationFilter');
const typeFilter = document.getElementById('typeFilter');
const entranceFilter = document.getElementById('entranceFilter');
const searchInput = document.getElementById('searchInput');
const statusTabs = [...document.querySelectorAll('.status-tab')];
const savedNavButton = document.getElementById('savedNavButton');
const savedNavCount = document.getElementById('savedNavCount');
const signInButton = document.getElementById('signInButton');
const signUpButton = document.getElementById('signUpButton');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const loginNote = document.getElementById('loginNote');
const signUpModal = document.getElementById('signUpModal');
const signUpForm = document.getElementById('signUpForm');
const signUpError = document.getElementById('signUpError');
const detailsModal = document.getElementById('detailsModal');
const detailsPoster = document.getElementById('detailsPoster');
const detailsTitle = document.getElementById('detailsTitle');
const detailsBadges = document.getElementById('detailsBadges');
const detailsDescription = document.getElementById('detailsDescription');
const detailsWhen = document.getElementById('detailsWhen');
const detailsWhere = document.getElementById('detailsWhere');
const detailsArea = document.getElementById('detailsArea');
const detailsOrganizer = document.getElementById('detailsOrganizer');
const detailsInterestedValue = document.getElementById('detailsInterestedValue');
const detailsHighlights = document.getElementById('detailsHighlights');
const detailsInterest = document.getElementById('detailsInterest');
const detailsSave = document.getElementById('detailsSave');
const userGreeting = document.getElementById('userGreeting');
const accountButton = document.getElementById('accountButton');
const accountModal = document.getElementById('accountModal');
const accountForm = document.getElementById('accountForm');
const closeAccount = document.getElementById('closeAccount');
const accountError = document.getElementById('accountError');
const accountFullName = document.getElementById('accountFullName');
const accountEmail = document.getElementById('accountEmail');
const accountNewPassword = document.getElementById('accountNewPassword');
const accountCurrentPassword = document.getElementById('accountCurrentPassword');
const accountRole = document.getElementById('accountRole');
const toast = document.getElementById('toast');
const loadingScreen = document.getElementById('loadingScreen');
const manilaTime = document.getElementById('manilaTime');
let toastTimer;
let currentDetailId = null;
let loadingFinished = false;
let currentUser = null;
const authBackendAvailable = location.protocol !== 'file:';
const AJAX_HEADERS = { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' };
const JSON_HEADERS = { 'Content-Type': 'application/json', Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' };
const MANILA_TIME_ZONE = 'Asia/Manila';

function getStatus(event) {
  const now = new Date();
  const start = new Date(event.start);
  const end = new Date(event.end);
  if (now < start) return 'Upcoming';
  if (now <= end) return 'In Progress';
  return 'Finished';
}

function statusPriority(event) {
  const status = getStatus(event);
  if (status === 'In Progress') return 0;
  if (status === 'Upcoming') return 1;
  return 2;
}

function sortByDateRelevance(a, b) {
  const aPriority = statusPriority(a);
  const bPriority = statusPriority(b);
  if (aPriority !== bPriority) return aPriority - bPriority;
  if (aPriority === 0) return new Date(a.end) - new Date(b.end);
  if (aPriority === 1) return new Date(a.start) - new Date(b.start);
  return new Date(b.end) - new Date(a.end);
}

function manilaDateKey(value) {
  return value.toLocaleDateString('en-CA', {
    timeZone: MANILA_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

function formatDate(event) {
  const start = new Date(event.start);
  const end = new Date(event.end);
  const dateOptions = { timeZone: MANILA_TIME_ZONE, month: 'short', day: 'numeric', year: 'numeric' };
  const shortDateOptions = { timeZone: MANILA_TIME_ZONE, month: 'short', day: 'numeric' };
  const timeOptions = { timeZone: MANILA_TIME_ZONE, hour: 'numeric', minute: '2-digit' };
  const sameDay = manilaDateKey(start) === manilaDateKey(end);
  const dayText = sameDay
    ? start.toLocaleDateString('en-PH', dateOptions)
    : `${start.toLocaleDateString('en-PH', shortDateOptions)} – ${end.toLocaleDateString('en-PH', dateOptions)}`;
  return `${dayText} · ${start.toLocaleTimeString('en-PH', timeOptions)}`;
}

function formatFullDate(event) {
  const start = new Date(event.start);
  const end = new Date(event.end);
  const dateOptions = { timeZone: MANILA_TIME_ZONE, month: 'long', day: 'numeric', year: 'numeric' };
  const timeOptions = { timeZone: MANILA_TIME_ZONE, hour: 'numeric', minute: '2-digit' };
  const startText = `${start.toLocaleDateString('en-PH', dateOptions)} · ${start.toLocaleTimeString('en-PH', timeOptions)}`;
  const endText = manilaDateKey(start) === manilaDateKey(end)
    ? end.toLocaleTimeString('en-PH', timeOptions)
    : `${end.toLocaleDateString('en-PH', dateOptions)} · ${end.toLocaleTimeString('en-PH', timeOptions)}`;
  return `${startText} — ${endText}`;
}

function formatDateChip(event) {
  const start = new Date(event.start);
  return {
    month: start.toLocaleDateString('en-PH', { timeZone: MANILA_TIME_ZONE, month: 'short' }).toUpperCase(),
    day: start.toLocaleDateString('en-PH', { timeZone: MANILA_TIME_ZONE, day: '2-digit' })
  };
}

function formatNumber(number) {
  return new Intl.NumberFormat('en-PH').format(number);
}

function getInterestedCount(event) {
  return event.interested + (state.interested.has(event.id) ? 1 : 0);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function matchesFilters(event, ignoreStatus = false) {
  const query = state.query.trim().toLowerCase();
  const searchable = [event.name, event.venue, event.city, event.type, event.area].join(' ').toLowerCase();
  const searchMatch = !query || searchable.includes(query);
  const locationMatch = state.location === 'all' || event.area === state.location;
  const typeMatch = state.type === 'all' || event.type === state.type;
  const entranceMatch = state.entrance === 'all' || (state.entrance === 'free' ? event.freeEntrance : !event.freeEntrance);
  const statusMatch = ignoreStatus || state.status === 'all' || getStatus(event) === state.status;
  const savedMatch = !state.savedOnly || state.saved.has(event.id);
  return searchMatch && locationMatch && typeMatch && entranceMatch && statusMatch && savedMatch;
}

function makeEventCard(event) {
  const status = getStatus(event);
  const statusClass = status.toLowerCase().replaceAll(' ', '-');
  const saved = state.saved.has(event.id);
  const interested = state.interested.has(event.id);
  const dateChip = formatDateChip(event);
  const posterTitle = escapeHTML(event.posterTitle).replaceAll('\n', '<br>');
  const name = escapeHTML(event.name);
  const type = escapeHTML(event.type);
  const venue = escapeHTML(event.venue);
  const city = escapeHTML(event.city);
  const area = escapeHTML(event.area);
  const organizer = escapeHTML(event.organizer || organizerPlaceholder);
  const photoUrl = getEventPhoto(event);
  const entranceLabel = event.freeEntrance ? 'FREE ENTRANCE' : 'PAID ENTRANCE';
  const entranceClass = event.freeEntrance ? 'free' : 'paid';

  return `
    <article class="event-card" data-details-id="${event.id}" tabindex="0" role="button" aria-label="View details for ${name}">
      <div class="poster ${escapeHTML(event.theme)}${photoUrl ? ' has-photo' : ''}">
        ${photoUrl ? `<img class="poster-photo" src="${escapeHTML(photoUrl)}" alt="" loading="lazy">` : ''}
        <div class="poster-word">${posterTitle}</div>
        <div class="poster-footer"><span>ORGANIZER /</span> ${organizer}</div>
        <div class="date-chip" aria-hidden="true"><span>${dateChip.month}</span><strong>${dateChip.day}</strong></div>
      </div>
      <div class="card-content">
        <div class="card-topline">
          <div class="card-tags">
            <span class="category-tag">${type}</span>
            <span class="entrance-badge ${entranceClass}">${entranceLabel}</span>
          </div>
          <span class="status-badge ${statusClass}">${status}</span>
        </div>
        <h3>${name}</h3>
        <p class="event-date">${formatDate(event)}</p>
        <div class="event-meta">
          <div class="meta-line"><span class="meta-label">WHERE</span><span>${venue} · ${city}</span></div>
          <div class="meta-line"><span class="meta-label">AREA</span><span>${area === 'Online' ? 'Online' : `${area} · Luzon`}</span></div>
        </div>
        <div class="card-footer">
          <span class="interested-count"><strong>${formatNumber(getInterestedCount(event))}</strong> interested</span>
          <div class="card-actions">
            <button class="interest-button ${interested ? 'active' : ''}" type="button" data-interest-id="${event.id}" aria-pressed="${interested}" aria-label="${interested ? 'Remove interest in' : 'Count you in for'} ${name}">
              ${interested ? 'Counted in' : 'Interested'}
            </button>
            <button class="save-button ${saved ? 'saved' : ''}" type="button" data-save-id="${event.id}" aria-pressed="${saved}" aria-label="${saved ? 'Remove' : 'Save'} ${name}">
              ${saved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </article>`;
}

function updateCounts(visibleCount) {
  const base = events.filter(event => matchesFilters(event, true));
  const all = base.length;
  const upcoming = base.filter(event => getStatus(event) === 'Upcoming').length;
  const progress = base.filter(event => getStatus(event) === 'In Progress').length;
  const finished = base.filter(event => getStatus(event) === 'Finished').length;
  document.getElementById('eventTotal').textContent = visibleCount;
  document.getElementById('countAll').textContent = all;
  document.getElementById('countUpcoming').textContent = upcoming;
  document.getElementById('countProgress').textContent = progress;
  document.getElementById('countFinished').textContent = finished;
}

function renderEvents() {
  const filtered = events.filter(event => matchesFilters(event)).sort(sortByDateRelevance);
  const count = filtered.length;
  const savedView = state.savedOnly;
  const eventIds = new Set(events.map(event => event.id));
  const savedCount = [...state.saved].filter(id => eventIds.has(id)).length;
  const savedLocation = currentUser ? 'with your account' : 'in this browser';

  eventGrid.innerHTML = filtered.map(makeEventCard).join('');
  eventGrid.hidden = count === 0;
  emptyState.hidden = count !== 0;
  savedNavCount.textContent = savedCount;

  eventsSection.classList.toggle('saved-view', savedView);
  heroSection.hidden = savedView;
  indexStrip.hidden = savedView;
  closingNote.hidden = savedView;
  savedHero.hidden = !savedView;
  savedHeroDescription.textContent = savedCount === 0
    ? 'Nothing has been saved yet. Save a listing from the board and it will land here.'
    : `${savedCount} listing${savedCount === 1 ? '' : 's'} kept ${savedLocation}. Filters still work inside this list.`;
  boardNavLink.classList.toggle('active', !savedView);
  savedNavButton.setAttribute('aria-current', savedView ? 'page' : 'false');
  sectionKicker.textContent = savedView ? 'SAVED LIST' : 'THE BOARD';
  eventsTitle.innerHTML = savedView
    ? 'Your saved list<span class="period">.</span>'
    : 'On the board<span class="period">.</span>';
  sectionSubtitle.textContent = savedView
    ? savedCount === 0
      ? 'Nothing has been saved yet. Save a listing from the board and it will land here.'
      : `${savedCount} saved listing${savedCount === 1 ? '' : 's'}, ordered by what is happening now. Filters still work inside this list.`
    : `${events.length} listings across Luzon. Narrow them by place, category, entrance, or status.`;

  if (count === 0) {
    emptyTitle.textContent = savedView ? 'Nothing saved here yet.' : 'Nothing under this filter.';
    emptyMessage.textContent = savedView
      ? 'Save a listing from the board and it will show up here.'
      : 'Try a different place, category, entrance, or status.';
    emptyReset.textContent = savedView && savedCount === 0 ? 'Back to the board' : 'Clear filters';
  }

  const statusLabel = state.status === 'all'
    ? ''
    : state.status === 'In Progress' ? 'in progress' : state.status.toLowerCase();
  const scope = savedView
    ? `Saved${statusLabel ? ` / ${statusLabel}` : ''}`
    : statusLabel ? statusLabel[0].toUpperCase() + statusLabel.slice(1) : 'All listings';
  document.getElementById('resultsLabel').textContent = `${scope} · ${count} listing${count === 1 ? '' : 's'}`;

  updateCounts(count);
  statusTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.status === state.status));
  savedNavButton.classList.toggle('active', savedView);
  savedNavButton.setAttribute('aria-pressed', String(savedView));
}

function renderEventsPreservingFocus() {
  const active = document.activeElement;
  const activeId = active && active.dataset
    ? active.dataset.saveId || active.dataset.interestId || active.dataset.detailsId
    : null;

  renderEvents();
  if (!activeId || typeof eventGrid.querySelector !== 'function') return;

  const next = eventGrid.querySelector(`[data-save-id="${activeId}"], [data-interest-id="${activeId}"], [data-details-id="${activeId}"]`);
  if (next && typeof next.focus === 'function') next.focus({ preventScroll: true });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function persistSaved() {
  try {
    localStorage.setItem('luzonloopSaved', JSON.stringify([...state.saved]));
  } catch (error) {
    console.warn('Could not save bookmarks to localStorage.', error);
    showToast('This browser blocked saving. Changes will disappear on refresh.');
  }
}

function persistInterested() {
  try {
    localStorage.setItem('luzonloopInterested', JSON.stringify([...state.interested]));
  } catch (error) {
    console.warn('Could not save interested events to localStorage.', error);
    showToast('This browser blocked saving. Changes will disappear on refresh.');
  }
}

function clearFilterValues() {
  state.status = 'all';
  state.location = 'all';
  state.type = 'all';
  state.entrance = 'all';
  state.query = '';
  locationFilter.value = 'all';
  typeFilter.value = 'all';
  entranceFilter.value = 'all';
  searchInput.value = '';
}

function setViewHash(saved) {
  try {
    history.replaceState(null, '', saved ? '#saved' : '#events');
  } catch (error) {
    console.warn('Could not update the view hash.', error);
  }
}

function resetFilters(options = {}) {
  clearFilterValues();
  if (options.exitSaved) {
    state.savedOnly = false;
    setViewHash(false);
  }
  renderEvents();
}

function setSavedView(enabled, scroll = true) {
  state.savedOnly = enabled;
  clearFilterValues();
  setViewHash(enabled);
  renderEvents();
  if (!scroll) return;
  if (enabled) eventsSection.scrollIntoView({ behavior: 'smooth' });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateDetailActions(id) {
  const saved = state.saved.has(id);
  detailsSave.classList.toggle('saved', saved);
  detailsSave.textContent = saved ? 'Saved' : 'Save listing';
  detailsSave.setAttribute('aria-pressed', String(saved));
  detailsSave.setAttribute('aria-label', saved ? 'Remove from saved list' : 'Save listing');

  const interested = state.interested.has(id);
  detailsInterest.classList.toggle('active', interested);
  detailsInterest.textContent = interested ? 'Counted in' : 'Interested';
  detailsInterest.setAttribute('aria-pressed', String(interested));
  detailsInterest.setAttribute('aria-label', interested ? 'Remove interest' : 'Count me in');

  const item = events.find(entry => entry.id === id);
  if (item) detailsInterestedValue.textContent = formatNumber(getInterestedCount(item));
}

function populateDetails(id) {
  const event = events.find(entry => entry.id === id);
  if (!event) return;

  currentDetailId = id;
  const status = getStatus(event);
  const statusClass = status.toLowerCase().replaceAll(' ', '-');
  const posterTitle = escapeHTML(event.posterTitle).replaceAll('\n', '<br>');
  const dateChip = formatDateChip(event);
  const photoUrl = getEventPhoto(event);
  const organizer = escapeHTML(event.organizer || organizerPlaceholder);
  const entranceLabel = event.freeEntrance ? 'FREE ENTRANCE' : 'PAID ENTRANCE';
  const entranceClass = event.freeEntrance ? 'free' : 'paid';

  detailsPoster.className = `details-poster poster ${escapeHTML(event.theme)}${photoUrl ? ' has-photo' : ''}`;
  detailsPoster.innerHTML = `
    ${photoUrl ? `<img class="poster-photo" src="${escapeHTML(photoUrl)}" alt="" loading="lazy">` : ''}
    <div class="poster-word">${posterTitle}</div>
    <div class="poster-footer"><span>ORGANIZER /</span> ${organizer}</div>
    <div class="date-chip" aria-hidden="true"><span>${dateChip.month}</span><strong>${dateChip.day}</strong></div>`;

  detailsTitle.textContent = event.name;
  detailsBadges.innerHTML = `
    <span class="category-tag">${escapeHTML(event.type)}</span>
    <span class="entrance-badge ${entranceClass}">${entranceLabel}</span>
    <span class="status-badge ${statusClass}">${status}</span>`;
  detailsDescription.textContent = event.description;
  detailsWhen.textContent = formatFullDate(event);
  detailsWhere.textContent = `${event.venue} · ${event.city}`;
  detailsArea.textContent = event.area === 'Online' ? 'Online' : `${event.area} · Luzon`;
  detailsOrganizer.textContent = event.organizer || organizerPlaceholder;
  detailsHighlights.innerHTML = event.highlights.map(item => `<span>${escapeHTML(item)}</span>`).join('');
  updateDetailActions(id);
}

function openDetails(id) {
  populateDetails(id);
  openModal(detailsModal, document.getElementById('closeDetails'));
}

function syncBodyScroll() {
  if (detailsModal.hidden && loginModal.hidden && signUpModal.hidden && accountModal.hidden) {
    document.body.style.overflow = '';
    setShellInert(false);
  }
}

function closeDetails() {
  closeModal(detailsModal);
  currentDetailId = null;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FULL_NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M} .,'\-]*$/u;

function isValidEmail(value) {
  return value.length > 0 && value.length <= 255 && EMAIL_PATTERN.test(value);
}

function isValidFullName(value) {
  return value.length >= 2 && value.length <= 100 && FULL_NAME_PATTERN.test(value);
}

function isValidNewPassword(value) {
  return value.length >= 8 && value.length <= 72 && /[A-Za-z]/.test(value) && /\d/.test(value);
}

function setLoginError(message = '') {
  loginError.textContent = message;
  loginError.hidden = !message;
}

function setSignUpError(message = '') {
  signUpError.textContent = message;
  signUpError.hidden = !message;
}

const siteShell = document.querySelector('.site-shell');
let modalTrigger = null;

function setShellInert(inert) {
  if (siteShell) siteShell.inert = inert;
}

function openModal(modal, focusTarget, trigger) {
  modalTrigger = trigger || document.activeElement || null;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  setShellInert(true);
  if (focusTarget && typeof focusTarget.focus === 'function') focusTarget.focus();
}

function closeModal(modal) {
  modal.hidden = true;
  syncBodyScroll();
  const openModals = [detailsModal, loginModal, signUpModal, accountModal].filter(item => !item.hidden);
  if (openModals.length > 0) return;
  setShellInert(false);
  if (modalTrigger && typeof modalTrigger.focus === 'function') modalTrigger.focus();
  modalTrigger = null;
}

function trapModalFocus(event) {
  if (event.key !== 'Tab') return;
  const modal = [detailsModal, loginModal, signUpModal, accountModal].find(item => !item.hidden);
  if (!modal || typeof modal.querySelectorAll !== 'function') return;

  const focusables = [...modal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter(element => !element.hidden && element.offsetParent !== undefined && element.offsetParent !== null);
  if (focusables.length === 0) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openLogin() {
  setLoginError();
  loginForm.reset();
  openModal(loginModal, document.getElementById('loginEmail'));
}

function closeLogin() {
  closeModal(loginModal);
}

function openSignUp() {
  setSignUpError();
  signUpForm.reset();
  openModal(signUpModal, document.getElementById('signUpName'));
}

function closeSignUp() {
  closeModal(signUpModal);
}

function updateAccountUI() {
  if (currentUser) {
    userGreeting.hidden = false;
    userGreeting.textContent = currentUser.full_name || currentUser.email;
    accountButton.hidden = !currentUser.user_id;
    signUpButton.hidden = true;
    signInButton.innerHTML = 'Sign out <span aria-hidden="true">↗</span>';
  } else {
    userGreeting.hidden = true;
    accountButton.hidden = true;
    signUpButton.hidden = false;
    signInButton.innerHTML = 'Sign in <span aria-hidden="true">↗</span>';
  }
}

function setAccountError(message = '') {
  accountError.textContent = message;
  accountError.hidden = !message;
}

function openAccount() {
  if (!currentUser || !currentUser.user_id) return;

  setAccountError();
  accountFullName.value = currentUser.full_name || '';
  accountEmail.value = currentUser.email || '';
  accountNewPassword.value = '';
  accountCurrentPassword.value = '';
  accountRole.textContent = currentUser.role || 'user';
  openModal(accountModal, closeAccount);
}

function closeAccountModal() {
  closeModal(accountModal);
}

async function requestAccountUpdate(payload) {
  try {
    const response = await fetch('account.php', {
      method: 'POST',
      credentials: 'same-origin',
      headers: JSON_HEADERS,
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) return { ok: false, message: data.error || 'Account could not be updated.' };
    return { ok: true, user: data.user };
  } catch (error) {
    console.warn('Account update unavailable.', error);
    return { ok: false, message: 'Account service is unavailable right now.' };
  }
}

async function restoreSession() {
  if (!authBackendAvailable) return;

  try {
    const response = await fetch('session.php', {
      credentials: 'same-origin',
      headers: AJAX_HEADERS
    });
    if (!response.ok) return;

    const data = await response.json();
    if (data.user) {
      currentUser = data.user;
      updateAccountUI();
      await syncSavedFromBackend();
    }
  } catch (error) {
    console.warn('Session service unavailable.', error);
    loginNote.textContent = 'Sign-in service is unavailable.';
  }
}

async function requestSignIn(email, password) {
  if (!authBackendAvailable) {
    return { ok: false, message: 'Sign-in service is unavailable.' };
  }

  try {
    const response = await fetch('login.php', {
      method: 'POST',
      credentials: 'same-origin',
      headers: JSON_HEADERS,
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (!response.ok) {
      return { ok: false, message: data.error || 'Incorrect email or password.' };
    }

    currentUser = data.user;
    await syncSavedFromBackend();
    return { ok: true };
  } catch (error) {
    console.warn('Sign-in service unavailable.', error);
    return { ok: false, message: 'Sign-in service is unavailable.' };
  }
}

async function requestSignUp(payload) {
  if (!authBackendAvailable) {
    return { ok: false, message: 'Sign-up service is unavailable.' };
  }

  try {
    const response = await fetch('signup.php', {
      method: 'POST',
      credentials: 'same-origin',
      headers: JSON_HEADERS,
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) {
      return { ok: false, message: data.error || 'Account could not be created.' };
    }

    currentUser = data.user;
    await syncSavedFromBackend();
    return { ok: true };
  } catch (error) {
    console.warn('Sign-up service unavailable.', error);
    return { ok: false, message: 'Sign-up service is unavailable.' };
  }
}

async function requestSignOut() {
  if (authBackendAvailable && currentUser) {
    try {
      const response = await fetch('logout.php', {
        method: 'POST',
        credentials: 'same-origin',
        headers: AJAX_HEADERS
      });
      if (!response.ok) {
        showToast('Could not sign out. Try again.');
        return;
      }
    } catch (error) {
      console.warn('Sign-out service unavailable.', error);
      showToast('Could not sign out. Try again.');
      return;
    }
  }
  currentUser = null;
  state.saved = new Set(loadSavedEvents());
  updateAccountUI();
  renderEvents();
  showToast('Signed out.');
}

async function syncSavedFromBackend() {
  if (!authBackendAvailable || !currentUser) return;

  try {
    const response = await fetch('saved.php', {
      credentials: 'same-origin',
      headers: AJAX_HEADERS
    });
    if (!response.ok) return;

    const data = await response.json();
    if (!Array.isArray(data.saved)) return;

    const serverIds = data.saved.map(Number).filter(Number.isFinite);
    const localIds = loadSavedEvents();
    state.saved = new Set([...localIds, ...serverIds]);
    persistSaved();
    renderEvents();

    const localOnly = localIds.filter(id => !serverIds.includes(id));
    for (const id of localOnly) {
      await sendSavedToBackend(id, true, true);
    }
  } catch (error) {
    console.warn('Saved events could not be loaded.', error);
  }
}

async function sendSavedToBackend(eventId, saved, silent = false) {
  if (!authBackendAvailable || !currentUser) return true;

  try {
    const response = await fetch('save.php', {
      method: 'POST',
      credentials: 'same-origin',
      headers: JSON_HEADERS,
      body: JSON.stringify({ eventId, saved })
    });
    if (!response.ok) {
      const data = await response.json();
      if (!silent) showToast(data.error || 'Could not update saved events online.');
      return false;
    }
    return true;
  } catch (error) {
    console.warn('Saved event could not be updated.', error);
    if (!silent) showToast('Could not update saved events online.');
    return false;
  }
}

locationFilter.addEventListener('change', event => {
  state.location = event.target.value;
  renderEvents();
});

typeFilter.addEventListener('change', event => {
  state.type = event.target.value;
  renderEvents();
});

entranceFilter.addEventListener('change', event => {
  state.entrance = event.target.value;
  renderEvents();
});

searchInput.addEventListener('input', event => {
  state.query = event.target.value;
  renderEvents();
});

searchInput.addEventListener('keydown', event => {
  if (event.key !== 'Enter') return;
  event.preventDefault();
  state.query = searchInput.value;
  renderEvents();
});

statusTabs.forEach(tab => tab.addEventListener('click', () => {
  state.status = tab.dataset.status;
  renderEvents();
}));

async function toggleSaved(id) {
  const item = events.find(entry => entry.id === id);
  if (!item) return;

  const desired = !state.saved.has(id);
  if (desired) {
    state.saved.add(id);
    showToast(`“${item.name}” is on your saved list.`);
  } else {
    state.saved.delete(id);
    showToast(`“${item.name}” removed from your list.`);
  }
  persistSaved();
  renderEventsPreservingFocus();
  if (currentDetailId === id) updateDetailActions(id);

  const succeeded = await sendSavedToBackend(id, desired);
  if (!succeeded && authBackendAvailable && currentUser) {
    if (desired) state.saved.delete(id);
    else state.saved.add(id);
    persistSaved();
    renderEventsPreservingFocus();
    if (currentDetailId === id) updateDetailActions(id);
  }
}

function toggleInterested(id) {
  const item = events.find(entry => entry.id === id);
  if (!item) return;

  if (state.interested.has(id)) {
    state.interested.delete(id);
    showToast(`Interest removed for “${item.name}”.`);
  } else {
    state.interested.add(id);
    showToast(`Counted you in for “${item.name}”.`);
  }
  persistInterested();
  renderEventsPreservingFocus();
  if (currentDetailId === id) updateDetailActions(id);
}

eventGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-save-id]');
  if (button) toggleSaved(Number(button.dataset.saveId));
});

eventGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-interest-id]');
  if (button) toggleInterested(Number(button.dataset.interestId));
});

eventGrid.addEventListener('click', event => {
  if (event.target.closest('button')) return;
  const card = event.target.closest('[data-details-id]');
  if (card) openDetails(Number(card.dataset.detailsId));
});

eventGrid.addEventListener('keydown', event => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  if (event.target.closest('button')) return;
  const card = event.target.closest('[data-details-id]');
  if (!card) return;
  event.preventDefault();
  openDetails(Number(card.dataset.detailsId));
});

savedNavButton.addEventListener('click', () => setSavedView(!state.savedOnly));
backToBoardButton.addEventListener('click', () => setSavedView(false));
boardNavLink.addEventListener('click', () => {
  if (state.savedOnly) setSavedView(false, false);
});
brandLink.addEventListener('click', () => {
  if (state.savedOnly) setSavedView(false, false);
});

document.getElementById('resetFilters').addEventListener('click', () => resetFilters());
emptyReset.addEventListener('click', () => {
  resetFilters({ exitSaved: state.savedOnly && state.saved.size === 0 });
});

signInButton.addEventListener('click', () => {
  if (currentUser) requestSignOut();
  else openLogin();
});

signUpButton.addEventListener('click', openSignUp);
document.getElementById('closeLogin').addEventListener('click', closeLogin);
loginModal.addEventListener('click', event => {
  if (event.target === loginModal) closeLogin();
});
document.getElementById('openSignUpFromLogin').addEventListener('click', () => {
  closeLogin();
  openSignUp();
});
document.getElementById('closeSignUp').addEventListener('click', closeSignUp);
signUpModal.addEventListener('click', event => {
  if (event.target === signUpModal) closeSignUp();
});
document.getElementById('openLoginFromSignUp').addEventListener('click', () => {
  closeSignUp();
  openLogin();
});

accountButton.addEventListener('click', openAccount);
closeAccount.addEventListener('click', closeAccountModal);
accountModal.addEventListener('click', event => {
  if (event.target === accountModal) closeAccountModal();
});

document.getElementById('closeDetails').addEventListener('click', closeDetails);
detailsModal.addEventListener('click', event => {
  if (event.target === detailsModal) closeDetails();
});
detailsSave.addEventListener('click', () => {
  if (currentDetailId !== null) toggleSaved(currentDetailId);
});
detailsInterest.addEventListener('click', () => {
  if (currentDetailId !== null) toggleInterested(currentDetailId);
});

document.addEventListener('click', event => {
  const interactive = event.target.closest('button, a, select, input[type="checkbox"], [data-details-id], [data-save-id], [data-interest-id], .modal-backdrop');
  if (interactive) playClickSound();
});

document.addEventListener('keydown', event => {
  trapModalFocus(event);
  if (event.key !== 'Escape') return;
  if (!detailsModal.hidden) closeDetails();
  else if (!accountModal.hidden) closeAccountModal();
  else if (!loginModal.hidden) closeLogin();
  else if (!signUpModal.hidden) closeSignUp();
});

loginForm.addEventListener('submit', async event => {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;

  setLoginError();
  if (!isValidEmail(email)) {
    setLoginError('Enter a valid email address.');
    return;
  }
  if (!password || password.length > 72) {
    setLoginError('Enter your password.');
    return;
  }

  const result = await requestSignIn(email, password);
  if (!result.ok) {
    setLoginError(result.message);
    return;
  }

  loginForm.reset();
  closeLogin();
  updateAccountUI();
  showToast('Signed in.');
});

signUpForm.addEventListener('submit', async event => {
  event.preventDefault();
  const fullName = document.getElementById('signUpName').value.trim();
  const email = document.getElementById('signUpEmail').value.trim().toLowerCase();
  const password = document.getElementById('signUpPassword').value;
  const confirmPassword = document.getElementById('signUpConfirm').value;

  setSignUpError();
  if (!isValidFullName(fullName)) {
    setSignUpError('Enter a full name using 2–100 letters.');
    return;
  }
  if (!isValidEmail(email)) {
    setSignUpError('Enter a valid email address.');
    return;
  }
  if (!isValidNewPassword(password)) {
    setSignUpError('Use 8–72 characters with at least one letter and one number.');
    return;
  }
  if (password !== confirmPassword) {
    setSignUpError('Passwords do not match.');
    return;
  }

  const result = await requestSignUp({ fullName, email, password, confirmPassword });
  if (!result.ok) {
    setSignUpError(result.message);
    return;
  }

  signUpForm.reset();
  closeSignUp();
  updateAccountUI();
  showToast('Account created. You are signed in.');
});

accountForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (!currentUser) return;

  const fullName = accountFullName.value.trim();
  const email = accountEmail.value.trim().toLowerCase();
  const newPassword = accountNewPassword.value;
  const currentPassword = accountCurrentPassword.value;

  setAccountError();
  if (!isValidFullName(fullName)) {
    setAccountError('Enter a full name using 2–100 letters.');
    return;
  }
  if (!isValidEmail(email)) {
    setAccountError('Enter a valid email address.');
    return;
  }
  if (newPassword && !isValidNewPassword(newPassword)) {
    setAccountError('Use 8–72 characters with at least one letter and one number.');
    return;
  }
  const emailChanged = email !== (currentUser.email || '').toLowerCase();
  if ((emailChanged || newPassword) && !currentPassword) {
    setAccountError('Enter your current password to change your email or password.');
    return;
  }
  const payload = { fullName, email };
  if (newPassword) payload.newPassword = newPassword;
  if (currentPassword) payload.currentPassword = currentPassword;

  const result = await requestAccountUpdate(payload);
  if (!result.ok) {
    setAccountError(result.message);
    return;
  }

  currentUser = result.user;
  updateAccountUI();
  accountForm.reset();
  closeAccountModal();
  showToast('Account details updated.');
});

function updateManilaTime() {
  manilaTime.textContent = new Intl.DateTimeFormat('en-PH', {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  }).format(new Date());
}

function tickManilaTime() {
  updateManilaTime();
  window.setTimeout(tickManilaTime, 1000);
}

function finishLoading() {
  if (loadingFinished) return;
  loadingFinished = true;
  loadingScreen.classList.add('done');
  syncBodyScroll();
  window.setTimeout(() => { loadingScreen.hidden = true; }, 400);
}

document.body.style.overflow = 'hidden';
const loadingStartedAt = performance.now();
window.addEventListener('load', () => {
  const remaining = Math.max(0, 450 - (performance.now() - loadingStartedAt));
  window.setTimeout(finishLoading, remaining);
});
window.setTimeout(finishLoading, 3500);

if (location.hash === '#saved') state.savedOnly = true;

window.addEventListener('hashchange', () => {
  const savedView = location.hash === '#saved';
  if (savedView === state.savedOnly) return;
  state.savedOnly = savedView;
  clearFilterValues();
  renderEvents();
});

const closingYear = document.getElementById('closingYear');
if (closingYear) closingYear.textContent = new Intl.DateTimeFormat('en-PH', { timeZone: 'Asia/Manila', year: 'numeric' }).format(new Date());

updateAccountUI();
renderEvents();
restoreSession();
loadEvents();
tickManilaTime();
