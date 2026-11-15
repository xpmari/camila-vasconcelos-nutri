/**
 * PERFIL: NUTRIÇÃO & SAÚDE (CLÍNICA & ESPORTIVA)
 * Copywriting: Health Landing Copywriter | Design: UI/UX Pro Max
 * Conformidade: Conselho Federal de Nutricionistas (CFN) | LGPD
 */

const perfilNutricao = {
  id: 'nutricao-bem-estar',
  name: 'Nutrição & Saúde',
  category: 'Nutricionistas e Metabologia',

  theme: {
    preset: 'nutricao-bem-estar',
    fontHeading: 'Geist',
    fontBody: 'Geist',
    roundedStyle: 'rounded-3xl',
    // Componente 21st.dev: GradientBackground "Jade Sky" exclusivo para Nutrição
    heroGradient: {
      enabled: true,
      name: 'jade-sky',
      backgroundColor: '#CFE9F0',
      backgroundImage: 'radial-gradient(circle at 65.34% 44.62%, rgba(238, 246, 227, 1) 0%, rgba(238, 246, 227, 0) 34.1%), radial-gradient(circle at 28.07% 74.48%, rgba(183, 217, 142, 1) 0%, rgba(183, 217, 142, 0) 45.65%), radial-gradient(circle at 52.42% 19.94%, rgba(127, 191, 154, 1) 0%, rgba(127, 191, 154, 0) 57.55%), radial-gradient(circle at 80.31% 84.47%, rgba(207, 233, 240, 1) 0%, rgba(207, 233, 240, 0) 69.1%)'
    },
    // Componente 21st.dev: ShinyButton nos botões principais de conversão
    shinyButton: {
      enabled: true
    },
    customColors: {
      primary: '#3E4D3A',        // Verde Oliva Nobre
      primaryHover: '#2D3929',
      secondary: '#6B7D66',      // Verde Sálvia Aveludado
      accent: '#8FA08A',         // Sálvia Suave
      bgLight: '#FAF8F5',        // Marfim / Ivory
      surface: '#FFFFFF',        // Branco puro
      surfaceWarm: '#F5F2EB',    // Marfim aconchegante
      textMain: '#232B20',       // Oliva escuro profundo
      textMuted: '#445140',      // Sálvia escuro de alto contraste AA
      border: '#E3EAE0'          // Linha sutil verde-sálvia pálido
    }
  },

  profile: {
    name: 'Dra. Camila Vasconcelos',
    title: 'Nutricionista Clínica & Funcional',
    subSpecialty: 'Nutrição Funcional, Saúde Intestinal e Performance',
    registration: 'CRN-3 48.910',
    technicalLead: 'Nutricionista Responsável: Dra. Camila Vasconcelos - CRN-3 48.910',

    avatarUrl: 'assets/images/nutricao/nutricionista-hero-frutas.png',
    heroDecorativeUrl: 'assets/images/nutricao/nutricao-bg-elementos.png',
    aboutPhotoUrl: 'assets/images/nutricao/sobre-camila.png',
    aboutSecondaryPhotoUrl: 'assets/images/nutricao/nutricionista-acolhimento-planta.jpg',
    logoUrl: 'assets/images/placeholder-logo-nutricao.svg',
    clinicPhotoUrl: 'assets/images/nutricao/sobre-camila.png',

    heroHeadline: 'Nutrição descomplicada, individualizada e sustentável para a sua vida.',
    heroSubheadline: 'Sem dietas restritivas ou promessas milagrosas. Planos alimentares sob medida para ganho de energia, saúde metabólica e autonomia no dia a dia.',
    heroCtaText: 'Agendar Consulta Nutricional',
    heroSecondaryCtaText: 'Conhecer a Metodologia',
    heroHighlight: {
      title: 'Presencial & Teleconsulta',
      subtitle: 'Plano no app + E-book exclusivo',
      badge: 'Consulta 1h30 • Bioimpedância InBody'
    },

    quickStats: [
      { number: '+9', label: 'Anos de prática clínica', detail: 'Fundamentação científica em nutrição' },
      { number: '100%', label: 'Sem dietas prontas de gaveta', detail: 'Cardápio adaptado à sua rotina real' },
      { number: 'InBody', label: 'Bioimpedância Tetrapolar', detail: 'Análise clínica de composição corporal' },
      { number: 'CRN-3', label: 'Registro Regularizado', detail: 'Conselho Regional de Nutricionistas' }
    ],

    about: {
      tag: 'ABORDAGEM & FILOSOFIA',
      title: 'Comer bem sem estresse ou culpa',
      quote: 'Comer bem não é sobre restrições punitivas, mas sobre nutrir o corpo com equilíbrio e prazer à mesa.',
      paragraphs: [
        'Um plano alimentar só funciona quando <strong>respeita quem você é</strong>: seus horários, sua cultura e suas preferências gastronômicas.'
      ],
      pillars: [
        {
          icon: 'user-check',
          lead: 'Sem dietas restritivas:',
          text: 'estratégia moldada à sua rotina real e orçamento.'
        },
        {
          icon: 'clipboard-check',
          lead: 'Investigação clínica completa:',
          text: 'saúde digestiva, exames laboratoriais, sono e estresse.'
        },
        {
          icon: 'message-circle',
          lead: 'App exclusivo + suporte:',
          text: 'cardápio no celular, lista de compras e canal para dúvidas.'
        }
      ],
      credentials: [
        {
          icon: 'badge',
          text: '<strong>Nutrição</strong> pela Universidade de São Paulo (USP)'
        },
        {
          icon: 'leaf',
          text: '<strong>Pós-Graduação</strong> em Nutrição Clínica Funcional'
        },
        {
          icon: 'activity',
          text: '<strong>Especialização</strong> em Fisiologia e Nutrição Esportiva'
        },
        {
          icon: 'shield-check',
          text: '<strong>Membro associado</strong> à ASBRAN'
        }
      ]
    }
  },

  contact: {
    whatsapp: '5511999999999',
    whatsappDefaultMessage: 'Olá! Gostaria de informações sobre horários para consulta de nutrição com a Dra. Camila Vasconcelos.',
    phone: '(11) 3333-0000',
    email: 'contato@nutricaosaude.com.br',
    address: {
      name: 'Edifício Infinity Corporate - Sala 610',
      street: 'Rua Pamplona, 1100 - 6º Andar',
      neighborhood: 'Jardim Paulista',
      city: 'São Paulo',
      state: 'SP',
      zip: '01405-001',
      accessibilityNote: 'Consultório com acessibilidade completa, estacionamento no local e recepção com água aromatizada.',
      googleMapsUrl: 'https://maps.google.com/?q=Rua+Pamplona+1100',
      mapsEmbedUrl: 'https://www.google.com/maps/embed?...'
    },
    hours: [
      { days: 'Segunda a Sexta (Presencial/Online)', time: '08:00 às 19:30' },
      { days: 'Sábados (manhã)', time: '08:30 às 12:30' }
    ],
    social: {
      instagram: 'https://instagram.com/nutri_perfil',
      linkedin: 'https://linkedin.com/in/nutri_perfil'
    }
  },

  sections: {
    header: { enabled: true },
    hero: { enabled: true },
    quickStats: { enabled: true },
    about: { enabled: true },
    services: {
      enabled: false, // O FocusPullCarousel assume a seção ÁREAS DA NUTRIÇÃO (#servicos)
      tag: 'ÁREAS DA NUTRIÇÃO',
      title: 'Programas de Cuidado Nutricional',
      subtitle: 'Acompanhamento estruturado para diferentes fases e objetivos biológicos.',
      items: [
        {
          id: 'reeducacao-metabolismo',
          icon: 'activity',
          title: 'Emagrecimento Saudável & Saúde Metabólica',
          description: 'Estratégias nutricionais focadas em saciedade, controle glicêmico e preservação de massa magra sem passar fome.',
          highlights: ['Avaliação por bioimpedância', 'Metas realistas e graduais', 'Combate ao efeito sanfona']
        },
        {
          id: 'nutricao-esportiva',
          icon: 'heart-pulse',
          title: 'Nutrição Esportiva & Composição Corporal',
          description: 'Periodização de macronutrientes para praticantes de atividade física, corredores e atletas que buscam rendimento.',
          highlights: ['Estratégias pré e pós-treino', 'Suplementação baseada em evidências', 'Aumento de força e recuperação']
        },
        {
          id: 'saude-intestinal',
          icon: 'waveform',
          title: 'Microbiota & Saúde Intestinal',
          description: 'Protocolos nutricionais para alívio de estufamento, constipação, síndrome do intestino irritável e sensibilidades.',
          highlights: ['Protocolo FODMAPs quando indicado', 'Modulação de probióticos e fibras', 'Mais disposição diária']
        },
        {
          id: 'exames-laboratoriais',
          icon: 'clipboard-check',
          title: 'Interpretação Funcional de Exames',
          description: 'Análise minuciosa de vitaminas, minerais, colesterol e marcadores inflamatórios para correção de deficiências.',
          highlights: ['Correção de ferritina e vitamina D', 'Perfil lipídico avançado', 'Suplementação personalizada']
        },
        {
          id: 'doencas-cronicas',
          icon: 'shield-check',
          title: 'Manejo de Diabetes e Hipertensão',
          description: 'Terapia nutricional coadjuvante no controle de glicemia, gordura no fígado (esteatose) e níveis pressóricos.',
          highlights: ['Índice e carga glicêmica adequados', 'Substituições inteligentes', 'Integração com seu médico']
        },
        {
          id: 'consulta-online',
          icon: 'message-circle',
          title: 'Acompanhamento Nutricional Online',
          description: 'Consultas por videoconferência com envio do plano alimentar, guia de medidas corporais e suporte contínuo.',
          highlights: ['Atendimento em todo o Brasil', 'Praticidade sem deslocamento', 'Mesmo tempo dedicado']
        }
      ]
    },
    careJourney: {
      enabled: true,
      tag: 'METODOLOGIA DE ATENDIMENTO',
      title: 'Como funciona sua jornada de cuidado nutricional',
      subtitle: 'Um processo estruturado em 4 etapas para transformar sua relação com a alimentação sem radicalismos.',
      steps: [
        {
          step: '01',
          title: 'Questionário Pré-Consulta & Alinhamento',
          description: 'Antes mesmo do primeiro encontro, você preenche um formulário digital breve sobre sua rotina, horários, histórico familiar e sintomas digestivos.',
          icon: 'clipboard-check',
          image: 'assets/images/nutricao/consulta-atenciosa.png'
        },
        {
          step: '02',
          title: 'Consulta Dedicada & Bioimpedância InBody',
          description: 'Conversa aprofundada de 1h30 para investigar exames laboratoriais, rotina de sono e realização de bioimpedância tetrapolar de alta precisão.',
          icon: 'activity',
          image: 'assets/images/nutricao/bioimpedancia-inbody.png'
        },
        {
          step: '03',
          title: 'Cardápio Construído a Quatro Mãos',
          description: 'Nada de dietas prontas de gaveta. O seu plano alimentar é desenhado com você na consulta, respeitando seus gostos, cultura e orçamento.',
          icon: 'user-check',
          image: 'assets/images/nutricao/plano-alimentar.png'
        },
        {
          step: '04',
          title: 'Aplicativo Exclusivo & Suporte Contínuo',
          description: 'Você recebe acesso ao app com receitas práticas, lista de compras e canal direto no WhatsApp para tirar dúvidas entre as consultas.',
          icon: 'message-circle'
        }
      ]
    },
    ebookBonus: {
      enabled: true,
      tag: 'MATERIAL EXCLUSIVO INCLUSO',
      title: 'E-book exclusivo para facilitar a sua rotina',
      subtitle: 'Incluso gratuitamente na consulta: um <strong>guia digital ilustrado</strong> para preparar refeições rápidas, ir ao mercado e manter a constância.',
      bookEdition: 'EDIÇÃO CLÍNICA • PDF INTERATIVO',
      bookTitle: 'Guia de Organização Alimentar & Receitas Práticas',
      bookSubtitle: 'Montagem de pratos, leitura de rótulos e planejamento semanal.',
      pagesLabel: '48 págs.',
      previewChapters: [
        { num: '01', label: 'Montagem prática de refeições' },
        { num: '02', label: '+30 receitas doces e salgadas' },
        { num: '03', label: 'Guia de mercado e rótulos' }
      ],
      highlights: [
        {
          icon: 'sparkle',
          title: '+30 receitas práticas:',
          detail: 'opções do café ao jantar com ingredientes acessíveis.'
        },
        {
          icon: 'clipboard-check',
          title: 'Guia de compras e rótulos:',
          detail: 'escolha melhores produtos sem armadilhas de marketing.'
        },
        {
          icon: 'activity',
          title: 'Substituições inteligentes:',
          detail: 'varie o cardápio respeitando rotina e orçamento.'
        },
        {
          icon: 'calendar',
          title: 'Planejamento semanal:',
          detail: 'passo a passo simples para ganhar tempo na cozinha.'
        }
      ],
      ctaText: 'Agendar Consulta + Receber Guia',
      footnote: 'PDF interativo entregue após a consulta'
    },
    focusPullCarousel: {
      enabled: true,
      id: 'servicos',
      tag: 'ÁREAS DA NUTRIÇÃO',
      title: 'Áreas de Atuação & Programas de Cuidado',
      subtitle: 'Deslize ou arraste a galeria interativa para conhecer as principais frentes de atendimento e encontrar o plano ideal para sua saúde e rotina.',
      slides: [
        {
          image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=760&auto=format&fit=crop&q=75',
          title: 'Emagrecimento Saudável & Saúde Metabólica',
          caption: 'Estratégias focadas em saciedade, controle glicêmico e preservação de massa magra sem passar fome ou dietas restritivas.',
          alt: 'Prato com comida de verdade e alimentos funcionais'
        },
        {
          image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=760&auto=format&fit=crop&q=75',
          title: 'Nutrição Esportiva & Performance',
          caption: 'Periodização de macronutrientes para praticantes de atividade física, corredores e atletas que buscam rendimento e recuperação.',
          alt: 'Nutrição esportiva e alta performance'
        },
        {
          image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=760&auto=format&fit=crop&q=75',
          title: 'Microbiota & Saúde Intestinal',
          caption: 'Protocolos nutricionais para desinflamação, alívio de estufamento, síndrome do intestino irritável e equilíbrio da microbiota.',
          alt: 'Alimentos naturais e equilíbrio digestivo'
        },
        {
          image: 'assets/images/nutricao/consulta-atenciosa.png',
          title: 'Interpretação Funcional de Exames',
          caption: 'Avaliação clínica minuciosa de vitaminas, minerais, colesterol e marcadores inflamatórios para correção precisa de carências.',
          alt: 'Dra. Camila Vasconcelos em avaliação clínica atenciosa de exames laboratoriais'
        },
        {
          image: 'assets/images/nutricao/plano-alimentar.png',
          title: 'Manejo de Doenças Crônicas & Longevidade',
          caption: 'Consulta atenciosa e orientação personalizada no controle de glicemia, esteatose hepática e níveis pressóricos com cardápio sob medida.',
          alt: 'Consulta atenciosa e orientação personalizada com plano alimentar individualizado'
        },
        {
          image: 'assets/images/nutricao/nutricionista-hero-frutas.png',
          title: 'Reeducação Alimentar & Autonomia',
          caption: 'Consultas presenciais e online com aplicativo exclusivo de cardápio, lista de compras e canal direto para suporte contínuo.',
          alt: 'Dra. Camila Vasconcelos com frutas frescas e alimentação saudável'
        }
      ]
    },
    testimonials: {
      enabled: true,
      tag: 'AVALIAÇÕES NO GOOGLE',
      title: 'O que os pacientes comentam no Google',
      ratingScore: '5,0',
      summaryLabel: 'Avaliações no Google Meu Negócio',
      subtitle: 'Comentários sobre pontualidade, escuta na consulta e praticidade do plano no aplicativo.',
      disclaimer: 'Modelo ilustrativo no formato Google Meu Negócio (em conformidade com o CFN). Na entrega do site, substitua pelas avaliações reais do seu perfil.',
      items: [
        {
          quote: 'Achei que ia sair com aquela folha cheia de restrição, mas a Dra. Camila montou o cardápio comigo na hora. A lista de compras no app facilita demais a minha semana.',
          author: 'Mariana Souza',
          meta: 'Consulta Presencial • Local Guide',
          tag: 'Consulta Presencial',
          verifiedLabel: 'Avaliação verificada',
          rating: 5
        },
        {
          quote: 'Consultório muito agradável no Jardim Paulista e atendimento no horário exato. Ela olhou todos os meus exames com calma e explicou tudo de um jeito que finalmente entendi.',
          author: 'Rafael Mendes',
          meta: 'Consulta Presencial • 8 avaliações',
          tag: 'Consulta Presencial',
          verifiedLabel: 'Avaliação verificada',
          rating: 5
        },
        {
          quote: 'Faço acompanhamento online porque viajo muito a trabalho. O suporte pelo WhatsApp entre as consultas e o guia de receitas rápidas salvaram minha rotina fora de casa.',
          author: 'Fernanda Lima',
          meta: 'Teleconsulta Online • Local Guide',
          tag: 'Teleconsulta Online',
          verifiedLabel: 'Avaliação verificada',
          rating: 5
        },
        {
          quote: 'A avaliação por bioimpedância tetrapolar foi essencial para meus treinos de corrida. Ajustamos os carboidratos nos dias certos e meu rendimento subiu sem perder massa magra.',
          author: 'Lucas Barreto',
          meta: 'Consulta Presencial • Local Guide',
          tag: 'Nutrição Esportiva',
          verifiedLabel: 'Avaliação verificada',
          rating: 5
        },
        {
          quote: 'Sofria com estufamento há anos sem saber a causa. Com a investigação minuciosa da microbiota e o plano personalizado que a Dra. Camila me passou, me sinto outra pessoa.',
          author: 'Juliana Castro',
          meta: 'Teleconsulta Online • 5 avaliações',
          tag: 'Saúde Intestinal',
          verifiedLabel: 'Avaliação verificada',
          rating: 5
        }
      ]
    },
    faq: {
      enabled: true,
      tag: 'DÚVIDAS FREQUENTES',
      title: 'Perguntas comuns sobre a consulta de nutrição',
      subtitle: 'Tudo o que você precisa saber antes do seu primeiro atendimento.',
      items: [
        {
          question: 'O que está incluso na consulta presencial?',
          answer: 'A consulta presencial inclui anamnese clínica minuciosa, avaliação de exames de sangue, exame de composição corporal por bioimpedância tetrapolar, elaboração do plano alimentar personalizado e acesso ao aplicativo de receitas.'
        },
        {
          question: 'Em quanto tempo recebo meu plano alimentar?',
          answer: 'A base do plano é alinhada com você durante o atendimento e a versão final, acompanhada das orientações e receitas, é disponibilizada no aplicativo em até 48 horas úteis.'
        },
        {
          question: 'O plano de saúde cobre a consulta de nutrição?',
          answer: 'O atendimento é particular, mas fornecemos recibo e nota fiscal completa com CRM/CRN para que você solicite o reembolso junto ao seu plano de saúde.'
        },
        {
          question: 'Como funciona a consulta online?',
          answer: 'A consulta online ocorre por videochamada com o mesmo tempo e dedicação da presencial. Enviamos um guia ilustrado para você aferir suas medidas corporais básicas em casa e adaptamos todas as metas.'
        }
      ]
    },
    location: { enabled: true },
    ctaFinal: {
      enabled: true,
      title: 'Dê o primeiro passo para ter mais energia, disposição e saúde',
      subtitle: 'Agende sua consulta nutricional e descubra como a alimentação equilibrada pode transformar seu dia a dia.',
      buttonText: 'Falar com a Recepção no WhatsApp'
    },
    footer: { enabled: true }
  },

  seo: {
    siteTitle: 'Dra. Camila Vasconcelos | Nutricionista Clínica e Esportiva em São Paulo',
    metaDescription: 'Acompanhamento nutricional individualizado com a Dra. Camila Vasconcelos. Emagrecimento sustentável, saúde intestinal e nutrição esportiva. Agende sua consulta.',
    keywords: 'nutricionista são paulo, bioimpedância tetrapolar, nutricionista esportiva jardins, consulta nutricionista pamplona, crn 3',
    canonicalUrl: 'https://www.nutricaosaude.com.br',
    schemaType: 'LocalBusiness',
    ogImage: 'assets/images/nutricao/sobre-camila.png',
    locale: 'pt_BR'
  },

  compliance: {
    showLgpdBanner: true,
    lgpdBannerText: 'Utilizamos cookies essenciais para oferecer uma experiência personalizada de acordo com a LGPD e o Código de Ética do CFN.',
    privacyModalContent: {
      title: 'Privacidade e Proteção de Dados (CFN / LGPD)',
      text: 'Respeitamos integralmente a Lei nº 13.709/2018 (LGPD). Nenhum dado sobre peso, histórico médico ou hábitos alimentares é registrado no site. O agendamento é processado diretamente pelo WhatsApp da recepção.'
    },
    medicalDisclaimer: 'Aviso Ético (CFN): As orientações contidas neste site têm caráter informativo. O acompanhamento nutricional deve ser individualizado e ajustado por profissional habilitado.'
  }
};

if (typeof window !== 'undefined') {
  window.specialtyProfiles = window.specialtyProfiles || {};
  window.specialtyProfiles['nutricao-bem-estar'] = perfilNutricao;
}

