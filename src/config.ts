/**
 * Configurações Gerais do Modelo "Moura & Almeida Advocacia"
 * Edite estas variáveis para personalizar o site rapidamente.
 */

export const OFFICE_CONFIG = {
  // Nome do escritório
  name: "Moura & Almeida Advocacia",
  
  // Selo profissional / Slogan principal
  slogan: "Advocacia e Consultoria Jurídica",
  
  // Detalhes dos advogados do escritório
  lawyers: [
    {
      name: "Dra. Helena Moura",
      role: "Socia-Fundadora · Direito de Família, Civil e Sucessões",
      oab: "OAB/RJ 124.582",
    },
    {
      name: "Dr. Gabriel Almeida",
      role: "Sócio-Fundador · Direito Trabalhista e Previdenciário",
      oab: "OAB/RJ 145.319",
    }
  ],

  // OAB Principal para o Rodapé / Institucional
  oabPrincipal: "000.000/UF",

  // Número do WhatsApp (somente números, iniciando com DDI + DDD)
  // Exemplo: "5521969060505"
  whatsappNumber: "5521969060505",

  // Redes Sociais (coloque links reais ou falsos editáveis)
  instagramUrl: "https://instagram.com/moura_almeida_advocacia",
  facebookUrl: "https://facebook.com/moura_almeida_advocacia",

  // Localização e Atendimento
  address: "Rua Exemplo, 123 — Centro",
  city: "Nova Iguaçu — RJ",
  hours: "Segunda a sexta: 9h às 18h",
  attendance: "Presencial e online mediante agendamento prévio",
  
  // Link para abrir Localização no Google Maps (como chegar)
  mapsUrl: "https://maps.google.com/?q=Nova+Iguaçu+Centro",

  // Caminho da imagem gerada do Hero
  heroImage: "/src/assets/images/law_firm_hero_1781056207232.png",

  // Cores principais documentadas (usadas nas classes Tailwind CSS):
  // Azul-marinho: de bg-navy-deep a text-navy-deep
  // Dourado corporativo discreto (Gold): text-gold-metallic / hover:text-gold-hover / border-gold-metallic
  colors: {
    primaryBg: "bg-navy-deep",         // Azul marinho premium profundo
    primaryText: "text-navy-deep",     // Texto principal
    gold: "#C5A059",                   // Dourado geométrico
    goldSecondary: "#b18e4d",          // Dourado para hover
    lightBg: "bg-[#F1F5F9]",           // Fundo cinza claro
  }
};

export interface AreaAtuacao {
  id: string;
  title: string;
  description: string;
  iconName: string; // Nome do ícone da biblioteca lucide-react
}

// Áreas de atuação do escritório em um array fácil de editar
export const AREAS_ATUACAO: AreaAtuacao[] = [
  {
    id: "direito-familia",
    title: "Direito de Família",
    description: "Orientação e representação em divórcio espontâneo ou litigioso, partilha de bens, fixação e revisão de pensão alimentícia, definição de guarda e visitas de menores, inventários e demais questões familiares jurídicas.",
    iconName: "Heart"
  },
  {
    id: "direito-trabalhista",
    title: "Direito Trabalhista",
    description: "Atendimento completo focado na transparência das relações de trabalho, prestando esclarecimentos, assessoria para empregados e defesa consultiva para empresas em litígios e compliance trabalhista.",
    iconName: "Briefcase"
  },
  {
    id: "direito-civil",
    title: "Direito Civil",
    description: "Apoio consultivo e judicial abrangente em elaboração e revisão de contratos, renegociação de dívidas, indenizações por danos morais e materiais, além da pacificação de conflitos cotidianos.",
    iconName: "Scale"
  },
  {
    id: "direito-consumidor",
    title: "Direito do Consumidor",
    description: "Ações judiciais e conciliação perante problemas de compras lesivas na internet, falhas graves na prestação de serviços, cobranças injustas abusivas ou indevidas e reparação civil consumerista.",
    iconName: "ShoppingBag"
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário",
    description: "Auxílio consultivo essencial no planejamento previdenciário geral, encaminhamento de aposentadorias (tempo de contribuição ou idade), revisões de benefícios e auxílios de incapacidade junto ao INSS.",
    iconName: "Users"
  },
  {
    id: "contratos",
    title: "Contratos",
    description: "Análise prévia de riscos, assessoria consultiva jurídica, elaboração e revisão técnica minuciosa de contratos civis, imobiliários, de prestação de serviços ou empresariais garantindo total resguardo legal.",
    iconName: "FileText"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Envie sua mensagem",
    description: "Clique em qualquer botão do site para falar diretamente via WhatsApp. Explique de forma breve a sua dúvida ou situação jurídica inicial."
  },
  {
    step: "02",
    title: "Atendimento inicial",
    description: "Nossa equipe fará uma análise jurídica preliminar do seu caso para entender a questão de forma clara e orientá-lo sobre a viabilidade legal."
  },
  {
    step: "03",
    title: "Agendamento",
    description: "Caso o seu caso exija uma análise técnica profunda ou revisão de documentos, agendamos uma reunião dedicada para alinhar as estratégias."
  },
  {
    step: "04",
    title: "Acompanhamento",
    description: "Você recebe assessoria com clareza, ética e foco na transparência, garantindo que você compreenda perfeitamente cada uma das etapas."
  }
];

export const TRUST_CARDS = [
  {
    title: "Sigilo profissional",
    description: "Suas informações, dados pessoais e narrativas compartilhadas em atendimento são estritamente confidenciais, conforme as normas do Código de Ética da OAB."
  },
  {
    title: "Clareza no atendimento",
    description: "Explicamos o contexto jurídico em linguagem acessível e realista, ajudando você a compreender os seus deveres, direitos e alternativas viáveis."
  },
  {
    title: "Compromisso ético",
    description: "Nosso atendimento é guiado pela máxima seriedade profissional, sem falsas promessas, sempre respeitando as regras éticas do exercício da advocacia."
  }
];
