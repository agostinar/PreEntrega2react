import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './NavBar.css'; 
import CartWidget from './CartWidget'; 

const Brand = () => {
  return <Link to="/" className="navbar-brand">ElectroStore</Link>;
};

const CategoryList = () => {
  const categories = [
    { id: 'electronics', name: 'Electrodomésticos' },
    { id: 'technology', name: 'Tecnología' },
    { id: 'home', name: 'Hogar' },
    { id: 'office', name: 'Oficina' },
  ];

  return (
    <ul className="navbar-nav mr-auto">
      {categories.map((category) => (
        <li className="nav-item" key={category.id}>
          <Link to={`/category/${category.id}`} className="nav-link">
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Brand />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <CategoryList />
          <CartWidget itemCount={5} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
