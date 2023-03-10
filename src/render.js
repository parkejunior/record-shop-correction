import { parseProductsToHtml } from "./parse.js"


let productListElement = document.getElementById('records')

//This function render the content of function parseProductsToHtml into DOM
function renderProducts(productsList){
  let html = ""
  let productItems = parseProductsToHtml(productsList)

  productItems.forEach(function(productItem){
    html += productItem

  })

  productListElement.innerHTML = html
}



export {
    renderProducts
}