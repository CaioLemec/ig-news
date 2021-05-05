<h1 align="center">
    <img alt="logo" title="Ignews" src="./public/images/logo.svg" width="50%" />
</h1>

<p align="center">
  <a href="#desktop_computer-projeto"><img src="https://img.shields.io/static/v1?label=&message=PROJETO&color=8257E5&style=for-the-badge&logo=Next.js"/></a>&nbsp;
  <a href="#nail_care-layout"><img src="https://img.shields.io/static/v1?label=&message=LAYOULT&color=8257E5&style=for-the-badge&logo=CSS3"/></a>&nbsp;
  <a href="#technologist-tecnologias"><img src="https://img.shields.io/static/v1?label=&message=TECNOLOGIAS&color=8257E5&style=for-the-badge&logo=Jamstack"/></a>
  <a href="#octocat-ambiente"><img src="https://img.shields.io/static/v1?label=&message=AMBIENTE&color=8257E5&style=for-the-badge&logo=visual-studio-code"/></a>&nbsp;
  <a href="#bookmark_tabs-license"><img src="https://img.shields.io/static/v1?label=&message=LICENSE&color=8257E5&style=for-the-badge&logo=LibreOffice"/></a>&nbsp;
</p>

<br>

<p align="center">
 <img alt="tela demonstrando aplicação" src="./public/extras/mockup.png" width="65%">
</p>

<br>
<hr>

## :desktop_computer: Projeto

<strong>Ignews</strong> é um serviço de assinatura que disponibiliza aos usuários determinado conteúdo. 

Um app JAMStack que utiliza [FaunaDB](https://fauna.com/), [Stripe](https://stripe.com/br) e [Prismic](https://prismic.io/) para seu funcionamento.

> JAMStack = Arquitetura de desenvolvimento web moderna baseada em JavaScript do lado do cliente, APIs reutilizáveis e marcação pré-construída. Você pode checar mais informações acessando: [JAMStack](https://jamstack.org/).

Um sistema de autenticação via Github é necessário e para isso foi utilizado [NextAuth.js](https://next-auth.js.org/getting-started/example).

[FaunaDB](https://fauna.com/) foi escolhido como banco de dados pois atende bem aplicações serveless.

O cliente que contrata o serviço, realiza um pagamento mensal via [Stripe](https://stripe.com/br) e pode desfrutar dos benefícios pelo tempo que desejar a continuidade da assinatura.

Através do CMS [Prismic](https://prismic.io/), é possível gerenciar conteúdo de forma simples e intuitiva.

Esta aplicação foi criada com o intuito de aprofundar conhecimentos em front-end no curso Ignite da [@Rocketseat](https://app.rocketseat.com.br/).

>`Alerta:` Por conta de alguns recursos na estilização não é recomendado utilizar IE 6-8 como browser.

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

>Você pode conferir algumas anotações no arquivo [notes](./notes.md).

<hr>
<br>

## :nail_care: Layout
<p align="center">
<img src="./public/extras/exemple1.gif" width="65%" height="65%" />
<img src="./public/extras/exemple2.gif" width="65%" height="65%" />
</p>


Você pode verificar essa web aplicação funcionando acessando [Deploy](VERCELLLLLL). <br>
Você pode verificar o layoult desenvolvido por [@TiagoLuchtenberg](https://www.instagram.com/tiagoluchtenberg/?hl=pt-br) acessando o [FIGMA](https://www.figma.com/file/gl0fHkQgvaUfXNjuwGtDDs/ig.news?node-id=1%3A2).


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

8. acesse o endereço em um browser compatível:

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

Projeto licenciado por MIT [LICENSE](./LICENSE.md).

<br>
<hr>
<br>

Fico à disposição para qualquer esclarecimento.

<img style="border-radius: 30%;" src="https://avatars3.githubusercontent.com/u/59886891?s=460&v=4" width="75px;"/>
<h3>Caio Lemec<h3>
<a href="caiolemec@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=E-mail&color=8257E5&style=for-the-badge&logo=Gmail"/>
<a href="https://br.linkedin.com/in/caio-lemec/"><img src="https://img.shields.io/static/v1?label=&message=LinkedIn&color=8257E5&style=for-the-badge&logo=linkedin"/>
<br>
</p>