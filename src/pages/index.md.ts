import type { APIRoute } from 'astro';
import { siteConfig } from '@/config/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const { aiDiscovery, contact, faqSection, identity, locationSection, processSection, seo, servicePages } = siteConfig;

  if (!aiDiscovery.enabled) {
    return new Response('Not found', { status: 404 });
  }

  const siteUrl = seo.siteUrl.replace(/\/$/, '');
  const areas = seo.knowsAbout.map((area) => `- ${area}`).join('\n');
  const faqs = faqSection.items
    .map(({ question, answer }) => `### ${question}\n\n${answer}`)
    .join('\n\n');
  const serviceLinks = servicePages
    .map(({ eyebrow, slug, summary }) => `- [${eyebrow}](${siteUrl}/atuacao/${slug}/): ${summary}`)
    .join('\n');
  const processSteps = processSection.steps
    .map(({ title, description }, index) => `${index + 1}. **${title}:** ${description}`)
    .join('\n');

  const body = `# ${identity.siteName}

> ${aiDiscovery.summary}

## Sobre o escritório

${seo.defaultDescription}

A ${identity.legalName} atua em ${seo.areaServed}, com atendimento técnico, pessoal e sigiloso. ${aiDiscovery.usageNote}

## Sobre a especialista

**Atuação:** ${identity.professionalRole}.

${identity.professionalDescription}

## Como podemos ajudar

${areas}

### Páginas de atendimento

${serviceLinks}

## Como funciona

${processSteps}

## Atendimento

O atendimento pode ocorrer presencialmente ou de forma 100% digital, e mensagens podem ser enviadas pelo WhatsApp 24 horas. O retorno é organizado conforme a disponibilidade do atendimento. WhatsApp: ${contact.whatsappNumbers.map(({ label }) => label).join(' ou ')}. E-mail: ${contact.email}. Conversas, documentos e informações são tratados sob sigilo profissional.

## Localização

${locationSection.locations.map(({ label, address }) => `- **${label}:** ${address}`).join('\n')}

Para atendimento presencial, é necessário entrar em contato previamente para confirmar o horário.

## Perguntas frequentes

${faqs}

## Fontes oficiais

- [Site institucional](${siteUrl}/)
- [Sitemap](${siteUrl}/sitemap.xml)
- [Resumo para agentes](${siteUrl}${aiDiscovery.llmsPath})
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
