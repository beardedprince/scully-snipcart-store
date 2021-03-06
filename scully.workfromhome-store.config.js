exports.config = {
  projectRoot: "./src",
  projectName: "workfromhome-store",
  outDir: './dist/static',
  routes: {
    '/products/:productId': {
        type: 'json',
        productId: {
            url: 'https://scully-snipcart-api.netlify.app/products.json',
            property: 'id'
        }
    }
  }
};