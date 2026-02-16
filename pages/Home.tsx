
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, PlayCircle, Diamond, Sparkles, Clock, Share2, ShieldCheck, Gem, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax & Layout Transforms
  const yHeroText = useTransform(scrollY, [0, 500], [0, -50]);
  const yHeroImage = useTransform(scrollY, [0, 500], [0, 80]);
  const opacityWatermark = useTransform(scrollY, [0, 300], [0.05, 0]);
  
  // Section 2 Parallax
  const yPillarLeft = useTransform(scrollY, [400, 1200], [50, -50]);
  const yPillarCenter = useTransform(scrollY, [400, 1200], [0, 0]);
  const yPillarRight = useTransform(scrollY, [400, 1200], [80, -80]);

  return (
    <div className="overflow-hidden bg-[#FAF9F6]">
      {/* Hero Section: Split-Editorial */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div 
          style={{ opacity: opacityWatermark }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <h2 className="text-[25vw] font-serif italic text-gray-400 select-none whitespace-nowrap uppercase tracking-tighter">
            Nili's
          </h2>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <span className="h-[1px] w-12 bg-[#E7646A]" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-[#E7646A] font-bold">
                The Sanctuary of Radiant Living
              </span>
            </motion.div>

            <motion.div style={{ y: yHeroText }} className="space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="text-7xl md:text-8xl xl:text-9xl font-serif text-[#333] leading-[0.9] tracking-tighter"
              >
                The Art of <br />
                <span className="italic font-light text-[#E7646A]">Pure Grace.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-light"
              >
                Experience a boutique retreat where advanced biological skincare meets the ancestral touch of master artists.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-12 pt-4"
            >
              <Link to="/contact" className="group relative overflow-hidden bg-[#333] text-white px-14 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] transition-all shadow-2xl">
                <span className="relative z-10 text-white text-xs">Enter the Sanctuary</span>
                <div className="absolute inset-0 bg-[#E7646A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              
              <Link to="/services" className="group flex items-center space-x-4 text-[10px] uppercase tracking-[0.3em] text-[#333] font-bold">
                <span>View Private Menu</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{ y: yHeroImage }}
              className="relative aspect-[3/4.5] w-full max-w-[450px] mx-auto overflow-hidden rounded-t-full shadow-[60px_60px_100px_-40px_rgba(234,216,192,0.6)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Philosophy — Matches reference design */}
      <section className="relative overflow-hidden bg-[#FAF9F6] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Image with curved mask + vertical text + pink card */}
            <motion.div
              style={{ y: yPillarLeft }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative order-2 lg:order-1"
            >
              {/* Vertical text — METICULOUS RITUALS */}
              <div 
                className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center origin-center"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                <span className="text-[10px] font-black text-[#E7646A]/60 uppercase tracking-[0.5em]">
                  Meticulous Rituals
                </span>
              </div>

              {/* Main image with curved right edge (asymmetrical oval) */}
              <div 
                className="relative ml-6 lg:ml-12 h-[400px] lg:h-[580px] overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200"
                  alt="Luxury facial treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Pink card overlapping bottom-right */}
              <div className="absolute bottom-8 right-4 lg:right-8 w-48 lg:w-56 bg-[#F8DDE0]/90 backdrop-blur-sm rounded-2xl p-6 border border-[#EAD8C0]/50 shadow-lg -translate-y-4">
                <p className="text-[10px] font-bold text-[#333] uppercase tracking-[0.3em]">Intimate Care</p>
              </div>
            </motion.div>

            {/* Right: Content — heading, quote, 4 pillars, CTA, signature */}
            <motion.div
              style={{ y: yPillarCenter }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 order-1 lg:order-2 px-0 lg:px-8"
            >
              {/* Section label with diamond */}
              <div className="flex items-center gap-3 mb-6">
                <Gem className="w-4 h-4 text-[#E7646A]" />
                <span className="text-[10px] font-black text-[#E7646A] uppercase tracking-[0.5em]">
                  Our Philosophy
                </span>
              </div>

              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#333] leading-tight mb-8">
                A Sanctuary of <span className="italic font-light text-[#E7646A]">Quiet Elegance.</span>
              </h2>

              {/* Quote */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed italic mb-12 max-w-xl">
                "Beauty is not a destination, but a state of soul. We believe in the restorative power of intentional stillness."
              </p>

              {/* Four pillars — 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-12">
                <div>
                  <div className="w-8 h-[1px] bg-[#E7646A] mb-4" />
                  <h4 className="text-[10px] font-black text-[#333] uppercase tracking-[0.3em] mb-2">Pure Source</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We exclusively utilize wild-harvested, bio-active ingredients that speak the language of your skin.
                  </p>
                </div>
                <div>
                  <div className="w-8 h-[1px] bg-[#E7646A] mb-4" />
                  <h4 className="text-[10px] font-black text-[#333] uppercase tracking-[0.3em] mb-2">High Artistry</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Every therapist is a master artisan, trained in the delicate balance of ancestral touch and modern innovation.
                  </p>
                </div>
                <div>
                  <div className="w-8 h-[1px] bg-[#E7646A] mb-4" />
                  <h4 className="text-[10px] font-black text-[#333] uppercase tracking-[0.3em] mb-2">Ritual Design</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Treatments are never generic. We curate experiences based on your unique biological and emotional landscape.
                  </p>
                </div>
                <div>
                  <div className="w-8 h-[1px] bg-[#E7646A] mb-4" />
                  <h4 className="text-[10px] font-black text-[#333] uppercase tracking-[0.3em] mb-2">Atmosphere</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    A multi-sensory environment designed to calm the nervous system and awaken the spirit.
                  </p>
                </div>
              </div>

              {/* CTA + Signature row */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-bold text-[#333] hover:text-[#E7646A] transition-colors group w-fit"
                >
                  The Full Story
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="text-right flex flex-col items-end">
                  <div className="flex items-center gap-2">
                    <p className="font-serif text-2xl italic text-[#E7646A]">Elena Sterling</p>
                    <Sparkles className="w-4 h-4 text-[#E7646A]" />
                  </div>
                  <p className="text-[10px] font-bold text-[#333] uppercase tracking-[0.3em] mt-1">Founder & Creative Visionary</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Private Menu — Redesigned */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#FAF9F6] relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#EAD8C0]/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header with intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20"
          >
            <span className="text-[10px] font-black text-[#E7646A] uppercase tracking-[0.4em]">
              The Private Menu
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-[#333] tracking-tight">
              Bespoke <span className="italic font-light text-[#E7646A]">Treatments</span>
            </h2>
            <p className="mt-6 text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              Exquisite care for hair, skin, and nails. Each ritual is tailored to your unique beauty journey.
            </p>
          </motion.div>

          {/* Services — 4-column vertical cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.06 }}
              >
                <Link
                  to="/contact"
                  className="group block h-full bg-white rounded-2xl overflow-hidden border border-[#EAD8C0]/30 hover:border-[#EAD8C0] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
                >
                  {/* Image — vertical, prominent */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold text-[#333] uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-serif text-[#333] group-hover:text-[#E7646A] transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-2 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-6 pt-5 border-t border-[#EAD8C0]/50 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1.5 text-gray-500">
                          <Clock className="w-3.5 h-3.5 text-[#E7646A]" />
                          {service.duration}
                        </span>
                        <span className="font-serif text-[#333] font-semibold">{service.price}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#E7646A] group-hover:tracking-[0.2em] transition-all">
                        Book
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-[#333] hover:text-[#E7646A] transition-colors group"
            >
              View full menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Social Proof — Balanced 3-column grid */}
      <section className="py-24 md:py-32 lg:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <span className="text-[10px] font-black text-[#E7646A] uppercase tracking-[0.4em]">
              Social Proof
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-[#333] tracking-tight">
              The Radiance <span className="italic font-light text-[#E7646A]">Chronicles</span>
            </h2>
          </motion.div>

          {/* 3 equal columns — balanced layout, no orphaned card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#FAF9F6] rounded-2xl p-8 border border-[#EAD8C0]/30 hover:border-[#EAD8C0] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E7646A] text-[#E7646A]" />
                  ))}
                </div>
                <blockquote className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-[#EAD8C0]/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-[#333] font-medium">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Simplified for Alignment) */}
      <section className="py-48 bg-[#FAF9F6] border-t border-[#EAD8C0]/20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-[#333]">The Gift of Nili's.</h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed italic">
              Experience the pinnacle of boutique wellness. Our master artists are ready to curate your transformation.
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/membership" className="group flex items-center space-x-4 text-[10px] uppercase tracking-[0.4em] font-black text-[#E7646A]">
              <span>Membership Inquiry</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
