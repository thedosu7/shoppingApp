import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rate';
import axios from 'axios';
import { useContext } from 'react';
import { CartStore } from './CartStore';
const linkStyle = {
  textDecoration: 'none',
  color: 'primary',
};
function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(CartStore);
  const {
    cart: { cartItems },
  } = state;

  const addToCart = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`} style={linkStyle}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button className='btn-stock' variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCart(product)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;
