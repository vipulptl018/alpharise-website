/**
 * Detail pages behind the business-type cards of the Sinchan Mitra page:
 * /sinchan-mitra/for/<slug> (English), /sinchan-mitra/mr/for/<slug>, /sinchan-mitra/hi/for/<slug>.
 * Every line follows the app's feature list for that business type (docs/BUSINESS_TYPE_BROCHURES.md);
 * no number of pack entries is quoted, because those lists grow. Screens are gallery ids (see
 * sinchan-mitra.ts); their titles come from the gallery copy.
 */
import type { Lang } from "@/lib/content/sinchan-mitra";

export const detailSlugs = [
  "krushi-seva-kendra",
  "fertilizer-dealer",
  "seed-dealer",
  "pesticide-dealer",
  "irrigation-dealer",
  "pipe-pvc-store",
  "solar-dealer",
  "nursery",
] as const;

export type DetailSlug = (typeof detailSlugs)[number];

export const isDetailSlug = (value: string): value is DetailSlug =>
  (detailSlugs as readonly string[]).includes(value);

export const detailPath = (lang: Lang, slug: DetailSlug) =>
  lang === "en" ? `/sinchan-mitra/for/${slug}` : `/sinchan-mitra/${lang}/for/${slug}`;

/** The two screens (gallery ids) shown on each detail page. */
export const detailScreens: Record<DetailSlug, string[]> = {
  "krushi-seva-kendra": ["ksk-pack-registers", "ksk-regulated-sale"],
  "fertilizer-dealer": ["ksk-stock-board", "irr-billing"],
  "seed-dealer": ["ksk-batches", "ksk-todays-jobs"],
  "pesticide-dealer": ["ksk-regulated-sale", "ksk-licences"],
  "irrigation-dealer": ["irr-irr-file", "irr-irr-land"],
  "pipe-pvc-store": ["irr-pipe-grid", "irr-gst"],
  "solar-dealer": ["irr-warranty", "sol-projects"],
  nursery: ["ksk-licences", "nur-lots"],
};

export type DetailCopy = {
  title: string;
  tagline: string;
  overview: string;
  gets: string[];
  special: string[];
};

export type DetailUi = {
  back: string;
  eyebrow: string;
  getsTitle: string;
  specialTitle: string;
  screensTitle: string;
  screensHint: string;
  commonTitle: string;
  common: string[];
  othersTitle: string;
  learnMore: string;
  breadcrumbHome: string;
};

export type DetailsBlock = { ui: DetailUi; items: Record<DetailSlug, DetailCopy> };

