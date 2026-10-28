export const invitation = {
  bismillah: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
  bismillahTranslation: 'In the name of Allah, the Most Beneficent, the Most Merciful',
  tagline: ['Together', 'in faith'],
  bride: 'Fathimath Famnaz',
  groom: 'Mohammed Shakeeb',
  ceremony: 'Wedding',
  dateShort: '12 · 12 · 2026',
  dateLong: '12 December 2026',
  dateIso: '2026-12-12',
  time: 'Saturday · 4:00 PM',
  venueLabel: 'Venue:',
  venue: 'Kamber House',
  ctaLabel: 'Open Invitation',
  ctaSub: 'Insha Allah',
  ctaHint: 'Tap to begin',
  countdownTarget: '2026-12-12T16:00:00+05:30'
};

// Background song (YouTube), starts when the invitation is opened
export const music = {
  youtubeId: 'r1L3H6peu8U',
  startSeconds: 0
};

// Creator credit shown on the intro screen and footer
export const creator = {
  label: 'Crafted by',
  handle: '@niaal._',
  url: 'https://www.instagram.com/niaal._/'
};

export const images = {
  doors: '/doors.jpg',
  card: '/card.jpg',
  backdrop: '/backdrop.jpg',
  // Couple photo shown after the opening card; set to '' to hide the section
  couple: '/couple.jpg'
};

export const invitationMessage = [
{ text: 'In the name of Allah, the Most Beneficent, the Most Merciful. Mr. Ahmed Ali & Mrs. Zainaba cordially invite you to the wedding and reception of their son ' },
{ text: 'Mohammed Shakeeb', emphasis: true },
{ text: ' with ' },
{ text: 'Fathimath Famnaz', emphasis: true },
{ text: ' (D/O Mr. M Muhammed Haji & Mrs. Ayishabi). Your gracious presence and prayers will make our celebration truly blessed.' }];


export const keyDetails = [
{ icon: 'calendar', label: 'Wedding Day', value: 'Saturday, 12 December 2026', note: 'Insha Allah' },
{ icon: 'clock', label: 'Nikah Time', value: '4:00 PM', note: 'After Asr · Kamber House' },
{ icon: 'moon', label: 'Hosts', value: 'Mr. Ahmed Ali & Mrs. Zainaba', note: 'Kamber House' },
{ icon: 'calendar', label: 'Reception', value: 'Saturday, 12 December 2026', note: '6:00 PM – 9:00 PM · Kamber House' }] as
const;

export const timeline = [
{
  date: 'Saturday, 12 December 2026 · Insha Allah',
  title: 'Wedding Ceremony',
  time: '4:00 PM · After Asr',
  place: 'Kamber House',
  description: 'Solemnised according to Islamic traditions and sacred wedding rituals.'
},
{
  date: 'Saturday, 12 December 2026 · Insha Allah',
  title: 'Reception',
  time: '6:00 PM – 9:00 PM',
  place: 'Kamber House',
  description: 'Celebrate with us as we begin our new journey together.'
}];


export const couple = {
  groom: {
    role: 'The Groom',
    name: 'Mohammed Shakeeb',
    lines: ['Son of Mr. Ahmed Ali & Mrs. Zainaba']
  },
  bride: {
    role: 'The Bride',
    name: 'Fathimath Famnaz',
    lines: ['Daughter of Mr. M Muhammed Haji & Mrs. Ayishabi']
  }
};

export const hosts: {first: string;second: string;address: string;phone?: string;note: string;} = {
  first: 'Mr. Ahmed Ali',
  second: 'Mrs. Zainaba',
  address: 'Kamber House',
  note: 'together with their families, relatives and well-wishers.'
};

export const events = [
{
  label: 'Nikah',
  day: 'Saturday',
  date: '12 December 2026',
  time: '4:00 PM · After Asr',
  venue: 'Kamber House',
  place: '',
  description: "Join us for the sacred wedding ceremony as we begin our journey together with Allah's blessings.",
  mapUrl: 'https://www.google.com/maps?q=12.4929256,74.995163&z=17&hl=en'
},
{
  label: 'Reception',
  day: 'Saturday',
  date: '12 December 2026',
  time: '6:00 PM – 9:00 PM',
  venue: 'Kamber House',
  place: '',
  description: 'Join us as we celebrate the couple and their new beginning.',
  mapUrl: 'https://www.google.com/maps?q=12.4929256,74.995163&z=17&hl=en'
}];


export const closing = {
  blessing: 'May Almighty Allah bless this union with health, harmony, peace and happiness for a lifetime.',
  dates: 'Wedding & Reception · 12 December 2026'
};
