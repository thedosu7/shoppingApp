import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Duc',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Pham',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'ManUtd Third Shirt 2022-23',
      slug: 'mu-nike-shirt',
      category: 'Shirts',
      image: '/images/p1.webp',
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'PSG Home Shirt 2022-23',
      slug: 'psg-adidas-shirt',
      category: 'Shirts',
      image: '/images/p2.webp',
      price: 150,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Chelsea Third Shirt 2022-23',
      slug: 'chelsea-nike-shirt',
      category: 'Shirts',
      image: '/images/p3.webp',
      price: 125,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Barce Home Shirt 2022-23',
      slug: 'barce-adidas-shirt',
      category: 'Shirts',
      image: '/images/p4.webp',
      price: 150,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
