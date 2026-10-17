# DAPMEC — Site Institucional

Site institucional da DAPMEC Engenharia, Gestão e Performance Industrial.

- **Domínio:** https://dapmec.com.br
- **Hospedagem:** Netlify
- **Formulário:** Netlify Forms → `contato@dapmec.com.br`
- **WhatsApp:** (15) 99764-2401

## Deploy

1. Conectar este repositório ao Netlify
2. Build command: *(vazio)*
3. Publish directory: `/`
4. Deploy

## Formulário (Netlify Forms)

O formulário `contato` já está configurado com `data-netlify="true"`.
Os envios aparecem em **Netlify → Forms**. Configure notificação por e-mail
em **Netlify → Forms → Settings → Form notifications → Email** para
`contato@dapmec.com.br`.

## DNS

- **MX:** Zoho (mx.zoho.com, mx2, mx3)
- **SPF:** `v=spf1 include:zoho.com ~all`
- **Verificação Zoho:** TXT `zoho-verification=...`
- **DKIM:** pendente (Registro.br não aceita `_`)

## Pendências

- [ ] Adicionar `og-image.jpg` (1200×630) e apontar no `index.html`
- [ ] Configurar domínio personalizado no Netlify
- [ ] Concluir verificação do Zoho quando DNS propagar
- [ ] Configurar regra de encaminhamento contato@ → diego@
