/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, Testimonial, ClientRequest } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'EcoMart — Zamonaviy E-Commerce Tizimi',
    description: 'Biznesingiz mahsulotlarini tez va oson sotish uchun mo\'ljallangan premium dizayndagi onlayn do\'kon. To\'liq boshqaruv paneli (admin panel), Click/Payme to\'lov tizimlari va Telegram buyurtma xabarnomalari bilan integratsiya qilingan.',
    category: 'Web-sayt',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL'],
    features: ['Tezkor filtrlar', 'Savat va Tanlanganlar', 'Click/Payme Integratsiyasi', 'Admin boshqaruv paneli', 'SMS xabarnomalar'],
    imageColor: 'from-emerald-950 via-slate-900 to-emerald-900',
    iconName: 'ShoppingBag',
    demoUrl: 'https://ecomart.demo.uz',
    githubUrl: 'https://github.com/afzalbek/ecomart',
    duration: '3 hafta',
    difficulty: 'Murakkab'
  },
  {
    id: 'proj-2',
    title: 'AutoBazar Bot — Avtomobil Savdosi Tizimi',
    description: 'Avtomobillarni sotish, sotib olish va ijaraga berish jarayonini to\'liq avtomatlashtiruvchi Telegram bot. Foydalanuvchilar oson rasm yuklashi, texnik ma\'lumotlarni kiritishi va qidiruv filtrlaridan foydalanishi mumkin.',
    category: 'Telegram bot',
    technologies: ['Node.js', 'GramJS / Telegraf', 'MongoDB', 'AWS S3', 'Chart.js'],
    features: ['Murakkab qidiruv', 'Rasm yuklash va optimallashtirish', 'Kanallarga avto-post', 'Tahliliy statistika', 'Doimiy texnik ko\'mak'],
    imageColor: 'from-indigo-950 via-slate-900 to-indigo-900',
    iconName: 'Bot',
    demoUrl: 'https://t.me/autobazar_demo_bot',
    githubUrl: 'https://github.com/afzalbek/autobazar-bot',
    duration: '2 hafta',
    difficulty: 'O\'rta'
  },
  {
    id: 'proj-3',
    title: 'EduManage — O\'quv Markazlari CRM',
    description: 'O\'quv markazlari faoliyatini 100% raqamlashtiruvchi SaaS dastur. O\'qituvchilar, guruhlar, talabalar davomati, to\'lovlar va dars jadvallarini boshqarish uchun eng qulay va tezkor yechim.',
    category: 'CRM/SaaS',
    technologies: ['React', 'Vite', 'Tailwind', 'Express', 'Prisma', 'PostgreSQL'],
    features: ['Davomat va Baholash', 'To\'lovlar tarixi & Qarzlar', 'Telegram bot xabarnomasi', 'Moliya va foyda tahlili', 'Excel / PDF eksport'],
    imageColor: 'from-violet-950 via-slate-900 to-violet-900',
    iconName: 'LayoutDashboard',
    demoUrl: 'https://edumanage.demo.uz',
    githubUrl: 'https://github.com/afzalbek/edumanage-crm',
    duration: '4 hafta',
    difficulty: 'Murakkab'
  },
  {
    id: 'proj-4',
    title: 'Zamin Tour — Sayyohlik Platformasi',
    description: 'Turizm agentliklari uchun premium dizayndagi sayt. Mijozlar tur-paketlarni izlashi, sharhlar o\'qishi, onlayn bron qilishi hamda o\'zlari uchun moslashtirilgan turlarni hisoblashi mumkin.',
    category: 'Web-sayt',
    technologies: ['React', 'TypeScript', 'Motion', 'Tailwind CSS', 'Directus CMS'],
    features: ['Interaktiv xaritalar', 'Onlayn band qilish', 'Valyuta kalkulyatori', 'Gidlar reytingi', 'Estetik galereya'],
    imageColor: 'from-amber-955 via-slate-900 to-amber-950',
    iconName: 'Compass',
    demoUrl: 'https://zamintour.demo.uz',
    githubUrl: 'https://github.com/afzalbek/zamintour',
    duration: '12 kun',
    difficulty: 'O\'rta'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-web',
    title: 'Premium Web-saytlar',
    shortDescription: 'Sizning brendingiz uchun o\'ta tezkor va estetik jihatdan mukammal saytlar.',
    detailedDescription: 'Landing page, korporativ saytlar va murakkab internet do\'konlarni zamonaviy React texnologiyasi hamda Tailwind CSS yordamida yarataman. Saytingiz har qanday qurilmada mukammal ochiladi va Google SEO tizimida tez yuklanadi.',
    iconName: 'Globe',
    basePrice: '300$',
    deliveryTime: '5-10 kun',
    popularFeatures: [
      'Moslashuvchan (Responsive) dizayn',
      'Tezkor yuklanish (95+ Lighthouse Score)',
      'SEO optimallashtirish',
      'Ma\'lumotlar bazasi integratsiyasi',
      'Qulay boshqaruv paneli (CMS)'
    ]
  },
  {
    id: 'srv-mobile',
    title: 'Mobil Ilovalar (Web-to-App)',
    shortDescription: 'iOS va Android uchun foydalanuvchilarga qulay mobil ilovalar.',
    detailedDescription: 'Sizning mavjud veb-saytingiz yoki yangi g\'oyangiz asosida iOS hamda Android platformalarida ishlaydigan tezkor va yengil ilovalar. Push-xabarnomalar va telefon funksiyalari bilan to\'liq ishlaydi.',
    iconName: 'Smartphone',
    basePrice: '500$',
    deliveryTime: '10-20 kun',
    popularFeatures: [
      'iOS va Android uchun yagona kod',
      'Push-bildirishnomalar (Notifications)',
      'Oflayn rejimda ishlash qobiliyati',
      'Tezkor va silliq sahifalar almashinuvi',
      'App Store va Google Play\'ga joylash'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Dilshod Umarov',
    company: 'Smart-Sourcing',
    role: 'Asoschi va Bosh Direktor',
    text: 'Afzalbek bilan hamkorlik qilib kompaniyamiz uchun CRM tizim ishlab chiqdik. Loyihani kutilgandan ham tezroq va barcha talablarimizga to\'la rioya qilgan holda topshirdi. Dizayn va animatsiyalar juda nafis va zamonaviy chiqqan.',
    avatarColor: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'test-2',
    author: 'Lola Karimova',
    company: 'Zamin Tour',
    role: 'Marketing Bo\'limi Rahbari',
    text: 'Sayyohlik saytimiz va Telegram botimizni mukammal birlashtirib berdi. Endi mijoz saytdan buyurtma qilsa, guruhimizga darhol xabar keladi. Ishi juda sifatli va muloqotda ham professional!',
    avatarColor: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'test-3',
    author: 'Sardor Alimov',
    company: 'EduCity Central',
    role: 'Asoschi',
    text: 'Dasturlash sohasidagi eng ma\'suliyatli yigitlardan biri. Bizning dars jarayonlarimiz, to\'lovlar va hisob-kitoblarimiz endi EduManage orqali 100% avtomatlashdi. O\'quvchilarimiz va o\'qituvchilarimiz juda xursand.',
    avatarColor: 'from-amber-500 to-orange-600'
  }
];