// ---------------------------------------------------------------------------------------------- English
const en: DetailsBlock = {
  ui: {
    back: "All business types",
    eyebrow: "Sinchan Mitra for",
    getsTitle: "What you get",
    specialTitle: "Made for this business",
    screensTitle: "See it in the app",
    screensHint: "Real screens of the Windows app with sample data.",
    commonTitle: "And every shop also gets",
    common: [
      "Billing with barcode scan, GST, and cash, UPI, bank, cheque or udhaar",
      "Print on a receipt printer, as an A4 PDF, or on WhatsApp",
      "Owner section with profit, cash book and day close",
      "GST return worksheets and a CA / year-end pack",
      "Staff roles, several shops, backups and software updates",
      "Marathi, Hindi and English, working without internet",
    ],
    othersTitle: "Other business types",
    learnMore: "Learn more",
    breadcrumbHome: "Sinchan Mitra",
  },
  items: {
    "krushi-seva-kendra": {
      title: "Krushi Seva Kendra",
      tagline: "Fertilizer, seed and pesticide in one shop, with the registers and licences they bring.",
      overview:
        "A Krushi Seva Kendra sells three kinds of regulated goods at once. Sinchan Mitra keeps the bills, stock, registers and licence dates of all three together, so the shop is ready for an inspection on any day.",
      gets: [
        "Billing with barcode scan, GST and non-GST goods on one bill, and every way of payment including udhaar and cheque",
        "Batch / lot with expiry on stock; an expired batch cannot be sold",
        "MRP lock: an item cannot be billed above its MRP",
        "Form N, D, XIII and XIV registers kept as you bill",
        "Licences with reminders before they end, and a list of today's jobs",
        "A stock and rate board you can show on a screen at the counter",
      ],
      special: [
        "Fertilizer bills can carry the \"Form M\" heading",
        "Banned and restricted pesticide lists are built in; the app refuses a banned sale",
        "Seed lots with tag, germination, purity and valid-upto date; sale stops after the valid date",
      ],
    },
    "fertilizer-dealer": {
      title: "Fertilizer Dealer",
      tagline: "Fertilizer bills and registers, with MRP and expiry kept in check.",
      overview:
        "A fertilizer shop lives on MRP rules, batches and season-long credit. Sinchan Mitra keeps all three tidy, and prepares the registers a fertilizer dealer is asked for.",
      gets: [
        "Billing with barcode scan and GST; saving a bill reduces stock by itself",
        "MRP lock so no bag is billed above its MRP",
        "Batch / lot and expiry; an expired batch cannot be sold",
        "Form N, XIII and XIV registers kept as you bill",
        "Licences with reminders before they end",
        "Udhaar per farmer, with Kharif and Rabi seasons",
      ],
      special: [
        "Fertilizer bills can carry the \"Form M\" heading",
        "A stock and rate board for the counter",
        "Starter goods list for fertilizer, with HSN and GST % filled in",
      ],
    },
    "seed-dealer": {
      title: "Seed Dealer",
      tagline: "Seed lots with germination, purity and a valid-upto date that the app respects.",
      overview:
        "Seed is sold by lot and by season. Sinchan Mitra records the lot details at purchase and stops the sale once the valid-upto date has passed.",
      gets: [
        "Billing with barcode scan and GST",
        "Seed lot fields: tag, germination, purity and valid-upto",
        "Sale is blocked after the valid date",
        "Form D register kept as you bill",
        "Licence reminders and a list of today's jobs",
        "MRP lock and udhaar per farmer",
      ],
      special: [
        "Batch / lot and expiry in one view, earliest first",
        "Season-wise udhaar (Kharif, Rabi)",
        "Starter goods list for seeds, with HSN and GST % filled in",
      ],
    },
    "pesticide-dealer": {
      title: "Pesticide Dealer",
      tagline: "Built-in banned and restricted lists, and registers that fill as you sell.",
      overview:
        "Pesticide is the most regulated item on the shelf. Sinchan Mitra knows which names are banned or restricted, refuses a banned sale, and keeps the registers a pesticide dealer must show.",
      gets: [
        "Billing with barcode scan and GST",
        "Banned pesticide sale refused by the app with a clear message",
        "Restricted pesticides listed in the business pack",
        "Form XIII and XIV registers kept as you bill",
        "Licence reminders before they end",
        "Batch / lot with expiry, and MRP lock",
      ],
      special: [
        "A banned name can never be added as a normal product",
        "Today's jobs list: licences and expiring lots in one place",
        "Starter goods list for pesticides, with HSN and GST % filled in",
      ],
    },
    "irrigation-dealer": {
      title: "Irrigation, Drip & Sprinkler Dealer",
      tagline: "From the farmer's file to the layout, material list, quotation and papers.",
      overview:
        "An irrigation dealer does more than sell pipes: each farmer is a file with land, a layout, a quotation, papers and a subsidy. Sinchan Mitra follows that file from the first visit to the last paper.",
      gets: [
        "Farmer's irrigation file in nine steps: scheme, farmer, land (gat / 7-12), crop, layout, material, papers, verification, subsidy",
        "Auto layout of the farm (Aalekh) in 2D and 3D that you can adjust by hand",
        "Material list, quotation and bill made from the layout",
        "Papers for the file printed from the computer, without internet",
        "Government figures and scheme details kept in the app",
        "Warranty and job cards for pumps, filters and other serial-tracked goods",
      ],
      special: [
        "Starter list of irrigation goods and a vendor list",
        "Pipe size and grade stock grid, with IS / BIS standards",
        "Irrigation reports to find incomplete files and open work",
      ],
    },
    "pipe-pvc-store": {
      title: "Pipe / PVC Store",
      tagline: "Pipe size and grade stock at a glance, with fast billing and udhaar.",
      overview:
        "A pipe store sells the same item in many sizes and grades, often on credit to contractors and farmers. Sinchan Mitra shows stock in a size-by-grade grid and keeps every balance in view.",
      gets: [
        "Pipe size and grade stock grid",
        "IS / BIS standards in the goods list",
        "Billing with barcode scan and GST",
        "Udhaar per contractor or farmer, with credit limits",
        "Low-stock tags and a full stock history",
        "Several shops with goods sent between them",
      ],
      special: [
        "Pipe categories ready in the starter list",
        "Quotations that turn into a bill in one click",
        "GST return worksheets for the year-end",
      ],
    },
    "solar-dealer": {
      title: "Solar & Solar Pump Dealer",
      tagline: "Serial numbers, warranty and service visits, handled in one place.",
      overview:
        "Panels, pumps and inverters are sold with a serial number and a warranty. Sinchan Mitra records the serial at purchase and on the bill, starts the warranty by itself, and tracks every service visit.",
      gets: [
        "Serial numbers recorded at purchase and on the bill",
        "Warranty period starts by itself",
        "Job cards from receipt to return, with status and due date",
        "Billing with barcode scan and GST",
        "Quotations and advances",
        "Several shops, staff roles and backups",
      ],
      special: [
        "Solar pump scheme set-up in the business pack",
        "A serial number cannot be sold twice",
        "Starter goods list for solar, with HSN and GST % filled in",
      ],
    },
    nursery: {
      title: "Nursery",
      tagline: "Plants and inputs with batches, licence dates and season-wise credit.",
      overview:
        "A nursery sells living stock and inputs that expire. Sinchan Mitra groups them into plant and input categories, tracks batches and reminds you before licences end.",
      gets: [
        "Plant and input categories ready in the starter list",
        "Batch / lot and expiry for saplings and inputs",
        "Licence and expiry reminders",
        "Billing with barcode scan and GST",
        "Udhaar per customer, with Kharif and Rabi seasons",
        "Reports for profit, cash and expenses",
      ],
      special: [
        "Horticulture scheme set-up in the business pack",
        "Today's jobs list for licences and expiring lots",
        "Starter goods list for nurseries, with HSN and GST % filled in",
      ],
    },
  },
};

