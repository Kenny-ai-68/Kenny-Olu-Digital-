import { PosTerminal } from '../types';

export const KENNY_OLU_CONTACT = {
  name: 'Kenny Olu Digital',
  partnerTitle: 'Authorized Moniepoint Business Solutions Partner',
  leadConsultant: 'Kehinde "Kenny" Oluwaseun',
  phone: '+234 810 588 5003',
  whatsappNumber: '2348105885003', // format for wa.me/
  email: 'kehindeikotun34@gmail.com',
  location: 'Ogun State & Nationwide, Nigeria',
  deliveryCoverage: 'Under 24-48 hours across Ogun State and nationwide in Nigeria',
  workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM',
};

export const POS_TERMINALS: PosTerminal[] = [
  {
    id: 'smart-pos',
    name: 'Moniepoint Smart POS (Android)',
    badge: 'Most Popular',
    description: 'High-speed flagship Android touchscreen terminal with high-speed thermal receipt printer, hybrid 4G SIM + Wi-Fi, and NFC card tap.',
    price: '₦25,000 activation fee',
    dailyTurnoverSuggested: 'High & Medium Traffic Retail',
    batteryLife: '72-hour standby / 24-hour continuous heavy duty',
    connectivity: 'Free 4G Pre-configured Roaming SIM + Wi-Fi',
    printer: 'Heavy-duty high-speed thermal printer with auto-cutter',
    keyFeatures: [
      'Instant settlement into your Moniepoint business account in 2 seconds',
      'Supports all Nigerian Mastercards, Visa, Verve & direct bank transfers',
      'Color HD touchscreen with built-in barcode & camera scanner',
      'Dispense error protection with automated instant reversal',
    ],
    popularFor: 'Supermarkets, pharmacies, fuel stations, boutique stores, bars & restaurants',
  },
  {
    id: 'mpos',
    name: 'Moniepoint MPOS / Mobile Reader',
    badge: 'Ultra Portable',
    description: 'Compact pocket-sized card reader that pairs seamlessly via Bluetooth to your smartphone or tablet for quick mobile transactions.',
    price: '₦12,500 caution fee',
    dailyTurnoverSuggested: 'Mobile Merchants & On-the-Go Sales',
    batteryLife: '48-hour active use battery',
    connectivity: 'Bluetooth 5.0 to Android & iOS smartphone',
    printer: 'Digital SMS & WhatsApp e-receipts directly to customers',
    keyFeatures: [
      'Fits neatly in your pocket or merchant waist pouch',
      'Accepts chip insertion and contactless NFC card taps',
      'Free Moniepoint Merchant App on Google Play and Apple App Store',
      'Lowest entry barrier for emerging business owners',
    ],
    popularFor: 'Dispatch riders, logistics, pop-up market stalls, salons, artisan deliveries',
  },
  {
    id: 'soundbox',
    name: 'Moniepoint Smart Audiobox',
    badge: 'Anti-Fraud Sound Alert',
    description: 'Instant loud voice confirmation speaker for every transfer and card transaction so you never fall victim to fake alert fraud.',
    price: '₦15,000 caution fee',
    dailyTurnoverSuggested: 'Noisy & Fast-Paced Markets',
    batteryLife: 'Long-lasting rechargeable lithium cell',
    connectivity: 'Preloaded 4G IoT SIM with lifetime connectivity',
    printer: 'Audio broadcast speaker (Dual English & Nigerian Pidgin)',
    keyFeatures: [
      'Clear, loud broadcast: "Moniepoint received payment successfully"',
      'Eliminates fake bank transfer alerts completely',
      'No need to constantly refresh phone screens during market rush hours',
      'LED screen confirms exact amount received in bold numbers',
    ],
    popularFor: 'Open markets, provisions stores, bakeries, bus parks, wholesale hubs',
  },
];

export const TESTIMONIALS = [
  {
    merchantName: 'Mrs. Folashade Adebayo',
    business: 'Ade & Co Fashion Hub',
    location: 'Ogun State & Lagos Corridor',
    metric: '99.98% Card Settlement Rate',
    quote: 'Kenny Olu Digital delivered our Moniepoint Smart POS under 24 hours. After using the terminal consistently for 3 months, our active store turnover unlocked a working capital loan that enabled us to double our inventory without physical collateral.',
  },
  {
    merchantName: 'Dr. Chinedu Eze',
    business: 'MedFirst 24/7 Pharmacy',
    location: 'Abeokuta, Ogun State',
    metric: 'Under 2-Second Settlement',
    quote: 'We used to suffer terrible network downtime with traditional bank machines. Switching to Moniepoint through Kenny Olu Digital eliminated customer checkout queues. Fast delivery, professional setup, and 100% network uptime.',
  },
  {
    merchantName: 'Alhaji Musa Haruna',
    business: 'Metro Provisions Wholesale',
    location: 'Ota / Sagamu, Ogun State',
    metric: '3-Month Loan Pre-Qualified',
    quote: 'Moniebook transformed how we manage customer credits. When retailers buy on credit, Moniebook logs it and sends polite automated WhatsApp reminders. After 3 months on the terminal, we qualified for business loan financing.',
  },
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'How fast can I receive my Moniepoint POS?',
    a: 'With Kenny Olu Digital, delivery takes under 24 to 48 hours across Ogun State and nationwide in Nigeria via fast dispatch and direct merchant onboarding.',
  },
  {
    q: 'How do I qualify for a Moniepoint Business Loan?',
    a: 'To qualify for a business loan, the business owner (BO) must use the Moniepoint terminal consistently for at least 3 months. Eligibility amount ranges from ₦500,000 (500k) up to ₦50,000,000 based on your business trading activity, with zero physical land or car collateral required.',
  },
  {
    q: 'How does Moniepoint High-Yield Savings work?',
    a: 'Moniepoint business savings offers up to 16% annual interest, calculated and credited to your account every single day. You can withdraw your funds anytime without penalty on accrued daily earnings.',
  },
  {
    q: 'What is Moniebook and how does it help my store?',
    a: 'Moniebook is Moniepoint’s built-in digital bookkeeping app for tracking daily store sales, recording customer debt/credits, and sending automated WhatsApp payment reminders to recover owed funds easily.',
  },
];
