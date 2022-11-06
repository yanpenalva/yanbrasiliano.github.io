const projects = [
  {
    id: 1,
    title: "Mini Framework PHP",
    category: "API Application",
    description: "A php-based mini framework with the main uses in the market.",
		href:'https://github.com/yanbrasiliano/mini-framework-php',
    img: new URL("@/assets/images/mini-framework.jpg", import.meta.url),
  },
  {
    id: 2,
    title: "Make Your Burguer Vue",
    category: "Web Application",
    description: "A project to manage a hamburger restaurant with Vue 3 + TailwindCSS + JSON Server.",
		href:'https://github.com/yanbrasiliano/make-burger-vue',
    img: new URL("@/assets/images/make-burger-vue.png", import.meta.url),
  },
  {
    id: 3,
    title: "Climate Weather",
    category: "Web Application",
    description: "A Javascript, HTML and CSS project to consult the weather.",
		href:'https://github.com/yanbrasiliano/weather-js-api',
    img: new URL("@/assets/images/climate-weather.png", import.meta.url),
  },
  {
    id: 4,
    title: "To Do List",
    category: "Web Application",
    description: "A fully featured To Do List in Javascript, HTML and CSS.",
		href:'https://github.com/yanbrasiliano/to-do-list-js',
    img: new URL("@/assets/images/to-do-list.png",import.meta.url),
  },
  {
    id: 5,
    title: "API Laravel IBGE",
    category: "API Application",
    description: "A Rest API querying IBGE with CRUD and unit tests.",
		href:'https://github.com/yanbrasiliano/api-laravel-ibge',
    img: new URL("@/assets/images/api-rest-full-laravel.png",import.meta.url),
  },
];

export default projects;
