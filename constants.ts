

import { Language, Translation } from './types';

export const COLORS = {
  bg: '#111111',
  accent: '#E4FF1A', // Dew Yellow
  glass: 'rgba(255, 255, 255, 0.05)',
  textMain: '#FFFFFF',
  textMuted: '#A1A1A1',
};

// Teacher Images
const TEACHER_IMAGES = [
  "https://pixvid.org/images/2025/12/25/52O3M.png", // Elsida
  "https://pixvid.org/images/2025/12/25/52lVm.png", // Lije
  "https://pixvid.org/images/2025/12/25/52lYB.png", // Ardi
  "https://pixvid.org/images/2025/12/25/52lAf.png"  // Flutura
];

// Unified Student Showcase Data
const SHOWCASE_DATA = [
    { 
        title: "Excellence", 
        coverImage: "https://pixvid.org/images/2025/12/25/52zxI.png",
        caption: "Milan Fashion Week from Ezgi Özalan"
    },
    { 
        title: "Collection for Milano", 
        coverImage: "https://pixvid.org/images/2025/12/25/52zFp.png",
        caption: "Bukra Cani realizing her own theme perfectly"
    },
    { 
        title: "Active Handwork", 
        coverImage: "https://pixvid.org/images/2025/12/25/52gcj.png",
        caption: "Student working with mannequin"
    },
    {
        title: "Bridal Concept",
        coverImage: "https://pixvid.org/images/2025/12/25/52gMJ.png",
        caption: "Hand-stitched Embroidery"
    },
    {
        title: "All in Black",
        coverImage: "https://pixvid.org/images/2025/12/25/52zWD.png",
        caption: "Megisa Margjegja for Tirana Fashion Week"
    },
    {
        title: "Modern Colorism",
        coverImage: "https://pixvid.org/images/2025/12/25/52zL0.png",
        caption: "Ermelinda Metohu's Fabulence"
    },
    {
        title: "Digital Design",
        coverImage: "https://pixvid.org/images/2025/12/25/527Gt.png",
        caption: "Working with CAD 3D"
    },
     {
        title: "Textile Manipulation",
        coverImage: "https://pixvid.org/images/2025/12/25/527zW.png",
        caption: "Practical work is key"
    }
];

