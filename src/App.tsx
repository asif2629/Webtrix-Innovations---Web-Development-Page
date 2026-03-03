/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LucideIcon, ArrowRight, CheckCircle2, Star, Globe, Zap, Shield, Layout, Search, Layers, TrendingUp, Tag, Key, Settings, Code, ShoppingCart, Building2, UserCircle, Target, Newspaper, ChevronDown, ShoppingBag, HeartPulse, Home, Gavel, Contact, Calculator, GraduationCap, Store, Wallet, Laptop, Clock, Handshake, Lightbulb, ClipboardList, Monitor, Code2, Rocket, ListChecks, Smartphone, Timer, ShieldCheck, Server, BarChart3, FileText, ChevronRight, Plus, Minus, ChevronLeft, Quote, Truck, Users, Sparkles, Plane, Car, Hospital, Pill, Stethoscope, Gem, Bug, Droplets, Send } from "lucide-react";

const TickerItem = ({ text, icon: Icon }: { text: string; icon: LucideIcon; key?: any }) => (
  <div className="flex items-center gap-2 px-8 whitespace-nowrap">
    <Icon className="w-4 h-4 text-brand" />
    <span className="text-sm font-medium tracking-wide uppercase text-zinc-400">{text}</span>
  </div>
);

const AccordionItem = ({ title, content, defaultOpen = false }: { title: string; content: string; defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left px-8 py-5 rounded-full flex items-center justify-between transition-all duration-300 ${
          isOpen ? 'bg-zinc-900 text-white shadow-lg' : 'bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-300'
        }`}
      >
        <span className="text-lg font-bold flex items-center gap-3">
          <span className="w-6 flex justify-center">{isOpen ? '—' : '+'}</span>
          {title}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-14 py-6 text-zinc-600 leading-relaxed text-lg">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FloatingWindow = ({ 
  className, 
  title, 
  icon: Icon, 
  delay = 0 
}: { 
  className: string; 
  title: string; 
  icon: LucideIcon; 
  delay?: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    className={`absolute bg-white/90 backdrop-blur-md border border-zinc-200 rounded-xl shadow-2xl p-4 flex items-center gap-3 z-20 ${className}`}
  >
    <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider leading-none mb-1">Active Now</p>
      <p className="text-sm font-bold text-zinc-900 leading-none">{title}</p>
    </div>
  </motion.div>
);

export default function App() {
  const tickerItems = [
    { text: "1000+ Projects Completed", icon: Zap },
    { text: "Worldwide Clients", icon: Globe },
    { text: "Top Rated Agency", icon: Star },
    { text: "99% Client Satisfaction", icon: Shield },
    { text: "SEO Optimized", icon: Search },
    { text: "Custom Development", icon: Layout },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-brand/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-brand fill-brand" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">Webtrix</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Services</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Portfolio</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Blog</a>
          </div>

          <button className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
            Contact Us
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 ml-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold">4.9/5</span>
                  <span className="text-sm text-zinc-500 font-medium">from 200+ reviews</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6">
                We Build <span className="text-brand">Digital Experiences</span> That Convert.
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-10 max-w-xl">
                Webtrix Innovations is a premier web development agency specializing in high-performance websites that dominate search results and turn visitors into loyal customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand/20 group">
                  Request Proposal
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white border border-zinc-200 hover:border-zinc-300 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2">
                  View Packages
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 font-display font-bold text-xl">
                  <Globe className="w-6 h-6" /> Google
                </div>
                <div className="flex items-center gap-2 font-display font-bold text-xl">
                  <Zap className="w-6 h-6" /> Upwork
                </div>
                <div className="flex items-center gap-2 font-display font-bold text-xl">
                  <CheckCircle2 className="w-6 h-6" /> Clutch
                </div>
              </div>
            </motion.div>

            {/* Right Content - Mockup */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10"
              >
                {/* Main Laptop Mockup */}
                <div className="relative rounded-2xl overflow-hidden border-[12px] border-zinc-900 shadow-2xl bg-zinc-900 aspect-[16/10]">
                  <img
                    src="https://picsum.photos/seed/dashboard/1200/800"
                    alt="Web Dashboard"
                    className="w-full h-full object-cover opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/40 to-transparent pointer-events-none" />
                </div>

                {/* Floating Elements */}
                <FloatingWindow 
                  className="-top-8 -left-8" 
                  title="SEO Optimization" 
                  icon={Search} 
                  delay={0.4}
                />
                <FloatingWindow 
                  className="top-1/2 -right-12 -translate-y-1/2" 
                  title="Lead Generation" 
                  icon={Zap} 
                  delay={0.6}
                />
                <FloatingWindow 
                  className="-bottom-8 left-12" 
                  title="Custom UI/UX" 
                  icon={Layout} 
                  delay={0.8}
                />

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand/10 blur-[120px] -z-10 rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Ticker Bar */}
      <div className="bg-zinc-900 py-8 relative overflow-hidden flex items-center">
        <div className="flex animate-infinite-scroll">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <TickerItem key={index} text={item.text} icon={item.icon} />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Center-Aligned Text */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-8"
            >
              Powerful Website Development Services
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-zinc-600 text-lg leading-relaxed"
            >
              <p>
                Our approach begins with AI-driven discovery, ensuring every pixel and interaction is backed by data and user behavior analysis. We don't just build websites; we engineer digital growth engines.
              </p>
              <p>
                By prioritizing clean code and modern architecture, we deliver lightning-fast performance and seamless scalability. Your success is built on a foundation of technical excellence and creative innovation.
              </p>
            </motion.div>
          </div>

          {/* Bottom Split Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-900 text-xs font-bold uppercase tracking-widest mb-6">
                Trusted Website Development Agency
              </span>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Professional, Scalable, and SEO-Friendly Web Development Services
              </h3>
              <h4 className="text-xl font-bold text-brand mb-6 uppercase tracking-wide">
                Every Type Of Website You Need. DELIVERED
              </h4>
              <p className="text-zinc-600 text-lg leading-relaxed mb-10">
                We have successfully delivered high-impact projects across diverse industries, including complex e-commerce platforms, robust corporate portals, and high-converting landing pages. Our team ensures your digital presence is not just beautiful, but a powerful business asset.
              </p>
              <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-zinc-200">
                Let’s Create My Website
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Right Column - Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 shadow-inner">
                <img 
                  src="https://picsum.photos/seed/developer-illustration/800/600" 
                  alt="Web Developer Illustration" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand/10 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-zinc-900/5 rounded-full blur-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-brand font-bold uppercase tracking-widest text-sm mb-4"
            >
              Why Hire Webtrix Innovations
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-zinc-900"
            >
              Benefits of Choosing Webtrix for Web Development.
            </motion.h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "One-Stop Solution for all Web Needs.",
                desc: "From design and development to SEO and maintenance, we handle everything under one roof for a seamless experience.",
                icon: Layers
              },
              {
                title: "Scalable and Future-Ready Solutions.",
                desc: "We build with the future in mind, ensuring your website grows alongside your business without technical debt.",
                icon: TrendingUp
              },
              {
                title: "Feature-Loaded Sites at Competitive Prices.",
                desc: "Get premium features and high-end performance without the enterprise price tag. We maximize your ROI.",
                icon: Tag
              },
              {
                title: "Complete Ownership & Control.",
                desc: "You own 100% of your code and assets. No vendor lock-in, just pure freedom and total control over your digital property.",
                icon: Key
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors">
                  <benefit.icon className="w-6 h-6 text-zinc-900 group-hover:text-brand transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all flex items-center gap-2 group shadow-2xl shadow-zinc-200">
              Get a FREE Website Quote!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Global-Quality at Indian Prices
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-brand mb-6"
            >
              Affordable Doesn’t Mean Ordinary or Cheap.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 text-lg leading-relaxed"
            >
              With over 10+ years of expertise, we offer transparent pricing that delivers world-class digital solutions tailored to your budget. No hidden costs, just exceptional value.
            </motion.p>
          </div>

          {/* Pricing Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: "Startup",
                bestFor: "Best for New Ventures",
                usd: "199",
                inr: "15,000",
                tabColor: "bg-zinc-900",
                features: ["5 Pages Website", "Free Logo Design", "Mobile Responsive", "WhatsApp Integration", "1 Year Support"],
                featured: false
              },
              {
                name: "Small Business",
                bestFor: "Best for Growing Companies",
                usd: "499",
                inr: "40,000",
                tabColor: "bg-brand",
                features: ["10 Pages Website", "Free Logo Design", "SEO Optimized", "WhatsApp Integration", "2 Years Support", "Custom UI/UX"],
                featured: true
              },
              {
                name: "E-commerce",
                bestFor: "Best for Online Stores",
                usd: "999",
                inr: "80,000",
                tabColor: "bg-zinc-900",
                features: ["Unlimited Products", "Payment Gateway", "Inventory Management", "WhatsApp Integration", "Lifetime Support", "Mobile App Ready"],
                featured: false
              }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col bg-white rounded-2xl border ${plan.featured ? 'border-brand shadow-2xl shadow-brand/10 scale-105 z-10' : 'border-zinc-200'} overflow-hidden`}
              >
                {/* Tab Header */}
                <div className={`h-3 w-full ${plan.tabColor}`} />
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-8">
                    <h4 className="text-2xl font-display font-bold text-zinc-900 mb-1">{plan.name}</h4>
                    <p className="text-sm font-medium text-zinc-500">{plan.bestFor}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-display font-bold text-zinc-900">${plan.usd}</span>
                      <span className="text-zinc-500 font-medium">USD</span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl font-display font-bold text-zinc-400">₹{plan.inr}</span>
                      <span className="text-zinc-400 font-medium text-sm">INR</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-zinc-600">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${plan.featured ? 'text-brand' : 'text-zinc-400'}`} />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${plan.featured ? 'bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20' : 'bg-zinc-900 hover:bg-zinc-800 text-white'}`}>
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Service Inclusions Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight"
            >
              Build High-Performing Websites with India’s Trusted Web Development Company
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-brand mb-6 uppercase tracking-wider"
            >
              We Make Every Promise Count
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 text-lg leading-relaxed"
            >
              Our in-house team of UI/UX designers, developers, and SEO experts work together to deliver a comprehensive digital solution that drives real business results.
            </motion.p>
          </div>

          {/* Inclusions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Key Inclusions",
                image: "https://picsum.photos/seed/inclusion1/800/400",
                items: ["Custom-made/template sites", "Responsive design", "Fast-speed", "SSL Certificate", "SEO-optimized", "Browser-compatibility"]
              },
              {
                title: "Design & Branding",
                image: "https://picsum.photos/seed/design2/800/400",
                items: ["Custom graphics", "Licensed stock photos", "Unique Logo Design", "UI/UX Optimization"]
              },
              {
                title: "Key Integrations",
                image: "https://picsum.photos/seed/integration3/800/400",
                items: ["Social Media (FB, IG, LI)", "Google Analytics", "Search Console", "Live Chat", "CRM/ERP Integration"]
              },
              {
                title: "Hosting & Domain",
                image: "https://picsum.photos/seed/hosting4/800/400",
                items: ["Top-Tier Hosting (CloudFlare, AWS)", "Domain Set-Up", "Server Configuration", "Database Optimization"]
              },
              {
                title: "Quality Assurance",
                image: "https://picsum.photos/seed/qa5/800/400",
                items: ["Thorough Testing", "Speed Checks", "Mobile-First Testing", "Threat Detection"]
              },
              {
                title: "Post Launch",
                image: "https://picsum.photos/seed/launch6/800/400",
                items: ["Free Training", "Expiration Reminders", "Maintenance Support", "Email Integration"]
              },
              {
                title: "Other Valuable Bonuses",
                image: "https://picsum.photos/seed/bonus7/800/400",
                items: ["Free Hosting & Domain (pkg based)", "Transparent Pricing", "Expert Ideas", "SEO-Friendly Content"]
              }
            ].map((inclusion, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow ${idx === 6 ? 'md:col-span-2' : ''}`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={inclusion.image} 
                    alt={inclusion.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-display font-bold text-zinc-900 mb-6">{inclusion.title}</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {inclusion.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-3 text-zinc-600">
                        <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Models Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-500 font-medium mb-4"
            >
              Regardless Of Your Needs, We Have A Website Model Tailored To Your Requirements.
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-8"
            >
              Best Website Development Company In India
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-zinc-600 text-lg leading-relaxed mb-8"
            >
              <p>
                We offer a wide range of models including static sites, dynamic portals, e-commerce stores, and industry-specific solutions using WordPress and Shopify.
              </p>
              <p className="font-bold text-zinc-900">
                No matter your vision, we have the right website building model to bring it to life.
              </p>
            </motion.div>

            {/* Black Tooltip Label */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest"
            >
              Website Types
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </motion.div>
          </div>

          {/* The Grid (3-Column Layout) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dynamic Websites",
                subtext: "(interactive, database-driven)",
                icon: Settings
              },
              {
                title: "Static Websites",
                subtext: "(Simple, Fast Loading info sites)",
                icon: Code
              },
              {
                title: "E-Commerce Websites",
                subtext: "(Shopify, WooCommerce, Magento, etc.)",
                icon: ShoppingCart
              },
              {
                title: "Corporate / Business Websites",
                subtext: "(for companies & enterprises)",
                icon: Building2
              },
              {
                title: "Portfolio Websites",
                subtext: "(for creatives, consultants, freelancers)",
                icon: UserCircle
              },
              {
                title: "Landing Pages / Sales Funnels",
                subtext: "(for campaigns & conversions)",
                icon: Target
              },
              {
                title: "Blog & Content Websites",
                subtext: "(publishers, personal brands, magazines)",
                icon: Newspaper
              }
            ].map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all group text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors">
                  <model.icon className="w-8 h-8 text-zinc-900 group-hover:text-brand transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">{model.title}</h4>
                <p className="text-sm text-zinc-500 font-medium">{model.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Navigation Label */}
          <div className="flex justify-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-zinc-900 text-white px-8 py-3 rounded-xl text-lg font-bold tracking-tight shadow-xl"
            >
              Platform Type
              {/* Downward Pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 rotate-45" />
            </motion.div>
          </div>

          {/* The Grid (3-Column Layout) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WordPress Development",
                subtext: "",
                icon: Globe // Representing the web/WP
              },
              {
                title: "Shopify Development",
                subtext: "",
                icon: ShoppingCart
              },
              {
                title: "Custom PHP",
                subtext: "(Cake php, Laravel, Core php, etc.)",
                icon: Code
              },
              {
                title: "Magento Development",
                subtext: "",
                icon: ShoppingBag
              },
              {
                title: "HTML5 / Bootstrap Websites",
                subtext: "",
                icon: Shield
              },
              {
                title: "CMS-Based Development",
                subtext: "(Joomla, Drupal, etc.)",
                icon: Settings
              }
            ].map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-zinc-200 hover:border-brand/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/5 transition-all group text-center flex flex-col items-center justify-center min-h-[220px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors">
                  <platform.icon className="w-8 h-8 text-zinc-900 group-hover:text-brand transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">{platform.title}</h4>
                {platform.subtext && (
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">{platform.subtext}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Navigation Label */}
          <div className="flex justify-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-zinc-900 text-white px-8 py-3 rounded-xl text-lg font-bold tracking-tight shadow-xl"
            >
              Business Type
              {/* Downward Pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 rotate-45" />
            </motion.div>
          </div>

          {/* The Grid (4-Column Layout) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: "Healthcare Websites", icon: HeartPulse },
              { title: "Real Estate Websites", icon: Home },
              { title: "Legal Websites", icon: Gavel },
              { title: "Consultants & Coaches Websites", icon: Contact },
              { title: "Financial Services Websites", icon: Calculator },
              { title: "Education & eLearning Portals", icon: GraduationCap },
              { title: "Trades & Local Business Websites", icon: Store }
            ].map((business, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all group text-center flex flex-col items-center justify-center min-h-[180px]"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-50 flex items-center justify-center mb-5 group-hover:bg-brand/10 transition-colors">
                  <business.icon className="w-7 h-7 text-zinc-900 group-hover:text-brand transition-colors" />
                </div>
                <h4 className="text-base font-bold text-zinc-900 leading-snug">{business.title}</h4>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all flex items-center gap-2 group shadow-xl">
              Get a FREE Website Quote!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* How to Hire Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight"
            >
              How To Hire A Website Development Company In India
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-600 text-lg leading-relaxed"
            >
              Our team of website developers in India streamlines everything from start to finish, such that the entire process seems easy to us as well as our clients.
            </motion.p>
          </div>

          {/* The Grid (2-Column Layout) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Review Their Portfolio And Experience",
                desc: "Start by checking their past projects. A good development company will have a diverse portfolio showcasing different types of websites, from business and eCommerce sites to custom web applications. This gives you confidence in their versatility and expertise."
              },
              {
                title: "Understand Their Development Process",
                desc: "Ask about the step-by-step website development process, from strategy and wireframing to design, development, and testing. A transparent process ensures that your website is built systematically, without last-minute surprises."
              },
              {
                title: "Check For Technical Expertise",
                desc: "Ensure the team is skilled in modern technologies like WordPress, Shopify, PHP, React, Node.js, or Laravel, depending on your project’s requirements. A technically strong website development agency can build a fast, secure, and scalable website."
              },
              {
                title: "Evaluate Communication And Support",
                desc: "Smooth communication is essential, especially when working with an international website development company. Make sure your chosen a website development company that offers regular updates, quick responses, and post-launch support."
              },
              {
                title: "Focus On Quality Over Cost",
                desc: "India is known for affordable web development solutions, but the cheapest option is not always the best. Compare the quality of work, attention to detail, and ongoing support before making your choice."
              },
              {
                title: "Check Client Reviews And Testimonials",
                desc: "Read what past clients have to say. Genuine testimonials and verified Google reviews reflect an agency’s reliability, work ethic, and customer satisfaction."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-zinc-200 hover:border-brand/30 hover:shadow-xl transition-all"
              >
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all flex items-center gap-2 group shadow-xl">
              Build Your Website NOW!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Hire an Indian Agency Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight"
            >
              Why Hire A Website Development Company In India
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-600 text-lg leading-relaxed"
            >
              Hiring a website development company in India has become a global trend, and for good reasons. Web development companies in India are known for their creativity, technical expertise, and ability to deliver high-quality websites at competitive prices.
            </motion.p>
          </div>

          {/* The Grid (2-Column Layout) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Cost-Effective Without Compromising Quality",
                desc: "Indian web development agencies offer professional web development services at a much lower cost compared to agencies in the USA, UK, or Australia, making it ideal for startups and growing businesses that want quality within budget.",
                icon: Wallet
              },
              {
                title: "Highly Skilled Developers",
                desc: "India has a massive pool of talented web developers who are well-versed in global design standards, coding practices, and the latest CMS and framework technologies. You get both creativity and technical precision in one place.",
                icon: Laptop
              },
              {
                title: "Flexible Collaboration and Time Zone Advantage",
                desc: "Our team ensures seamless communication across different time zones, offering flexible work hours to match your schedule and ensure project milestones are met without delays.",
                icon: Clock
              },
              {
                title: "End-to-End Digital Solutions",
                desc: "Top Indian web development companies, including Webtrix Innovations, also offer complementary services like SEO, Google Ads, social media marketing, and content creation, so you can manage everything under one roof.",
                icon: Settings
              },
              {
                title: "Proven Global Client Base",
                desc: "Indian website development agencies have built and maintained websites for clients across the USA, UK, Canada, Australia, and beyond. Their experience working with international businesses ensures they understand your expectations and market standards.",
                icon: Handshake
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-zinc-200 hover:border-brand/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors">
                  <item.icon className="w-7 h-7 text-zinc-900 group-hover:text-brand transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing Text & CTA */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-600 text-lg leading-relaxed mb-10"
            >
              At Webtrix Innovations, we’ve helped hundreds of businesses build powerful, SEO-friendly, and visually stunning websites. Whether you need a business site, eCommerce store, or a fully customized platform, our team can bring your vision to life.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all flex items-center gap-2 group shadow-xl">
                Build Your Website NOW!
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight"
            >
              Our Website Development Process - Simple & Straightforward
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-brand mb-6"
            >
              Making Website Development As Easy As 1.2.3
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 text-lg leading-relaxed"
            >
              Our team of website developers in India streamlines everything from start to finish, such that the entire process seems easy to us as well as our clients.
            </motion.p>
          </div>

          {/* The Grid (2-Column Layout) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Ideation Phase",
                desc: "We brainstorm concepts until we achieve something that closely resembles your visualization. Our creative team sits down with you to understand expectations and create a blueprint.",
                icon: Lightbulb
              },
              {
                title: "Information Collection & Roadmap Creation",
                desc: "Our team of content writers and graphic designers works to gather comprehensive information about your brand, industry, and target audience to ensure alignment.",
                icon: ClipboardList
              },
              {
                title: "Logo and MockUp Creation",
                desc: "Next up is the creation of a logo and mockup by our intuitive team of graphic designers. This provides you with a visual preview of your website.",
                icon: Monitor
              },
              {
                title: "Development & Coding",
                desc: "Our team builds a future-ready website with clean, secure, and scalable code that’s easy to understand and can be amended easily at any time.",
                icon: Code2
              },
              {
                title: "Testing & Quality Checks",
                desc: "We test for all minor and major errors impacting functionality, user-friendliness, or performance. We ensure optimal function on all devices and cross-browser compatibility.",
                icon: Laptop
              },
              {
                title: "SEO Integration in Websites",
                desc: "Our SEO experts craft a tailored strategy to make your website search engine-friendly. Developers implement these strategies to create a well-optimised website.",
                icon: Search
              },
              {
                title: "Deployment & Launch",
                desc: "In this phase, we configure the server, connect the domain to the server’s IP address, and ensure everything functions properly when the site is live.",
                icon: Rocket
              },
              {
                title: "Maintenance & Optimization",
                desc: "We provide ongoing support and strategic updates to ensure your website continues to perform at its peak as your business grows.",
                icon: Settings
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-zinc-200 hover:border-brand/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors">
                  <item.icon className="w-7 h-7 text-zinc-900 group-hover:text-brand transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all flex items-center gap-2 group shadow-xl">
              Contact Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Best Website Development Practices Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight"
            >
              Best Website Development Practices We Follow To Make Websites Future Ready!
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-brand mb-6"
            >
              Standards That Help Us Carve Out a Niche
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 text-lg leading-relaxed"
            >
              Our team of website developers in India streamlines everything from start to finish, such that the entire process seems easy to us as well as our clients.
            </motion.p>
          </div>

          {/* The Grid (2-Column Layout) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "SEO-Ready Architecture",
                desc: "From the outset, we incorporate SEO best practices, maintaining heading hierarchy, adding meta titles, and optimizing site speed to keep your site search-engine ready.",
                icon: ListChecks
              },
              {
                title: "Mobile Responsiveness",
                desc: "With over 60% of traffic coming from mobile, we utilize the best CSS techniques to adjust layouts and typography for all screen sizes.",
                icon: Smartphone
              },
              {
                title: "Fast Loading Speed",
                desc: "We optimize images, enable GZIP compression, and utilize CDNs and Nitro Packages to enhance overall site performance and perception.",
                icon: Timer
              },
              {
                title: "Security-First Coding",
                desc: "Our developers utilize a hi-tech Developer First Security approach, embedding cybersecurity into the overall process for a risk-free site.",
                icon: ShieldCheck
              },
              {
                title: "Easy Scalability",
                desc: "We create websites that can efficiently handle increased workloads and future demands, ensuring your site grows with your business.",
                icon: Server
              },
              {
                title: "Integrated Analytics & Tracking",
                desc: "We connect your site to Google Analytics to assess performance, user behavior, and conversions, feeding data back into a tailored SEO plan.",
                icon: BarChart3
              },
              {
                title: "High-Quality & Licensed Graphics",
                desc: "We use only high-quality, licensed images and icons from premium tools like Freepik to elevate your website’s overall aesthetics.",
                icon: FileText
              },
              {
                title: "Premium Templates & Hosting",
                desc: "We use secure, performance-driven premium templates and offer reliable hosting solutions for faster load times and robust security.",
                icon: Monitor
              }
            ].map((practice, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-zinc-200 hover:border-brand/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors">
                  <practice.icon className="w-7 h-7 text-zinc-900 group-hover:text-brand transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{practice.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{practice.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all flex items-center gap-2 group shadow-xl">
              Contact Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* High-Conversion CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 p-12 md:p-20 shadow-2xl shadow-orange-200"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Visuals */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative w-full max-w-[500px] aspect-square">
                  {/* Main 3D Illustration Placeholder */}
                  <img 
                    src="https://picsum.photos/seed/3d-workspace/800/800" 
                    alt="3D Workspace Illustration" 
                    className="w-full h-full object-contain drop-shadow-2xl rounded-3xl"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Elements (Simulated with Icons/Divs for 3D feel) */}
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-12"
                  >
                    <Layout className="w-10 h-10 text-orange-500" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-6 -left-6 w-24 h-24 bg-zinc-900 rounded-full shadow-2xl flex items-center justify-center -rotate-12"
                  >
                    <Zap className="w-12 h-12 text-yellow-400" />
                  </motion.div>

                  <motion.div 
                    animate={{ x: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 -right-8 w-16 h-16 bg-brand rounded-xl shadow-lg flex items-center justify-center rotate-45"
                  >
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column: Content */}
              <div className="text-white">
                <motion.h2 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight"
                >
                  Your Website Isn’t <span className="font-bold">Converting Visitors Into Leads?</span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
                >
                  If your site looks outdated or fails to generate enquiries, we build high-performance websites designed for conversions and measurable growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <button className="bg-white text-zinc-900 px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-orange-900/20 active:scale-95">
                    Build My High-Performance Website
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Hire Us Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-zinc-900"
              >
                Why Hire Us For Website Development Services In India
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-600 text-lg leading-relaxed mb-10 max-w-xl"
              >
                We are experienced, with over 10 years of industry experience and more than 500 websites developed, and we bring a level of expertise that you exactly require for your website development project.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all flex items-center gap-2 group shadow-xl">
                  Contact Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right Column (Interactive Accordion) */}
            <div className="space-y-2">
              <AccordionItem 
                title="We Have Expert Developers"
                content="We have a skilled team of senior as well as junior web developers who work together to give you stellar website development solutions. By staying updated with the latest tools and trends, they ensure your website is modern and future-ready. We offer quick support, prompt communication, timely updates, and dedicated support."
                defaultOpen={true}
              />
              <AccordionItem 
                title="We Have Affordable Website Packages"
                content="We offer reasonably-priced website development services that give businesses of all budgets, types, and requirements the opportunity to have a professional business website."
              />
              <AccordionItem 
                title="We Offer Freebies"
                content="We provide valuable add-ons such as SSL setup and essential plugins. We strive to pack extra value so your website is secure, visible, and growth-ready from day one. We also offer post-launch maintenance, security checks, and performance optimization."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Testimonials
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-medium text-zinc-900"
            >
              What Our <span className="font-bold">Clients</span> Have To Say!
            </motion.h2>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="flex gap-8 overflow-hidden py-4">
              <motion.div 
                className="flex gap-8"
                animate={{ x: 0 }}
              >
                <div className="grid md:grid-cols-3 gap-8 w-full">
                  {[
                    {
                      name: "Shilpa Pradhan",
                      country: "USA",
                      flag: "🇺🇸",
                      service: "Website",
                      text: "Promptness and response. Their ability to be flexible. They are very engaging and yet professional. It is the first time that we’ve worked with an Indian company and I must say the experience is par excellence!"
                    },
                    {
                      name: "Arum Mathew",
                      country: "Canada",
                      flag: "🇨🇦",
                      service: "Website",
                      text: "They delivered items on time and were open to suggestions and changes."
                    },
                    {
                      name: "Antonio Santo",
                      country: "Spain",
                      flag: "🇪🇸",
                      service: "Website",
                      text: "I really appreciate how they worked... even if we were in two different part of the world it was always easy be in touch... they did a great job."
                    }
                  ].map((t, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                    >
                      <div className="mb-6 flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-zinc-900 text-lg">{t.name}</h4>
                          <div className="flex items-center gap-2 text-zinc-500 text-sm mt-1">
                            <span>{t.flag}</span>
                            <span>{t.country}</span>
                            <span className="text-zinc-300">•</span>
                            <span>{t.service}</span>
                          </div>
                        </div>
                        <Quote className="w-8 h-8 text-zinc-100" />
                      </div>
                      
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-zinc-600 leading-relaxed italic flex-grow">
                        "{t.text}"
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden lg:block">
              <button className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-50 transition-colors">
                <ChevronLeft className="w-6 h-6 text-zinc-900" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden lg:block">
              <button className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-50 transition-colors">
                <ChevronRight className="w-6 h-6 text-zinc-900" />
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <button className="bg-white border-2 border-zinc-900 text-zinc-900 px-10 py-4 rounded-lg font-bold hover:bg-zinc-900 hover:text-white transition-all flex items-center gap-2 group">
              View All Testimonials
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CMS Platforms Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Navigation Label (Speech Bubble) */}
          <div className="flex justify-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-zinc-900 text-white px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-widest shadow-xl"
            >
              CMS Platforms
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-zinc-900" />
            </motion.div>
          </div>

          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight text-zinc-900"
            >
              Best Website Development Company In India
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-brand mb-6"
            >
              Regardless Of Your Needs, We Have A Website Model Tailored To Your Requirements
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 text-lg leading-relaxed"
            >
              At Webtrix Innovations, we offer a wide range of website development models, including simple static sites, dynamic business portals, full-fledged e-commerce stores, and industry-specific solutions.
            </motion.p>
          </div>

          {/* The Grid (4-Column Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "WordPress", slug: "wordpress" },
              { name: "Drupal", slug: "drupal" },
              { name: "Joomla", slug: "joomla" },
              { name: "HubSpot", slug: "hubspot" },
              { name: "Magento", slug: "magento" },
              { name: "Shopify", slug: "shopify" },
              { name: "SquareSpace", slug: "squarespace" },
              { name: "Wix", slug: "wix" }
            ].map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-brand/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={`https://cdn.simpleicons.org/${platform.slug}`} 
                    alt={`${platform.name} logo`}
                    className="w-12 h-12 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 group-hover:text-brand transition-colors">
                  {platform.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Platforms Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Navigation Label (Speech Bubble) */}
          <div className="flex justify-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-zinc-900 text-white px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-widest shadow-xl"
            >
              E-commerce Platforms
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-zinc-900" />
            </motion.div>
          </div>

          {/* The Grid (5-Column Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {[
              { name: "WooCommerce", slug: "woocommerce" },
              { name: "Opencart", slug: "opencart" },
              { name: "BigCommerce", slug: "bigcommerce" },
              { name: "Magento", slug: "magento" },
              { name: "Shopify", slug: "shopify" }
            ].map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-brand/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={`https://cdn.simpleicons.org/${platform.slug}`} 
                    alt={`${platform.name} logo`}
                    className="w-12 h-12 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 group-hover:text-brand transition-colors">
                  {platform.name}
                </h4>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all flex items-center gap-2 group shadow-xl">
              Get a FREE Website Quote!
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-4"
            >
              Website Development Services In India For Every Industry Type
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Roofing Company", icon: Home },
              { name: "Real Estate Company", icon: Building2 },
              { name: "Dental Clinic", icon: HeartPulse },
              { name: "School website", icon: GraduationCap },
              { name: "Moving Companies", icon: Truck },
              { name: "Online Store", icon: ShoppingCart },
              { name: "Consulting Company", icon: Users },
              { name: "Immigration", icon: Globe },
              { name: "Cleaning Company", icon: Sparkles },
              { name: "Law Firm", icon: Gavel },
              { name: "Tour And Travel", icon: Plane },
              { name: "Cab Company", icon: Car },
              { name: "Healthcare", icon: Hospital },
              { name: "IT Company", icon: Laptop },
              { name: "Pharmacy", icon: Pill },
              { name: "Doctor", icon: Stethoscope },
              { name: "Jeweler", icon: Gem },
              { name: "Pest Control", icon: Bug },
              { name: "Accountant", icon: Calculator },
              { name: "Oil And Gas", icon: Droplets }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-brand/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
                  <industry.icon className="w-6 h-6 text-zinc-600 group-hover:text-brand transition-colors" />
                </div>
                <span className="text-sm font-bold text-zinc-900 leading-tight">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Portfolio Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-medium text-zinc-900 mb-4"
            >
              Our Website <span className="font-bold">Portfolio</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-600 text-lg"
            >
              You Can Be The Next? Call us for Website Development Consultation
            </motion.p>
          </div>

          <div className="relative group">
            {/* Simple Portfolio Slider */}
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="min-w-[300px] md:min-w-[400px] aspect-video bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 snap-center flex-shrink-0 group/item relative"
                >
                  <img 
                    src={`https://picsum.photos/seed/portfolio-${i}/800/450`} 
                    alt={`Portfolio item ${i + 1}`}
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-zinc-900 px-6 py-2 rounded-full font-bold text-sm">View Project</button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-lg text-zinc-400 hover:text-zinc-900 transition-colors hidden md:flex">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-lg text-zinc-400 hover:text-zinc-900 transition-colors hidden md:flex">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Black Impact CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-zinc-950 p-12 md:p-24 text-center"
          >
            {/* Abstract Wave/Smoke Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display font-medium text-white mb-8 leading-tight"
              >
                <span className="text-yellow-400 font-bold">Get Your Website Rolling</span> With The Best Website Development Company In India
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-400 text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed"
              >
                Contact our team of skilled and experienced web developers to launch your website development project and establish a strong digital presence that drives business growth.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white text-lg font-medium mb-12"
              >
                Get Custom Web Development Solutions From Experts
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-zinc-950 px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-yellow-400/10 group">
                  REQUEST PROPOSAL
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto bg-white hover:bg-zinc-100 text-zinc-950 px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl group">
                  WEBSITE PACKAGES
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 leading-tight"
            >
              FAQs On Our Website Development Services In India
            </motion.h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Which company is best for website development in India?",
                answer: "Webtrix Innovations, with extensive experience of 10+ years and 500+ completed projects. Our solutions provide a competitive edge by combining cutting-edge technology and user-friendliness."
              },
              {
                question: "Do you develop e-commerce websites with payment integration?",
                answer: "Yes, our developers are well-equipped to integrate secure payment gateways into your e-commerce website."
              },
              {
                question: "Will my website be SEO-friendly?",
                answer: "Yes. Our SEO executives and web developers collaborate to ensure your website is SEO-ready and acclaimed by search engines."
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer: "Yes, we have separate website maintenance plans to ensure security, freshness, and optimal performance."
              },
              {
                question: "Will I get training to manage my website?",
                answer: "Yes, we offer free training to all clients to provide basic knowledge for managing the site or making minor changes."
              },
              {
                question: "Can you redesign an existing website?",
                answer: "Yes, we have the expertise to redesign existing websites to better reflect your brand identity and engage your audience."
              },
              {
                question: "Do you provide content writing for websites?",
                answer: "Yes, we have a team of passionate content writers who craft fresh, plagiarism-free, and meaningful content to help customers understand your business."
              }
            ].map((faq, idx) => {
              const [isOpen, setIsOpen] = React.useState(idx === 6);
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100"
                >
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                    <span className="text-lg font-bold text-zinc-900 group-hover:text-brand transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-6 text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
