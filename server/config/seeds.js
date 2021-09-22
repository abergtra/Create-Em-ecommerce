const db = require('./connection');
const { User, Product } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Classic' },
        { name: 'Vegetarian'},
        { name: 'Kosher'},
        { name: 'Custom'}
    ]);

    console.log('board categories seeded!');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Small Classic Board',
            image: 'classic-small.jpg',
            price: 30.00,
            category: categories[0]._id,
            description: 'Classic board with meat, cheese, and various fruit.'
        },
        {
            name: '',
            image: '',
            price: 0,
            category: categories[0]._id,
            description: ''
        }
    ]);

    console.log('board products seeded!');

    // insert USERS here
});