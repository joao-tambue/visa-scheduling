# visa-scheduling

> Plataforma que possibilita o agendamento para obtenção de cartão visa

## O que este projeto faz

visa-sheduling é uma aplicação web front-end que fornece fluxo de cadastro/login, registro de rosto, e reconhecimento facial integrado a uma API backend (via serviços em `src/js/services/`). A interface inclui páginas para cadastro, formulário, registro facial, login e perfil.

## Como começar (rápido)

Pré-requisitos: um servidor estático (recomendado para evitar problemas com fetch/serviços).

Executar com Python (porta 8000):

```bash
python -m http.server 8000
# ou, se usa Python 3 no Windows:
py -m http.server 8000
```

Abra no navegador: http://localhost:8000 e acesse [index.html](index.html).

Também é possível usar um servidor Node.js simples, por exemplo `http-server`:

```bash
npm install -g http-server
http-server -p 8000
```

## Estrutura principal do projeto

- `index.html` — página inicial
- `pages/` — páginas HTML (login, cadastro, perfil, registro facial, etc.)
- `src/js/` — código JavaScript da aplicação
  - `services/` — chamadas à API (`api.js`, `auth.service.js`, `face.service.js`, `user.service.js`)
  - `pages/` — controladores JS para cada página
  - `utils/` — utilitários como manipulação do DOM
- `css/` — estilos
- `pdf/` e `tools/` — utilitários adicionais (ex.: `extract_pdf.py`)


## illustrações

https://undraw.co/illustrations
https://storyset.com/
https://www.manypixels.co/gallery

## font

https://fonts.google.com/