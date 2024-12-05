</div>

<h1 align="center">Calculator API</h1>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-testing">Testing method</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/ignaciocamargo99" target="_blank">Author</a>
</p>

<br>

## :dart: About

This is a calculator API made with Node.js and Express.js. It allows you to calculate an expression with the following operators: +, -, \*, / and return the result. It contains a POST [/api/calculate] method that receives the expression to be calculated.

## :sparkles: Features

:heavy_check_mark: Calculate an expression with the following operators: +, -, \*, / and return the result.

## :rocket: Technologies

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/ignaciocamargo99/calculatorAPI.git

# Install dependencies
$ npm install

# Run the project
$ npm start

# The server will initialize in the <http://localhost:3000>

```

## :hammer_and_wrench: Testing method

## 🌐 Endpoint

**URL:**  
`POST /calculate`

**Content-Type:**  
`application/json`

---

## 📥 Parámetros del Request

El método POST espera un JSON en el cuerpo de la solicitud con la siguiente estructura:

```json
{
  "expression": "2 + 3 * (4 - 1)"
}




## :memo: License

Made by [Ignacio Camargo](https://github.com/ignaciocamargo99)

&#xa0;

<a href="#top">Back to top</a>
```
