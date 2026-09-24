# Mattos & Santos

Site institucional da Mattos & Santos — Assessoria Previdenciária.

## Dados institucionais

- Atuação: Direito Previdenciário, Direito Trabalhista e Direito Civil
- WhatsApp: (11) 93948-2042 e (11) 95193-3580
- E-mail: mattosesantosassessoria@gmail.com
- Endereço: Rua São Paulo, 526, loja 06 — Liberdade, São Paulo/SP
- Site: https://mattossantosassesoria.feito.website

## Desenvolvimento

```bash
pnpm install
pnpm dev
pnpm build
pnpm test:reviews
```

O projeto usa Astro e gera um site estático em `dist`. O conteúdo institucional e os metadados ficam centralizados em `src/config/site.ts`; componentes e estilos podem ser evoluídos diretamente conforme as necessidades deste site.

## Publicação

```bash
pnpm deploy:vercel -- --dry-run
pnpm deploy:vercel
```

As credenciais de Vercel e Cloudflare devem permanecer fora do repositório. A chave da API do Google Places, quando utilizada, deve ser configurada em `.env.local` como `GOOGLE_PLACES_API_KEY`.

## Revisão antes de publicar

- conferir logo, favicon e imagens oficiais;
- validar os dois links de WhatsApp e o e-mail;
- confirmar o endereço no mapa;
- revisar title, description, Open Graph e JSON-LD;
- executar `pnpm build` e `pnpm test:reviews`;
- conferir o resultado em desktop e celular.

## Configuração do ambiente

Além da chave opcional `GOOGLE_PLACES_API_KEY`, os dados públicos do cliente podem ser definidos em `.env.local`:

```bash
PUBLIC_SITE_URL=https://dominio-do-cliente.com.br
PUBLIC_CONTACT_EMAIL=contato@dominio-do-cliente.com.br
```

## Conteúdo que depende do cliente

Antes da publicação definitiva, preencher apenas com informações verificáveis:

- nome profissional completo da especialista;
- domínio e e-mail profissional definitivos;
- avaliações reais do Google, via API ou cadastro manual validado;
- vídeo institucional, ativando `videoSection.enabled` e informando `videoId` ou `videoUrl`.
