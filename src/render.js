let productListElement = document.getElementById('records')

function parseProductsToHtml(productLists){
  const productsHtml = productLists.map(function (product){
    return `
    <div>
          <div class="product-header">
            <img class="record-image" src="${product.image}" alt="Record cover from " width="280px" height="280px">
          </div>

          <div class="product-description">
            <h2>${product.band}</h2>
            <h3>${product.recordTitle}</h3>

              <div class="fancy-font">$ ${product.price}
                  <span>
                    <small class="product-discount">R$ ${product.discont}</small>
                  </span>
              </div>
          </div>
    </div>      
    `
  });

  return productsHtml
}

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