export const TRANSLATIONS: Record<Language, Translation> = {
  [Language.AL]: {
    nav: {
      about: "Rreth Nesh",
      faq: "FAQ",
      contact: "Kontakt",
      teachers: "Mentorët",
      work: "Galeria",
    },
    hero: {
      slogan: "ku ëndrrat bëhen realitet. ku kreativiteti bëhet art",
    },
    about: {
      title: "Albanian Design Academy",
      description: "Për më shumë se 10 vite, ADA (Albanian Design Academy) ka qenë lider i padiskutueshëm në edukimin e modës në Shqipëri. E vendosur në zemër të Tiranës, akademia jonë ka ndërtuar një reputacion të fortë duke diplomuar mbi 100 studentë të suksesshëm që sot gëzojnë karriera premtuese. Ne ofrojmë rrugëtimin perfekt për këdo që ka pasion modën, pavarësisht eksperiencës së mëparshme.",
      structureTitle: "Struktura 2-Vjeçare",
      structure: "Programi ynë akademik zgjat 2 vite (Shtator - Qershor). Viti i parë është i dedikuar bazave: skicim, rrobaqepësi dhe merceologji (tekstile). Viti i dytë fokusohet në shprehjen artistike, realizimin e veshjeve komplekse nga skica në realitet dhe përgatitjen e portofolit profesional.",
      fashionShowNote: "Çdo cikël mbyllet me një Sfilatë Madhështore të Modës, ku studentët prezantojnë krijimet e tyre para qindra të ftuarve. Dizajnet më ambicioze kanë arritur deri në Javën e Modës në Milano dhe Paris."
    },
    teachers: {
      title: "Mentorët & Profesorët",
      description: "Njihuni me ekipin elitar që do të transformojë pasionin tuaj në profesion.",
      profiles: [
        {
          name: "Elsida Pepa",
          role: "Profesore & Drejtuese",
          bio: "Shpirti i ADA-s. Me 11 vite eksperiencë pas diplomimit dhe një jetë të dedikuar qepjes dhe dizajnit, Elsida drejton akademinë me ambicie të pashoqe. Ajo ju mëson artin e prerjes, qepjes dhe dizajnit kompjuterik.",
          image: TEACHER_IMAGES[0]
        },
        {
          name: "Lije Gurthi",
          role: "Mentore & Udhërrëfuese",
          bio: "Urtësia e eksperiencës. Me mbi 35 vite në industri dhe 30 vite duke drejtuar atelienë e saj, Lije është mentorja që ofron njohuri të thella teknike dhe zgjidhje për çdo sfidë të ndërlikuar.",
          image: TEACHER_IMAGES[1]
        },
        {
          name: "Ardi Asllani",
          role: "Profesor i Dizajnit",
          bio: "Vizionari. Një emër i njohur që kuron imazhin e figurave publike shqiptare. Ardi sjell profesionalizëm strikt dhe liri krijuese, duke ju mësuar si të krijoni skica ikonike dhe të paharrueshme.",
          image: TEACHER_IMAGES[2]
        },
        {
          name: "Flutura Zakja",
          role: "Profesore e Tekstileve",
          bio: "Mjeshtrja e pëlhurave. Me 25 vite eksperiencë dhe mijëra studentë të trajnuar, Flutura ju mëson gjithçka mbi tekstilet, historinë e tyre dhe si të zgjidhni materialin perfekt për çdo projekt.",
          image: TEACHER_IMAGES[3]
        }
      ]
    },
    work: {
      title: "Si është jeta këtu",
      description: "Ky është një vështrim i shkurtër i jetës në akademinë tonë. Mbani mend, kjo është vetëm një fraksion i asaj që bëjmë këtu—përvoja reale është shumë më emocionuese, e mbushur me zhurmën e makinave dhe energjinë e krijimit.",
      items: SHOWCASE_DATA
    },
    faq: [
      {
        question: "Sa zgjat programi?",
        answer: "Programi zgjat 2 vite akademike (nga Shtatori në fund të Qershorit). Ky rrugëtim finalizohet me një sfilatë mode madhështore të ndjekur nga qindra të ftuar."
      },
      {
        question: "Çfarë mësohet në ADA?",
        answer: "Ju mësoni gjithçka: qepje, stilim, dizajn mode dhe realizim veshjesh. Në fund të akademisë, do të keni njohuritë për të realizuar çdo ide tuajën. Gjithashtu ofrohet mundësia për të mësuar dizajn me programe kompjuterike moderne."
      },
      {
        question: "A kam kualifikimet e duhura?",
        answer: "Kjo shkollë është për këdo mbi 16 vjeç! Nuk kërkohen diploma të mëparshme apo eksperiencë. Kërkohet vetëm pasion, kohë dhe ambicie. Profesorët tanë do t'ju kthejnë në profesionistë."
      },
      {
        question: "Cilat janë mundësitë e punësimit?",
        answer: "Diploma e ADA është e fuqishme. Ju mund të hapni biznesin tuaj ose të punësoheni në kompani të mëdha mode në Shqipëri. Diploma njihet ndërkombëtarisht (me noterizim) dhe kemi studentë të punësuar në Itali, Gjermani dhe MB."
      }
    ],
    contact: {
      title: "Na Kontaktoni",
      subtitle: "Jemi këtu për t'ju përgjigjur pyetjeve tuaja. Na kontaktoni përmes kanaleve të mëposhtme ose përdorni chat-in live në këndin e poshtëm djathtas.",
      address: "Rruga e Bogdaneve, 1001 Tiranë",
      email: "elsidapepa@yahoo.com",
      phone: "+355 68 241 2137",
      instagram: "@albanian_design_academy",
      visitLabel: "NA VIZITONI",
      emailLabel: "NA SHKRUANI",
      phoneLabel: "TELEFON / WHATSAPP",
      followLabel: "NA NDIQNI"
    }
  },
  [Language.EN]: {
    nav: {
      about: "About Us",
      faq: "FAQ",
      contact: "Contact",
      teachers: "Mentors",
      work: "Gallery",
    },
    hero: {
      slogan: "where dreams become reality. where creativity becomes art",
    },
    about: {
      title: "Albanian Design Academy",
      description: "For over 10 years, ADA (Albanian Design Academy) has been the undisputed leader in fashion education in Albania. Located in the heart of Tirana, our academy has built a strong reputation by graduating over 100 successful students who now enjoy promising careers. We offer the perfect path for anyone passionate about fashion, regardless of previous experience.",
      structureTitle: "2-Year Structure",
      structure: "Our academic program lasts 2 years (September - June). Year One is dedicated to the basics: sketching, sewing, and textiles (merceologji). Year Two focuses on artistic expression, bringing complex garments from sketch to reality, and professional portfolio preparation.",
      fashionShowNote: "Each cycle concludes with a Grand Fashion Show, where students present their creations to hundreds of guests. The most ambitious designs have even made it to Milan and Paris Fashion Weeks."
    },
    teachers: {
      title: "Mentors & Professors",
      description: "Meet the elite team that will transform your passion into a profession.",
      profiles: [
        {
          name: "Elsida Pepa",
          role: "Professor & Owner",
          bio: "The heart of ADA. With 11 years of post-grad experience and a life dedicated to sewing and design, Elsida leads the academy with unmatched ambition. She teaches the art of cutting, sewing, and modern CAD design.",
          image: TEACHER_IMAGES[0]
        },
        {
          name: "Lije Gurthi",
          role: "Mentor & Guide",
          bio: "Wisdom of experience. With over 35 years in the industry and 30 years running her own atelier, Lije is the mentor who provides deep technical knowledge and solutions for every intricate challenge.",
          image: TEACHER_IMAGES[1]
        },
        {
          name: "Ardi Asllani",
          role: "Design Professor",
          bio: "The Visionary. A notable name styling Albanian public figures. Ardi brings strict professionalism and creative freedom, teaching you how to sketch iconic and memorable pieces for award-winning careers.",
          image: TEACHER_IMAGES[2]
        },
        {
          name: "Flutura Zakja",
          role: "Textile Expert",
          bio: "The Fabric Master. With 25 years of experience and thousands of students trained, Flutura teaches you everything about textiles, their history, and how to choose the perfect fabric for any project.",
          image: TEACHER_IMAGES[3]
        }
      ]
    },
    work: {
      title: "What it's like",
      description: "This is a tiny glimpse of what life is like at our school. Keep in mind this is only a fraction of what we do here—the real experience is much more exciting, filled with the hum of machines and the energy of creation.",
      items: SHOWCASE_DATA
    },
    faq: [
      {
        question: "How long is the program?",
        answer: "The program lasts 2 academic years (September to late June). This journey is finalized by a stunning fashion show attended by hundreds of guests."
      },
      {
        question: "What will I learn at ADA?",
        answer: "You learn everything: sewing, styling, fashion design, and garment realization. By the end, you will have the knowledge to bring any desire to fruition. We also offer options to learn design using modern computer applications."
      },
      {
        question: "Do I have the right qualifications?",
        answer: "This school is for anyone over 16! No prior diplomas or experience required. All you need is passion, time, and ambition. Our professors will turn you into a professional."
      },
      {
        question: "What are the job opportunities?",
        answer: "The ADA diploma is powerful. You can open your own business or get hired by major fashion companies in Albania. The diploma is recognized internationally (after notarization) with alumni working in Italy, Germany, and the UK."
      }
    ],
    contact: {
      title: "Contact Us",
      subtitle: "We are here to answer your questions. Reach out to us via any of the channels below or use the live chat in the bottom right corner.",
      address: "Rruga e Bogdaneve, 1001 Tirana",
      email: "elsidapepa@yahoo.com",
      phone: "+355 68 241 2137",
      instagram: "@albanian_design_academy",
      visitLabel: "VISIT US",
      emailLabel: "EMAIL US",
      phoneLabel: "CALL / WHATSAPP",
      followLabel: "FOLLOW US"
    }
  },
  [Language.IT]: {
    nav: {
      about: "Chi Siamo",
      faq: "FAQ",
      contact: "Contatto",
      teachers: "Mentori",
      work: "Galleria",
    },
    hero: {
      slogan: "dove i sogni diventano realtà. dove la creatività diventa arte",
    },
    about: {
      title: "Albanian Design Academy",
      description: "Da oltre 10 anni, ADA (Albanian Design Academy) è leader indiscusso nell'educazione alla moda in Albania. Situata nel cuore di Tirana, la nostra accademia ha costruito una solida reputazione diplomando oltre 100 studenti di successo. Offriamo il percorso perfetto per chiunque abbia passione per la moda, indipendentemente dall'esperienza precedente.",
      structureTitle: "Struttura di 2 Anni",
      structure: "Il nostro programma accademico dura 2 anni (Settembre - Giugno). Il Primo Anno è dedicato alle basi: schizzo, cucito e merceologia (tessuti). Il Secondo Anno si concentra sull'espressione artistica, la realizzazione di capi complessi e la preparazione del portfolio professionale.",
      fashionShowNote: "Ogni ciclo si conclude con una Grande Sfilata di Moda, dove gli studenti presentano le loro creazioni a centinaia di ospiti. I design più ambiziosi hanno raggiunto le Settimane della Moda di Milano e Parigi."
    },
    teachers: {
      title: "Mentori & Professori",
      description: "Incontra il team d'élite che trasformerà la tua passione in professione.",
      profiles: [
        {
          name: "Elsida Pepa",
          role: "Professoressa & Proprietaria",
          bio: "Il cuore di ADA. Con 11 anni di esperienza post-laurea e una vita dedicata al cucito, Elsida guida l'accademia con ambizione ineguagliabile. Insegna l'arte del taglio, del cucito e del design CAD moderno.",
          image: TEACHER_IMAGES[0]
        },
        {
          name: "Lije Gurthi",
          role: "Mentore & Guida",
          bio: "La saggezza dell'esperienza. Con oltre 35 years nel settore e 30 anni alla guida del proprio atelier, Lije è la mentore che fornisce conoscenze tecniche profonde e soluzioni per ogni sfida.",
          image: TEACHER_IMAGES[1]
        },
        {
          name: "Ardi Asllani",
          role: "Professore di Design",
          bio: "Il Visionario. Un nome noto che cura l'immagine di figure pubbliche albanesi. Ardi porta professionalità rigorosa e libertà creativa, insegnandoti a creare schizzi iconici per carriere premiate.",
          image: TEACHER_IMAGES[2]
        },
        {
          name: "Flutura Zakja",
          role: "Esperta Tessile",
          bio: "La Maestra dei Tessuti. Con 25 anni di esperienza e migliaia di studenti formati, Flutura ti insegna tutto sui tessuti, la loro storia e come scegliere il materiale perfetto per ogni progetto.",
          image: TEACHER_IMAGES[3]
        }
      ]
    },
    work: {
      title: "Com'è la vita qui",
      description: "Questo è un piccolo assaggio di com'è la vita nella nostra scuola. Tieni presente che questa è solo una frazione di ciò che facciamo qui: l'esperienza reale è molto più emozionante, piena del ronzio delle macchine e dell'energia della creazione.",
      items: SHOWCASE_DATA
    },
    faq: [
      {
        question: "Quanto dura il programma?",
        answer: "Il programma dura 2 anni accademici (da Settembre a fine Giugno). Questo viaggio si conclude con una splendida sfilata di moda frequentata da centinaia di ospiti."
      },
      {
        question: "Cosa imparerò all'ADA?",
        answer: "Impari tutto: cucito, styling, fashion design e realizzazione di capi. Alla fine, avrai le conoscenze per realizzare qualsiasi desiderio. Offriamo anche opzioni per imparare il design usando moderni programmi informatici."
      },
      {
        question: "Ho le qualifiche giuste?",
        answer: "Questa scuola è per chiunque abbia più di 16 anni! Non sono richiesti diplomi o esperienze precedenti. Serve solo passione, tempo e ambizione. I nostri professori ti trasformeranno in un professionista."
      },
      {
        question: "Quali sono le opportunità di lavoro?",
        answer: "Il diploma ADA è potente. Puoi aprire la tua attività o essere assunto da grandi aziende di moda in Albania. Il diploma è riconosciuto a livello internazionale (dopo autenticazione) con alumni che lavorano in Italia, Germania e Regno Unito."
      }
    ],
    contact: {
      title: "Contattaci",
      subtitle: "Siamo qui per rispondere alle tue domande. Contattaci tramite i canali sottostanti o usa la live chat in basso a destra.",
      address: "Rruga e Bogdaneve, 1001 Tirana",
      email: "elsidapepa@yahoo.com",
      phone: "+355 68 241 2137",
      instagram: "@albanian_design_academy",
      visitLabel: "VIENI A TROVARCI",
      emailLabel: "SCRIVICI",
      phoneLabel: "CHIAMA / WHATSAPP",
      followLabel: "SEGUICI"
    }
  }
};