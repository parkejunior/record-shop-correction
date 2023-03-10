// import data from '/data/records.json'

import {renderProducts} from "./render.js";


const products =[]

class Product {
  id;
  band;
  recordTitle;
  price;
  discont;
  category;
  image;
}

const record1 = new Product
record1.id = 1
record1.band = 'Smiths'
record1.recordTitle ='Meat is murder'
record1.price = 14
record1.discont= 2
record1.category = 'Rock'
record1.image = 'https://media.pitchfork.com/photos/5929bdb5abf31b7dc7155fe6/1:1/w_600/15f5fe1c.jpg'

const record2 = new Product
record2.id = 2
record2.band = 'Nina Simone'
record2.recordTitle ='The amazing Nina Simone'
record2.price = 10
record2.discont= 1
record2.category = 'Jazz'
record2.image = 'https://cdn.hmv.com/r/w-1280/p-webp/hmv/files/3c/3c8d2809-16df-4d93-92df-c1c6524660ab.jpg'

products.push(record1)
products.push(record2)
console.log(products)



renderProducts(products)