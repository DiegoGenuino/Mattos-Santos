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
  professionalName: string;
  professionalRole: string;
  professionalDescription: string;
  professionalImage: string;
  logo: ImageAsset;
  registration: string;
}

export interface ContactConfig {
  whatsappUrl: string;
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
    avatars: string[];
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
  items: Array<{ icon: string; title: string; description: string }>;
}

export interface DifferentialsSectionConfig {
  id: string;
  titlePrefix: string;
  highlightedTitle: string;
  titleSuffix: string;
  tabsLabel: string;
  ctaLabel: string;
  items: Array<{ icon: string; title: string; description: string }>;
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
    actionLabel: string;
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
  reviewsSection: ReviewsSectionConfig;
  faqSection: FaqSectionConfig;
  footer: FooterConfig;
  seo: SeoConfig;
  videoSection: VideoSectionConfig;
  locationSection: LocationSectionConfig;
  aiDiscovery: AiDiscoveryConfig;
  deployment: DeploymentConfig;
}

export const siteConfig = {
  identity: {
    siteName: 'Mattos & Santos Assessoria',
    legalName: 'Mattos & Santos Assessoria',
    professionalName: 'Não disponível',
    professionalRole: 'Equipe responsável',
    professionalDescription: 'Assessoria com atendimento em Direito Previdenciário e Direito Civil na Liberdade, em São Paulo. A equipe realiza uma análise individualizada e apresenta os próximos passos com clareza.',
    professionalImage: '/images/foto-secao-sobre.JPG',
    logo: {
      src: '/images/mattos-santos-logo.svg',
      width: 420,
      height: 72,
      alt: 'Mattos & Santos Assessoria',
    },
    registration: 'Registro profissional: não informado',
  },
  contact: {
    whatsappUrl: 'https://wa.me/5511939482042',
    primaryCtaLabel: 'Falar com especialista',
  },
  header: {
    brandHref: '#inicio',
    brandLabel: 'Mattos & Santos Assessoria — início',
    primaryNavigationLabel: 'Navegação principal',
    mobileNavigationLabel: 'Navegação mobile',
    menuOpenLabel: 'Abrir menu',
    links: [
      { href: '#sobre', label: 'Quem somos' },
      { href: '#especialidades', label: 'Especialidades' },
      { href: '#diferenciais', label: 'Por que nós' },
      { href: '#faq', label: 'Dúvidas' },
    ],
  },
  hero: {
    id: 'inicio',
    image: {
      src: '/images/foto-hero.JPG',
      width: 6000,
      height: 4000,
      alt: 'Equipe da Mattos & Santos Assessoria em atendimento',
      srcset: [
        { src: '/images/foto-hero.JPG', width: 6000 },
      ],
      sizes: '100vw',
    },
    trust: {
      text: 'Atendimento próximo e transparente',
      avatars: ['/images/avatar-2.webp', '/images/avatar-1.webp', '/images/avatar-3.webp'],
    },
    title: [
      { text: 'Assessoria especializada em ' },
      { text: 'Direito Previdenciário', highlighted: true },
      { text: ' e ' },
      { text: 'Direito Civil', highlighted: true },
    ],
    description: 'Assessoria jurídica focada na busca de benefícios previdenciários e na solução de conflitos cíveis, com atendimento próximo e transparente em São Paulo.',
    primaryCtaLabel: 'Falar com especialista',
    secondaryCta: { href: '#sobre', label: 'Conheça o escritório' },
    scrollTarget: '#numeros',
    scrollLabel: 'Conheça o escritório',
  },
  stats: {
    id: 'numeros',
    label: 'Informações do escritório',
    items: [
      { value: '5,0', label: 'avaliação no Google Maps' },
      { value: 'INSS', label: 'atendimento previdenciário' },
      { value: 'Cível', label: 'atuação jurídica' },
      { value: 'SP', label: 'Liberdade e região' },
    ],
  },
  about: {
    id: 'sobre',
    image: {
      src: '/images/foto-secao-sobre.JPG',
      width: 6000,
      height: 4000,
      alt: 'Equipe da Mattos & Santos Assessoria',
      srcset: [
        { src: '/images/foto-secao-sobre.JPG', width: 6000 },
      ],
      sizes: '(max-width: 780px) calc(100vw - 34px), 392px',
    },
    cardName: 'Mattos & Santos',
    cardDetail: 'Assessoria | São Paulo/SP',
    eyebrow: 'Mattos & Santos Assessoria',
    credentials: [
      { icon: 'lucide:circle-check', text: 'Atendimento presencial na Liberdade, São Paulo/SP' },
      { icon: 'lucide:circle-check', text: 'Foco em Direito Previdenciário e Direito Civil' },
      { icon: 'lucide:circle-check', text: 'Atendimento por telefone, WhatsApp e Instagram' },
    ],
  },
  practiceSection: {
    id: 'especialidades',
    title: 'Áreas de atendimento com',
    highlightedTitle: 'clareza',
    description: 'Conheça as principais frentes de atendimento do escritório. Cada caso é analisado conforme suas circunstâncias e documentação.',
    items: [
      { icon: 'lucide:shield-check', title: 'Aposentadorias e benefícios do INSS', description: 'Orientação e acompanhamento de pedidos de concessão e revisão de aposentadorias e benefícios previdenciários.' },
      { icon: 'lucide:calculator', title: 'Planejamento previdenciário', description: 'Análise do tempo de contribuição e das possibilidades para o requerimento da aposentadoria.' },
      { icon: 'lucide:heart-handshake', title: 'BPC / LOAS', description: 'Auxílio no ingresso e acompanhamento do Benefício de Prestação Continuada para idosos e pessoas com deficiência.' },
      { icon: 'lucide:scale', title: 'Direito Civil e Família', description: 'Atuação em demandas cíveis, contratos, obrigações e questões relacionadas ao Direito de Família.' },
      { icon: 'lucide:gavel', title: 'Responsabilidade civil', description: 'Orientação em pedidos de reparação por danos morais, materiais e descumprimento contratual.' },
    ],
  },
  differentialsSection: {
    id: 'diferenciais',
    titlePrefix: 'Um atendimento',
    highlightedTitle: 'próximo',
    titleSuffix: 'para cada situação.',
    tabsLabel: 'Diferenciais da Mattos & Santos Assessoria',
    ctaLabel: 'Falar sobre meu caso',
    items: [
      { icon: 'lucide:badge-check', title: 'Localização acessível', description: 'Escritório situado na Rua São Paulo, no bairro da Liberdade, facilitando o acesso presencial na capital.' },
      { icon: 'lucide:scale', title: 'Foco previdenciário e cível', description: 'Atendimento direcionado às necessidades de segurados do INSS e às demandas do Direito Civil.' },
      { icon: 'lucide:messages-square', title: 'Triagem por WhatsApp', description: 'Possibilidade de iniciar o contato e organizar o agendamento pelo WhatsApp oficial.' },
      { icon: 'lucide:file-search', title: 'Análise individualizada', description: 'A documentação e o contexto de cada pessoa são considerados antes da orientação sobre os próximos passos.' },
      { icon: 'lucide:lock-keyhole', title: 'Atendimento responsável', description: 'Informações institucionais claras, sem promessa de resultado e com respeito à confidencialidade profissional.' },
      { icon: 'lucide:map-pin', title: 'Atendimento em São Paulo', description: 'Presença na Liberdade e foco prioritário em clientes da capital e região metropolitana.' },
    ],
  },
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
    manualItems: [
      { quote: 'Comentário não disponível', name: 'Usuário do Google', details: 'Não disponível', rating: null, avatar: '/images/google-icon.png', avatarPosition: 'center' },
      { quote: 'Comentário não disponível', name: 'Usuário do Google', details: 'Não disponível', rating: null, avatar: '/images/google-icon.png', avatarPosition: 'center' },
      { quote: 'Comentário não disponível', name: 'Usuário do Google', details: 'Não disponível', rating: null, avatar: '/images/google-icon.png', avatarPosition: 'center' },
    ],
  },
  faqSection: {
    id: 'faq',
    eyebrow: 'Dúvidas frequentes',
    title: 'Informação clara desde o',
    highlightedTitle: 'primeiro contato',
    description: 'Cada situação exige análise individual. Estas respostas ajudam a orientar os primeiros passos.',
    ctaLabel: 'Falar com o escritório',
    items: [
      { question: 'Onde fica o escritório?', answer: 'O escritório fica na Rua São Paulo, 536, no bairro da Liberdade, em São Paulo/SP. Entre em contato antes da visita para confirmar o horário de atendimento.' },
      { question: 'Quais documentos levar para uma consulta previdenciária?', answer: 'É útil reunir documento de identidade, CPF, comprovante de residência, Carteira de Trabalho, extrato CNIS e eventuais cartas de indeferimento. A necessidade pode variar conforme o caso.' },
      { question: 'Como agendar um atendimento?', answer: 'O agendamento pode ser solicitado pelo telefone ou WhatsApp (11) 93948-2042, ou pelo Instagram @mattos_e_santos.' },
      { question: 'O escritório atende demandas cíveis?', answer: 'Sim. Além do Direito Previdenciário, o escritório informa atuação em Direito Civil, contratos, reparação de danos e ações indenizatórias.' },
    ],
  },
  footer: {
    eyebrow: 'Atendimento próximo e transparente',
    title: 'Conte com orientação jurídica',
    highlightedTitle: 'responsável.',
    description: 'Atendimento em Direito Previdenciário e Civil, com análise individualizada e comunicação clara.',
    links: [
      { href: '#sobre', label: 'Quem somos' },
      { href: '#especialidades', label: 'Especialidades' },
      { href: '#diferenciais', label: 'Diferenciais' },
      { href: '#faq', label: 'Dúvidas' },
    ],
    copyrightSuffix: 'Todos os direitos reservados.',
    backToTopLabel: 'Voltar ao topo',
    backToTopHref: '#inicio',
    whatsapp: {
      regionLabel: 'Atendimento pelo WhatsApp',
      closeLabel: 'Fechar convite',
      image: { src: '/images/mattos-santos-logo.svg', width: 420, height: 72, alt: 'Mattos & Santos Assessoria' },
      senderName: 'Mattos & Santos Assessoria',
      message: 'Olá! Gostaria de falar sobre um atendimento jurídico.',
      actionLabel: 'Iniciar conversa',
      buttonLabel: 'Abrir atendimento pelo WhatsApp',
    },
  },
  seo: {
    siteUrl: 'https://mattosesantos.feito.website',
    locale: 'pt_BR',
    language: 'pt-BR',
    homePageTitle: 'Mattos & Santos Assessoria | Direito Previdenciário e Civil',
    defaultTitle: 'Mattos & Santos Assessoria | Direito Previdenciário e Civil',
    titleTemplate: '%s | Mattos & Santos Assessoria',
    defaultDescription: 'Assessoria na Liberdade, em São Paulo, com atendimento em Direito Previdenciário, benefícios do INSS e Direito Civil.',
    defaultImage: '/images/foto-hero.JPG',
    defaultImageAlt: 'Equipe da Mattos & Santos Assessoria em atendimento',
    defaultImageWidth: 6000,
    defaultImageHeight: 4000,
    themeColor: '#1E293B',
    favicon: '/favicon.svg',
    keywords: ['Mattos e Santos Assessoria', 'assessoria previdenciária Liberdade', 'aposentadoria INSS Liberdade', 'assessoria civil São Paulo', 'BPC LOAS'],
    areaServed: 'Liberdade, São Paulo - SP e Região Metropolitana',
    knowsAbout: ['Direito Previdenciário', 'Aposentadoria INSS', 'Planejamento Previdenciário', 'BPC LOAS', 'Direito Civil', 'Contratos'],
    sitemap: [{ path: '/', changeFrequency: 'monthly', priority: 1 }],
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
    poster: '',
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
    description: 'Consulte nossa localização e planeje sua visita. Para atendimento presencial, entre em contato para confirmar o horário.',
    address: 'Rua São Paulo, 536 - Liberdade, São Paulo - SP',
    mapQuery: 'Mattos & Santos Assessoria, Rua São Paulo, 536 - Liberdade, São Paulo - SP',
    mapTitle: 'Localização da Mattos & Santos Assessoria em São Paulo',
    directionsLabel: 'Abrir no Google Maps',
  },
  aiDiscovery: {
    // Desative apenas se este projeto não puder ser descoberto por agentes.
    enabled: true,
    llmsPath: '/llms.txt',
    markdownPath: '/index.md',
    summary: 'Assessoria em São Paulo, com atendimento em Direito Previdenciário, benefícios do INSS, Direito Civil e demandas relacionadas.',
    usageNote: 'O conteúdo é institucional e informativo. Não substitui análise jurídica individual e não deve ser interpretado como promessa de resultado.',
  },
  deployment: {
    projectName: 'mattosesantos-advocacia',
    subdomain: 'mattosesantos',
    baseDomain: 'feito.website',
    // Pode ser sobrescrito pela variável VERCEL_CNAME_TARGET.
    cnameTarget: 'cname.vercel-dns-0.com',
  },
} satisfies SiteConfig;
