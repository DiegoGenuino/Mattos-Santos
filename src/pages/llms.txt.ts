import type { APIRoute } from 'astro';
import { siteConfig } from '@/config/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const { aiDiscovery, identity, seo } = siteConfig;

  if (!aiDiscovery.enabled) {
    return new Response('Not found', { status: 404 });
  }

  const siteUrl = seo.siteUrl.replace(/\/$/, '');
  const body = `# ${identity.siteName}

> ${aiDiscovery.summary}

Idioma principal: português do Brasil. Área de atendimento: ${seo.areaServed}. ${aiDiscovery.usageNote}

## Conteúdo principal

- [Visão geral institucional](${siteUrl}${aiDiscovery.markdownPath}): Conteúdo sobre o escritório, profissional responsável, benefícios após acidentes, aposentadorias, BPC/LOAS, atendimento, localização e dúvidas frequentes.

## Navegação

- [Site oficial](${siteUrl}/): Página institucional completa da ${identity.siteName}.
- [Como podemos ajudar](${siteUrl}/#especialidades): Benefícios após acidentes, aposentadorias e BPC/LOAS para pessoa idosa ou pessoa com deficiência.
- [Sobre a especialista](${siteUrl}/#sobre): Mais de 20 anos de atuação e pós-graduação em Direito Previdenciário.
- [Dúvidas frequentes](${siteUrl}/#faq): Respostas informativas sobre benefícios e atendimento.
- [Localização](${siteUrl}/#localizacao): Região de atendimento presencial e acesso ao mapa.

## Optional

- [Sitemap](${siteUrl}/sitemap.xml): Relação das páginas públicas indexáveis.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