// Features database for calculator
export const CALCULATOR_FEATURES = {
  'Web-sayt': [
    { name: 'Responsive Dizayn (Barcha qurilmalarda moslashuv)', price: 0, required: true },
    { name: 'Admin boshqaruv paneli (CMS)', price: 100 },
    { name: 'To\'lov tizimlari (Click/Payme/Stripe)', price: 120 },
    { name: 'Ko\'p tillilik (Uz, Ru, En)', price: 80 },
    { name: 'Telegram orqali buyurtma bildirishnomalari', price: 50 },
    { name: 'SEO va Google Indexlash', price: 40 },
    { name: 'Foydalanuvchilar shaxsiy kabineti (Auth)', price: 150 }
  ],
  'Telegram bot': [
    { name: 'Asosiy bot mantig\'i va tugmalar', price: 0, required: true },
    { name: 'Telegram WebApp (Bot ichida chiroyli interfeys)', price: 150 },
    { name: 'To\'lov tizimlari (Click/Payme botda)', price: 100 },
    { name: 'Mijozlarni guruhlarga ajratish va reklama jo\'natish', price: 60 },
    { name: 'Admin panel (Veb sayt ko\'rinishida boshqaruv)', price: 120 },
    { name: 'Avtomatik ma\'lumotlar bazasini yangilash', price: 40 }
  ],
  'CRM/SaaS': [
    { name: 'Ma\'lumotlar bazasi va asosiy mantiq', price: 0, required: true },
    { name: 'Grafikli tahlillar va Dashboard', price: 150 },
    { name: 'Xodimlarga rollar ajratish (Rbac)', price: 100 },
    { name: 'Hisobotlarni Excel / PDF yuklab olish', price: 80 },
    { name: 'Telegram va SMS integratsiyasi', price: 100 },
    { name: 'Doimiy avtomatik zaxira nusxa (Backup) tizimi', price: 50 }
  ],
  'Mobil ilova': [
    { name: 'iOS va Android versiyalar', price: 0, required: true },
    { name: 'Push xabarnomalar (Notifications)', price: 80 },
    { name: 'Oflayn ishlash imkoniyati', price: 120 },
    { name: 'Ilovalar do\'koniga (AppStore/PlayStore) yuklash', price: 100 },
    { name: 'Telefon datchiklari (Kamera, Lokatsiya h.k.)', price: 150 }
  ],
  'Boshqa': [
    { name: 'Maxsus talab va dizaynlar', price: 100, required: true },
    { name: 'Murakkab hisob-kitoblar', price: 150 },
    { name: 'Tashqi APIlar bilan integratsiya', price: 120 }
  ]
};

