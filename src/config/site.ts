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
    visual: 'contact' | 'documents' | 'guidance';
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
const configuredSiteUrl = runtimeEnv?.PUBLIC_SITE_URL?.trim().replace(/\/$/, '') || 'https://mattossantosassesoria.feito.website';
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
      { href: '#especialidades', label: 'Como podemos ajudar' },
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
      text: 'Mais de 20 anos de atuação previdenciária',
    },
    title: [
      { text: 'Acidente, aposentadoria ou ' },
      { text: 'BPC/LOAS?', highlighted: true },
      { text: ' Entenda seus direitos.' },
    ],
    description: 'Orientação previdenciária para acidentes dentro ou fora do trabalho, aposentadorias e benefício assistencial para idosos e pessoas com deficiência.',
    primaryCtaLabel: 'Quero analisar meu caso',
    secondaryCta: { href: '#especialidades', label: 'Veja como podemos ajudar' },
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
    eyebrow: 'Mais de 20 anos de atuação',
    credentials: [
      { icon: 'lucide:circle-check', text: 'Pós-graduação em Direito Previdenciário' },
      { icon: 'lucide:circle-check', text: 'Foco em benefícios por acidente, aposentadorias e BPC/LOAS' },
      { icon: 'lucide:circle-check', text: 'Atendimento 100% digital ou presencial' },
    ],
  },
  practiceSection: {
    id: 'especialidades',
    title: 'Orientação para momentos que pedem',
    highlightedTitle: 'segurança',
    description: 'Entenda qual benefício pode se aplicar ao seu caso e quais documentos ajudam a demonstrar o seu direito.',
    items: [
      { icon: 'lucide:heart-pulse', title: 'Benefícios após acidentes', description: 'Acidente de trabalho, de trajeto ou fora do trabalho: análise de incapacidade temporária, sequelas e possível direito a benefício do INSS.', href: '/atuacao/beneficios-por-acidente/' },
      { icon: 'lucide:landmark', title: 'Aposentadorias', description: 'Análise de CNIS, contribuições e regras aplicáveis para planejar ou revisar o pedido de aposentadoria com mais segurança.', href: '/atuacao/aposentadorias/' },
      { icon: 'lucide:accessibility', title: 'BPC/LOAS para idoso e PcD', description: 'Orientação sobre o benefício assistencial para pessoas idosas e pessoas com deficiência em situação de baixa renda.', href: '/atuacao/bpc-loas/' },
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
    title: 'Do primeiro contato à orientação,',
    highlightedTitle: 'em três passos.',
    description: 'Um atendimento simples e organizado para você saber o que enviar e o que acontece depois.',
    ctaLabel: 'Começar pelo WhatsApp',
    steps: [
      {
        title: 'Conte o que aconteceu',
        description: 'Pelo WhatsApp, explique sua situação e informe se a dúvida envolve acidente, aposentadoria ou BPC/LOAS.',
        visual: 'contact',
      },
      {
        title: 'Organize os documentos',
        description: 'Atestados, CNIS, documentos pessoais e datas importantes são reunidos conforme o seu caso.',
        visual: 'documents',
      },
      {
        title: 'Receba uma orientação clara',
        description: 'Você entende as possibilidades e decide os próximos passos com atendimento digital ou presencial.',
        visual: 'guidance',
      },
    ],
  },
  servicePages: [
    {
      slug: 'beneficios-por-acidente',
      icon: 'lucide:heart-pulse',
      eyebrow: 'Benefícios após acidentes',
      title: 'Um acidente mudou sua rotina de trabalho?',
      summary: 'Análise de benefícios do INSS para quem sofreu acidente no trabalho, no trajeto ou fora do ambiente profissional.',
      introduction: 'O nome do benefício depende das consequências do acidente. A incapacidade temporária pode dar origem ao auxílio por incapacidade temporária; já uma sequela permanente que reduza a capacidade para o trabalho pode ser analisada para auxílio-acidente. A categoria do segurado e a documentação também fazem diferença.',
      situationsTitle: 'Quando buscar orientação',
      situations: ['Acidente ocorrido no trabalho ou a serviço da empresa', 'Acidente de trajeto ou de qualquer outra natureza', 'Afastamento por incapacidade temporária para o trabalho', 'Sequela permanente que reduziu a capacidade profissional', 'Benefício negado, encerrado ou concedido na modalidade incorreta'],
      approachTitle: 'O que é analisado no atendimento',
      approach: 'São avaliados o vínculo com o INSS, a categoria do segurado, a relação do acidente com o trabalho, atestados, laudos, exames, CAT e demais documentos. A partir disso, você recebe uma orientação clara sobre os caminhos possíveis para o seu caso.',
      ctaLabel: 'Analisar meu caso de acidente',
      seoDescription: 'Orientação sobre auxílio por incapacidade e auxílio-acidente após acidente de trabalho, de trajeto ou fora do trabalho, em São Paulo e online.',
    },
    {
      slug: 'aposentadorias',
      icon: 'lucide:landmark',
      eyebrow: 'Aposentadorias',
      title: 'Planeje sua aposentadoria com clareza.',
      summary: 'Análise do histórico contributivo para identificar regras aplicáveis, corrigir inconsistências e preparar o pedido ao INSS.',
      introduction: 'Idade, tempo de contribuição, atividade exercida e data de ingresso no INSS podem alterar a regra aplicável. Antes de protocolar o pedido, é importante conferir o CNIS, vínculos, salários e documentos que comprovam períodos não reconhecidos.',
      situationsTitle: 'Como podemos ajudar',
      situations: ['Planejamento previdenciário antes do pedido', 'Aposentadoria por idade e regras de transição', 'Aposentadoria especial, rural e da pessoa com deficiência', 'Conferência e correção de CNIS, vínculos e contribuições', 'Pedido negado, revisão ou análise do melhor benefício'],
      approachTitle: 'Decisões baseadas no seu histórico',
      approach: 'O atendimento reúne dados contributivos e documentos para comparar as possibilidades do seu caso. Você entende os requisitos, os pontos que precisam de comprovação e o momento adequado para fazer o pedido.',
      ctaLabel: 'Analisar minha aposentadoria',
      seoDescription: 'Planejamento e orientação para aposentadorias do INSS, análise de CNIS, regras de transição, pedidos e revisões em São Paulo e online.',
    },
    {
      slug: 'bpc-loas',
      icon: 'lucide:accessibility',
      eyebrow: 'BPC/LOAS para idoso e PcD',
      title: 'Proteção para quem precisa de apoio.',
      summary: 'Orientação sobre o benefício assistencial de um salário mínimo para pessoa idosa ou pessoa com deficiência que atenda aos critérios legais.',
      introduction: 'O BPC/LOAS não é aposentadoria e não exige contribuição ao INSS. Pode ser destinado à pessoa idosa com 65 anos ou mais e à pessoa com deficiência de qualquer idade, desde que sejam atendidos os critérios de renda e os demais requisitos. No caso da pessoa com deficiência, há avaliação biopsicossocial.',
      situationsTitle: 'Situações que podem receber orientação',
      situations: ['Pessoa idosa com 65 anos ou mais em situação de baixa renda', 'Pessoa com deficiência de qualquer idade', 'Organização ou atualização do CadÚnico e documentos familiares', 'Preparação para avaliação social e perícia', 'Pedido negado, benefício suspenso ou convocação para revisão'],
      approachTitle: 'Análise social e documental cuidadosa',
      approach: 'A composição familiar, as rendas, o CadÚnico e os documentos médicos e sociais são verificados de forma conjunta. Também explicamos características importantes do BPC, como a ausência de 13º salário e de pensão por morte.',
      ctaLabel: 'Analisar possível direito ao BPC',
      seoDescription: 'Orientação sobre BPC/LOAS para pessoa idosa e pessoa com deficiência, CadÚnico, pedido negado e revisão em São Paulo e online.',
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
      { question: 'Acidente fora do trabalho também pode gerar benefício?', answer: 'Pode. Um acidente de qualquer natureza pode dar origem a benefício por incapacidade e, em algumas situações, ao auxílio-acidente. O direito depende da qualidade e da categoria do segurado, das consequências do acidente e da documentação do caso.' },
      { question: 'Qual é a diferença entre auxílio por incapacidade e auxílio-acidente?', answer: 'O auxílio por incapacidade temporária protege quem está temporariamente sem condições de exercer o trabalho ou a atividade habitual. O auxílio-acidente tem natureza indenizatória e pode ser devido quando uma sequela permanente reduz a capacidade para o trabalho, conforme análise do caso.' },
      { question: 'Quais documentos ajudam na análise de uma aposentadoria?', answer: 'Em geral, documento de identidade, CPF, Carteira de Trabalho, extrato CNIS, carnês ou guias de contribuição e documentos de atividade especial ou rural. A lista exata depende do histórico de cada pessoa.' },
      { question: 'É preciso ter contribuído para receber o BPC/LOAS?', answer: 'Não. O BPC é um benefício assistencial, não uma aposentadoria. A pessoa idosa ou com deficiência deve atender aos critérios legais, incluindo a análise da situação de baixa renda e a inscrição atualizada no CadÚnico.' },
      { question: 'Como entrar em contato?', answer: 'Fale pelo WhatsApp nos números (11) 93948-2042 ou (11) 95193-3580. Se preferir, envie um e-mail para mattosesantosassessoria@gmail.com.' },
      { question: 'O atendimento funciona fora do horário comercial?', answer: 'Você pode enviar sua mensagem pelo WhatsApp a qualquer hora, inclusive fora do horário comercial. O retorno é organizado conforme a disponibilidade do atendimento.' },
    ],
  },
  footer: {
    eyebrow: 'WhatsApp disponível 24 horas',
    title: 'Seu problema não precisa',
    highlightedTitle: 'esperar.',
    description: 'Orientação previdenciária para benefícios após acidentes, aposentadorias e BPC/LOAS para pessoas idosas e pessoas com deficiência.',
    links: [
      { href: '#sobre', label: 'Sobre mim' },
      { href: '#especialidades', label: 'Como podemos ajudar' },
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
      topics: ['Acidente dentro ou fora do trabalho', 'Aposentadoria', 'BPC/LOAS para idoso ou PcD'],
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
    homePageTitle: 'Acidentes, Aposentadorias e BPC/LOAS',
    defaultTitle: 'Benefícios do INSS em São Paulo | Mattos & Santos',
    titleTemplate: '%s | Mattos & Santos',
    defaultDescription: 'Orientação previdenciária para benefícios após acidentes de trabalho ou fora dele, aposentadorias e BPC/LOAS para pessoas idosas e pessoas com deficiência.',
    defaultImage: '/images/og-mattos-santos.jpg',
    defaultImageAlt: 'Mattos e Santos — orientação em benefícios do INSS, aposentadorias e BPC/LOAS',
    defaultImageWidth: 1200,
    defaultImageHeight: 630,
    themeColor: '#123E43',
    favicon: '/favicon.svg',
    keywords: ['Mattos e Santos Assessoria', 'assessoria previdenciária', 'benefício por acidente', 'acidente de trabalho', 'auxílio-acidente', 'auxílio por incapacidade temporária', 'aposentadoria INSS', 'BPC LOAS idoso', 'BPC pessoa com deficiência'],
    areaServed: 'Liberdade, São Paulo - SP e Região Metropolitana',
    knowsAbout: ['Benefícios por acidente', 'Acidente de trabalho', 'Auxílio-acidente', 'Auxílio por incapacidade temporária', 'Aposentadorias do INSS', 'Planejamento previdenciário', 'BPC/LOAS para pessoa idosa', 'BPC/LOAS para pessoa com deficiência'],
    sitemap: [
      { path: '/', changeFrequency: 'monthly', priority: 1 },
      { path: '/atuacao/beneficios-por-acidente/', changeFrequency: 'monthly', priority: 0.9 },
      { path: '/atuacao/aposentadorias/', changeFrequency: 'monthly', priority: 0.9 },
      { path: '/atuacao/bpc-loas/', changeFrequency: 'monthly', priority: 0.9 },
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
    summary: 'Assessoria previdenciária em São Paulo focada em benefícios após acidentes, aposentadorias e BPC/LOAS para pessoas idosas e pessoas com deficiência. O WhatsApp recebe mensagens 24 horas.',
    usageNote: 'O conteúdo é institucional e informativo. Não substitui análise jurídica individual e não deve ser interpretado como promessa de resultado.',
  },
  privacy: {
    title: 'Privacidade neste site',
    description: 'Informações objetivas sobre os dados envolvidos ao navegar pelo site e utilizar nossos canais de contato.',
    lastUpdated: '24 de setembro de 2026',
  },
  deployment: {
    projectName: 'mattos-santos-assesoria',
    subdomain: 'mattossantosassesoria',
    baseDomain: 'feito.website',
    // Pode ser sobrescrito pela variável VERCEL_CNAME_TARGET.
    cnameTarget: 'cname.vercel-dns-0.com',
  },
} satisfies SiteConfig;
