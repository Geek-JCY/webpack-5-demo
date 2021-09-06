// import _ from 'lodash';
import './style.css'
import Favicon from './favicon.png'
import Data from './data.json'
import csvData from './data.csv'
import xmlData from './data.xml'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json from './assets/data.json5'

console.log('toml.title ----> ', toml.title) // output `TOML Example`
console.log('toml.owner.name ----> ', toml.owner.name) // output `Tom Preston-Werner`

console.log('yaml.title ----> ', yaml.title) // output `YAML Example`
console.log('yaml.owner.name ----> ', yaml.owner.name) // output `Tom Preston-Werner`

console.log('json.title ----> ', json.title) // output `JSON5 Example`
console.log('json.owner.name ----> ', json.owner.name) // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');
  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = 'Hello Webpack, 你好 Webpack'

  element.classList.add('hello')

  // Add the image to our existing div.
  const myFavicon = new Image()
  myFavicon.src = Favicon
  element.appendChild(myFavicon)

  console.log('Favicon ----> ', Favicon)
  console.log('Data -----> ', Data)
  console.log('csvData -----> ', csvData)
  console.log('xmlData -----> ', xmlData)

  return element;
}

document.body.appendChild(component());