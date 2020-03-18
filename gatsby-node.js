exports.createPages = ({ actions: { createPage } }) => {
  const products = require("./products.json")
  products.forEach(producted => {
    createPage({
      path: `/product/${producted.slug}/`,
      component: require.resolve("./src/templates/product.js"),
      context: {
        title: producted.title,
        description: producted.description,
        image: producted.image,
        price: producted.price,
      },
    })
  })
}
