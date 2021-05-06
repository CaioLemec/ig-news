<h1 align="center">
    <img alt="logo" title="Ignews" src="./public/images/logo.svg" width="45%" />
</h1>

<p align="center">
  <a href="#desktop_computer-projeto"><img src="https://img.shields.io/static/v1?label=&message=PROJETO&color=1F2729&style=for-the-badge&logo=Next.js"/></a>&nbsp;
  <a href="#nail_care-layout"><img src="https://img.shields.io/static/v1?label=&message=LAYOULT&color=1F2729&style=for-the-badge&logo=CSS3"/></a>&nbsp;
  <a href="#technologist-tecnologias"><img src="https://img.shields.io/static/v1?label=&message=TECNOLOGIAS&color=1F2729&style=for-the-badge&logo=Jamstack"/></a>
  <a href="#octocat-ambiente"><img src="https://img.shields.io/static/v1?label=&message=AMBIENTE&color=1F2729&style=for-the-badge&logo=visual-studio-code"/></a>&nbsp;
  <a href="#bookmark_tabs-licença"><img src="https://img.shields.io/static/v1?label=&message=LICENSE&color=1F2729&style=for-the-badge&logo=LibreOffice"/></a>&nbsp;
</p>

<p align="center">
 <img alt="tela demonstrando aplicação" src="./public/extras/mockup.png" width="65%">
</p>

<br>
<hr>

## :desktop_computer: Projeto

<strong>Ignews</strong> é um serviço de assinatura que disponibiliza aos usuários determinado conteúdo. 

Esta aplicação foi criada com o intuito de aprofundar conhecimentos em front-end no curso Ignite da [@Rocketseat](https://app.rocketseat.com.br/).


Desenvolvendo essa aplicação foi possível aprofundar conhecimentos em: 
<br>

- React-Components,
- React-Props,
- React-Hooks,
- SEO (Search Engine Optimization),
- SPA (Single-page Application), 
- SSR (Server-side Rendering), 
- SSG (Static site Generation), 
- OAuth,
- Integrações com API,
- API routes,
- Webwooks,
- css-modules & SASS,
- Axios.

<hr>

[FaunaDB](https://fauna.com/) foi escolhido como banco de dados pois atende bem aplicações serverless.
<br>

O cliente que contrata o serviço, realiza um pagamento mensal via [Stripe](https://stripe.com/br) e pode desfrutar dos benefícios pelo tempo que desejar a continuidade da assinatura.
<br>

Através do [Prismic](https://prismic.io/) CMS, é possível gerenciar conteúdo de forma simples e intuitiva.
<hr>

>Você pode conferir algumas anotações no arquivo [notes](./notes.md). <br>

> `Alerta:` Por conta de alguns recursos na estilização não é recomendado utilizar IE 6-8 como browser ao utilizar essa aplicação.

<hr>
<br>

## :nail_care: Layout
<p align="center">
<img src="./public/extras/ignews1.gif" width="65%" height="65%" />
<img src="./public/extras/ignews2.gif" width="65%" height="65%" />
</p>

<h4 align="center">Você pode verificar o layoult desenvolvido por <a href="https://www.instagram.com/tiagoluchtenberg/?hl=pt-br">@TiagoLuchtenberg</a> acessando o <a href="https://www.figma.com/file/gl0fHkQgvaUfXNjuwGtDDs/ig.news?node-id=1%3A2">FIGMA</a>.</h4>

<br>
<br>
<hr>

## :technologist: Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Axios](https://github.com/axios/axios)
- [NextAuth.js](https://next-auth.js.org/getting-started/example)
- [FaunaDB](https://fauna.com/)
- [Stripe](https://stripe.com/br)
- [Prismic](https://prismic.io/)
- [NextAuth.js](https://next-auth.js.org/getting-started/example)


<br>
<hr>

## :octocat: Ambiente

1. Para o correto funcionamento desta web aplicação tenha em mente que será necessário as seguintes instalações:

- [Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

2. Será necessário criar uma conta para cada serviço externo:

- [FaunaDB](https://fauna.com/)
- [Stripe](https://stripe.com/br)
- [Prismic](https://prismic.io/)

3. É de extrema importância configurar os serviços externos seguindo o arquivo [notes](./notes.md).

```bash
As orientações estão nos últimos tópicos.
```

4. Clonar o repositório:

```bash
git@github.com:CaioLemec/ignews.git
```

5. Instale as dependências usando o comando:

```bash
 yarn
```

6. Na raiz do projeto crie uma copia do arquivo [.env.local.exemplo](./.env.local.exemplo). então altere o nome para `.env.local` 

```bash
 Siga as instruções para preencher as variaveis de ambiente necessárias. 
```

7. No seu terminal use um dos comandos para rodar a aplicação:

```bash
yarn dev  
yarn build   
```

8. Acesse o endereço em um browser compatível:

```bash
http://localhost:3000/
```

9. Você pode checar os eventos do webhook utilizando o comando:

```bash
stripe listen --forward-to localhost:3000/api/webhooks    
```

<br>
<hr>

## :bookmark_tabs: Licença

<br>

Projeto licenciado por MIT [LICENSE](./LICENSE).

<br>
<hr>
<br>

Fico à disposição para qualquer esclarecimento.

<img style="border-radius: 30%;" src="https://avatars3.githubusercontent.com/u/59886891?s=460&v=4" width="75px;"/>
<h3>Caio Lemec<h3>
<a href="https://t.me/caiolemec"><img src="https://img.shields.io/badge/Telegram-1F2729?style=for-the-badge&logo=telegram&logoColor=white"/>
<a href="mailto:caiolemec@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=E-mail&color=1F2729&style=for-the-badge&logo=Gmail"/>
<a href="https://www.linkedin.com/in/caiolemec/"><img src="https://img.shields.io/static/v1?label=&message=LinkedIn&color=1F2729&style=for-the-badge&logo=linkedin"/>
<br>
</p>
