/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web-sayt' | 'Telegram bot' | 'CRM/SaaS' | 'Mobil ilova';
  technologies: string[];
  features: string[];
  imageColor: string; // Tailwind gradient class
  iconName: string; // Lucide icon identifier
  demoUrl?: string;
  githubUrl?: string;
  duration: string;
  difficulty: 'Sodda' | 'O\'rta' | 'Murakkab';
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  basePrice: string; // e.g. "300$"
  deliveryTime: string; // e.g. "5-7 kun"
  popularFeatures: string[];
}

export interface ClientRequest {
  id: string;
  clientName: string;
  clientContact: string; // Telegram username or Phone
  businessType: string; // Savdo/E-commerce, Restoran, Ta'lim, Shaxsiy brend, Boshqa
  projectType: 'Web-sayt' | 'Telegram bot' | 'CRM/SaaS' | 'Mobil ilova' | 'Boshqa';
  budgetRange: string; // e.g., "300$ - 700$"
  selectedFeatures: string[];
  customDescription: string;
  createdAt: string;
  status: 'Yangi' | 'Ko\'rib chiqilmoqda' | 'Qabul qilindi' | 'Yakunlandi';
  isDemo?: boolean; // to separate pre-filled mock data from real submissions
}

export interface Testimonial {
  id: string;
  author: string;
  company: string;
  role: string;
  text: string;
  avatarColor: string;
}
