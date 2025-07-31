import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/api/products`)
      .then(res => {
        const found = res.data.find(p => p.id === parseInt(id));
        setProduct(found || {});
      });
  }, [id]);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>Department: {product.department}</p>
    </div>
  );
}

export default ProductDetail;