const productController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/allProducts', productController.findAllProducts)
    app.get('/api/findOneProduct/:id', productController.findOneProduct)
    app.post('/api/createProduct', productController.createProduct)
    app.put('/api/updateProduct/:id', productController.updateProduct)
    app.delete('/api/deleteProduct/:id', productController.deleteProduct)
}