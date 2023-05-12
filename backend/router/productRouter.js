const express = require('express');
const Product = require('../modal/productSchema')
const asyncHandler = require('express-async-handler')
const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}))

router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;

  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    const product = await Product.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } else {
    res.status(400).json({ message: 'Invalid product ID' });
  }
}));


router.post('/', async(req, res) => {
  try {
    const { name, slug, image, brand, category, description, price, countInStock, rating, numReviews } = req.body;
    const product = new Product({
      name, slug, image, brand, category, description, price, countInStock, rating, numReviews
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
})

router.put('/:id', async(req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    // Check if product exists
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.title = req.body.title || product.title;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;

    await product.save();

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.remove();

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
})


module.exports = router;