// import data from '/data/records.json'

import { renderProducts } from "./render.js";
import { product1, product2 } from "./data.js"

const products = []

products.push(product1)
products.push(product2)

renderProducts(products)