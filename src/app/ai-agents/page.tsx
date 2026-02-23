import { Metadata } from 'next';
import { Phone, Calendar, Clock, TrendingUp, MessageSquare, CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';
import HeroLeft from '@/components/HeroLeft';

export const metadata: Metadata = {
  title: 'Jess AI - 24/7 AI Receptionist | Traffik',
  description: 'Meet Jess AI. Your AI receptionist that takes calls, books appointments, sends reminders and upsells services 24/7. Call 03 565 4900.',
};

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Uses your existing HeroLeft pattern */}
      <HeroLeft
        title="Meet Jess AI"
        subtitle="Your 24/7 AI Receptionist"
        description="Never miss a call again. Jess AI answers inquiries, books appointments automatically, sends follow-up reminders, and upsells your services—all day, every day. Trained specifically on your business data."
        primaryCta={{ label: "Call Jess AI: 03 565 4900", href: "tel:035654900" }}
        secondaryCta={{ label: "View Pricing", href: "#pricing" }}
        imageSrc="/images/aiv-hero.jpg" // Replace with jess-ai-hero.jpg when you have one
        imageAlt="Jess AI Interface"
      />

      {/* Stats Bar */}
      <section className="bg-slate-900 py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <p className="text-slate-400">Availability</p>
            </div>
            <div className="md:border-x md:border-slate-700">
              <div className="text-4xl font-bold text-indigo-400 mb-2">0%</div>
              <p className="text-slate-400">Missed Calls</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">70%</div>
              <p className="text-slate-400">Reduction in No-Shows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font
