/**
 * Words of the Sinchan Mitra product page in English, Marathi and Hindi. The three blocks have the
 * same shape (TypeScript checks it). Terms follow the app's own Marathi / Hindi words.
 * `{email}`, `{phone}` and `{hours}` in the CTA are filled from lib/constants.ts.
 */
import type { GalleryCategory, Lang } from "@/lib/content/sinchan-mitra";

type Section = { eyebrow: string; title: string; description?: string };

export type Copy = {
  htmlLang: string;
  meta: { title: string; description: string };
  subnav: {
    why: string;
    steps: string;
    features: string;
    screens: string;
    download: string;
    faq: string;
    demo: string;
    pageLanguage: string;
  };
  hero: {
    badge: string;
    headline: string;
    intro: string;
    sub: string;
    ctaDemo: string;
    ctaDownload: string;
    ctaScreens: string;
    chips: [string, string, string, string];
    floats: [string, string, string];
    facts: { value: number | string; suffix?: string; label: string }[];
  };
  types: Section & { items: { title: string; description: string }[] };
  why: Section & { problem: string; solution: string; items: { title: string; problem: string; solution: string }[] };
  benefits: Section & { items: { title: string; description: string }[] };
  steps: Section & { items: { title: string; description: string; points: string[] }[] };
  features: Section & {
    items: { eyebrow: string; title: string; description: string; points: string[] }[];
  };
  languages: Section & {
    mr: string;
    hi: string;
    en: string;
    counterTitle: string;
    points: string[];
  };
  inside: Section & { items: { title: string; items: string[] }[] };
  gallery: Section & {
    all: string;
    categories: Record<GalleryCategory, string>;
    hint: string;
    titles: Record<string, string>;
  };
  download: Section & {
    windows: { title: string; description: string; points: string[] };
    android: { title: string; description: string; points: string[] };
    button: string;
    soon: string;
    request: string;
    note: string;
  };
  faq: Section & { items: { question: string; answer: string }[] };
  cta: { eyebrow: string; title: string; description: string; primary: string; secondary: string };
  ui: {
    close: string;
    previous: string;
    next: string;
    screenshotAlt: string;
    heroAlt: string;
    phoneAlt: string;
    categories: string;
  };
};

