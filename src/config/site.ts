export type VideoProvider = 'youtube' | 'file';

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IdentityConfig {
  siteName: string;
  legalName: string;
  professionalName?: string;
  professionalRole: string;
  professionalDescription: string;
  professionalImage: string;
  logo: ImageAsset;
  registration: string;
}

export interface ContactConfig {
  whatsappUrl: string;
  whatsappNumbers: Array<{
    label: string;
    url: string;
    channelName: string;
    defaultMessage: string;
  }>;
  email: string;
  emailUrl: string;
  primaryCtaLabel: string;
}

export interface HeaderConfig {
  brandHref: string;
  brandLabel: string;
  primaryNavigationLabel: string;
  mobileNavigationLabel: string;
  menuOpenLabel: string;
  links: NavigationLink[];
}

export interface HeroConfig {
  id: string;
  image: ImageAsset & {
    srcset: Array<{ src: string; width: number }>;
    sizes: string;
  };
  trust: {
    text: string;
  };
  title: Array<{ text: string; highlighted?: boolean }>;
  description: string;
  primaryCtaLabel: string;
  secondaryCta: NavigationLink;
  scrollTarget: string;
  scrollLabel: string;
}

export interface StatsConfig {
  id: string;
  label: string;
  items: Array<{ value: string; label: string }>;
}

export interface AboutConfig {
  id: string;
  image: ImageAsset & {
    srcset: Array<{ src: string; width: number }>;
    sizes: string;
  };
  cardName: string;
  cardDetail: string;
  eyebrow: string;
  credentials: Array<{ icon: string; text: string }>;
}

export interface PracticeSectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  items: Array<{ icon: string; title: string; description: string; href: string }>;
}

export interface ProcessSectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  ctaLabel: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
}

export interface ServicePageConfig {
  slug: string;
  icon: string;
  eyebrow: string;
  title: string;
  summary: string;
  introduction: string;
  situationsTitle: string;
  situations: string[];
  approachTitle: string;
  approach: string;
  ctaLabel: string;
  seoDescription: string;
}

export interface PrivacyConfig {
  title: string;
  description: string;
  lastUpdated: string;
}

export interface DifferentialsSectionConfig {
  id: string;
  titlePrefix: string;
  highlightedTitle: string;
  titleSuffix: string;
  description: string;
  ctaLabel: string;
  items: Array<{ storyLabel: string; title: string; description: string }>;
}

export type ReviewsSource = 'google' | 'manual';

export interface ReviewItem {
  quote: string;
  name: string;
  details: string;
  rating: number | null;
  avatar: string;
  avatarPosition: string;
  publishedAt: string | null;
  publishedAtLabel: string;
  googleMapsUrl: string;
  authorProfileUrl: string;
  source: 'google' | 'manual';
}

export type ManualReviewItem = Pick<
  ReviewItem,
  'quote' | 'name' | 'details' | 'rating' | 'avatar' | 'avatarPosition'
> & Partial<Pick<ReviewItem, 'publishedAt' | 'publishedAtLabel' | 'googleMapsUrl' | 'authorProfileUrl'>>;

export interface ReviewsSectionConfig {
  enabled: boolean;
  id: string;
  title: string;
  highlightedTitle: string;
  platformLogo: ImageAsset;
  source: ReviewsSource;
  maxRating: number;
  ratingUnavailableLabel: string;
  orderingNotice: string;
  google: {
    placeId: string;
    limit: number;
    reviewsUrl: string;
  };
  fallbacks: {
    quote: string;
    name: string;
    details: string;
    avatar: string;
    avatarPosition: string;
    publishedAtLabel: string;
  };
  manualItems: ManualReviewItem[];
}

export interface FaqSectionConfig {
  id: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  ctaLabel: string;
  items: FaqItem[];
}

export interface FooterConfig {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  links: NavigationLink[];
  copyrightSuffix: string;
  backToTopLabel: string;
  backToTopHref: string;
  whatsapp: {
    regionLabel: string;
    closeLabel: string;
    image: ImageAsset;
    senderName: string;
    message: string;
    topicLabel: string;
    topics: string[];
    choicesLabel: string;
    channelLabel: string;
    redirectNote: string;
    buttonLabel: string;
  };
}

export interface VideoSectionConfig {
  enabled: boolean;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  provider: VideoProvider;
  videoId: string;
  videoUrl: string;
  poster: string;
  posterAlt: string;
  playLabel: string;
  caption: string;
}

