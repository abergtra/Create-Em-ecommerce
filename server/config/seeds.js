const db = require('./connection');
const {User, Product, Category } = require('../models');

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
      
    },{
        name: 'Vegetarian Large Board',
        description:
          'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
        image: 'vegetarian-large.jpg',
        category: categories[2]._id,
        price: 13.99,
        
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
