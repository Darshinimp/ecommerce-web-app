import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <Link to={`/product/${p.id}`}>{p.name} - ₹{p.price}</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
const [departments, setDepartments] = useState([]);
const [selectedDept, setSelectedDept] = useState('');

useEffect(() => {
  axios.get('http://localhost:3001/api/departments')
    .then(res => setDepartments(res.data));
}, []);

const filtered = selectedDept
  ? products.filter(p => p.department_id === parseInt(selectedDept))
  : products;

return (
  <>
    <select onChange={e => setSelectedDept(e.target.value)}>
      <option value="">All Departments</option>
      {departments.map(d => (
        <option key={d.id} value={d.id}>{d.name}</option>
      ))}
    </select>
    {filtered.map(p => (
      <div key={p.id}>{p.name}</div>
    ))}
  </>
);