export interface LocationSectionConfig {
  enabled: boolean;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  address: string;
  mapQuery: string;
  mapTitle: string;
  directionsLabel: string;
}

export interface AiDiscoveryConfig {
  enabled: boolean;
  llmsPath: string;
  markdownPath: string;
  summary: string;
  usageNote: string;
}

export interface SeoConfig {
  siteUrl: string;
  locale: string;
  language: string;
  homePageTitle: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultImage: string;
  defaultImageAlt: string;
  defaultImageWidth: number;
  defaultImageHeight: number;
  themeColor: string;
  favicon: string;
  keywords: string[];
  areaServed: string;
  knowsAbout: string[];
  sitemap: Array<{
    path: string;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
  }>;
}

export interface DeploymentConfig {
  projectName: string;
  subdomain: string;
  baseDomain: string;
  cnameTarget: string;
}

export interface SiteConfig {
  identity: IdentityConfig;
  contact: ContactConfig;
  header: HeaderConfig;
  hero: HeroConfig;
  stats: StatsConfig;
  about: AboutConfig;
  practiceSection: PracticeSectionConfig;
  differentialsSection: DifferentialsSectionConfig;
  processSection: ProcessSectionConfig;
  servicePages: ServicePageConfig[];
  reviewsSection: ReviewsSectionConfig;
  faqSection: FaqSectionConfig;
  footer: FooterConfig;
  seo: SeoConfig;
  videoSection: VideoSectionConfig;
  locationSection: LocationSectionConfig;
  aiDiscovery: AiDiscoveryConfig;
  privacy: PrivacyConfig;
  deployment: DeploymentConfig;
}

const runtimeEnv = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
const configuredSiteUrl = runtimeEnv?.PUBLIC_SITE_URL?.trim().replace(/\/$/, '') || 'https://mattosesantos.feito.website';
const configuredContactEmail = runtimeEnv?.PUBLIC_CONTACT_EMAIL?.trim() || 'mattosesantosassessoria@gmail.com';

