const Product = require('../models/product.model')

module.exports = {
    // Read All
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProducts) => {
                res.status(200).json(allProducts)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Read One (Finding by _id)
    findOneProduct: (req, res) => {
        console.log(req.params);
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => {
                res.status(200).json(oneProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Create
    createProduct: (req, res) => {
        console.log(req.body);
        Product.create(req.body)
            .then((newProduct) => {
                res.status(201).json(newProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Update (Finding by _id)
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedProduct) => {
                res.json(updatedProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // Delete (Finding by _id)
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}