// Initial simulated incoming requests
export const INITIAL_DEMO_REQUESTS: ClientRequest[] = [
  {
    id: 'req-demo-1',
    clientName: 'Nodirbek Sobirov',
    clientContact: '@nodir_bazar',
    businessType: 'Savdo/E-commerce',
    projectType: 'Web-sayt',
    budgetRange: '300$ - 500$',
    selectedFeatures: ['Responsive Dizayn (Barcha qurilmalarda moslashuv)', 'Admin boshqaruv paneli (CMS)', 'Telegram orqali buyurtma bildirishnomalari'],
    customDescription: 'Biz hozirda kiyim-kechak do\'konimiz bor, shunga chiroyli landing page va mijoz buyurtma berishi bilan telegram guruhimizga keladigan bot kerak.',
    createdAt: '2026-06-25T14:30:00Z',
    status: 'Yangi',
    isDemo: true
  },
  {
    id: 'req-demo-2',
    clientName: 'Malika Fayzullayeva',
    clientContact: '+998 90 123 45 67',
    businessType: 'Ta\'lim',
    projectType: 'CRM/SaaS',
    budgetRange: '700$ - 1200$',
    selectedFeatures: ['Ma\'lumotlar bazasi va asosiy mantiq', 'Grafikli tahlillar va Dashboard', 'Hisobotlarni Excel / PDF yuklab olish', 'Telegram va SMS integratsiyasi'],
    customDescription: 'Xususiy til maktabimiz uchun mukammal CRM kerak. O\'quvchilar dars qoldirsa, ularning ota-onalariga sms ketishi kerak. Hozirda Excelda hisob yuritamiz, bu juda noqulay.',
    createdAt: '2026-06-24T09:15:00Z',
    status: 'Ko\'rib chiqilmoqda',
    isDemo: true
  }
];