// ---------------------------------------------------------------------------------------------- English
const en: Copy = {
  htmlLang: "en",
  meta: {
    title: "Sinchan Mitra: AgriBusiness SaaS",
    description:
      "Sinchan Mitra (सिंचन मित्र) is an AgriBusiness SaaS for agri-input shops, irrigation dealers and related shops: billing, stock, udhaar, GST and CA reports, and irrigation files with Aalekh farm layouts, in Marathi, Hindi and English.",
  },
  subnav: {
    why: "Why",
    steps: "How it works",
    features: "Features",
    screens: "Screens",
    download: "Download",
    faq: "FAQ",
    demo: "Request a demo",
    pageLanguage: "Page language",
  },
  hero: {
    badge: "AgriBusiness SaaS by ALPHARISE",
    headline: "Your whole agri shop in one app",
    intro:
      "Billing, stock, udhaar, GST and CA reports, and irrigation files, in Marathi, Hindi and English. Made for Krushi Seva Kendras, fertilizer, seed and pesticide dealers, irrigation and drip dealers, pipe stores, solar dealers and nurseries.",
    sub: "Works on your Windows PC even without internet.",
    ctaDemo: "Request a demo",
    ctaDownload: "Download the app",
    ctaScreens: "See the screens",
    chips: ["Marathi · हिंदी · English", "Windows PC app", "Android helper app", "Works without internet"],
    floats: ["Udhaar always clear", "GST ready", "Expiry alert"],
    facts: [
      { value: 10, label: "business types with ready-made set-up" },
      { value: 3, label: "languages: Marathi, Hindi, English" },
      { value: "PC + Android", label: "Windows app with an Android helper app" },
      { value: "Offline", label: "daily billing needs no internet" },
    ],
  },
  types: {
    eyebrow: "Built for your shop",
    title: "One app, set up for your business type",
    description:
      "Pick your type and Sinchan Mitra loads the modules, starter goods list and registers that shop needs.",
    items: [
      {
        title: "Krushi Seva Kendra",
        description:
          "Fertilizer, seed and pesticide under one roof: Form N, D, XIII and XIV registers, licences with reminders, batch and expiry, MRP lock.",
      },
      {
        title: "Fertilizer Dealer",
        description:
          "Fertilizer bills and registers, licence reminders, batches with expiry and MRP lock so no bag is billed above MRP.",
      },
      {
        title: "Seed Dealer",
        description:
          "Seed lots with tag, germination, purity and valid-upto date; sale stops after the valid date.",
      },
      {
        title: "Pesticide Dealer",
        description:
          "Banned and restricted pesticide lists built in; the app itself refuses a banned sale. Form XIII and XIV registers.",
      },
      {
        title: "Irrigation, Drip & Sprinkler",
        description:
          "Farmer irrigation files, farm layout (Aalekh) in 2D and 3D, material list, quotation and bill, documents and subsidy steps.",
      },
      {
        title: "Pipe / PVC Store",
        description:
          "Pipe size and grade stock grid, IS / BIS standards, fast billing and udhaar for contractors and farmers.",
      },
      {
        title: "Solar & Solar Pump",
        description:
          "Serial numbers on every panel and pump, warranty that starts by itself, job cards for service visits.",
      },
      {
        title: "Nursery (रोपवाटिका)",
        description:
          "Plant and input categories, licence and expiry reminders, batch tracking for saplings and inputs.",
      },
    ],
  },
  why: {
    eyebrow: "Why Sinchan Mitra",
    title: "The problems of an agri shop, solved",
    description:
      "An agri shop runs on credit, expiry dates, licences and paperwork. Sinchan Mitra takes each of these off your head.",
    problem: "Today",
    solution: "With Sinchan Mitra",
    items: [
      {
        title: "Udhaar on paper",
        problem: "Farmers' credit sits in notebooks. Who owes what, and since when, is anyone's guess.",
        solution:
          "Every farmer's balance in one place, season by season (Kharif, Rabi), with a credit limit the app enforces.",
      },
      {
        title: "Stock surprises",
        problem: "Goods run out on a busy day, or quietly expire on the shelf.",
        solution:
          "Low-stock tags, batch and expiry on every lot, and an expired batch simply cannot be sold.",
      },
      {
        title: "Registers and licences",
        problem: "Form registers and licence renewals are easy to forget until an inspection.",
        solution:
          "Form N, D, XIII and XIV registers kept as you bill, licence reminders before they end, banned pesticides refused.",
      },
      {
        title: "Subsidy paperwork",
        problem: "Each irrigation file means land papers, layouts, quotations and forms done by hand.",
        solution:
          "One irrigation file: land, crop, Aalekh farm layout in 2D and 3D, material list, quotation and papers.",
      },
      {
        title: "Year-end rush",
        problem: "GST returns and the CA's questions turn into weeks of digging through bills.",
        solution:
          "GSTR-1 and GSTR-3B worksheets, profit and loss, and a CA / year-end pack, ready when you are.",
      },
      {
        title: "Staff and branches",
        problem: "Hard to control who sees what, and to run more than one shop.",
        solution:
          "Staff roles and permissions, an owner section behind a PIN, several shops with goods sent between them.",
      },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "What you gain",
    description: "Real everyday gains for the owner, the counter staff and the accountant.",
    items: [
      {
        title: "Save time at the counter",
        description:
          "Scan or search, bill and print in seconds, even in a rush. No re-writing, no calculator.",
      },
      {
        title: "Fewer mistakes, less loss",
        description:
          "MRP lock, credit limits, expiry blocks and clear returns stop the small leaks that add up.",
      },
      {
        title: "Know your money",
        description:
          "Udhaar, cash book, day close, expenses and profit, always up to date and one click away.",
      },
      {
        title: "Stay compliant, calmly",
        description:
          "Registers, licence reminders, GST worksheets and the CA pack are built in, not an extra job.",
      },
      {
        title: "Grow with confidence",
        description:
          "Add staff with their own roles, open more shops, keep backups, and update the software easily.",
      },
      {
        title: "Your language, your pace",
        description:
          "Marathi, Hindi and English, works without internet, and a step-by-step guide inside the app.",
      },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "From first day to year-end, step by step",
    description: "This is how a shop uses Sinchan Mitra, from set-up to the CA's file.",
    items: [
      {
        title: "Choose your business type",
        description:
          "Tell us what you run. Your type decides the modules, the starter goods list and the registers.",
        points: [
          "Krushi Seva Kendra, dealer, store or nursery",
          "Starter goods list with names in three languages",
          "Shop details and logo for your bills",
        ],
      },
      {
        title: "Install and activate on your PC",
        description:
          "Install the Windows app and activate it with the code we give you. It then works without internet.",
        points: [
          "Windows PC app for the counter",
          "Android helper app for the owner",
          "Online mode when you want shops in sync",
        ],
      },
      {
        title: "Add goods, customers and balances",
        description:
          "Pick goods from the starter list; add farmers and suppliers with village, mobile and opening balance.",
        points: [
          "HSN and GST % fill themselves",
          "Credit limit per customer",
          "Names in Marathi or Hindi too",
        ],
      },
      {
        title: "Bill every day",
        description:
          "Search or scan, take cash, UPI, bank, cheque or udhaar, and print or WhatsApp the bill.",
        points: [
          "GST and non-GST goods on one bill",
          "Stock reduces by itself",
          "Returns, quotations and monthly bills",
        ],
      },
      {
        title: "Watch stock, expiry and money",
        description:
          "See low stock and expiring batches, record goods received, collect udhaar and close the day.",
        points: [
          "Low-stock tags and batch expiry",
          "Udhaar receivable and payable",
          "Cash book and day close (galla)",
        ],
      },
      {
        title: "Reports, GST and growth",
        description:
          "Owner section for profit and reports, GST worksheets and the CA pack; add staff, shops and backups.",
        points: [
          "GSTR-1 and GSTR-3B worksheets",
          "CA / year-end pack in three levels",
          "Irrigation file and Aalekh for dealers",
        ],
      },
    ],
  },
  features: {
    eyebrow: "In detail",
    title: "The features that matter at the counter",
    description: "A closer look at six areas of the app, with real screens.",
    items: [
      {
        eyebrow: "Billing",
        title: "Bill a customer in seconds",
        description:
          "Search on the left, the current bill on the right. A rush at the counter is just one more bill.",
        points: [
          "Find goods by name, short name or barcode, typing Marathi, Hindi or English letters",
          "Scan a barcode and the item is on the bill; saving the bill reduces stock",
          "GST and non-GST goods on one bill",
          "Cash, UPI, bank, credit, cheque, or part now and the rest on udhaar",
          "Print on a 58 / 80 mm receipt printer, open the A4 PDF, or send on WhatsApp",
          "Your shop logo on the bill; returns make a credit note, a wrong bill is cancelled, never deleted",
        ],
      },
      {
        eyebrow: "Money and udhaar",
        title: "Know who owes what, at a glance",
        description: "Credit is the heart of an agri shop. Every farmer's balance is one tap away.",
        points: [
          "Receivable and payable totals on one page, customer by customer",
          "Credit limit per customer: the app stops a bill beyond it",
          "Season-wise udhaar for Kharif and Rabi",
          "Money in and out, cheques, and a statement you can print or send",
        ],
      },
      {
        eyebrow: "Stock",
        title: "Stock that warns you before it runs out",
        description: "Know what is in the shop, what is about to expire and what to order again.",
        points: [
          "Low-stock tags and a full stock history with reasons for every adjustment",
          "Batch / lot and expiry: the batch that ends first is on top, an expired batch cannot be sold",
          "Warehouses, and goods sent from one shop to another",
          "A starter goods list for your business type: name in three languages, unit, HSN and GST % fill themselves",
          "MRP lock for fertilizer, seed and pesticide shops",
        ],
      },
      {
        eyebrow: "Irrigation dealers",
        title: "Farm layout in minutes: Aalekh 2D and 3D",
        description:
          "From the farmer's file to the layout, material list, quotation and papers, in one flow.",
        points: [
          "Farmer's irrigation file in nine steps: scheme, farmer, land (gat / 7-12), crop, layout, material, papers, verification, subsidy",
          "Auto layout of the farm in 2D and 3D that you can adjust by hand",
          "Material list, quotation and bill made from the layout",
          "Papers for the file printed from the computer, without internet",
        ],
      },
      {
        eyebrow: "Service",
        title: "Job cards and warranty that run themselves",
        description:
          "Pumps, filters and panels come back for repair. Track each one from receipt to return.",
        points: [
          "Serial numbers recorded at purchase and on the bill",
          "Warranty period starts by itself for serial-tracked goods",
          "Job cards from receipt to return with status and due date",
        ],
      },
      {
        eyebrow: "Owner section and accounts",
        title: "Reports, GST and your CA, ready",
        description:
          "The owner section sits behind a PIN. Profit, cash and returns are one click away.",
        points: [
          "Profit and loss, cash book and day close (galla), expenses and income, bank and cash accounts",
          "GST return worksheets (GSTR-1, GSTR-3B)",
          "CA / year-end pack in three levels, with tally and checks",
          "PDF centre for every report; staff roles decide who sees what",
        ],
      },
    ],
  },
  languages: {
    eyebrow: "Made for India",
    title: "Speaks your language, on PC and phone",
    description:
      "The same app in Marathi, Hindi and English, with light and dark colours, and a Windows app that works even when the internet does not.",
    mr: "मराठी",
    hi: "हिन्दी",
    en: "English",
    counterTitle: "At the counter and in your pocket",
    points: [
      "Use it fully offline on one PC, or online to keep your shops and the Android helper app in step",
      "The Android helper app puts the owner's day on the phone: reminders, low stock and open files",
      "Light and dark colours, large clear text, and search with Ctrl+K even in English letters",
      "A step-by-step guide inside the app that works without internet",
      "Automatic backups, and software updates over the internet or from a pen drive",
    ],
  },
  inside: {
    eyebrow: "Everything inside",
    title: "What you get with Sinchan Mitra",
    description: "Every module follows the real app, set up for your business type.",
    items: [
      {
        title: "Daily work",
        items: [
          "Billing with barcode scan",
          "Quotations, advances, monthly bills",
          "Sold bills, returns, credit notes",
          "Receipt printer, A4 PDF, WhatsApp",
          "Customers, farmers, suppliers",
        ],
      },
      {
        title: "Stock and goods",
        items: [
          "Starter goods list per business type",
          "Low stock, history, adjustments",
          "Batch, lot and expiry",
          "Serial numbers and warranty",
          "Warehouses and shop-to-shop transfer",
        ],
      },
      {
        title: "Money",
        items: [
          "Cash, UPI, bank, credit, cheque",
          "Udhaar receivable and payable",
          "Season udhaar (Kharif, Rabi)",
          "Cash book and day close",
          "Expenses, income, bank accounts",
        ],
      },
      {
        title: "Rules and registers",
        items: [
          "Form N, D, XIII, XIV registers",
          "Licences with reminders",
          "Banned and restricted pesticide guard",
          "Seed lot fields and valid-upto",
          "MRP lock",
        ],
      },
      {
        title: "Irrigation and subsidy",
        items: [
          "Farmer irrigation file in nine steps",
          "Aalekh farm layout, 2D and 3D",
          "Material list, quotation, bill",
          "Papers for the file, offline",
          "Verification and subsidy steps",
        ],
      },
      {
        title: "Reports and setup",
        items: [
          "Profit and loss, reports, PDF centre",
          "GSTR-1 and GSTR-3B worksheets",
          "CA / year-end pack",
          "Staff, roles and several shops",
          "Backup, restore and software update",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "See the app",
    title: "Real screens from the real app",
    description:
      "A quick look at the Windows app by area. Everything you see is the real software, filled with sample data.",
    all: "All",
    categories: {
      Billing: "Billing",
      Stock: "Stock",
      Money: "Money",
      Irrigation: "Irrigation",
      Reports: "Reports",
      Registers: "Registers",
    },
    hint: "Small screens from the real Sinchan Mitra app, with sample data. To see the full app, ask for a demo.",
    titles: {
      "irr-billing": "Bill a customer",
      "irr-sold-bills": "Sold bills, returns and quotations",
      "irr-parties": "Customers, farmers and suppliers",
      "irr-stock": "Stock and low-stock tags",
      "ksk-batches": "Batches and expiry",
      "ksk-stock-board": "Stock and rate board for the counter",
      "irr-pipe-grid": "Pipe size and grade grid",
      "irr-warranty": "Warranty and AMC",
      "irr-udhaar": "Udhaar: receivable and payable",
      "irr-cash-close": "Cash book and day close",
      "irr-irr-file": "Irrigation files",
      "irr-irr-land": "Land, crop and farm layout",
      "aalekh-2d": "Aalekh in 2D",
      "aalekh-3d": "Aalekh in 3D",
      "irr-irr-material": "Material list, quotation and bill",
      "irr-irr-papers": "Papers for the file",
      "irr-irr-stages": "Verification, subsidy and stages",
      "irr-owner-section": "Owner section",
      "irr-profit": "Profit and loss",
      "irr-reports": "Reports",
      "irr-gst": "GST return worksheets",
      "irr-ca-pack": "CA / year-end pack",
      "ksk-pack-registers": "Registers: Form N, D, XIII, XIV",
      "ksk-licences": "Licences and reminders",
      "ksk-regulated-sale": "The app refuses a banned pesticide sale",
      "ksk-todays-jobs": "Reminders for licences and expiry",
      "sol-projects": "Solar projects",
      "nur-lots": "Plant lots and batches",
    },
  },
  download: {
    eyebrow: "Download",
    title: "Get Sinchan Mitra",
    description:
      "Download the app for your counter and for your phone. The Windows app is activated with a code that we give you.",
    windows: {
      title: "Windows PC app",
      description: "The full app for your billing counter and back office.",
      points: ["Billing, stock, udhaar and reports", "Works without internet", "Activated with your code"],
    },
    android: {
      title: "Android helper app",
      description: "Your shop in your pocket: home, billing, stock and customers on the phone.",
      points: ["Reminders and low-stock alerts", "Open irrigation files", "Marathi, Hindi, English"],
    },
    button: "Download",
    soon: "Download link coming soon",
    request: "Ask for access",
    note: "Need an activation code or help installing? Contact us and we will set it up with you.",
  },
  faq: {
    eyebrow: "Questions",
    title: "Sinchan Mitra: frequently asked questions",
    items: [
      {
        question: "Do I need internet to use Sinchan Mitra?",
        answer:
          "No, not for daily billing, stock and reports on the PC. Bills, quotations and PDFs are made on your computer. Online mode adds syncing across shops and the Android helper app.",
      },
      {
        question: "Which languages does it support?",
        answer:
          "Marathi, Hindi and English. You can search in English letters and keep customer and goods names in your own language.",
      },
      {
        question: "Which businesses is it for?",
        answer:
          "Krushi Seva Kendra, fertilizer, seed and pesticide dealers, irrigation, drip and sprinkler dealers, pipe / PVC stores, solar and solar pump dealers, and nurseries.",
      },
      {
        question: "Can I print or share bills?",
        answer:
          "Yes: a 58 / 80 mm receipt printer, an A4 PDF, or WhatsApp. Your shop logo can be printed on the bill.",
      },
      {
        question: "What about my data and updates?",
        answer:
          "The app takes automatic backups and can restore them. Software updates come over the internet or from a pen drive.",
      },
      {
        question: "Is there an Android app?",
        answer:
          "Yes, an Android helper app goes with the Windows app, for example for the owner's daily reminders. Ask us about its availability for your plan.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Sinchan Mitra is offered on subscription plans. There is no public price list: contact us and we will suggest a plan for your shop and arrange a demo.",
      },
    ],
  },
  cta: {
    eyebrow: "See it for your shop",
    title: "Ask for a Sinchan Mitra demo",
    description:
      "Tell us your business type and number of shops. We will show you the app and suggest a plan. Write to {email} or call {phone} ({hours}).",
    primary: "Request a demo",
    secondary: "Call {phone}",
  },
  ui: {
    close: "Close",
    previous: "Previous screenshot",
    next: "Next screenshot",
    screenshotAlt: "Sinchan Mitra screenshot (sample data)",
    heroAlt:
      "Sinchan Mitra home screen on Windows with a Bill a customer button, low-stock card and irrigation applications",
    phoneAlt: "Sinchan Mitra Android helper app home screen",
    categories: "Screenshot categories",
  },
};

// ---------------------------------------------------------------------------------------------- Marathi
const mr: Copy = {
  htmlLang: "mr",
  meta: {
    title: "सिंचन मित्र: कृषी व्यवसायासाठी सॉफ्टवेअर",
    description:
      "सिंचन मित्र हे कृषी सेवा केंद्र, सिंचन विक्रेते आणि संबंधित दुकानांसाठीचे ॲग्रीबिझनेस सॉफ्टवेअर आहे: बिलिंग, स्टॉक, उधारी, GST व CA अहवाल आणि आलेखासह सिंचन फाइल. मराठी, हिंदी आणि इंग्रजीत.",
  },
  subnav: {
    why: "का",
    steps: "कसे चालते",
    features: "सोयी",
    screens: "स्क्रीन",
    download: "डाउनलोड",
    faq: "प्रश्न",
    demo: "डेमो मागवा",
    pageLanguage: "पानाची भाषा",
  },
  hero: {
    badge: "ALPHARISE चे ॲग्रीबिझनेस सॉफ्टवेअर",
    headline: "तुमचे संपूर्ण कृषी दुकान एका ॲपमध्ये",
    intro:
      "बिलिंग, स्टॉक, उधारी, GST व CA अहवाल आणि सिंचन फाइल: मराठी, हिंदी आणि इंग्रजीत. कृषी सेवा केंद्र, खत, बियाणे व कीटकनाशक विक्रेते, सिंचन व ठिबक विक्रेते, पाईप दुकाने, सौर विक्रेते आणि रोपवाटिकांसाठी.",
    sub: "इंटरनेटशिवायही तुमच्या Windows संगणकावर चालते.",
    ctaDemo: "डेमो मागवा",
    ctaDownload: "ॲप डाउनलोड करा",
    ctaScreens: "स्क्रीन पाहा",
    chips: ["मराठी · हिंदी · English", "Windows संगणक ॲप", "Android मदतनीस ॲप", "इंटरनेटशिवाय चालते"],
    floats: ["उधारी नेहमी स्पष्ट", "GST तयार", "मुदतीची सूचना"],
    facts: [
      { value: 10, label: "व्यवसाय प्रकार, तयार सेटअपसह" },
      { value: 3, label: "भाषा: मराठी, हिंदी, इंग्रजी" },
      { value: "PC + Android", label: "Windows ॲपसोबत Android मदतनीस ॲप" },
      { value: "इंटरनेटशिवाय", label: "रोजचे बिलिंग इंटरनेटशिवाय" },
    ],
  },
  types: {
    eyebrow: "तुमच्या दुकानासाठी",
    title: "एक ॲप, तुमच्या व्यवसायाच्या प्रकारानुसार",
    description:
      "तुमचा प्रकार निवडा; सिंचन मित्र त्या दुकानाला लागणारे विभाग, सुरुवातीची माल यादी आणि नोंदवह्या आपोआप तयार ठेवतो.",
    items: [
      {
        title: "कृषी सेवा केंद्र",
        description:
          "खत, बियाणे आणि कीटकनाशक एकाच दुकानात: Form N, D, XIII, XIV नोंदवह्या, आठवणीसह परवाने, बॅच व मुदत, MRP लॉक.",
      },
      {
        title: "खत विक्रेता",
        description:
          "खताची बिले व नोंदवह्या, परवान्याची आठवण, मुदतीसह बॅच आणि MRP लॉक, म्हणजे कोणतेही पोते MRP पेक्षा जास्त दराने जात नाही.",
      },
      {
        title: "बियाणे विक्रेता",
        description:
          "टॅग, उगवण, शुद्धता आणि वैध दिनांकासह बियाण्याचे लॉट; वैध दिनांकानंतर विक्री थांबते.",
      },
      {
        title: "कीटकनाशक विक्रेता",
        description:
          "बंदी आणि निर्बंधित कीटकनाशकांच्या याद्या ॲपमध्येच; बंदी असलेली विक्री ॲप स्वतःच थांबवते. Form XIII व XIV नोंदवह्या.",
      },
      {
        title: "सिंचन, ठिबक व तुषार विक्रेते",
        description:
          "शेतकऱ्याची सिंचन फाइल, 2D व 3D मध्ये शेताचा आलेख, साहित्य यादी, कोटेशन व बिल, कागदपत्रे आणि अनुदानाच्या पायऱ्या.",
      },
      {
        title: "पाईप / PVC दुकान",
        description:
          "पाईपचा आकार व दर्जा यांचा स्टॉक तक्ता, IS / BIS मानके, जलद बिलिंग आणि ठेकेदार व शेतकऱ्यांची उधारी.",
      },
      {
        title: "सौर व सौर पंप",
        description:
          "प्रत्येक पॅनेल व पंपाचा सिरीयल क्रमांक, आपोआप सुरू होणारी वॉरंटी, दुरुस्तीसाठी जॉब कार्ड.",
      },
      {
        title: "रोपवाटिका",
        description:
          "रोपे व साहित्याचे वर्ग, परवाना व मुदतीची आठवण, रोपे आणि साहित्यासाठी बॅच नोंद.",
      },
    ],
  },
  why: {
    eyebrow: "सिंचन मित्र का?",
    title: "कृषी दुकानाच्या अडचणींवर उपाय",
    description:
      "कृषी दुकान उधारी, मुदत, परवाने आणि कागदपत्रांवर चालते. सिंचन मित्र या सगळ्यांची काळजी स्वतः घेतो.",
    problem: "आज",
    solution: "सिंचन मित्र सोबत",
    items: [
      {
        title: "वहीतली उधारी",
        problem: "शेतकऱ्यांची उधारी वहीत लिहिलेली. कोणाकडे किती आणि कधीपासून बाकी, याचा अंदाजच.",
        solution:
          "प्रत्येक शेतकऱ्याची बाकी एकाच ठिकाणी, हंगामानुसार (खरीप, रब्बी), आणि ॲप पाळणारी क्रेडिट मर्यादा.",
      },
      {
        title: "स्टॉकचे धक्के",
        problem: "गर्दीच्या दिवशी माल संपतो, किंवा शेल्फवर न कळता मुदत संपते.",
        solution:
          "कमी स्टॉकची खूण, प्रत्येक लॉटवर बॅच व मुदत, आणि मुदत संपलेली बॅच विकताच येत नाही.",
      },
      {
        title: "नोंदवह्या आणि परवाने",
        problem: "Form नोंदवह्या आणि परवाने नूतनीकरण तपासणी येईपर्यंत विसरले जातात.",
        solution:
          "बिल करताना Form N, D, XIII, XIV नोंदवह्या भरतात, परवाना संपण्याआधी आठवण, बंदी असलेले कीटकनाशक विकले जात नाही.",
      },
      {
        title: "अनुदानाचे कागद",
        problem: "प्रत्येक सिंचन फाइलसाठी जमिनीचे कागद, आलेख, कोटेशन आणि अर्ज हाताने तयार करावे लागतात.",
        solution:
          "एकच सिंचन फाइल: जमीन, पीक, 2D व 3D आलेख, साहित्य यादी, कोटेशन आणि कागदपत्रे.",
      },
      {
        title: "वर्षअखेरची धावपळ",
        problem: "GST रिटर्न आणि CA चे प्रश्न म्हणजे आठवडे बिले शोधत बसणे.",
        solution:
          "GSTR-1 व GSTR-3B कार्यपत्रके, नफा-तोटा आणि CA / वार्षिक हिशोब पॅक, हवे तेव्हा तयार.",
      },
      {
        title: "कर्मचारी आणि शाखा",
        problem: "कोणाला काय दिसावे यावर नियंत्रण आणि एकापेक्षा जास्त दुकाने चालवणे कठीण.",
        solution:
          "कर्मचाऱ्यांच्या भूमिका व परवानग्या, PIN असलेला मालक विभाग, अनेक दुकाने आणि त्यांच्यात माल पाठवणे.",
      },
    ],
  },
  benefits: {
    eyebrow: "फायदे",
    title: "तुम्हाला काय मिळते",
    description: "मालक, काउंटरवरचे कर्मचारी आणि हिशोबनीस, सगळ्यांना रोजच्या कामात फायदा.",
    items: [
      {
        title: "काउंटरवर वेळेची बचत",
        description:
          "स्कॅन किंवा शोधा, बिल करा आणि छापा, गर्दीतही काही सेकंदांत. पुन्हा लिहिणे नाही, कॅल्क्युलेटर नाही.",
      },
      {
        title: "कमी चुका, कमी नुकसान",
        description:
          "MRP लॉक, क्रेडिट मर्यादा, मुदतीचा अडथळा आणि स्पष्ट माल-परत यामुळे छोटी गळती थांबते.",
      },
      {
        title: "तुमचा पैसा तुम्हाला कळतो",
        description:
          "उधारी, रोकड वही, दिवस बंद, खर्च आणि नफा, नेहमी ताजे आणि एका क्लिकवर.",
      },
      {
        title: "नियम पाळा, निश्चिंत रहा",
        description:
          "नोंदवह्या, परवान्याची आठवण, GST कार्यपत्रके आणि CA पॅक ॲपमध्येच, वेगळे काम नाही.",
      },
      {
        title: "आत्मविश्वासाने वाढा",
        description:
          "कर्मचारी त्यांच्या भूमिकेसह जोडा, अधिक दुकाने उघडा, बॅकअप ठेवा आणि सॉफ्टवेअर सहज अपडेट करा.",
      },
      {
        title: "तुमची भाषा, तुमचा वेग",
        description:
          "मराठी, हिंदी आणि इंग्रजी, इंटरनेटशिवाय चालते आणि ॲपमध्येच पायरी-पायरीचे मार्गदर्शक.",
      },
    ],
  },
  steps: {
    eyebrow: "कसे चालते",
    title: "पहिल्या दिवसापासून वर्षअखेरपर्यंत, पायरी-पायरीने",
    description: "दुकान सिंचन मित्र कसे वापरते, सेटअपपासून CA च्या फाइलपर्यंत.",
    items: [
      {
        title: "तुमचा व्यवसाय प्रकार निवडा",
        description:
          "तुम्ही काय चालवता ते सांगा. तुमच्या प्रकारानुसार विभाग, सुरुवातीची माल यादी आणि नोंदवह्या ठरतात.",
        points: [
          "कृषी सेवा केंद्र, विक्रेता, दुकान किंवा रोपवाटिका",
          "तीन भाषांतील नावांसह सुरुवातीची माल यादी",
          "बिलावर दुकानाची माहिती आणि लोगो",
        ],
      },
      {
        title: "संगणकावर इन्स्टॉल करा आणि सुरू करा",
        description:
          "Windows ॲप इन्स्टॉल करा आणि आम्ही दिलेल्या कोडने सुरू करा. त्यानंतर ते इंटरनेटशिवाय चालते.",
        points: [
          "काउंटरसाठी Windows संगणक ॲप",
          "मालकासाठी Android मदतनीस ॲप",
          "दुकाने एकमेकांशी जोडायची असतील तेव्हा ऑनलाइन मोड",
        ],
      },
      {
        title: "माल, ग्राहक आणि शिल्लक भरा",
        description:
          "सुरुवातीच्या यादीतून माल निवडा; शेतकरी व पुरवठादार गाव, मोबाईल आणि सुरुवातीच्या बाकीसह जोडा.",
        points: [
          "HSN आणि GST % आपोआप भरतात",
          "प्रत्येक ग्राहकाची क्रेडिट मर्यादा",
          "नावे मराठी किंवा हिंदीतही",
        ],
      },
      {
        title: "रोज बिल करा",
        description:
          "शोधा किंवा स्कॅन करा, रोख, UPI, बँक, चेक किंवा उधार घ्या आणि बिल छापा किंवा WhatsApp वर पाठवा.",
        points: [
          "GST आणि विना-GST माल एकाच बिलात",
          "स्टॉक आपोआप कमी होतो",
          "माल परत, कोटेशन आणि मासिक बिले",
        ],
      },
      {
        title: "स्टॉक, मुदत आणि पैसे पाहा",
        description:
          "कमी स्टॉक व मुदत जवळ आलेल्या बॅच पाहा, आलेला माल नोंदवा, उधारी वसूल करा आणि दिवस बंद करा.",
        points: [
          "कमी स्टॉकची खूण आणि बॅच मुदत",
          "उधारी येणे आणि देणे",
          "रोकड वही आणि दिवस बंद (गल्ला)",
        ],
      },
      {
        title: "अहवाल, GST आणि वाढ",
        description:
          "नफा व अहवालांसाठी मालक विभाग, GST कार्यपत्रके आणि CA पॅक; कर्मचारी, दुकाने आणि बॅकअप जोडा.",
        points: [
          "GSTR-1 आणि GSTR-3B कार्यपत्रके",
          "तीन स्तरांचा CA / वार्षिक हिशोब पॅक",
          "विक्रेत्यांसाठी सिंचन फाइल आणि आलेख",
        ],
      },
    ],
  },
  features: {
    eyebrow: "सविस्तर",
    title: "काउंटरवर खरोखर उपयोगी सोयी",
    description: "ॲपमधील सहा विभागांवर जवळून नजर, खऱ्या स्क्रीनसह.",
    items: [
      {
        eyebrow: "बिलिंग",
        title: "ग्राहकाला काही सेकंदांत बिल",
        description: "डावीकडे माल शोधा, उजवीकडे चालू बिल. काउंटरवरची गर्दी म्हणजे आणखी एक बिल.",
        points: [
          "नाव, छोटे नाव किंवा बारकोडने माल शोधा; मराठी, हिंदी किंवा इंग्रजी अक्षरे चालतात",
          "बारकोड स्कॅन करताच माल बिलात; बिल सेव्ह होताच स्टॉक कमी",
          "GST आणि विना-GST माल एकाच बिलात",
          "रोख, UPI, बँक, उधार, चेक, किंवा थोडे आत्ता आणि बाकी उधार",
          "58 / 80 मिमी पावती प्रिंटरवर छापा, A4 PDF उघडा किंवा WhatsApp वर पाठवा",
          "बिलावर दुकानाचा लोगो; माल परत केल्यास क्रेडिट नोट, चुकीचे बिल रद्द होते, हटत नाही",
        ],
      },
      {
        eyebrow: "पैसे आणि उधारी",
        title: "कोणाकडे किती बाकी, एका नजरेत",
        description: "उधारी हा कृषी दुकानाचा कणा आहे. प्रत्येक शेतकऱ्याची बाकी एका टॅपवर.",
        points: [
          "येणे आणि देणे यांची बेरीज एकाच पानावर, ग्राहकानुसार",
          "प्रत्येक ग्राहकाची क्रेडिट मर्यादा: त्यापलीकडे बिल ॲप थांबवते",
          "खरीप आणि रब्बी हंगामानुसार उधारी",
          "पैसे आले / दिले, चेक आणि छापता किंवा पाठवता येणारे विवरणपत्र",
        ],
      },
      {
        eyebrow: "स्टॉक",
        title: "माल संपण्याआधीच सूचना देणारा स्टॉक",
        description: "दुकानात काय आहे, काय संपणार आणि काय पुन्हा मागवायचे ते कळते.",
        points: [
          "कमी स्टॉकची खूण आणि प्रत्येक बदलाच्या कारणासह स्टॉक इतिहास",
          "बॅच / लॉट आणि मुदत: लवकर संपणारी बॅच वर, मुदत संपलेली बॅच विकता येत नाही",
          "गोदामे आणि एका दुकानातून दुसऱ्यात माल पाठवणे",
          "तुमच्या व्यवसायासाठी सुरुवातीची माल यादी: तीन भाषांतील नाव, एकक, HSN आणि GST % आपोआप",
          "खत, बियाणे व कीटकनाशक दुकानांसाठी MRP लॉक",
        ],
      },
      {
        eyebrow: "सिंचन विक्रेते",
        title: "शेताचा आलेख काही मिनिटांत: 2D आणि 3D",
        description: "शेतकऱ्याच्या फाइलपासून आलेख, साहित्य यादी, कोटेशन आणि कागदपत्रांपर्यंत, एकाच प्रवाहात.",
        points: [
          "शेतकऱ्याची सिंचन फाइल नऊ पायऱ्यांत: योजना, शेतकरी, जमीन (गट / 7-12), पीक, आलेख, साहित्य, कागदपत्रे, पडताळणी, अनुदान",
          "शेताचा ऑटो आलेख 2D आणि 3D मध्ये, हवा तर हाताने बदला",
          "आलेखावरून साहित्य यादी, कोटेशन आणि बिल",
          "फाइलचे कागद संगणकावरून छापा, इंटरनेटशिवाय",
        ],
      },
      {
        eyebrow: "सर्व्हिस",
        title: "जॉब कार्ड आणि वॉरंटी, आपोआप",
        description: "पंप, फिल्टर आणि पॅनेल दुरुस्तीला परत येतात. प्रत्येकाचा प्रवास पावतीपासून परत देण्यापर्यंत नोंदवा.",
        points: [
          "खरेदीत आणि बिलावर सिरीयल क्रमांक",
          "सिरीयल असलेल्या मालाची वॉरंटी आपोआप सुरू",
          "पावतीपासून परत देण्यापर्यंत स्थिती आणि दिलेल्या तारखेसह जॉब कार्ड",
        ],
      },
      {
        eyebrow: "मालक विभाग आणि हिशोब",
        title: "अहवाल, GST आणि तुमचे CA, तयार",
        description: "मालक विभाग PIN च्या मागे आहे. नफा, रोकड आणि अहवाल एका क्लिकवर.",
        points: [
          "नफा आणि तोटा, रोकड वही आणि दिवस बंद (गल्ला), खर्च व उत्पन्न, बँक व रोख खाती",
          "GST रिटर्नची कार्यपत्रके (GSTR-1, GSTR-3B)",
          "तीन स्तरांचा CA / वार्षिक हिशोब पॅक, ताळमेळ व तपासण्यांसह",
          "प्रत्येक अहवालासाठी PDF केंद्र; कर्मचाऱ्याला काय दिसावे ते भूमिका ठरवतात",
        ],
      },
    ],
  },
  languages: {
    eyebrow: "भारतासाठी बनवलेले",
    title: "तुमच्या भाषेत बोलते, संगणकावर आणि फोनवर",
    description:
      "तेच ॲप मराठी, हिंदी आणि इंग्रजीत, हलक्या आणि गडद रंगांसह, आणि इंटरनेट नसतानाही चालणारे Windows ॲप.",
    mr: "मराठी",
    hi: "हिन्दी",
    en: "English",
    counterTitle: "काउंटरवर आणि खिशात",
    points: [
      "एका संगणकावर पूर्ण ऑफलाइन वापरा, किंवा दुकाने आणि Android मदतनीस ॲप जोडण्यासाठी ऑनलाइन",
      "Android मदतनीस ॲप मालकाचा दिवस फोनवर आणते: आठवणी, कमी स्टॉक आणि चालू फाइल",
      "हलके आणि गडद रंग, मोठे स्पष्ट अक्षर, आणि इंग्रजी अक्षरांतही Ctrl+K ने शोध",
      "ॲपमध्येच पायरी-पायरीचे मार्गदर्शक, इंटरनेटशिवाय चालते",
      "आपोआप बॅकअप, आणि इंटरनेटवरून किंवा पेनड्राइव्हवरून सॉफ्टवेअर अपडेट",
    ],
  },
  inside: {
    eyebrow: "सगळे आत",
    title: "सिंचन मित्र सोबत काय मिळते",
    description: "प्रत्येक विभाग खऱ्या ॲपप्रमाणे, तुमच्या व्यवसायाच्या प्रकारानुसार.",
    items: [
      {
        title: "रोजचे काम",
        items: [
          "बारकोड स्कॅनसह बिलिंग",
          "कोटेशन, ॲडव्हान्स, मासिक बिले",
          "विकलेली बिले, माल परत, क्रेडिट नोट",
          "पावती प्रिंटर, A4 PDF, WhatsApp",
          "ग्राहक, शेतकरी, पुरवठादार",
        ],
      },
      {
        title: "स्टॉक आणि माल",
        items: [
          "व्यवसाय प्रकारानुसार सुरुवातीची माल यादी",
          "कमी स्टॉक, इतिहास, समायोजन",
          "बॅच, लॉट आणि मुदत",
          "सिरीयल क्रमांक आणि वॉरंटी",
          "गोदामे आणि दुकानातून दुकानात माल",
        ],
      },
      {
        title: "पैसे",
        items: [
          "रोख, UPI, बँक, उधार, चेक",
          "उधारी येणे आणि देणे",
          "हंगामाची उधारी (खरीप, रब्बी)",
          "रोकड वही आणि दिवस बंद",
          "खर्च, उत्पन्न, बँक खाती",
        ],
      },
      {
        title: "नियम आणि नोंदवह्या",
        items: [
          "Form N, D, XIII, XIV नोंदवह्या",
          "आठवणीसह परवाने",
          "बंदी व निर्बंधित कीटकनाशकांचा पहारा",
          "बियाण्याचे लॉट तपशील आणि वैध दिनांक",
          "MRP लॉक",
        ],
      },
      {
        title: "सिंचन आणि अनुदान",
        items: [
          "नऊ पायऱ्यांची शेतकरी सिंचन फाइल",
          "शेताचा आलेख, 2D आणि 3D",
          "साहित्य यादी, कोटेशन, बिल",
          "फाइलचे कागद, इंटरनेटशिवाय",
          "पडताळणी आणि अनुदानाच्या पायऱ्या",
        ],
      },
      {
        title: "अहवाल आणि सेटअप",
        items: [
          "नफा-तोटा, अहवाल, PDF केंद्र",
          "GSTR-1 आणि GSTR-3B कार्यपत्रके",
          "CA / वार्षिक हिशोब पॅक",
          "कर्मचारी, भूमिका आणि अनेक दुकाने",
          "बॅकअप, रिस्टोअर आणि सॉफ्टवेअर अपडेट",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "ॲप पाहा",
    title: "खऱ्या ॲपच्या खऱ्या स्क्रीन",
    description:
      "Windows ॲपवर विभागानुसार एक झलक. तुम्ही पाहता ते प्रत्यक्ष वापरातले सॉफ्टवेअर आहे, नमुना माहितीसह.",
    all: "सर्व",
    categories: {
      Billing: "बिलिंग",
      Stock: "स्टॉक",
      Money: "पैसे",
      Irrigation: "सिंचन",
      Reports: "अहवाल",
      Registers: "नोंदवह्या",
    },
    hint: "खऱ्या सिंचन मित्र ॲपच्या छोट्या स्क्रीन, नमुना माहितीसह. संपूर्ण ॲप पाहण्यासाठी डेमो मागवा.",
    titles: {
      "irr-billing": "ग्राहकाला बिल करा",
      "irr-sold-bills": "विकलेली बिले, माल परत आणि कोटेशन",
      "irr-parties": "ग्राहक, शेतकरी आणि पुरवठादार",
      "irr-stock": "स्टॉक आणि कमी स्टॉकची खूण",
      "ksk-batches": "बॅच आणि मुदत",
      "ksk-stock-board": "काउंटरसाठी स्टॉक व दर फलक",
      "irr-pipe-grid": "पाईप आकार व दर्जा तक्ता",
      "irr-warranty": "वॉरंटी आणि AMC",
      "irr-udhaar": "उधारी: येणे आणि देणे",
      "irr-cash-close": "रोकड वही आणि दिवस बंद",
      "irr-irr-file": "सिंचन फाइल",
      "irr-irr-land": "जमीन, पीक आणि शेताचा आलेख",
      "aalekh-2d": "आलेख 2D मध्ये",
      "aalekh-3d": "आलेख 3D मध्ये",
      "irr-irr-material": "साहित्य यादी, कोटेशन आणि बिल",
      "irr-irr-papers": "फाइलची कागदपत्रे",
      "irr-irr-stages": "पडताळणी, अनुदान आणि टप्पे",
      "irr-owner-section": "मालक विभाग",
      "irr-profit": "नफा आणि तोटा",
      "irr-reports": "अहवाल",
      "irr-gst": "GST रिटर्न कार्यपत्रके",
      "irr-ca-pack": "CA / वार्षिक हिशोब पॅक",
      "ksk-pack-registers": "नोंदवह्या: Form N, D, XIII, XIV",
      "ksk-licences": "परवाने आणि आठवण",
      "ksk-regulated-sale": "बंदी असलेल्या कीटकनाशकाची विक्री ॲप थांबवते",
      "ksk-todays-jobs": "परवाने आणि मुदतीची आठवण",
      "sol-projects": "सोलर प्रकल्प",
      "nur-lots": "रोपांचे लॉट आणि बॅच",
    },
  },
  download: {
    eyebrow: "डाउनलोड",
    title: "सिंचन मित्र मिळवा",
    description:
      "तुमच्या काउंटरसाठी आणि फोनसाठी ॲप डाउनलोड करा. Windows ॲप आम्ही दिलेल्या कोडने सुरू होते.",
    windows: {
      title: "Windows संगणक ॲप",
      description: "तुमच्या बिलिंग काउंटर आणि ऑफिससाठी संपूर्ण ॲप.",
      points: ["बिलिंग, स्टॉक, उधारी आणि अहवाल", "इंटरनेटशिवाय चालते", "तुमच्या कोडने सुरू"],
    },
    android: {
      title: "Android मदतनीस ॲप",
      description: "तुमचे दुकान खिशात: होम, बिलिंग, स्टॉक आणि ग्राहक फोनवर.",
      points: ["आठवणी आणि कमी स्टॉकची सूचना", "चालू सिंचन फाइल पाहा", "मराठी, हिंदी, इंग्रजी"],
    },
    button: "डाउनलोड",
    soon: "डाउनलोड लिंक लवकरच",
    request: "ॲक्सेस मागा",
    note: "सक्रियता कोड हवा आहे किंवा इन्स्टॉल करण्यात मदत हवी? आमच्याशी संपर्क करा, आम्ही तुमच्यासोबत सेटअप करू.",
  },
  faq: {
    eyebrow: "प्रश्न",
    title: "सिंचन मित्र: वारंवार विचारले जाणारे प्रश्न",
    items: [
      {
        question: "सिंचन मित्र वापरण्यासाठी इंटरनेट लागते का?",
        answer:
          "नाही, संगणकावरील रोजचे बिलिंग, स्टॉक आणि अहवालांसाठी लागत नाही. बिले, कोटेशन आणि PDF तुमच्या संगणकावरच बनतात. ऑनलाइन मोडमध्ये दुकाने आणि Android मदतनीस ॲप जोडले जातात.",
      },
      {
        question: "कोणत्या भाषा चालतात?",
        answer:
          "मराठी, हिंदी आणि इंग्रजी. इंग्रजी अक्षरांतही शोध घेता येतो आणि ग्राहक व मालाची नावे तुमच्या भाषेत ठेवता येतात.",
      },
      {
        question: "कोणत्या व्यवसायांसाठी आहे?",
        answer:
          "कृषी सेवा केंद्र, खत, बियाणे व कीटकनाशक विक्रेते, सिंचन, ठिबक व तुषार विक्रेते, पाईप / PVC दुकाने, सौर व सौर पंप विक्रेते आणि रोपवाटिका.",
      },
      {
        question: "बिल छापता किंवा शेअर करता येते का?",
        answer:
          "होय: 58 / 80 मिमी पावती प्रिंटर, A4 PDF किंवा WhatsApp. बिलावर तुमच्या दुकानाचा लोगो छापता येतो.",
      },
      {
        question: "माझ्या माहितीचे आणि अपडेटचे काय?",
        answer:
          "ॲप आपोआप बॅकअप घेते आणि तो परत आणू शकते. सॉफ्टवेअर अपडेट इंटरनेटवरून किंवा पेनड्राइव्हवरून येतात.",
      },
      {
        question: "Android ॲप आहे का?",
        answer:
          "होय, Windows ॲपसोबत Android मदतनीस ॲप आहे, उदाहरणार्थ मालकाच्या रोजच्या आठवणींसाठी. तुमच्या प्लॅनसाठी ते कधी मिळेल ते आम्हाला विचारा.",
      },
      {
        question: "किती खर्च येतो?",
        answer:
          "सिंचन मित्र सबस्क्रिप्शन प्लॅनवर मिळते. जाहीर दरपत्रक नाही: आमच्याशी संपर्क करा, आम्ही तुमच्या दुकानासाठी योग्य प्लॅन सुचवू आणि डेमो देऊ.",
      },
    ],
  },
  cta: {
    eyebrow: "तुमच्या दुकानासाठी पाहा",
    title: "सिंचन मित्रचा डेमो मागवा",
    description:
      "तुमचा व्यवसाय प्रकार आणि दुकानांची संख्या सांगा. आम्ही ॲप दाखवू आणि प्लॅन सुचवू. {email} वर लिहा किंवा {phone} वर फोन करा ({hours}).",
    primary: "डेमो मागवा",
    secondary: "{phone} वर फोन करा",
  },
  ui: {
    close: "बंद करा",
    previous: "मागील स्क्रीनशॉट",
    next: "पुढील स्क्रीनशॉट",
    screenshotAlt: "सिंचन मित्र स्क्रीनशॉट (नमुना माहिती)",
    heroAlt:
      "Windows वरील सिंचन मित्रचे होम पान: ग्राहकाला बिल करा बटण, कमी स्टॉक कार्ड आणि सिंचन अर्ज",
    phoneAlt: "सिंचन मित्र Android मदतनीस ॲपचे होम पान",
    categories: "स्क्रीनशॉटचे वर्ग",
  },
};

// ---------------------------------------------------------------------------------------------- Hindi
const hi: Copy = {
  htmlLang: "hi",
  meta: {
    title: "सिंचन मित्र: कृषि व्यवसाय के लिए सॉफ़्टवेयर",
    description:
      "सिंचन मित्र कृषि सेवा केंद्र, सिंचाई विक्रेताओं और संबंधित दुकानों के लिए एग्रीबिज़नेस सॉफ़्टवेयर है: बिलिंग, स्टॉक, उधार, GST व CA रिपोर्ट और आलेख के साथ सिंचाई फ़ाइल। मराठी, हिंदी और अंग्रेज़ी में।",
  },
  subnav: {
    why: "क्यों",
    steps: "कैसे चलता है",
    features: "सुविधाएँ",
    screens: "स्क्रीन",
    download: "डाउनलोड",
    faq: "सवाल",
    demo: "डेमो माँगें",
    pageLanguage: "पेज की भाषा",
  },
  hero: {
    badge: "ALPHARISE का एग्रीबिज़नेस सॉफ़्टवेयर",
    headline: "आपकी पूरी कृषि दुकान, एक ऐप में",
    intro:
      "बिलिंग, स्टॉक, उधार, GST व CA रिपोर्ट और सिंचाई फ़ाइल: मराठी, हिंदी और अंग्रेज़ी में। कृषि सेवा केंद्र, खाद, बीज व कीटनाशक विक्रेता, सिंचाई व ड्रिप विक्रेता, पाइप दुकानें, सोलर विक्रेता और नर्सरी के लिए।",
    sub: "इंटरनेट के बिना भी आपके Windows कंप्यूटर पर चलता है।",
    ctaDemo: "डेमो माँगें",
    ctaDownload: "ऐप डाउनलोड करें",
    ctaScreens: "स्क्रीन देखें",
    chips: ["मराठी · हिंदी · English", "Windows कंप्यूटर ऐप", "Android सहायक ऐप", "इंटरनेट के बिना चलता है"],
    floats: ["उधार हमेशा साफ़", "GST तैयार", "मियाद की चेतावनी"],
    facts: [
      { value: 10, label: "व्यवसाय के प्रकार, तैयार सेटअप के साथ" },
      { value: 3, label: "भाषाएँ: मराठी, हिंदी, अंग्रेज़ी" },
      { value: "PC + Android", label: "Windows ऐप के साथ Android सहायक ऐप" },
      { value: "बिना इंटरनेट", label: "रोज़ का बिलिंग बिना इंटरनेट" },
    ],
  },
  types: {
    eyebrow: "आपकी दुकान के लिए",
    title: "एक ऐप, आपके व्यवसाय के प्रकार के अनुसार",
    description:
      "अपना प्रकार चुनें; सिंचन मित्र उस दुकान को चाहिए विभाग, शुरुआती माल सूची और रजिस्टर अपने आप तैयार रखता है।",
    items: [
      {
        title: "कृषि सेवा केंद्र",
        description:
          "खाद, बीज और कीटनाशक एक ही दुकान में: Form N, D, XIII, XIV रजिस्टर, याद दिलाने वाले लाइसेंस, बैच व मियाद, MRP लॉक।",
      },
      {
        title: "खाद विक्रेता",
        description:
          "खाद के बिल व रजिस्टर, लाइसेंस की याद, मियाद के साथ बैच और MRP लॉक, ताकि कोई बोरी MRP से ऊपर न बिके।",
      },
      {
        title: "बीज विक्रेता",
        description:
          "टैग, अंकुरण, शुद्धता और वैध तारीख के साथ बीज के लॉट; वैध तारीख के बाद बिक्री रुक जाती है।",
      },
      {
        title: "कीटनाशक विक्रेता",
        description:
          "प्रतिबंधित और सीमित कीटनाशकों की सूचियाँ ऐप में ही; प्रतिबंधित बिक्री ऐप खुद रोक देता है। Form XIII व XIV रजिस्टर।",
      },
      {
        title: "सिंचाई, ड्रिप व स्प्रिंकलर विक्रेता",
        description:
          "किसान की सिंचाई फ़ाइल, 2D व 3D में खेत का आलेख, साहित्य सूची, कोटेशन व बिल, दस्तावेज़ और अनुदान के चरण।",
      },
      {
        title: "पाइप / PVC दुकान",
        description:
          "पाइप के आकार व ग्रेड का स्टॉक ग्रिड, IS / BIS मानक, तेज़ बिलिंग और ठेकेदारों व किसानों का उधार।",
      },
      {
        title: "सोलर व सोलर पंप",
        description:
          "हर पैनल व पंप का सीरियल नंबर, अपने आप शुरू होने वाली वारंटी, सर्विस के लिए जॉब कार्ड।",
      },
      {
        title: "नर्सरी",
        description:
          "पौधों व सामग्री की श्रेणियाँ, लाइसेंस व मियाद की याद, पौधों और सामग्री के लिए बैच रिकॉर्ड।",
      },
    ],
  },
  why: {
    eyebrow: "सिंचन मित्र क्यों?",
    title: "कृषि दुकान की मुश्किलों का हल",
    description:
      "कृषि दुकान उधार, मियाद, लाइसेंस और कागज़ात पर चलती है। सिंचन मित्र इन सबकी फ़िक्र खुद संभालता है।",
    problem: "आज",
    solution: "सिंचन मित्र के साथ",
    items: [
      {
        title: "कॉपी में उधार",
        problem: "किसानों का उधार कॉपी में लिखा है। किसका कितना और कब से बाकी है, बस अंदाज़ा है।",
        solution:
          "हर किसान का बाकी एक जगह, मौसम के अनुसार (खरीफ, रबी), और ऐप खुद लागू करता क्रेडिट सीमा।",
      },
      {
        title: "स्टॉक के झटके",
        problem: "भीड़ के दिन माल खत्म हो जाता है, या शेल्फ पर चुपचाप मियाद निकल जाती है।",
        solution:
          "कम स्टॉक का निशान, हर लॉट पर बैच व मियाद, और मियाद खत्म बैच बिक ही नहीं सकता।",
      },
      {
        title: "रजिस्टर और लाइसेंस",
        problem: "Form रजिस्टर और लाइसेंस का नवीनीकरण जाँच आने तक भूल जाते हैं।",
        solution:
          "बिल बनाते समय Form N, D, XIII, XIV रजिस्टर भरते जाते हैं, लाइसेंस खत्म होने से पहले याद, प्रतिबंधित कीटनाशक नहीं बिकता।",
      },
      {
        title: "अनुदान के कागज़",
        problem: "हर सिंचाई फ़ाइल के लिए ज़मीन के कागज़, आलेख, कोटेशन और फ़ॉर्म हाथ से बनाने पड़ते हैं।",
        solution:
          "एक ही सिंचाई फ़ाइल: ज़मीन, फ़सल, 2D व 3D आलेख, साहित्य सूची, कोटेशन और दस्तावेज़।",
      },
      {
        title: "साल के अंत की भागदौड़",
        problem: "GST रिटर्न और CA के सवाल यानी हफ़्तों बिल खोजते रहना।",
        solution:
          "GSTR-1 व GSTR-3B वर्कशीट, नफ़ा-नुकसान और CA / वार्षिक हिसाब पैक, जब चाहें तैयार।",
      },
      {
        title: "कर्मचारी और शाखाएँ",
        problem: "किसे क्या दिखे इस पर नियंत्रण और एक से ज़्यादा दुकानें चलाना मुश्किल।",
        solution:
          "कर्मचारियों की भूमिकाएँ व अनुमतियाँ, PIN वाला मालिक विभाग, कई दुकानें और उनके बीच माल भेजना।",
      },
    ],
  },
  benefits: {
    eyebrow: "फ़ायदे",
    title: "आपको क्या मिलता है",
    description: "मालिक, काउंटर के कर्मचारी और हिसाब देखने वाले, सबको रोज़ के काम में फ़ायदा।",
    items: [
      {
        title: "काउंटर पर समय की बचत",
        description:
          "स्कैन करें या खोजें, बिल बनाएँ और छापें, भीड़ में भी कुछ सेकंड में। दोबारा लिखना नहीं, कैलकुलेटर नहीं।",
      },
      {
        title: "कम गलतियाँ, कम नुकसान",
        description:
          "MRP लॉक, क्रेडिट सीमा, मियाद की रोक और साफ़ माल-वापसी से छोटे रिसाव रुकते हैं।",
      },
      {
        title: "अपना पैसा आपको दिखता है",
        description:
          "उधार, रोकड़ बही, दिन बंद, खर्च और नफ़ा, हमेशा ताज़ा और एक क्लिक पर।",
      },
      {
        title: "नियम निभाएँ, निश्चिंत रहें",
        description:
          "रजिस्टर, लाइसेंस की याद, GST वर्कशीट और CA पैक ऐप में ही, अलग काम नहीं।",
      },
      {
        title: "भरोसे के साथ बढ़ें",
        description:
          "कर्मचारी उनकी भूमिका के साथ जोड़ें, और दुकानें खोलें, बैकअप रखें और सॉफ़्टवेयर आसानी से अपडेट करें।",
      },
      {
        title: "आपकी भाषा, आपकी रफ़्तार",
        description:
          "मराठी, हिंदी और अंग्रेज़ी, बिना इंटरनेट चलता है और ऐप के अंदर ही कदम-दर-कदम गाइड।",
      },
    ],
  },
  steps: {
    eyebrow: "कैसे चलता है",
    title: "पहले दिन से साल के अंत तक, कदम-दर-कदम",
    description: "दुकान सिंचन मित्र कैसे इस्तेमाल करती है, सेटअप से CA की फ़ाइल तक।",
    items: [
      {
        title: "अपने व्यवसाय का प्रकार चुनें",
        description:
          "बताइए आप क्या चलाते हैं। आपके प्रकार से विभाग, शुरुआती माल सूची और रजिस्टर तय होते हैं।",
        points: [
          "कृषि सेवा केंद्र, विक्रेता, दुकान या नर्सरी",
          "तीन भाषाओं के नामों वाली शुरुआती माल सूची",
          "बिल पर दुकान की जानकारी और लोगो",
        ],
      },
      {
        title: "कंप्यूटर पर इंस्टॉल करें और चालू करें",
        description:
          "Windows ऐप इंस्टॉल करें और हमारे दिए कोड से चालू करें। फिर वह बिना इंटरनेट चलता है।",
        points: [
          "काउंटर के लिए Windows कंप्यूटर ऐप",
          "मालिक के लिए Android सहायक ऐप",
          "दुकानें जोड़नी हों तब ऑनलाइन मोड",
        ],
      },
      {
        title: "माल, ग्राहक और बाकी भरें",
        description:
          "शुरुआती सूची से माल चुनें; किसान व आपूर्तिकर्ता गाँव, मोबाइल और शुरुआती बाकी के साथ जोड़ें।",
        points: [
          "HSN और GST % अपने आप भरते हैं",
          "हर ग्राहक की क्रेडिट सीमा",
          "नाम मराठी या हिंदी में भी",
        ],
      },
      {
        title: "रोज़ बिल बनाएँ",
        description:
          "खोजें या स्कैन करें, नकद, UPI, बैंक, चेक या उधार लें और बिल छापें या WhatsApp पर भेजें।",
        points: [
          "GST और बिना-GST माल एक ही बिल में",
          "स्टॉक अपने आप घटता है",
          "माल वापसी, कोटेशन और मासिक बिल",
        ],
      },
      {
        title: "स्टॉक, मियाद और पैसे देखें",
        description:
          "कम स्टॉक और मियाद पास वाले बैच देखें, आया माल दर्ज करें, उधार वसूलें और दिन बंद करें।",
        points: [
          "कम स्टॉक का निशान और बैच की मियाद",
          "उधार लेना और देना",
          "रोकड़ बही और दिन बंद (गल्ला)",
        ],
      },
      {
        title: "रिपोर्ट, GST और बढ़त",
        description:
          "नफ़े व रिपोर्ट के लिए मालिक विभाग, GST वर्कशीट और CA पैक; कर्मचारी, दुकानें और बैकअप जोड़ें।",
        points: [
          "GSTR-1 और GSTR-3B वर्कशीट",
          "तीन स्तरों का CA / वार्षिक हिसाब पैक",
          "विक्रेताओं के लिए सिंचाई फ़ाइल और आलेख",
        ],
      },
    ],
  },
  features: {
    eyebrow: "विस्तार से",
    title: "काउंटर पर सचमुच काम की सुविधाएँ",
    description: "ऐप के छह विभागों पर करीब से नज़र, असली स्क्रीन के साथ।",
    items: [
      {
        eyebrow: "बिलिंग",
        title: "ग्राहक को कुछ सेकंड में बिल",
        description: "बाईं ओर माल खोजें, दाईं ओर चालू बिल। काउंटर की भीड़ यानी बस एक और बिल।",
        points: [
          "नाम, छोटे नाम या बारकोड से माल खोजें; मराठी, हिंदी या अंग्रेज़ी अक्षर चलते हैं",
          "बारकोड स्कैन करते ही माल बिल में; बिल सेव होते ही स्टॉक घटता है",
          "GST और बिना-GST माल एक ही बिल में",
          "नकद, UPI, बैंक, उधार, चेक, या थोड़ा अभी और बाकी उधार",
          "58 / 80 मिमी रसीद प्रिंटर पर छापें, A4 PDF खोलें या WhatsApp पर भेजें",
          "बिल पर दुकान का लोगो; माल वापस हो तो क्रेडिट नोट, गलत बिल रद्द होता है, मिटता नहीं",
        ],
      },
      {
        eyebrow: "पैसे और उधार",
        title: "किसका कितना बाकी, एक नज़र में",
        description: "उधार कृषि दुकान की रीढ़ है। हर किसान का बाकी एक टैप पर।",
        points: [
          "लेना और देना का योग एक ही पेज पर, ग्राहक के अनुसार",
          "हर ग्राहक की क्रेडिट सीमा: उससे आगे बिल ऐप रोकता है",
          "खरीफ और रबी मौसम के अनुसार उधार",
          "पैसे आए / दिए, चेक और छापने या भेजने लायक विवरण",
        ],
      },
      {
        eyebrow: "स्टॉक",
        title: "माल खत्म होने से पहले चेताने वाला स्टॉक",
        description: "दुकान में क्या है, क्या खत्म होने वाला है और क्या फिर मँगाना है, सब पता चलता है।",
        points: [
          "कम स्टॉक का निशान और हर बदलाव के कारण के साथ स्टॉक इतिहास",
          "बैच / लॉट और मियाद: जल्दी खत्म होने वाला बैच ऊपर, मियाद खत्म बैच बिक नहीं सकता",
          "गोदाम और एक दुकान से दूसरी में माल भेजना",
          "आपके व्यवसाय की शुरुआती माल सूची: तीन भाषाओं में नाम, इकाई, HSN और GST % अपने आप",
          "खाद, बीज और कीटनाशक दुकानों के लिए MRP लॉक",
        ],
      },
      {
        eyebrow: "सिंचाई विक्रेता",
        title: "खेत का आलेख कुछ मिनट में: 2D और 3D",
        description: "किसान की फ़ाइल से आलेख, साहित्य सूची, कोटेशन और दस्तावेज़ों तक, एक ही प्रवाह में।",
        points: [
          "किसान की सिंचाई फ़ाइल नौ चरणों में: योजना, किसान, ज़मीन (गट / 7-12), फ़सल, आलेख, साहित्य, दस्तावेज़, सत्यापन, अनुदान",
          "खेत का ऑटो आलेख 2D और 3D में, चाहें तो हाथ से बदलें",
          "आलेख से साहित्य सूची, कोटेशन और बिल",
          "फ़ाइल के कागज़ कंप्यूटर से छापें, बिना इंटरनेट",
        ],
      },
      {
        eyebrow: "सर्विस",
        title: "जॉब कार्ड और वारंटी, अपने आप",
        description: "पंप, फ़िल्टर और पैनल मरम्मत के लिए लौटते हैं। हर एक का सफ़र रसीद से वापसी तक दर्ज करें।",
        points: [
          "खरीद में और बिल पर सीरियल नंबर",
          "सीरियल वाले माल की वारंटी अपने आप शुरू",
          "रसीद से वापसी तक स्थिति और देय तारीख के साथ जॉब कार्ड",
        ],
      },
      {
        eyebrow: "मालिक विभाग और हिसाब",
        title: "रिपोर्ट, GST और आपके CA, तैयार",
        description: "मालिक विभाग PIN के पीछे है। नफ़ा, रोकड़ और रिपोर्ट एक क्लिक पर।",
        points: [
          "नफ़ा-नुकसान, रोकड़ बही और दिन बंद (गल्ला), खर्च व आमदनी, बैंक व नकद खाते",
          "GST रिटर्न की वर्कशीट (GSTR-1, GSTR-3B)",
          "तीन स्तरों का CA / वार्षिक हिसाब पैक, मिलान व जाँच के साथ",
          "हर रिपोर्ट के लिए PDF केंद्र; कर्मचारी को क्या दिखे यह भूमिकाएँ तय करती हैं",
        ],
      },
    ],
  },
  languages: {
    eyebrow: "भारत के लिए बना",
    title: "आपकी भाषा में बोलता है, कंप्यूटर और फ़ोन पर",
    description:
      "वही ऐप मराठी, हिंदी और अंग्रेज़ी में, हल्के और गहरे रंगों के साथ, और इंटरनेट न हो तब भी चलने वाला Windows ऐप।",
    mr: "मराठी",
    hi: "हिन्दी",
    en: "English",
    counterTitle: "काउंटर पर और जेब में",
    points: [
      "एक कंप्यूटर पर पूरी तरह ऑफ़लाइन चलाएँ, या दुकानें और Android सहायक ऐप जोड़ने के लिए ऑनलाइन",
      "Android सहायक ऐप मालिक का दिन फ़ोन पर लाता है: याद, कम स्टॉक और चालू फ़ाइलें",
      "हल्के और गहरे रंग, बड़े साफ़ अक्षर, और अंग्रेज़ी अक्षरों में भी Ctrl+K से खोज",
      "ऐप के अंदर कदम-दर-कदम गाइड, बिना इंटरनेट चलता है",
      "अपने आप बैकअप, और इंटरनेट या पेन ड्राइव से सॉफ़्टवेयर अपडेट",
    ],
  },
  inside: {
    eyebrow: "सब कुछ अंदर",
    title: "सिंचन मित्र के साथ क्या मिलता है",
    description: "हर विभाग असली ऐप जैसा, आपके व्यवसाय के प्रकार के अनुसार।",
    items: [
      {
        title: "रोज़ का काम",
        items: [
          "बारकोड स्कैन के साथ बिलिंग",
          "कोटेशन, एडवांस, मासिक बिल",
          "बिके हुए बिल, माल वापसी, क्रेडिट नोट",
          "रसीद प्रिंटर, A4 PDF, WhatsApp",
          "ग्राहक, किसान, आपूर्तिकर्ता",
        ],
      },
      {
        title: "स्टॉक और माल",
        items: [
          "व्यवसाय के प्रकार के अनुसार शुरुआती माल सूची",
          "कम स्टॉक, इतिहास, समायोजन",
          "बैच, लॉट और मियाद",
          "सीरियल नंबर और वारंटी",
          "गोदाम और दुकान से दुकान माल",
        ],
      },
      {
        title: "पैसे",
        items: [
          "नकद, UPI, बैंक, उधार, चेक",
          "उधार लेना और देना",
          "मौसम का उधार (खरीफ, रबी)",
          "रोकड़ बही और दिन बंद",
          "खर्च, आमदनी, बैंक खाते",
        ],
      },
      {
        title: "नियम और रजिस्टर",
        items: [
          "Form N, D, XIII, XIV रजिस्टर",
          "याद के साथ लाइसेंस",
          "प्रतिबंधित व सीमित कीटनाशकों का पहरा",
          "बीज लॉट का ब्योरा और वैध तारीख",
          "MRP लॉक",
        ],
      },
      {
        title: "सिंचाई और अनुदान",
        items: [
          "नौ चरणों की किसान सिंचाई फ़ाइल",
          "खेत का आलेख, 2D और 3D",
          "साहित्य सूची, कोटेशन, बिल",
          "फ़ाइल के कागज़, बिना इंटरनेट",
          "सत्यापन और अनुदान के चरण",
        ],
      },
      {
        title: "रिपोर्ट और सेटअप",
        items: [
          "नफ़ा-नुकसान, रिपोर्ट, PDF केंद्र",
          "GSTR-1 और GSTR-3B वर्कशीट",
          "CA / वार्षिक हिसाब पैक",
          "कर्मचारी, भूमिकाएँ और कई दुकानें",
          "बैकअप, रिस्टोर और सॉफ़्टवेयर अपडेट",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "ऐप देखें",
    title: "असली ऐप की असली स्क्रीन",
    description:
      "Windows ऐप की विभाग के अनुसार एक झलक। आप जो देखते हैं वह असल में चलने वाला सॉफ़्टवेयर है, नमूना जानकारी के साथ।",
    all: "सभी",
    categories: {
      Billing: "बिलिंग",
      Stock: "स्टॉक",
      Money: "पैसे",
      Irrigation: "सिंचाई",
      Reports: "रिपोर्ट",
      Registers: "रजिस्टर",
    },
    hint: "असली सिंचन मित्र ऐप की छोटी स्क्रीन, नमूना जानकारी के साथ। पूरा ऐप देखने के लिए डेमो माँगें।",
    titles: {
      "irr-billing": "ग्राहक को बिल बनाएँ",
      "irr-sold-bills": "बिके बिल, माल वापसी और कोटेशन",
      "irr-parties": "ग्राहक, किसान और आपूर्तिकर्ता",
      "irr-stock": "स्टॉक और कम स्टॉक का निशान",
      "ksk-batches": "बैच और मियाद",
      "ksk-stock-board": "काउंटर के लिए स्टॉक व दर फलक",
      "irr-pipe-grid": "पाइप आकार व ग्रेड ग्रिड",
      "irr-warranty": "वारंटी और AMC",
      "irr-udhaar": "उधार: लेना और देना",
      "irr-cash-close": "रोकड़ बही और दिन बंद",
      "irr-irr-file": "सिंचाई फ़ाइलें",
      "irr-irr-land": "ज़मीन, फ़सल और खेत का आलेख",
      "aalekh-2d": "आलेख 2D में",
      "aalekh-3d": "आलेख 3D में",
      "irr-irr-material": "साहित्य सूची, कोटेशन और बिल",
      "irr-irr-papers": "फ़ाइल के दस्तावेज़",
      "irr-irr-stages": "सत्यापन, अनुदान और चरण",
      "irr-owner-section": "मालिक विभाग",
      "irr-profit": "नफ़ा और नुकसान",
      "irr-reports": "रिपोर्ट",
      "irr-gst": "GST रिटर्न वर्कशीट",
      "irr-ca-pack": "CA / वार्षिक हिसाब पैक",
      "ksk-pack-registers": "रजिस्टर: Form N, D, XIII, XIV",
      "ksk-licences": "लाइसेंस और याद",
      "ksk-regulated-sale": "प्रतिबंधित कीटनाशक की बिक्री ऐप रोकता है",
      "ksk-todays-jobs": "लाइसेंस और मियाद की याद",
      "sol-projects": "सोलर प्रोजेक्ट",
      "nur-lots": "पौधों के लॉट और बैच",
    },
  },
  download: {
    eyebrow: "डाउनलोड",
    title: "सिंचन मित्र पाएँ",
    description:
      "अपने काउंटर और फ़ोन के लिए ऐप डाउनलोड करें। Windows ऐप हमारे दिए कोड से चालू होता है।",
    windows: {
      title: "Windows कंप्यूटर ऐप",
      description: "आपके बिलिंग काउंटर और ऑफ़िस के लिए पूरा ऐप।",
      points: ["बिलिंग, स्टॉक, उधार और रिपोर्ट", "बिना इंटरनेट चलता है", "आपके कोड से चालू"],
    },
    android: {
      title: "Android सहायक ऐप",
      description: "आपकी दुकान जेब में: होम, बिलिंग, स्टॉक और ग्राहक फ़ोन पर।",
      points: ["याद और कम स्टॉक की सूचना", "चालू सिंचाई फ़ाइलें देखें", "मराठी, हिंदी, अंग्रेज़ी"],
    },
    button: "डाउनलोड",
    soon: "डाउनलोड लिंक जल्द",
    request: "एक्सेस माँगें",
    note: "एक्टिवेशन कोड चाहिए या इंस्टॉल में मदद? हमसे संपर्क करें, हम आपके साथ सेटअप कर देंगे।",
  },
  faq: {
    eyebrow: "सवाल",
    title: "सिंचन मित्र: अक्सर पूछे जाने वाले सवाल",
    items: [
      {
        question: "क्या सिंचन मित्र के लिए इंटरनेट चाहिए?",
        answer:
          "नहीं, कंप्यूटर पर रोज़ के बिलिंग, स्टॉक और रिपोर्ट के लिए नहीं। बिल, कोटेशन और PDF आपके कंप्यूटर पर ही बनते हैं। ऑनलाइन मोड में दुकानें और Android सहायक ऐप जुड़ते हैं।",
      },
      {
        question: "कौन-सी भाषाएँ चलती हैं?",
        answer:
          "मराठी, हिंदी और अंग्रेज़ी। अंग्रेज़ी अक्षरों में भी खोज सकते हैं और ग्राहक व माल के नाम अपनी भाषा में रख सकते हैं।",
      },
      {
        question: "यह किन व्यवसायों के लिए है?",
        answer:
          "कृषि सेवा केंद्र, खाद, बीज व कीटनाशक विक्रेता, सिंचाई, ड्रिप व स्प्रिंकलर विक्रेता, पाइप / PVC दुकानें, सोलर व सोलर पंप विक्रेता और नर्सरी।",
      },
      {
        question: "क्या बिल छाप या शेयर कर सकते हैं?",
        answer:
          "हाँ: 58 / 80 मिमी रसीद प्रिंटर, A4 PDF या WhatsApp। बिल पर आपकी दुकान का लोगो छप सकता है।",
      },
      {
        question: "मेरे डेटा और अपडेट का क्या?",
        answer:
          "ऐप अपने आप बैकअप लेता है और उसे वापस ला सकता है। सॉफ़्टवेयर अपडेट इंटरनेट या पेन ड्राइव से आते हैं।",
      },
      {
        question: "क्या Android ऐप है?",
        answer:
          "हाँ, Windows ऐप के साथ Android सहायक ऐप है, जैसे मालिक की रोज़ की याद के लिए। आपके प्लान के लिए वह कब मिलेगा, हमसे पूछें।",
      },
      {
        question: "कितना खर्च आता है?",
        answer:
          "सिंचन मित्र सब्सक्रिप्शन प्लान पर मिलता है। कोई सार्वजनिक दर सूची नहीं: हमसे संपर्क करें, हम आपकी दुकान के लिए सही प्लान सुझाएँगे और डेमो देंगे।",
      },
    ],
  },
  cta: {
    eyebrow: "अपनी दुकान के लिए देखें",
    title: "सिंचन मित्र का डेमो माँगें",
    description:
      "अपने व्यवसाय का प्रकार और दुकानों की संख्या बताइए। हम ऐप दिखाएँगे और प्लान सुझाएँगे। {email} पर लिखें या {phone} पर फ़ोन करें ({hours})।",
    primary: "डेमो माँगें",
    secondary: "{phone} पर फ़ोन करें",
  },
  ui: {
    close: "बंद करें",
    previous: "पिछला स्क्रीनशॉट",
    next: "अगला स्क्रीनशॉट",
    screenshotAlt: "सिंचन मित्र स्क्रीनशॉट (नमूना जानकारी)",
    heroAlt:
      "Windows पर सिंचन मित्र का होम पेज: ग्राहक को बिल बनाएँ बटन, कम स्टॉक कार्ड और सिंचाई आवेदन",
    phoneAlt: "सिंचन मित्र Android सहायक ऐप का होम पेज",
    categories: "स्क्रीनशॉट की श्रेणियाँ",
  },
};

export const copy: Record<Lang, Copy> = { en, mr, hi };