// ---------------------------------------------------------------------------------------------- Marathi
const mr: DetailsBlock = {
  ui: {
    back: "सर्व व्यवसाय प्रकार",
    eyebrow: "सिंचन मित्र",
    getsTitle: "तुम्हाला काय मिळते",
    specialTitle: "या व्यवसायासाठी खास",
    screensTitle: "ॲपमध्ये पाहा",
    screensHint: "Windows ॲपच्या खऱ्या स्क्रीन, नमुना माहितीसह.",
    commonTitle: "आणि प्रत्येक दुकानाला हेही मिळते",
    common: [
      "बारकोड स्कॅनसह बिलिंग, GST आणि रोख, UPI, बँक, चेक किंवा उधार",
      "पावती प्रिंटरवर छापा, A4 PDF किंवा WhatsApp वर",
      "नफा, रोकड वही आणि दिवस बंद असलेला मालक विभाग",
      "GST रिटर्न कार्यपत्रके आणि CA / वार्षिक हिशोब पॅक",
      "कर्मचाऱ्यांच्या भूमिका, अनेक दुकाने, बॅकअप आणि सॉफ्टवेअर अपडेट",
      "मराठी, हिंदी आणि इंग्रजी, इंटरनेटशिवाय चालते",
    ],
    othersTitle: "इतर व्यवसाय प्रकार",
    learnMore: "अधिक माहिती",
    breadcrumbHome: "सिंचन मित्र",
  },
  items: {
    "krushi-seva-kendra": {
      title: "कृषी सेवा केंद्र",
      tagline: "खत, बियाणे आणि कीटकनाशक एकाच दुकानात, त्यांच्या नोंदवह्या आणि परवान्यांसह.",
      overview:
        "कृषी सेवा केंद्रात एकाच वेळी तीन नियंत्रित प्रकारचा माल विकला जातो. सिंचन मित्र तिन्हींची बिले, स्टॉक, नोंदवह्या आणि परवान्याच्या तारखा एकत्र ठेवतो, त्यामुळे तपासणी कोणत्याही दिवशी आली तरी दुकान तयार असते.",
      gets: [
        "बारकोड स्कॅनसह बिलिंग, GST आणि विना-GST माल एकाच बिलात, आणि उधार व चेकसह पैसे घेण्याचे सर्व मार्ग",
        "स्टॉकवर मुदतीसह बॅच / लॉट; मुदत संपलेली बॅच विकता येत नाही",
        "MRP लॉक: माल MRP पेक्षा जास्त दराने बिलात जात नाही",
        "बिल करताना भरत जाणाऱ्या Form N, D, XIII आणि XIV नोंदवह्या",
        "संपण्याआधी आठवण देणारे परवाने आणि आजच्या कामांची यादी",
        "काउंटरवर पडद्यावर दाखवता येणारा स्टॉक व दर फलक",
      ],
      special: [
        "खताच्या बिलावर \"Form M\" शीर्षक येऊ शकते",
        "बंदी आणि निर्बंधित कीटकनाशकांच्या याद्या ॲपमध्येच; बंदी असलेली विक्री ॲप थांबवते",
        "टॅग, उगवण, शुद्धता आणि वैध दिनांकासह बियाण्याचे लॉट; वैध दिनांकानंतर विक्री थांबते",
      ],
    },
    "fertilizer-dealer": {
      title: "खत विक्रेता",
      tagline: "खताची बिले आणि नोंदवह्या, MRP आणि मुदत ताब्यात.",
      overview:
        "खताचे दुकान MRP चे नियम, बॅच आणि हंगामभराच्या उधारीवर चालते. सिंचन मित्र या तिन्ही गोष्टी व्यवस्थित ठेवतो आणि खत विक्रेत्याला लागणाऱ्या नोंदवह्या तयार करतो.",
      gets: [
        "बारकोड स्कॅन आणि GST सह बिलिंग; बिल सेव्ह होताच स्टॉक आपोआप कमी",
        "MRP लॉक, म्हणजे कोणतेही पोते MRP पेक्षा जास्त दराने जात नाही",
        "बॅच / लॉट आणि मुदत; मुदत संपलेली बॅच विकता येत नाही",
        "बिल करताना भरत जाणाऱ्या Form N, XIII आणि XIV नोंदवह्या",
        "संपण्याआधी आठवण देणारे परवाने",
        "प्रत्येक शेतकऱ्याची उधारी, खरीप आणि रब्बी हंगामानुसार",
      ],
      special: [
        "खताच्या बिलावर \"Form M\" शीर्षक येऊ शकते",
        "काउंटरसाठी स्टॉक व दर फलक",
        "खतासाठी सुरुवातीची माल यादी, HSN आणि GST % आपोआप भरलेले",
      ],
    },
    "seed-dealer": {
      title: "बियाणे विक्रेता",
      tagline: "उगवण, शुद्धता आणि ॲप पाळणारा वैध दिनांक असलेले बियाण्याचे लॉट.",
      overview:
        "बियाणे लॉटनुसार आणि हंगामानुसार विकले जाते. सिंचन मित्र खरेदीच्या वेळी लॉटचा तपशील नोंदवतो आणि वैध दिनांक संपताच विक्री थांबवतो.",
      gets: [
        "बारकोड स्कॅन आणि GST सह बिलिंग",
        "बियाणे लॉटचे तपशील: टॅग, उगवण, शुद्धता आणि वैध दिनांक",
        "वैध दिनांकानंतर विक्री बंद",
        "बिल करताना भरत जाणारी Form D नोंदवही",
        "परवान्याची आठवण आणि आजच्या कामांची यादी",
        "MRP लॉक आणि प्रत्येक शेतकऱ्याची उधारी",
      ],
      special: [
        "बॅच / लॉट आणि मुदत एकाच पानावर, आधी संपणारी वर",
        "हंगामानुसार उधारी (खरीप, रब्बी)",
        "बियाण्यासाठी सुरुवातीची माल यादी, HSN आणि GST % आपोआप भरलेले",
      ],
    },
    "pesticide-dealer": {
      title: "कीटकनाशक विक्रेता",
      tagline: "बंदी आणि निर्बंधित याद्या ॲपमध्येच, आणि विक्री करताना भरत जाणाऱ्या नोंदवह्या.",
      overview:
        "कीटकनाशक हा दुकानातला सर्वात नियंत्रित माल आहे. सिंचन मित्राला माहीत असते कोणती नावे बंदी किंवा निर्बंधित आहेत, तो बंदी असलेली विक्री नाकारतो आणि कीटकनाशक विक्रेत्याला दाखवाव्या लागणाऱ्या नोंदवह्या ठेवतो.",
      gets: [
        "बारकोड स्कॅन आणि GST सह बिलिंग",
        "बंदी असलेल्या कीटकनाशकाची विक्री ॲप स्पष्ट संदेशासह नाकारते",
        "निर्बंधित कीटकनाशके व्यवसाय पॅकमध्ये यादीत",
        "बिल करताना भरत जाणाऱ्या Form XIII आणि XIV नोंदवह्या",
        "संपण्याआधी आठवण देणारे परवाने",
        "मुदतीसह बॅच / लॉट, आणि MRP लॉक",
      ],
      special: [
        "बंदी असलेले नाव सामान्य माल म्हणून कधीच जोडता येत नाही",
        "आजची कामे: परवाने आणि मुदत जवळ आलेले लॉट एकाच ठिकाणी",
        "कीटकनाशकांसाठी सुरुवातीची माल यादी, HSN आणि GST % आपोआप भरलेले",
      ],
    },
    "irrigation-dealer": {
      title: "सिंचन, ठिबक व तुषार विक्रेते",
      tagline: "शेतकऱ्याच्या फाइलपासून आलेख, साहित्य यादी, कोटेशन आणि कागदपत्रांपर्यंत.",
      overview:
        "सिंचन विक्रेता फक्त पाईप विकत नाही: प्रत्येक शेतकरी म्हणजे जमीन, आलेख, कोटेशन, कागदपत्रे आणि अनुदान असलेली एक फाइल. सिंचन मित्र ती फाइल पहिल्या भेटीपासून शेवटच्या कागदापर्यंत सांभाळतो.",
      gets: [
        "शेतकऱ्याची सिंचन फाइल नऊ पायऱ्यांत: योजना, शेतकरी, जमीन (गट / 7-12), पीक, आलेख, साहित्य, कागदपत्रे, पडताळणी, अनुदान",
        "शेताचा ऑटो आलेख (Aalekh) 2D आणि 3D मध्ये, हवा तर हाताने बदला",
        "आलेखावरून साहित्य यादी, कोटेशन आणि बिल",
        "फाइलचे कागद संगणकावरून छापा, इंटरनेटशिवाय",
        "शासकीय आकडे आणि योजनांची माहिती ॲपमध्येच",
        "पंप, फिल्टर आणि सिरीयल असलेल्या मालासाठी वॉरंटी आणि जॉब कार्ड",
      ],
      special: [
        "सिंचन साहित्याची सुरुवातीची यादी आणि विक्रेत्यांची यादी",
        "पाईपचा आकार व दर्जा स्टॉक तक्ता, IS / BIS मानकांसह",
        "अपूर्ण फाइल आणि चालू कामे शोधण्यासाठी सिंचन अहवाल",
      ],
    },
    "pipe-pvc-store": {
      title: "पाईप / PVC दुकान",
      tagline: "पाईपचा आकार व दर्जा यांचा स्टॉक एका नजरेत, जलद बिलिंग आणि उधारीसह.",
      overview:
        "पाईपचे दुकान एकच माल अनेक आकारांत आणि दर्जांत विकते, आणि ठेकेदार व शेतकऱ्यांना अनेकदा उधारीवर. सिंचन मित्र स्टॉक आकार-दर्जाच्या तक्त्यात दाखवतो आणि प्रत्येक बाकी नजरेसमोर ठेवतो.",
      gets: [
        "पाईपचा आकार व दर्जा स्टॉक तक्ता",
        "माल यादीत IS / BIS मानके",
        "बारकोड स्कॅन आणि GST सह बिलिंग",
        "प्रत्येक ठेकेदार किंवा शेतकऱ्याची उधारी, क्रेडिट मर्यादेसह",
        "कमी स्टॉकची खूण आणि पूर्ण स्टॉक इतिहास",
        "अनेक दुकाने आणि त्यांच्यात माल पाठवणे",
      ],
      special: [
        "सुरुवातीच्या यादीत पाईपचे वर्ग तयार",
        "कोटेशन जे एका क्लिकमध्ये बिल होते",
        "वर्षअखेरीसाठी GST रिटर्न कार्यपत्रके",
      ],
    },
    "solar-dealer": {
      title: "सौर व सौर पंप विक्रेता",
      tagline: "सिरीयल क्रमांक, वॉरंटी आणि दुरुस्तीच्या भेटी, एकाच ठिकाणी.",
      overview:
        "पॅनेल, पंप आणि इन्व्हर्टर सिरीयल क्रमांक आणि वॉरंटीसह विकले जातात. सिंचन मित्र खरेदीत आणि बिलावर सिरीयल नोंदवतो, वॉरंटी आपोआप सुरू करतो आणि प्रत्येक दुरुस्तीची भेट नोंदवतो.",
      gets: [
        "खरेदीत आणि बिलावर सिरीयल क्रमांक",
        "वॉरंटीचा कालावधी आपोआप सुरू",
        "पावतीपासून परत देण्यापर्यंत स्थिती आणि दिलेल्या तारखेसह जॉब कार्ड",
        "बारकोड स्कॅन आणि GST सह बिलिंग",
        "कोटेशन आणि ॲडव्हान्स",
        "अनेक दुकाने, कर्मचाऱ्यांच्या भूमिका आणि बॅकअप",
      ],
      special: [
        "व्यवसाय पॅकमध्ये सौर पंप योजनेचा सेटअप",
        "एकच सिरीयल क्रमांक दोनदा विकता येत नाही",
        "सौरसाठी सुरुवातीची माल यादी, HSN आणि GST % आपोआप भरलेले",
      ],
    },
    nursery: {
      title: "रोपवाटिका",
      tagline: "रोपे आणि साहित्य, बॅच, परवान्याच्या तारखा आणि हंगामानुसार उधारीसह.",
      overview:
        "रोपवाटिकेत जिवंत रोपे आणि मुदत असलेले साहित्य विकले जाते. सिंचन मित्र त्यांचे रोपे व साहित्याचे वर्ग करतो, बॅच नोंदवतो आणि परवाना संपण्याआधी आठवण देतो.",
      gets: [
        "सुरुवातीच्या यादीत रोपे आणि साहित्याचे वर्ग तयार",
        "रोपे आणि साहित्यासाठी बॅच / लॉट आणि मुदत",
        "परवाना आणि मुदतीची आठवण",
        "बारकोड स्कॅन आणि GST सह बिलिंग",
        "प्रत्येक ग्राहकाची उधारी, खरीप आणि रब्बी हंगामानुसार",
        "नफा, रोकड आणि खर्चाचे अहवाल",
      ],
      special: [
        "व्यवसाय पॅकमध्ये फलोत्पादन योजनेचा सेटअप",
        "परवाने आणि मुदत जवळ आलेल्या लॉटसाठी आजची कामे यादी",
        "रोपवाटिकांसाठी सुरुवातीची माल यादी, HSN आणि GST % आपोआप भरलेले",
      ],
    },
  },
};