export const siteConfig = {
  identity: {
    siteName: 'Mattos & Santos',
    legalName: 'Mattos & Santos — Assessoria Previdenciária',
    professionalName: '',
    professionalRole: 'Especialista em Direito Previdenciário',
    professionalDescription: 'Sou especialista em Direito Previdenciário, área em que atuo há mais de 20 anos. Tenho pós-graduação em Direito Previdenciário e exerço a profissão com cuidado, dedicação e carinho, porque amo o que faço.',
    professionalImage: '/images/optimized/foto-sobre-1200.webp',
    logo: {
      src: '/images/mattos-santos-logo.svg',
      width: 546,
      height: 33,
      alt: 'Mattos & Santos — Assessoria Previdenciária',
    },
    registration: 'OAB/SP 205.542',
  },
  contact: {
    whatsappUrl: 'https://wa.me/5511939482042',
    whatsappNumbers: [
      {
        label: '(11) 93948-2042',
        url: 'https://wa.me/5511939482042',
        channelName: 'Canal 1',
        defaultMessage: 'Olá! Gostaria de conversar sobre o meu caso.',
      },
      {
        label: '(11) 95193-3580',
        url: 'https://wa.me/5511951933580',
        channelName: 'Canal 2',
        defaultMessage: 'Olá! Gostaria de conversar sobre o meu caso.',
      },
    ],
    email: configuredContactEmail,
    emailUrl: `mailto:${configuredContactEmail}`,
    primaryCtaLabel: 'Falar no WhatsApp',
  },
  header: {
    brandHref: '#inicio',
    brandLabel: 'Mattos & Santos — início',
    primaryNavigationLabel: 'Navegação principal',
    mobileNavigationLabel: 'Navegação mobile',
    menuOpenLabel: 'Abrir menu',
    links: [
      { href: '#sobre', label: 'Sobre mim' },
      { href: '#especialidades', label: 'Áreas de atuação' },
      { href: '#como-funciona', label: 'Como funciona' },
      { href: '#faq', label: 'Dúvidas' },
    ],
  },
  hero: {
    id: 'inicio',
    image: {
      src: '/images/optimized/foto-hero-1440.webp',
      width: 1440,
      height: 2160,
      alt: 'Especialista da Mattos & Santos em atendimento',
      srcset: [
        { src: '/images/optimized/foto-hero-720.webp', width: 720 },
        { src: '/images/optimized/foto-hero-1440.webp', width: 1440 },
        { src: '/images/optimized/foto-hero-2400.webp', width: 2400 },
      ],
      sizes: '100vw',
    },
    trust: {
      text: 'Contato pelo WhatsApp, 24 horas',
    },
    title: [
      { text: 'Assessoria em ' },
      { text: 'Direito Previdenciário', highlighted: true },
      { text: ', Trabalhista e Civil' },
    ],
    description: 'Mais de 20 anos de experiência em orientação jurídica. Atendimento 100% digital ou presencial, inclusive fora do horário comercial.',
    primaryCtaLabel: 'Falar no WhatsApp',
    secondaryCta: { href: '#sobre', label: 'Conheça minha trajetória' },
    scrollTarget: '#numeros',
    scrollLabel: 'Conheça a assessoria',
  },
  stats: {
    id: 'numeros',
    label: 'Informações do escritório',
    items: [
      { value: '+20 anos', label: 'de atuação previdenciária' },
      { value: '24h', label: 'para enviar sua mensagem' },
      { value: 'Digital', label: 'e também presencial' },
      { value: 'OAB/SP', label: '205.542' },
    ],
  },
  about: {
    id: 'sobre',
    image: {
      src: '/images/optimized/foto-sobre-800.webp',
      width: 800,
      height: 1200,
      alt: 'Especialista em Direito Previdenciário da Mattos & Santos',
      srcset: [
        { src: '/images/optimized/foto-sobre-480.webp', width: 480 },
        { src: '/images/optimized/foto-sobre-800.webp', width: 800 },
        { src: '/images/optimized/foto-sobre-1200.webp', width: 1200 },
      ],
      sizes: '(max-width: 780px) calc(100vw - 34px), 392px',
    },
    cardName: 'Especialista responsável',
    cardDetail: 'OAB/SP 205.542',
    eyebrow: 'Mais de 20 anos de atuação',
    credentials: [
      { icon: 'lucide:circle-check', text: 'Pós-graduação em Direito Previdenciário' },
      { icon: 'lucide:circle-check', text: 'Atuação em Direito Previdenciário, Trabalhista e Civil' },
      { icon: 'lucide:circle-check', text: 'Atendimento 100% digital ou presencial' },
    ],
  },
  practiceSection: {
    id: 'especialidades',
    title: 'Áreas de atuação com',
    highlightedTitle: 'experiência',
    description: 'Cada caso recebe uma análise cuidadosa, com orientação clara e acompanhamento de acordo com a sua necessidade.',
    items: [
      { icon: 'lucide:shield-check', title: 'Direito Previdenciário', description: 'Orientação e acompanhamento em aposentadorias, benefícios do INSS, revisões, BPC/LOAS e planejamento previdenciário.', href: '/atuacao/direito-previdenciario/' },
      { icon: 'lucide:briefcase-business', title: 'Direito Trabalhista', description: 'Orientação em relações de trabalho e acompanhamento de demandas para a defesa de direitos trabalhistas.', href: '/atuacao/direito-trabalhista/' },
      { icon: 'lucide:scale', title: 'Direito Civil', description: 'Atuação em questões cíveis, contratos, obrigações, responsabilidade civil e reparação de danos.', href: '/atuacao/direito-civil/' },
    ],
  },
  differentialsSection: {
    id: 'diferenciais',
    titlePrefix: 'Seu problema não pode',
    highlightedTitle: 'esperar',
    titleSuffix: 'pelo horário comercial.',
    description: 'Do primeiro contato ao acompanhamento, você escolhe como ser atendido — com disponibilidade, praticidade e atenção ao seu caso.',
    ctaLabel: 'Falar sobre meu caso',
    items: [
      { storyLabel: 'Quando surgir a urgência', title: 'Contato 24 horas', description: 'Você pode enviar sua mensagem pelo WhatsApp a qualquer hora, inclusive fora do horário comercial. O retorno é organizado conforme a disponibilidade do atendimento.' },
      { storyLabel: 'De onde você estiver', title: 'Atendimento 100% digital', description: 'Você pode receber orientação e enviar documentos com praticidade, onde estiver.' },
      { storyLabel: 'Para conversar de perto', title: 'Atendimento presencial', description: 'Atendimento presencial na Rua São Paulo, 526, loja 06, mediante contato prévio.' },
      { storyLabel: 'Em cada decisão', title: 'Cuidado em cada caso', description: 'Mais de 20 anos de experiência aliados a uma escuta atenta e a uma orientação individualizada.' },
    ],
  },
  processSection: {
    id: 'como-funciona',
    title: 'Clareza em cada',
    highlightedTitle: 'próximo passo.',
    description: 'Você entende como o atendimento começa e o que acontece depois do primeiro contato.',
    ctaLabel: 'Começar meu atendimento',
    steps: [
      {
        title: 'Primeiro contato',
        description: 'Pelo WhatsApp, conte o que aconteceu e indique se a questão é previdenciária, trabalhista ou civil.',
      },
      {
        title: 'Análise do caso',
        description: 'Documentos, datas e objetivos são reunidos para uma análise inicial cuidadosa do seu contexto.',
      },
      {
        title: 'Orientação clara',
        description: 'Você entende as possibilidades e, quando necessário, segue com atendimento digital ou presencial.',
      },
    ],
  },
  servicePages: [
    {
      slug: 'direito-previdenciario',
      icon: 'lucide:shield-check',
      eyebrow: 'Direito Previdenciário',
      title: 'Seu futuro previdenciário, com clareza.',
      summary: 'Atendimento previdenciário com análise individual, linguagem clara e mais de 20 anos de experiência.',
      introduction: 'Cada trajetória profissional e contributiva é única. O atendimento começa pela compreensão do histórico, dos documentos disponíveis e do objetivo de cada pessoa.',
      situationsTitle: 'Situações que podem receber orientação',
      situations: ['Aposentadorias e planejamento previdenciário', 'Benefícios do INSS e revisões', 'BPC/LOAS', 'Benefício negado ou interrompido', 'Análise de CNIS e documentação'],
      approachTitle: 'Como o atendimento é conduzido',
      approach: 'A documentação e o contexto são analisados antes da indicação dos próximos passos. O atendimento pode acontecer de forma digital ou presencial, sempre sem promessa de resultado.',
      ctaLabel: 'Falar sobre uma questão previdenciária',
      seoDescription: 'Orientação em Direito Previdenciário para aposentadorias, benefícios do INSS, revisões, BPC/LOAS e planejamento previdenciário em São Paulo e online.',
    },
    {
      slug: 'direito-trabalhista',
      icon: 'lucide:briefcase-business',
      eyebrow: 'Direito Trabalhista',
      title: 'Seus direitos no trabalho, com clareza.',
      summary: 'Orientação individual para situações relacionadas ao vínculo, às condições e ao encerramento da relação de trabalho.',
      introduction: 'Questões trabalhistas exigem atenção aos fatos, documentos e prazos. A análise inicial ajuda a organizar a situação e identificar os próximos passos possíveis.',
      situationsTitle: 'Situações que podem receber orientação',
      situations: ['Rescisão e verbas trabalhistas', 'Reconhecimento de vínculo', 'Jornada, horas extras e intervalos', 'Direitos não observados durante o contrato', 'Análise de documentos da relação de trabalho'],
      approachTitle: 'Como o atendimento é conduzido',
      approach: 'O atendimento considera a realidade de cada relação de trabalho e os documentos disponíveis, com comunicação objetiva e acompanhamento conforme a necessidade do caso.',
      ctaLabel: 'Falar sobre uma questão trabalhista',
      seoDescription: 'Orientação em Direito Trabalhista para relações de trabalho, rescisões, verbas, jornada e análise documental em São Paulo e online.',
    },
    {
      slug: 'direito-civil',
      icon: 'lucide:scale',
      eyebrow: 'Direito Civil',
      title: 'Orientação clara para questões civis.',
      summary: 'Orientação em questões civis, contratos, obrigações e reparação de danos, com análise cuidadosa de cada contexto.',
      introduction: 'Conflitos civis podem envolver relações pessoais, patrimoniais ou contratuais. Entender os fatos e os documentos é o primeiro passo para uma orientação responsável.',
      situationsTitle: 'Situações que podem receber orientação',
      situations: ['Contratos e obrigações', 'Responsabilidade civil', 'Reparação de danos', 'Cobranças e descumprimentos contratuais', 'Análise preventiva de documentos'],
      approachTitle: 'Como o atendimento é conduzido',
      approach: 'Cada questão é analisada a partir de seus documentos, riscos e objetivos, com explicação clara das alternativas e dos próximos passos aplicáveis.',
      ctaLabel: 'Falar sobre uma questão civil',
      seoDescription: 'Orientação em Direito Civil para contratos, obrigações, responsabilidade civil e reparação de danos em São Paulo e online.',
    },
  ],
  reviewsSection: {
    enabled: true,
    id: 'avaliacoes',
    title: 'O que nossos clientes',
    highlightedTitle: 'dizem',
    platformLogo: { src: '/images/google-icon.png', width: 41, height: 41, alt: 'Google' },
      source: 'google',
    maxRating: 5,
    ratingUnavailableLabel: 'Avaliação não disponível',
    orderingNotice: 'Avaliações selecionadas por relevância.',
    google: {
      // O Place ID é público. A chave secreta fica em GOOGLE_PLACES_API_KEY.
      placeId: 'ChIJ097I3whZzpQRqmditI26S5g',
      limit: 3,
      reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Mattos%20%26%20Santos%20Assessoria%2C%20S%C3%A3o%20Paulo&query_place_id=ChIJ097I3whZzpQRqmditI26S5g',
    },
    fallbacks: {
      quote: 'Comentário não disponível',
      name: 'Usuário do Google',
      details: 'Não disponível',
      avatar: '/images/google-icon.png',
      avatarPosition: 'center',
      publishedAtLabel: 'Data não disponível',
    },
    manualItems: [],
  },
  faqSection: {
    id: 'faq',
    eyebrow: 'Dúvidas frequentes',
    title: 'Informação clara desde o',
    highlightedTitle: 'primeiro contato',
    description: 'Cada situação exige análise individual. Estas respostas ajudam a orientar os primeiros passos.',
    ctaLabel: 'Falar com o escritório',
    items: [
      { question: 'Onde fica o escritório?', answer: 'O atendimento presencial acontece na Rua São Paulo, 526, loja 06, na Liberdade, em São Paulo/SP. Entre em contato antes da visita.' },
      { question: 'Quais documentos levar para uma consulta previdenciária?', answer: 'É útil reunir documento de identidade, CPF, comprovante de residência, Carteira de Trabalho, extrato CNIS e eventuais cartas de indeferimento. A necessidade pode variar conforme o caso.' },
      { question: 'Como entrar em contato?', answer: 'Fale pelo WhatsApp nos números (11) 93948-2042 ou (11) 95193-3580. Se preferir, envie um e-mail para mattosesantosassessoria@gmail.com.' },
      { question: 'Quais são as áreas de atuação?', answer: 'A assessoria atua em Direito Previdenciário, Direito Trabalhista e Direito Civil.' },
      { question: 'O atendimento funciona fora do horário comercial?', answer: 'Você pode enviar sua mensagem pelo WhatsApp a qualquer hora, inclusive fora do horário comercial. O retorno é organizado conforme a disponibilidade do atendimento.' },
    ],
  },
  footer: {
    eyebrow: 'WhatsApp disponível 24 horas',
    title: 'Seu problema não precisa',
    highlightedTitle: 'esperar.',
    description: 'Assessoria previdenciária, com atuação também em Direito Trabalhista e Direito Civil.',
    links: [
      { href: '#sobre', label: 'Sobre mim' },
      { href: '#especialidades', label: 'Áreas de atuação' },
      { href: '#como-funciona', label: 'Como funciona' },
      { href: '#faq', label: 'Dúvidas' },
    ],
    copyrightSuffix: 'Todos os direitos reservados.',
    backToTopLabel: 'Voltar ao topo',
    backToTopHref: '#inicio',
    whatsapp: {
      regionLabel: 'Atendimento pelo WhatsApp',
      closeLabel: 'Fechar atendimento',
      image: { src: '/images/optimized/foto-atendimento-192.webp', width: 192, height: 288, alt: 'Especialista da Mattos & Santos' },
      senderName: 'Mattos & Santos',
      message: 'Olá! Como posso ajudar? Selecione o assunto e depois escolha por qual número deseja conversar.',
      topicLabel: 'Sobre qual assunto você quer falar?',
      topics: ['Direito Previdenciário', 'Direito Trabalhista', 'Direito Civil'],
      choicesLabel: 'Escolha um canal de atendimento',
      channelLabel: 'WhatsApp',
      redirectNote: 'Você será direcionado ao WhatsApp.',
      buttonLabel: 'Abrir atendimento pelo WhatsApp',
    },
  },
  seo: {
    siteUrl: configuredSiteUrl,
    locale: 'pt_BR',
    language: 'pt-BR',
    homePageTitle: 'Assessoria Previdenciária em São Paulo',
    defaultTitle: 'Assessoria Previdenciária em São Paulo | Mattos & Santos',
    titleTemplate: '%s | Mattos & Santos',
    defaultDescription: 'Assessoria previdenciária com mais de 20 anos de atuação, além de atendimento em Direito Trabalhista e Civil. Atendimento digital e presencial; mensagens pelo WhatsApp podem ser enviadas 24 horas.',
    defaultImage: '/images/optimized/foto-hero-social.jpg',
    defaultImageAlt: 'Especialista em Direito Previdenciário da Mattos & Santos em atendimento',
    defaultImageWidth: 1200,
    defaultImageHeight: 1800,
    themeColor: '#123E43',
    favicon: '/favicon.svg',
    keywords: ['Mattos e Santos Assessoria', 'assessoria previdenciária', 'advogada previdenciária São Paulo', 'Direito Trabalhista', 'Direito Civil', 'aposentadoria INSS', 'BPC LOAS'],
    areaServed: 'Liberdade, São Paulo - SP e Região Metropolitana',
    knowsAbout: ['Direito Previdenciário', 'Direito Trabalhista', 'Direito Civil', 'Aposentadoria INSS', 'Planejamento Previdenciário', 'BPC LOAS'],
    sitemap: [
      { path: '/', changeFrequency: 'monthly', priority: 1 },
      { path: '/atuacao/direito-previdenciario/', changeFrequency: 'monthly', priority: 0.9 },
      { path: '/atuacao/direito-trabalhista/', changeFrequency: 'monthly', priority: 0.8 },
      { path: '/atuacao/direito-civil/', changeFrequency: 'monthly', priority: 0.8 },
      { path: '/politica-de-privacidade/', changeFrequency: 'yearly', priority: 0.3 },
    ],
  },
  videoSection: {
    // Use videoId para YouTube ou videoUrl para um arquivo local.
    enabled: false,
    eyebrow: 'Apresentação institucional',
    title: 'Conheça nossa atuação',
    highlightedTitle: 'de perto.',
    description: 'Um espaço para apresentar a experiência, a forma de atendimento e os valores que orientam cada atuação.',
    provider: 'youtube',
    videoId: '',
    videoUrl: '',
    poster: '/images/optimized/foto-hero-1440.webp',
    posterAlt: 'Capa do vídeo institucional',
    playLabel: 'Assistir apresentação',
    caption: 'Vídeo institucional',
  },
  locationSection: {
    // Substitua address e mapQuery pelo endereço completo de cada novo projeto.
    enabled: true,
    eyebrow: 'Localização',
    title: 'Encontre nosso',
    highlightedTitle: 'escritório.',
    description: 'O atendimento presencial acontece mediante contato prévio. Se preferir, todo o atendimento também pode ser realizado de forma digital.',
    address: 'Rua São Paulo, 526, loja 06 - Liberdade, São Paulo - SP',
    mapQuery: 'Rua São Paulo, 526, loja 06 - Liberdade, São Paulo - SP',
    mapTitle: 'Localização da Mattos & Santos em São Paulo',
    directionsLabel: 'Abrir no Google Maps',
  },
  aiDiscovery: {
    // Desative apenas se este projeto não puder ser descoberto por agentes.
    enabled: true,
    llmsPath: '/llms.txt',
    markdownPath: '/index.md',
    summary: 'Assessoria previdenciária em São Paulo, com mais de 20 anos de atuação e atendimento também em Direito Trabalhista e Civil. O WhatsApp recebe mensagens 24 horas.',
    usageNote: 'O conteúdo é institucional e informativo. Não substitui análise jurídica individual e não deve ser interpretado como promessa de resultado.',
  },
  privacy: {
    title: 'Privacidade neste site',
    description: 'Informações objetivas sobre os dados envolvidos ao navegar pelo site e utilizar nossos canais de contato.',
    lastUpdated: '24 de setembro de 2026',
  },
  deployment: {
    projectName: 'mattosesantos-advocacia',
    subdomain: 'mattosesantos',
    baseDomain: 'feito.website',
    // Pode ser sobrescrito pela variável VERCEL_CNAME_TARGET.
    cnameTarget: 'cname.vercel-dns-0.com',
  },
} satisfies SiteConfig;
