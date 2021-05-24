# Conceitos iniciais e configurações Babel e Webpack

Código da aula 01 - Configurações de Babel/Webpack

## Pré-requisitos: 
- [Node.js](https://nodejs.org/en/)
- [Yarn (**OPCIONAL**)](https://classic.yarnpkg.com/en/docs/install/)

## Dependencias

### Principais
- [React](https://pt-br.reactjs.org): Biblioteca para construção de interfaces.
- [react-dom](https://pt-br.reactjs.org/docs/react-dom.html): Integração do React com a DOM (Arvore de elementos).
- [Babel](https://babeljs.io/): Conversor (Transpilador) de código Javascript moderno para versões compatíveis com navegadores e ambientes mais antigos.
- [Webpack](https://webpack.js.org/): Responsável por criar o bundle e "ensinar" ao Javascript como importar CSS, Imagens e outros arquivos (usando loaders).
- [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/): Responsável pelo Live Reload em ambiente de desenvolvimento.

### Loaders
Faz o pre-processamento dos arquivos e permite gerenciar arquivos que não são Javascript.
- [babel-loader](https://github.com/babel/babel-loader): Permite converter arquivos Javascript usando Babel.
- [style-loader](https://webpack.js.org/loaders/style-loader): Injeta o código CSS na DOM.
- [css-loader](https://github.com/webpack-contrib/css-loader): Responsável por ler o arquivo css e interpretar as importações.
- [file-loader](https://v4.webpack.js.org/loaders/file-loader/): Responsável por interpretar arquivos (por exemplo: imagens).

### Presets
Conjunto de configurações criadas por terceiros que podemos reaproveitar nos nossos apps.
- [preset-env](https://babeljs.io/docs/en/babel-preset-env): Responsável por converter o código do javascript mais moderno para um código mais antigo baseado no ambiente da aplicação.
- [preset-react](https://babeljs.io/docs/en/babel-preset-react): Responsável por adicionar as funcionalidades do React na conversão.

## Comandos para criar a aplicação
```bash
# Inicie um projeto NodeJS
$ npm init -y
# ou
$ yarn init -y

# Instale as dependencias principais
$ npm install --save react react-dom
# ou 
$ yarn add react react-dom

# Instale as dependencias do Babel
$ npm install --save @babel/core @babel/cli @babel/preset-env @babel/preset-react
# ou 
$ yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-react

# Instale as dependencias do Webpack
$ npm install --save webpack webpack-cli webpack-dev-server
# ou 
$ yarn add webpack webpack-cli webpack-dev-server

# Instale os loaders do webpack
$ npm install --save babel-loader style-loader css-loader file-loader
# ou 
$ yarn add babel-loader style-loader css-loader file-loader

# Execute a aplicação para ambiente de desenvolvimento
$ npm run webpack serve --mode development
# ou 
$ yarn webpack serve --mode development

# Execute a aplicação para produção
$ npm run webpack --mode production
# ou 
$ yarn webpack --mode production
```

## Configuração do Babel (babel.config.js)
```js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
}
```

## Configuração do Webpack (webpack.config.js)
```js
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      { 
        test: /.*\.(gif|png|jpe?g|svg$)/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
```
