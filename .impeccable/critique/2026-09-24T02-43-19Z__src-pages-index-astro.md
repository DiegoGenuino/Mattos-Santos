---
target: homepage da Mattos & Santos
total_score: 23
max_score: 32
na_heuristics: 7,9
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\genui\\Desktop\\Mattos-Santos\\src\\pages\\index.astro"
target_fingerprint: "sha256:aac146a92903aed256cc193de9d75d1f79a77cb01b1b3455d3dff14698d1d95b"
target_path: "C:\\Users\\genui\\Desktop\\Mattos-Santos\\src\\pages\\index.astro"
timestamp: 2026-09-24T02-43-19Z
slug: src-pages-index-astro
---
# Avaliação da homepage Mattos & Santos

## Design Health Score

| # | Heurística | Nota | Principal questão |
|---|---|---:|---|
| 1 | Visibilidade do estado | 2 | Falha das avaliações aparece como conteúdo real e não como estado indisponível. |
| 2 | Correspondência com o mundo real | 3 | Linguagem clara; a promessa de atendimento 24h precisa ser delimitada. |
| 3 | Controle e liberdade | 3 | O WhatsApp pode ser fechado, mas abre automaticamente cedo demais. |
| 4 | Consistência e padrões | 3 | Boa unidade visual; há repetição e uma duplicação de copy em áreas de atuação. |
| 5 | Prevenção de erro | 2 | Dois números são mostrados sem explicar a finalidade de cada um. |
| 6 | Reconhecimento em vez de memorização | 4 | Navegação, áreas e CTAs são diretos e reconhecíveis. |
| 7 | Flexibilidade e eficiência | n/a | Não é uma necessidade central desta landing page. |
| 8 | Estética e minimalismo | 3 | Hero forte; reviews vazios e repetição de cartões quebram o acabamento premium. |
| 9 | Recuperação de erro | n/a | Não há formulário ou tarefa transacional com recuperação de erro. |
| 10 | Ajuda e documentação | 3 | FAQ e localização ajudam, mas falta explicar o percurso após o contato. |
| **Total** | | **23/32** | **Boa base, com lacunas importantes de confiança e conversão.** |

## Especificidade do design

A fotografia própria, a paleta verde-petróleo/creme/dourado e o destaque para 20 anos de atuação dão identidade real ao escritório. A metade inferior ainda recorre a padrões genéricos de cartões e perde parte da força autoral do hero. O detector encontrou dois avisos estéticos de baixa prioridade: Roboto no bloco do Google e a faixa colorida dos cards de avaliação, sendo esta faixa uma referência deliberada à marca Google.

## Impressão geral

O site já transmite seriedade e acolhimento. O maior salto não virá de mais efeitos, mas de substituir sinais de incompletude por provas de confiança e por uma narrativa pessoal mais forte.

## O que funciona

- Hero com retrato autêntico, proposta clara e CTA visível.
- Paleta coerente com um serviço jurídico humano e sofisticado.
- Bons sinais institucionais: 20+ anos, OAB, atendimento digital/presencial, FAQ e endereço.

## Problemas prioritários

1. **P1 — avaliações vazias:** três cartões exibem “Comentário não disponível”. Isso parece integração quebrada ou prova social inventada. Exibir avaliações reais e, se a fonte falhar, ocultar a seção inteira.
2. **P1 — WhatsApp invasivo:** o painel abre após 1,4 segundo e cobre conteúdo, especialmente no mobile. Abrir apenas após intenção, reduzir o painel mobile e explicar a finalidade de cada número.
3. **P1 — autoridade pessoal incompleta:** a profissional aparece em destaque, mas seu nome completo não está na narrativa. Associar nome, OAB, pós-graduação, 20 anos e abordagem ao retrato.
4. **P2 — percurso pouco explícito:** o site diz o que oferece, mas não mostra claramente o que acontece depois do contato. Criar “Como funciona” em três passos: escuta, análise e orientação.
5. **P2 — acabamento editorial:** corrigir “Áreas de atuação com com experiência”, evitar títulos com palavras coladas para leitores de tela e reduzir animações de blur em títulos.

## Personas

- **Jordan, primeiro contato:** entende as áreas e encontra o CTA, mas pode hesitar diante de reviews vazios e de dois números sem finalidade clara.
- **Riley, visitante criterioso:** percebe rapidamente o fallback do Google e a ausência do nome completo, reduzindo a credibilidade percebida.
- **Casey, mobile e distraído:** encontra o botão principal, mas o painel automático do WhatsApp ocupa grande parte do viewport e interrompe a leitura.

## Observações menores

- O layout de 390 px não apresentou overflow horizontal no teste objetivo (`scrollWidth` igual ao viewport), apesar de a captura longa reduzida poder sugerir cortes.
- O detector reportou apenas dois avisos estéticos, ambos de baixa prioridade.
- Domínio próprio e e-mail no domínio elevariam bastante a percepção premium.
- A seção de vídeo institucional já existe no código e está desativada; um vídeo curto e autêntico seria um excelente próximo ativo.

## Questões para considerar

- O que deve gerar mais impacto imediato: prova social real, autoridade da profissional ou experiência de contato?
- O mini-chat deve aparecer apenas por clique ou também após intenção de saída/tempo de leitura?
- O próximo ciclo deve corrigir apenas os três P1 ou executar uma evolução completa incluindo processo e vídeo?