// ---------------------------------------------------------------------------------------------- Hindi
const hi: DetailsBlock = {
  ui: {
    back: "सभी व्यवसाय के प्रकार",
    eyebrow: "सिंचन मित्र",
    getsTitle: "आपको क्या मिलता है",
    specialTitle: "इस व्यवसाय के लिए खास",
    screensTitle: "ऐप में देखें",
    screensHint: "Windows ऐप की असली स्क्रीन, नमूना जानकारी के साथ।",
    commonTitle: "और हर दुकान को यह भी मिलता है",
    common: [
      "बारकोड स्कैन के साथ बिलिंग, GST और नकद, UPI, बैंक, चेक या उधार",
      "रसीद प्रिंटर पर छापें, A4 PDF या WhatsApp पर",
      "नफ़ा, रोकड़ बही और दिन बंद वाला मालिक विभाग",
      "GST रिटर्न वर्कशीट और CA / वार्षिक हिसाब पैक",
      "कर्मचारियों की भूमिकाएँ, कई दुकानें, बैकअप और सॉफ़्टवेयर अपडेट",
      "मराठी, हिंदी और अंग्रेज़ी, बिना इंटरनेट चलता है",
    ],
    othersTitle: "अन्य व्यवसाय के प्रकार",
    learnMore: "और जानें",
    breadcrumbHome: "सिंचन मित्र",
  },
  items: {
    "krushi-seva-kendra": {
      title: "कृषि सेवा केंद्र",
      tagline: "खाद, बीज और कीटनाशक एक ही दुकान में, उनके रजिस्टर और लाइसेंस के साथ।",
      overview:
        "कृषि सेवा केंद्र में एक साथ तीन नियंत्रित प्रकार का माल बिकता है। सिंचन मित्र तीनों के बिल, स्टॉक, रजिस्टर और लाइसेंस की तारीखें एक साथ रखता है, इसलिए जाँच किसी भी दिन आए, दुकान तैयार रहती है।",
      gets: [
        "बारकोड स्कैन के साथ बिलिंग, GST और बिना-GST माल एक ही बिल में, और उधार व चेक समेत पैसे लेने के सारे तरीके",
        "स्टॉक पर मियाद के साथ बैच / लॉट; मियाद खत्म बैच बिक नहीं सकता",
        "MRP लॉक: माल MRP से ऊपर के दाम पर बिल में नहीं जाता",
        "बिल बनाते समय भरते जाने वाले Form N, D, XIII और XIV रजिस्टर",
        "खत्म होने से पहले याद दिलाने वाले लाइसेंस और आज के कामों की सूची",
        "काउंटर पर स्क्रीन पर दिखाने लायक स्टॉक व दर फलक",
      ],
      special: [
        "खाद के बिल पर \"Form M\" शीर्षक आ सकता है",
        "प्रतिबंधित और सीमित कीटनाशकों की सूचियाँ ऐप में ही; प्रतिबंधित बिक्री ऐप रोकता है",
        "टैग, अंकुरण, शुद्धता और वैध तारीख के साथ बीज के लॉट; वैध तारीख के बाद बिक्री रुकती है",
      ],
    },
    "fertilizer-dealer": {
      title: "खाद विक्रेता",
      tagline: "खाद के बिल और रजिस्टर, MRP और मियाद काबू में।",
      overview:
        "खाद की दुकान MRP के नियम, बैच और मौसम भर के उधार पर चलती है। सिंचन मित्र इन तीनों को व्यवस्थित रखता है और खाद विक्रेता से माँगे जाने वाले रजिस्टर तैयार करता है।",
      gets: [
        "बारकोड स्कैन और GST के साथ बिलिंग; बिल सेव होते ही स्टॉक अपने आप घटता है",
        "MRP लॉक, ताकि कोई बोरी MRP से ऊपर न बिके",
        "बैच / लॉट और मियाद; मियाद खत्म बैच बिक नहीं सकता",
        "बिल बनाते समय भरते जाने वाले Form N, XIII और XIV रजिस्टर",
        "खत्म होने से पहले याद दिलाने वाले लाइसेंस",
        "हर किसान का उधार, खरीफ और रबी मौसम के अनुसार",
      ],
      special: [
        "खाद के बिल पर \"Form M\" शीर्षक आ सकता है",
        "काउंटर के लिए स्टॉक व दर फलक",
        "खाद के लिए शुरुआती माल सूची, HSN और GST % अपने आप भरे हुए",
      ],
    },
    "seed-dealer": {
      title: "बीज विक्रेता",
      tagline: "अंकुरण, शुद्धता और ऐप जिसका पालन करता है ऐसी वैध तारीख वाले बीज के लॉट।",
      overview:
        "बीज लॉट और मौसम के अनुसार बिकता है। सिंचन मित्र खरीद के समय लॉट का ब्योरा दर्ज करता है और वैध तारीख निकलते ही बिक्री रोक देता है।",
      gets: [
        "बारकोड स्कैन और GST के साथ बिलिंग",
        "बीज लॉट का ब्योरा: टैग, अंकुरण, शुद्धता और वैध तारीख",
        "वैध तारीख के बाद बिक्री बंद",
        "बिल बनाते समय भरता जाने वाला Form D रजिस्टर",
        "लाइसेंस की याद और आज के कामों की सूची",
        "MRP लॉक और हर किसान का उधार",
      ],
      special: [
        "बैच / लॉट और मियाद एक ही पेज पर, जल्दी खत्म होने वाला ऊपर",
        "मौसम के अनुसार उधार (खरीफ, रबी)",
        "बीज के लिए शुरुआती माल सूची, HSN और GST % अपने आप भरे हुए",
      ],
    },
    "pesticide-dealer": {
      title: "कीटनाशक विक्रेता",
      tagline: "प्रतिबंधित और सीमित सूचियाँ ऐप में ही, और बिक्री करते समय भरते जाने वाले रजिस्टर।",
      overview:
        "कीटनाशक दुकान का सबसे ज़्यादा नियंत्रित माल है। सिंचन मित्र जानता है कि कौन-से नाम प्रतिबंधित या सीमित हैं, प्रतिबंधित बिक्री को मना कर देता है और कीटनाशक विक्रेता को दिखाने पड़ने वाले रजिस्टर रखता है।",
      gets: [
        "बारकोड स्कैन और GST के साथ बिलिंग",
        "प्रतिबंधित कीटनाशक की बिक्री ऐप साफ़ संदेश के साथ मना करता है",
        "सीमित कीटनाशक व्यवसाय पैक की सूची में",
        "बिल बनाते समय भरते जाने वाले Form XIII और XIV रजिस्टर",
        "खत्म होने से पहले याद दिलाने वाले लाइसेंस",
        "मियाद के साथ बैच / लॉट, और MRP लॉक",
      ],
      special: [
        "प्रतिबंधित नाम को सामान्य माल के रूप में कभी जोड़ा नहीं जा सकता",
        "आज के काम: लाइसेंस और मियाद पास वाले लॉट एक ही जगह",
        "कीटनाशकों के लिए शुरुआती माल सूची, HSN और GST % अपने आप भरे हुए",
      ],
    },
    "irrigation-dealer": {
      title: "सिंचाई, ड्रिप व स्प्रिंकलर विक्रेता",
      tagline: "किसान की फ़ाइल से आलेख, साहित्य सूची, कोटेशन और दस्तावेज़ों तक।",
      overview:
        "सिंचाई विक्रेता सिर्फ़ पाइप नहीं बेचता: हर किसान यानी ज़मीन, आलेख, कोटेशन, दस्तावेज़ और अनुदान वाली एक फ़ाइल। सिंचन मित्र उस फ़ाइल को पहली मुलाक़ात से आख़िरी कागज़ तक सँभालता है।",
      gets: [
        "किसान की सिंचाई फ़ाइल नौ चरणों में: योजना, किसान, ज़मीन (गट / 7-12), फ़सल, आलेख, साहित्य, दस्तावेज़, सत्यापन, अनुदान",
        "खेत का ऑटो आलेख (Aalekh) 2D और 3D में, चाहें तो हाथ से बदलें",
        "आलेख से साहित्य सूची, कोटेशन और बिल",
        "फ़ाइल के कागज़ कंप्यूटर से छापें, बिना इंटरनेट",
        "सरकारी आँकड़े और योजनाओं की जानकारी ऐप में ही",
        "पंप, फ़िल्टर और सीरियल वाले माल के लिए वारंटी और जॉब कार्ड",
      ],
      special: [
        "सिंचाई सामग्री की शुरुआती सूची और विक्रेताओं की सूची",
        "पाइप आकार व ग्रेड स्टॉक ग्रिड, IS / BIS मानकों के साथ",
        "अधूरी फ़ाइलें और चालू काम खोजने के लिए सिंचाई रिपोर्ट",
      ],
    },
    "pipe-pvc-store": {
      title: "पाइप / PVC दुकान",
      tagline: "पाइप के आकार व ग्रेड का स्टॉक एक नज़र में, तेज़ बिलिंग और उधार के साथ।",
      overview:
        "पाइप की दुकान एक ही माल कई आकारों और ग्रेड में बेचती है, और ठेकेदारों व किसानों को अक्सर उधार पर। सिंचन मित्र स्टॉक आकार-ग्रेड की ग्रिड में दिखाता है और हर बाकी नज़र के सामने रखता है।",
      gets: [
        "पाइप आकार व ग्रेड स्टॉक ग्रिड",
        "माल सूची में IS / BIS मानक",
        "बारकोड स्कैन और GST के साथ बिलिंग",
        "हर ठेकेदार या किसान का उधार, क्रेडिट सीमा के साथ",
        "कम स्टॉक का निशान और पूरा स्टॉक इतिहास",
        "कई दुकानें और उनके बीच माल भेजना",
      ],
      special: [
        "शुरुआती सूची में पाइप की श्रेणियाँ तैयार",
        "कोटेशन जो एक क्लिक में बिल बन जाता है",
        "साल के अंत के लिए GST रिटर्न वर्कशीट",
      ],
    },
    "solar-dealer": {
      title: "सोलर व सोलर पंप विक्रेता",
      tagline: "सीरियल नंबर, वारंटी और सर्विस विज़िट, एक ही जगह।",
      overview:
        "पैनल, पंप और इन्वर्टर सीरियल नंबर और वारंटी के साथ बिकते हैं। सिंचन मित्र खरीद में और बिल पर सीरियल दर्ज करता है, वारंटी अपने आप शुरू करता है और हर सर्विस विज़िट दर्ज करता है।",
      gets: [
        "खरीद में और बिल पर सीरियल नंबर",
        "वारंटी की अवधि अपने आप शुरू",
        "रसीद से वापसी तक स्थिति और देय तारीख के साथ जॉब कार्ड",
        "बारकोड स्कैन और GST के साथ बिलिंग",
        "कोटेशन और एडवांस",
        "कई दुकानें, कर्मचारियों की भूमिकाएँ और बैकअप",
      ],
      special: [
        "व्यवसाय पैक में सोलर पंप योजना का सेटअप",
        "एक ही सीरियल नंबर दो बार बिक नहीं सकता",
        "सोलर के लिए शुरुआती माल सूची, HSN और GST % अपने आप भरे हुए",
      ],
    },
    nursery: {
      title: "नर्सरी",
      tagline: "पौधे और सामग्री, बैच, लाइसेंस की तारीखें और मौसम के अनुसार उधार के साथ।",
      overview:
        "नर्सरी में जीवित पौधे और मियाद वाली सामग्री बिकती है। सिंचन मित्र उन्हें पौधों व सामग्री की श्रेणियों में बाँटता है, बैच दर्ज करता है और लाइसेंस खत्म होने से पहले याद दिलाता है।",
      gets: [
        "शुरुआती सूची में पौधों और सामग्री की श्रेणियाँ तैयार",
        "पौधों और सामग्री के लिए बैच / लॉट और मियाद",
        "लाइसेंस और मियाद की याद",
        "बारकोड स्कैन और GST के साथ बिलिंग",
        "हर ग्राहक का उधार, खरीफ और रबी मौसम के अनुसार",
        "नफ़ा, रोकड़ और खर्च की रिपोर्ट",
      ],
      special: [
        "व्यवसाय पैक में बागवानी योजना का सेटअप",
        "लाइसेंस और मियाद पास वाले लॉट के लिए आज के काम की सूची",
        "नर्सरी के लिए शुरुआती माल सूची, HSN और GST % अपने आप भरे हुए",
      ],
    },
  },
};

export const details: Record<Lang, DetailsBlock> = { en, mr, hi };
