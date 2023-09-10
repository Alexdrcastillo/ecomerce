import Product from "../models/product.js"

export const getProducts = async (req, res) => {

        const products = await Product.find();
        res.json(products)

}

export const createProduct = async (req, res) => {
    try {
        const { title, description, image, price } = req.body;
      const product = new Product({ title, description, image, price })
        await product.save()
            return res.json(product)      
    } catch (error) {
        console.log(error)
    }
};

export const productById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product)
};