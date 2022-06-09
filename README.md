<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=128px src="https://images2.imgbox.com/a8/bb/ISkyh3WP_o.png" alt="Medium Posts API"></a>
</p>

<h3 align="center">Medium Posts API</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]() [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE) [![CodeFactor](https://www.codefactor.io/repository/github/david-fernando/medium-posts-api/badge)](https://www.codefactor.io/repository/github/david-fernando/medium-posts-api)

</div>

---

<p align="center"> Unofficial Medium API that returns the JSON of your posts
    <br> 
</p>

## 📝 Table of Contents

- [How to use](#how_to_use)
- [How to contribute](#how_to_contribute)
- [Built Using](#built_using)
- [Authors](#authors)


## 🏁 <span id="how_to_use">How to use </span>

Make a get request to the url below with your Medium user

```bash
GET https://mediumpostapi.herokuapp.com/?usermedium={{yourmediumusername}}
```

Example

```bash
https://mediumpostapi.herokuapp.com/?usermedium=davidfernandodamata21
```
The request for the above url will bring the following results

```bash
[
  {	
  title: "Como fazer dark theme com JavaScript puro",
  date: "2021-03-07",
  link: "https://medium.com/david-fernando/como-dark-theme-com-javascript-puro-fc277377447c?source=rss-e1120fb0abef------2",
  image: "https://cdn-images-1.medium.com/max/1024/1*pUi3vkj06Vqp_sXeiI-UbQ.jpeg",
  description: "Um pequeno tutorial de como fazer dark theme com HTML, CSS e JavaScript puro.",
  tags: [
   "dark-mode",
   "js-tutorial",
   "javascript",
   "tutorial"
  ]
  },
  {	
  title: "Como reduzir a quantidade de IFs"
  date: "2020-09-25",
  link: "https://medium.com/david-fernando/como-reduzir-a-quantidade-de-ifs-4484fc728397?source=rss-e1120fb0abef------2",
  image: "https://cdn-images-1.medium.com/max/1024/1*6wlQhci1Pot4BWUPDpHbfw.jpeg",
  description: "Uma introdução ao design pattern Strategy com JavaScript",
  tags: [
   "strategy-design-pattern",
   "ecmascript",
   "javascript",
   "design-patterns",
   "ecmascript-6"
  ]
  },
  {
  title: "Por que usar TypeScript?",
  date: "2020-09-24",
  link: "https://medium.com/david-fernando/por-que-usar-typescript-ca15607eed33?source=rss-e1120fb0abef------2",
  image: "https://cdn-images-1.medium.com/max/1024/1*ODf4X51nKEMElimXA706gQ.jpeg",
  description: "Veja quais são os benefícios de utiliza-lo em seus projetos",
  tags: [
   "ecmascript-2020",
   "typescript",
   "ecmascript-6",
   "javascript",
   "ecmascript"
  ]
  }
]
```

### <span id="how_to_contribute">How to contribute</span>

 Fork this repository, make clone for your machine.

 Install the dependencies with the command below:

 ```bash
 yarn install
 ```

To run the development server.

```bash
yarn dev
```
To run the tests.

```bash
yarn test
```

## ⛏️ <span id="built_using">Built Using</span>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ <span id="authors">Author</span>

- [@david-fernando](https://github.com/david-fernando) - Idea & Initial work
