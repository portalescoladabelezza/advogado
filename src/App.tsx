import React, { useState, useEffect, ComponentType } from "react";
import { 
  Heart, 
  Briefcase, 
  Scale, 
  ShoppingBag, 
  Users, 
  FileText, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  ArrowRight, 
  Check, 
  Calendar, 
  PhoneCall, 
  ExternalLink 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { OFFICE_CONFIG, AREAS_ATUACAO, HOW_IT_WORKS_STEPS, TRUST_CARDS } from "./config";

// Direct image path of generated asset
const heroImage = "/src/assets/images/law_firm_hero_1781056207232.png";

// Map names to Lucide Icon components safely
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Heart,
  Briefcase,
  Scale,
  ShoppingBag,
  Users,
  FileText
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeAreaFilter, setActiveAreaFilter] = useState<string>("todos");

  // Track scrolling to apply blur/white background to Header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Safe WhatsApp URL generation
  const getWhatsAppUrl = (text: string) => {
    const number = OFFICE_CONFIG.whatsappNumber;
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  };

  const handleFloatingClick = () => {
    const msg = "Olá! Vi o site Moura & Almeida Advocacia e gostaria de receber orientação jurídica.";
    window.open(getWhatsAppUrl(msg), "_blank", "referrer");
  };

  const handleGeneralClick = () => {
    const msg = "Olá! Vi o site Moura & Almeida Advocacia e gostaria de falar com um advogado.";
    window.open(getWhatsAppUrl(msg), "_blank", "referrer");
  };

  const handleAreaClick = (areaName: string) => {
    const msg = `Olá! Vi no site Moura & Almeida Advocacia a área de ${areaName} e gostaria de receber orientação.`;
    window.open(getWhatsAppUrl(msg), "_blank", "referrer");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-gold-metallic selection:text-white antialiased">
      
      {/* 1. HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-navy-deep/95 backdrop-blur-md shadow-md border-b border-gold-metallic/30 py-3" 
            : "bg-navy-deep/75 backdrop-blur-xs border-b border-gold-metallic/10 py-5"
        }`}
        id="header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo element with visual polish */}
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-wide text-white flex items-center gap-2">
              <span className="text-gold-metallic">Moura & Almeida</span>
              <span className="font-light text-slate-200">Advocacia</span>
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-metallic" />
              <span className="text-[10px] uppercase tracking-widest text-gold-metallic font-semibold">
                {OFFICE_CONFIG.slogan}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-sm font-medium text-slate-200 hover:text-gold-metallic transition-colors">Início</a>
            <a href="#areas" className="text-sm font-medium text-slate-200 hover:text-gold-metallic transition-colors">Áreas de Atuação</a>
            <a href="#sobre" className="text-sm font-medium text-slate-200 hover:text-gold-metallic transition-colors">Sobre</a>
            <a href="#como-funciona" className="text-sm font-medium text-slate-200 hover:text-gold-metallic transition-colors">Como Funciona</a>
            <a href="#contato" className="text-sm font-medium text-slate-200 hover:text-gold-metallic transition-colors">Contato</a>
          </nav>

          {/* CTA/Actions in Header */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={handleGeneralClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold-metallic text-navy-deep hover:bg-gold-hover font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md active:scale-95 duration-200 cursor-pointer"
              id="cta-header-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-slate-350 hover:text-white"
              aria-label="Abrir Menu"
              id="mobile-menu-trigger"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-xs md:hidden"
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-xs bg-slate-950 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-lg font-bold text-white">Moura & Almeida</span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white"
                    aria-label="Fechar Menu"
                    id="mobile-menu-close"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-6 mt-8">
                  <a 
                    href="#inicio" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-100 hover:text-gold-metallic border-b border-white/5 pb-2"
                  >
                    Início
                  </a>
                  <a 
                    href="#areas" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-100 hover:text-gold-metallic border-b border-white/5 pb-2"
                  >
                    Áreas de Atuação
                  </a>
                  <a 
                    href="#sobre" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-100 hover:text-gold-metallic border-b border-white/5 pb-2"
                  >
                    Sobre Nós
                  </a>
                  <a 
                    href="#como-funciona" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-100 hover:text-gold-metallic border-b border-white/5 pb-2"
                  >
                    Como Funciona
                  </a>
                  <a 
                    href="#contato" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-100 hover:text-gold-metallic border-b border-white/5 pb-2"
                  >
                    Fale Conosco
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleGeneralClick();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gold-metallic text-navy-deep font-bold rounded-sm hover:bg-gold-hover transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chamar no WhatsApp
                </button>
                <p className="text-center text-[10px] text-slate-500 uppercase tracking-wider">
                  OAB: {OFFICE_CONFIG.oabPrincipal}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO SECTION */}
      <section 
        className="relative pt-32 pb-20 md:pt-48 md:pb-36 bg-navy-deep hero-diagonal-bg overflow-hidden flex items-center border-b border-gold-metallic/30"
        id="inicio"
      >
        {/* Ambient background graphics + Geometric overlay from theme */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Moura & Almeida Advocacia - Escritório Premium" 
            className="w-full h-full object-cover opacity-25 object-center scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* High Impact Elegant Call */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-none border border-gold-metallic/30 mb-6">
                <span className="flex h-1.5 w-1.5 rounded-full bg-gold-metallic animate-pulse" />
                <span className="text-[11px] sm:text-xs text-slate-200 tracking-widest font-semibold uppercase font-sans">
                  Atendimento Online e Presencial sob Agendamento
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-tight mb-6">
                Atendimento jurídico com seriedade,<br />clareza e compromisso.
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-350 leading-relaxed max-w-xl mb-10 font-light">
                Orientação profissional para quem busca segurança, responsabilidade e atendimento humanizado em cada etapa do seu processo.
              </p>

              {/* Responsive CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={handleGeneralClick}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gold-metallic text-navy-deep font-bold uppercase tracking-wider text-xs sm:text-sm rounded-none hover:bg-gold-hover transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  id="hero-whatsapp-cta"
                >
                  <MessageCircle className="h-4 w-4 fill-navy-deep stroke-none" />
                  Falar no WhatsApp
                </button>
                <a
                  href="#areas"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/35 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold rounded-none hover:border-white/60 transition-all text-xs sm:text-sm uppercase tracking-wider"
                >
                  Ver áreas de atuação
                </a>
              </div>

              {/* Badge credentials */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 mt-12 pt-8 border-t border-gold-metallic/20 w-full max-w-xl text-slate-400">
                <div>
                  <p className="font-serif text-2xl font-bold text-white tracking-tight">OAB Ativo</p>
                  <p className="text-[10px] text-gold-metallic uppercase tracking-widest mt-1 font-semibold">Garantia Ética</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-white tracking-tight">100% Sigiloso</p>
                  <p className="text-[10px] text-gold-metallic uppercase tracking-widest mt-1 font-semibold">Segurança Total</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-serif text-2xl font-bold text-white tracking-tight">Humanizado</p>
                  <p className="text-[10px] text-gold-metallic uppercase tracking-widest mt-1 font-semibold">Linguagem Simples</p>
                </div>
              </div>

            </div>

            {/* Side visual accents matching "Geometric Balance" */}
            <div className="lg:col-span-4 hidden lg:block z-10 relative">
              <div className="w-full height-full flex justify-center items-center py-10 relative">
                {/* Embedded Geometric shapes from the theme */}
                <div className="absolute w-[260px] h-[260px] border border-gold-metallic opacity-20 geometric-rotate-45 pointer-events-none" />
                <div className="absolute w-24 h-[1px] bg-gold-metallic left-4 top-1/2 transform -translate-y-1/2 opacity-60" />
                
                {/* Custom Scales of Justice premium vector overlay */}
                <div className="p-8 bg-navy-card/90 backdrop-blur-md border border-gold-metallic/35 relative z-10 flex flex-col items-center justify-center text-center shadow-2xl">
                  <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="0.75" className="mb-6">
                    <path d="M12 3v18M6 21h12M6 10l6-2 6 2M3 13c3 0 3-3 6-3s3 3 6 3 3-3 6-3" />
                  </svg>
                  
                  <span className="font-serif text-lg font-bold text-white">{OFFICE_CONFIG.name}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] mt-1 font-medium">{OFFICE_CONFIG.slogan}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FAIXA DE DESTAQUE */}
      <section className="bg-[#0b1329] border-y border-[#c5a880]/20 py-5 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden relative">
          {/* Subtle horizontal ticker for visual premium identity */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 text-xs sm:text-sm font-medium tracking-wide uppercase text-slate-200">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880]" />
              Atendimento jurídico com Ética
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880]" />
              Consultoria Estruturada
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880]" />
              Orientação profissional clara
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880]" />
              Atendimento direto no WhatsApp
            </span>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE ÁREAS DE ATUAÇÃO */}
      <section className="py-20 md:py-28" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c5a880] uppercase tracking-widest block mb-3">
              Especialidades Jurídicas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4">
              Áreas de Atuação
            </h2>
            <div className="w-16 h-1 bg-[#c5a880] mx-auto mb-6 rounded-xs" />
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              Conheça as principais frentes em que o escritório Moura & Almeida Advocacia atua, prestando esclarecimentos e assessorando demandas individuais e corporativas com responsabilidade e sigilo absoluto.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AREAS_ATUACAO.map((area, idx) => {
              const IconComp = iconMap[area.iconName] || Scale;
              return (
                <div 
                  key={area.id}
                  className="rounded-xl bg-white border border-slate-200/60 p-8 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 relative overflow-hidden group"
                >
                  {/* Subtle hover accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#c5a880] transition-colors duration-300" />
                  
                  <div>
                    {/* Icon and metadata */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-slate-100 rounded-lg text-slate-900 group-hover:bg-[#0b1329] group-hover:text-[#c5a880] transition-all duration-300">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-xs text-slate-400 font-mono tracking-wider font-light">
                        Área {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b1329] transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-light mb-8">
                      {area.description}
                    </p>
                  </div>

                  {/* Horizontal direct block style button */}
                  <button
                    onClick={() => handleAreaClick(area.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-slate-50 hover:bg-[#0b1329] hover:text-white border border-slate-200 text-slate-700 hover:border-[#0b1329] text-xs font-semibold uppercase tracking-wider rounded-lg transition-all active:scale-98 cursor-pointer"
                  >
                    Consultar pelo WhatsApp
                    <MessageCircle className="h-3.5 w-3.5 text-[#c5a880]" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 px-6 py-4 rounded-xl bg-[#0b1329] text-slate-100 border border-[#c5a880]/20">
              <span className="text-sm font-light text-slate-300">
                Dúvidas em outra especialidade ou situação jurídica?
              </span>
              <button
                onClick={handleGeneralClick}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#c5a880] hover:text-[#b4956d] transition-colors tracking-wide underline cursor-pointer"
              >
                Esclarecer com nossa equipe no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SEÇÃO "COMO FUNCIONA O ATENDIMENTO" */}
      <section className="py-20 bg-navy-deep text-white relative overflow-hidden border-t border-gold-metallic/30" id="como-funciona">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-metallic/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-card/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-gold-metallic uppercase tracking-widest block mb-3">
              Passo a Passo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Como funciona o atendimento
            </h2>
            <div className="w-16 h-[2px] bg-gold-metallic mx-auto mb-6" />
            <p className="font-sans text-base text-slate-300 leading-relaxed font-light">
              Desde o primeiro contato via aplicativo de mensagens até a eventual condução estratégica de sua defesa jurídica, atuamos com absoluta clareza na prestação dos serviços.
            </p>
          </div>

          {/* Stepper Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div 
                key={step.step}
                className="relative bg-navy-card/50 backdrop-blur-xs border border-gold-metallic/10 rounded-none p-8 hover:border-gold-metallic/40 hover:bg-navy-card transition-all duration-300"
              >
                {/* Connector line for large screens */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gold-metallic/20 z-0 transform translate-x-4 -translate-y-1/2" />
                )}

                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-none bg-gold-metallic/10 border border-gold-metallic/30 text-gold-metallic font-serif text-xl font-bold mb-6">
                  {step.step}
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Strict Ethical Warning banner */}
          <div className="mt-16 p-6 rounded-none bg-navy-card/85 border border-gold-metallic/20 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <span className="p-3 bg-gold-metallic/10 text-gold-metallic rounded-none border border-gold-metallic/30 shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div className="text-left">
              <h4 className="font-serif text-base font-bold text-white mb-1">
                Atendimento Ético em Conformidade com a OAB
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                O escritório conduz sua prática sob rigoroso preceito profissional. Não oferecemos garantias parciais de resultado positivo ou de "causas ganhas" antes da apreciação do poder judiciário, em estrita obediência ao Código de Ética e Disciplina da OAB.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SEÇÃO SOBRE O ESCRITÓRIO & ADVOGADOS */}
      <section className="py-20 md:py-28 bg-[#F1F5F9]" id="sobre">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Context Text & Advantages */}
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-bold text-gold-metallic uppercase tracking-widest block mb-3">
                Conheça Nossa História
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-deep mb-6">
                Sobre Moura & Almeida Advocacia
              </h2>
              <div className="w-16 h-[2px] bg-gold-metallic mb-8" />

              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-light mb-6">
                <strong>Moura & Almeida Advocacia</strong> é um escritório consolidado e comprometido com o atendimento jurídico responsável, claro e humanizado. Atuamos com extrema seriedade na orientação de clientes que buscam segurança jurídica para lidar com questões familiares, trabalhistas, civis, previdenciárias e contratuais.
              </p>
              
              <p className="font-sans text-xs sm:text-sm text-slate-650 leading-relaxed font-light mb-8">
                Fundado sob a premissa de que a justiça deve ser exercida com transparência técnica e proximidade, desmistificamos termos excessivamente complexos para que os nossos assistidos se mantenham sempre informados e confortáveis durante as tomadas de decisões fundamentais.
              </p>

              {/* Bullet advantages list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Atendimento humanizado",
                  "Linguagem clara e direta",
                  "Sigilo profissional absoluto",
                  "Responsabilidade nas ações",
                  "Orientação jurídica personalizada",
                  `Inscrição Oficial OAB: ${OFFICE_CONFIG.oabPrincipal}`
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-none bg-gold-metallic/10 text-gold-metallic flex items-center justify-center shrink-0 mt-0.5 border border-gold-metallic/35">
                      <Check className="h-3 w-3 stroke-[3px]" />
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Lawyers Showcases */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                Corpo Jurídico do Escritório
              </span>

              {OFFICE_CONFIG.lawyers.map((lawyer) => (
                <div 
                  key={lawyer.name}
                  className="rounded-none bg-white border border-slate-200/80 p-6 shadow-xs relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="flex flex-col mb-4">
                    <span className="font-serif text-lg font-bold text-navy-deep">
                      {lawyer.name}
                    </span>
                    <span className="text-[11px] text-gold-metallic font-semibold uppercase tracking-wider mt-1 block">
                      {lawyer.role}
                    </span>
                  </div>

                  <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-400">
                    <span>{lawyer.oab}</span>
                    <span className="inline-flex items-center gap-1 text-navy-deep font-semibold">
                      Ativo OAB 
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                  </div>
                </div>
              ))}

              {/* Decorative CTA */}
              <div className="rounded-none bg-navy-deep text-white p-6 border border-gold-metallic/20 relative overflow-hidden mt-2">
                <p className="text-xs sm:text-sm font-serif text-slate-200 leading-relaxed mb-4 italic">
                  "O atendimento próximo e transparente é a ponte segura que o cliente precisa para superar momentos de conflito legal."
                </p>
                <span className="text-[10px] text-[#C5A059] block font-mono tracking-wider font-semibold uppercase">
                  — Moura & Almeida Advocacia
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SEÇÃO DE CONFIANÇA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-gold-metallic uppercase tracking-widest block mb-3">
              Nossos Pilares
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-navy-deep mb-4 font-bold">
              Atendimento com ética e responsabilidade
            </h2>
            <div className="w-16 h-[2px] bg-gold-metallic mx-auto mb-6" />
            <p className="font-sans text-sm sm:text-base text-slate-605 text-[#64748B] leading-relaxed font-light">
              Cada situação jurídica exige análise cuidadosa. Por isso, o escritório trabalha com atendimento responsável, explicando cada etapa com clareza.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRUST_CARDS.map((card, i) => (
              <div 
                key={card.title}
                className="bg-white border border-[#E2E8F0] rounded-none p-8 hover:border-gold-metallic transition-all duration-300 flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-none bg-slate-50 border border-slate-200 text-navy-deep mb-6">
                  {i === 0 ? (
                    <ShieldCheck className="h-6 w-6 text-gold-metallic" />
                  ) : i === 1 ? (
                    <Users className="h-6 w-6 text-gold-metallic" />
                  ) : (
                    <Scale className="h-6 w-6 text-gold-metallic" />
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-navy-deep mb-3">
                  {card.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SEÇÃO DE CHAMADA PARA WHATSAPP (CTA CENTRAL) */}
      <section className="py-20 md:py-28 bg-navy-deep text-white overflow-hidden relative border-t border-b border-gold-metallic/35">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-metallic/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 font-sans">
          
          <span className="text-xs font-bold text-gold-metallic uppercase tracking-widest block mb-4">
            Orientação sem burocracia
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Precisa de orientação jurídica?
          </h2>
          
          <p className="font-sans text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            Fale com nossa equipe no WhatsApp agora mesmo. Informe brevemente sua situação jurídica para receber orientação com ética e responsabilidade.
          </p>

          {/* Large Horizontal button */}
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={handleGeneralClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-4 bg-gold-metallic text-navy-deep font-bold uppercase tracking-wider text-xs sm:text-sm rounded-none hover:bg-gold-hover transition-all shadow-2xl active:scale-98 duration-200 cursor-pointer"
              id="cta-whatsapp-secao-chamada"
            >
              <MessageCircle className="h-5 w-5 fill-navy-deep stroke-none" />
              Falar com Advogado no WhatsApp
            </button>
            
            <p className="text-xs text-slate-400 mt-4 tracking-wide font-light">
              Atendimento seguro em conformidade ética com a regulamentação jurídica.
            </p>
          </div>

        </div>
      </section>

      {/* 9. SEÇÃO DE LOCALIZAÇÃO E ATENDIMENTO */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100" id="contato">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Box: Directions details */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-bold text-gold-metallic uppercase tracking-widest block mb-3">
                  Como nos encontrar
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-navy-deep mb-6">
                  Atendimento e localização
                </h2>
                <p className="text-[#64748B] leading-relaxed text-xs sm:text-sm font-light mb-8">
                  Nossos serviços são prestados de forma presencial e online, com máxima discrição e com agendamento simples via WhatsApp.
                </p>

                {/* Structured details */}
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <span className="p-3 bg-[#F1F5F9] border border-slate-150 rounded-none text-navy-deep shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5 text-gold-metallic" />
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-450 uppercase tracking-widest font-bold">Endereço Principal</p>
                      <p className="text-sm sm:text-base text-navy-deep font-semibold mt-1">
                        {OFFICE_CONFIG.address}
                      </p>
                      <p className="text-xs text-[#64748B] font-light mt-0.5">
                        {OFFICE_CONFIG.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="p-3 bg-[#F1F5F9] border border-slate-150 rounded-none text-navy-deep shrink-0 mt-0.5">
                      <Clock className="h-5 w-5 text-gold-metallic" />
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-450 uppercase tracking-widest font-bold">Horários de Funcionamento</p>
                      <p className="text-sm sm:text-base text-navy-deep font-semibold mt-1">
                        {OFFICE_CONFIG.hours}
                      </p>
                      <p className="text-xs text-[#64748B] font-light mt-0.5">
                        {OFFICE_CONFIG.attendance}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Map Button action */}
              <div className="mt-10 pt-6 border-t border-slate-100">
                <a
                  href={OFFICE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#E2E8F0] hover:border-navy-deep text-navy-deep bg-white hover:bg-slate-50 font-bold text-xs uppercase tracking-wider rounded-none transition-all active:scale-98"
                  id="como-chegar-maps-button"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>

            {/* Right Box: Rich visual design mockup of location */}
            <div className="lg:col-span-12 xl:col-span-7 relative min-h-[350px] bg-slate-100 rounded-none overflow-hidden border border-[#E2E8F0]">
              <div className="absolute inset-0 z-0">
                {/* Embed an elegant visual of the map search context with elegant dark overlay */}
                <div className="absolute inset-0 bg-slate-950/5 hover:bg-transparent transition-all duration-300 z-10" />
                <iframe
                  title="Moura & Almeida Localização"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117835.6318359239!2d-43.5134707!3d-22.756285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59df1fbb75df%3A0xc3b8fb359a3e21c8!2sNova%20Igua%C3%A7u%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1684346747230!5m2!1spt-BR!2sbr"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  aria-hidden={false}
                />
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-navy-deep text-slate-400 py-16 border-t border-gold-metallic/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
            
            {/* Column 1 - Brand Identity info */}
            <div className="lg:col-span-5 text-left font-sans">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white block">
                Moura & Almeida <span className="font-light text-gold-metallic">Advocacia</span>
              </span>
              <p className="text-[10px] text-gold-metallic uppercase tracking-widest mt-1.5 font-bold">
                {OFFICE_CONFIG.slogan}
              </p>
              
              <p className="text-xs sm:text-sm font-light text-slate-400 leading-relaxed max-w-sm mt-6">
                Advocacia e consultoria jurídica com atendimento responsável, ético e focado no sigilo profissional.
              </p>

              <p className="text-xs text-slate-500 font-mono mt-4">
                OAB: {OFFICE_CONFIG.oabPrincipal}
              </p>
            </div>

            {/* Column 2 - Navigation Anchors */}
            <div className="lg:col-span-3 text-left">
              <h4 className="font-serif text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-gold-metallic/20 pb-2">
                Links Rápidos
              </h4>
              <nav className="flex flex-col space-y-3.5 text-xs sm:text-sm font-light">
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
                <a href="#areas" className="hover:text-gold-metallic transition-colors">Áreas de Atuação</a>
                <a href="#sobre" className="hover:text-gold-metallic transition-colors">Sobre o Escritório</a>
                <a href="#como-funciona" className="hover:text-gold-metallic transition-colors">Atendimento</a>
                <a href="#contato" className="hover:text-gold-metallic transition-colors">Contato</a>
              </nav>
            </div>

            {/* Column 3 - Social medias details */}
            <div className="lg:col-span-4 text-left">
              <h4 className="font-serif text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-gold-metallic/20 pb-2">
                Conecte-se
              </h4>
              <p className="text-xs text-slate-400 font-light mb-6">
                Acompanhe publicações jurídicas com notícias e orientações importantes:
              </p>

              {/* Social networks icons mapped row */}
              <div className="flex items-center space-x-4 mb-6">
                <a
                  href={OFFICE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-navy-card hover:bg-gold-metallic text-slate-400 hover:text-navy-deep rounded-none border border-gold-metallic/20 transition-all animate-none"
                  aria-label="Instagram Moura e Almeida"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={OFFICE_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-navy-card hover:bg-gold-metallic text-slate-400 hover:text-navy-deep rounded-none border border-gold-metallic/20 transition-all animate-none"
                  aria-label="Facebook Moura e Almeida"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>

              <div className="border-t border-white/5 pt-4">
                <span className="text-[11px] text-slate-500 tracking-wider block">
                  Rua Exemplo, 123 — Centro, Nova Iguaçu — RJ
                </span>
                <span className="text-[11px] text-gold-metallic tracking-wider block mt-1 font-semibold">
                  Segunda a Sexta: 9h às 18h
                </span>
              </div>
            </div>

          </div>

          {/* Core Footer legal limits */}
          <div className="border-t border-[#C5A059]/30 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-light font-sans">
            <p className="text-center md:text-left mb-4 md:mb-0">
              OAB: {OFFICE_CONFIG.oabPrincipal} • © 2024 • Atendimento ético e responsável
            </p>
            <p className="text-center md:text-right">
              Moura & Almeida Advocacia. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </footer>

      {/* 11. BOTÃO FLUTUANTE DO WHATSAPP (Sempre disponível no canto inferior direito) */}
      <div className="fixed bottom-6 right-6 z-55">
        <button
          onClick={handleFloatingClick}
          className="group relative flex items-center justify-center bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl focus:outline-none transition-all duration-350 active:scale-95 cursor-pointer"
          title="Fale Conosco no WhatsApp"
          id="floating-whatsapp-widget"
        >
          {/* Pulse ambient circles */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35 group-hover:hidden" />
          
          <MessageCircle className="h-6 w-6 relative z-10 fill-white text-emerald-600 stroke-none group-hover:scale-110 transition-transform" />
        </button>
      </div>

    </div>
  );
}
