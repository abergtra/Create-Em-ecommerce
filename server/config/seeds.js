const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Classic' },
    { name: 'Kosher' },
    { name: 'Vegetarian'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Classic Large Board',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'classic-large3.jpg',
      category: categories[0]._id,
      price: 15.99,
      
    },
    {
      name: 'Kosher Large Board',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'kosher-large1.jpg',
      category: categories[1]._id,
      price: 16.99,
      
    },
    {
      name: 'Vegetarian Large Board',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'vegetarian-large.jpg',
      category: categories[2]._id,
      price: 13.99,
    
    },
    {
      name: 'Small Classic Board',
      description:
       'Classic board with meat, cheese, and various fruit.',
      image: 'classic-small.jpg',
      category: categories[0]._id,
      price: 15.00,
    
    },
    {
      name: 'Kosher Large Board 2',
      description:
       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      image: 'kosher-large2.jpg',
      category: categories[1]._id,
      price: 15.00,
    
    },
    {
      name: 'Classic Large Board 2',
      description:
       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      image: 'classic-large2.jpg',
      category: categories[0]._id,
      price: 15.00,
    
    },
    {
      name: 'Kosher Small Board',
      description:
       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      image: 'kosher-small.jpg',
      category: categories[1]._id,
      price: 15.00,
    
    },
    {
      name: 'Classic Large Board 3',
      description:
       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      image: 'classic-large3.jpg',
      category: categories[0]._id,
      price: 15.00,
    
    },
    {
      name: 'Vegetarian Box',
      description:
       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      image: 'vegetarian-box.jpg',
      category: categories[2]._id,
      price: 15.00,
    
    },
    {
      name: 'Kosher Box',
      description:
       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      image: 'kosher-box.jpg',
      category: categories[1]._id,
      price: 15.00,
    
    },
    {
      name: 'Classic Box 1',
      description:
       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      image: 'classic-box1.jpg',
      category: categories[0]._id,
      price: 15.00,
    
    },
    {
      name: 'Classic Box 2',
      description:
       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      image: 'classic-box2.jpg',
      category: categories[0]._id,
      price: 15.00,
    
    },
    {
      name: 'Classic Cup 1',
      description:
       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      image: 'classic-cup1.jpg',
      category: categories[0]._id,
      price: 15.00,
    
    },
    {
      name: 'Classic Cup 2',
      description:
       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      image: 'classic-cup2.jpg',
      category: categories[0]._id,
      price: 15.00,
    
    },

   
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    username: "vegetarian-man",
    email: 'eatveggies99@gmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    username: 'classic-man',
    email: 'eatanything@gmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
