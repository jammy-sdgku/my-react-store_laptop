import { useState } from "react";
import "./Admin.css";

function Admin() {
  const [couponsList, setCouponsList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
  });

  function saveCoupon() {
    console.log(coupon);
    let copy = [...couponsList];
    copy.push(coupon);
    setCouponsList(copy);
  }

  function handleEvent(e) {
    const value = e.target.value;
    const name = e.target.name;

    let copy = { ...coupon };
    if (name == "discount") {
      copy[name] = Number(value);
    } else {
      copy[name] = value;
    }
    setCoupon(copy);
  }

  function saveProduct() {
    console.log(product);
    let copy = [...productsList];
    copy.push(product);
    setProductsList(copy);
  }

  function handleProductEvent(e) {
    const value = e.target.value;
    const name = e.target.name;

    let copy = { ...product };
    if (name == "price") {
      copy[name] = Number(value);
    } else {
      copy[name] = value;
    }
    setProduct(copy);
  }

  return (
    <div className="container">
      <div className="admin-page">
        <h1>Admin Dashboard</h1>
        <p>
          Welcome to the admin panel. <br></br>Here you can manage users,
          settings, and more.
        </p>
      </div>
      <div className="parent">
        {/*products*/}
        <section>
          <div className="products">
            <div className="form-field">
              <h3>Products</h3>
              <label className="form-label">Title: </label>
              <input
                className="form-control"
                type="text"
                name="title"
                onBlur={handleProductEvent}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Price: </label>
              <input
                className="form-control"
                type="number"
                name="price"
                onBlur={handleProductEvent}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Image: </label>
              <input
                className="form-control"
                type="image"
                name="image"
                onBlur={handleProductEvent}
              />
            </div>
            <button className="btn btn-sm btn-primary" onClick={saveProduct}>
              Save Products
            </button>
          </div>
          <div>
            <h4>Your saved products</h4>
            <div className="productList">
              {productsList.map((prod) => (
                <ul>
                  <li key={prod.title}>
                    {prod.title} - ${prod.price}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </section>
        {/*discounts*/}
        <section>
          <div className="discounts">
            <div className="form-field">
              <h3>Discount Codes</h3>
              <label className="form-label">Code: </label>
              <input
                className="form-control"
                type="text"
                name="code"
                onBlur={handleEvent}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Discount: </label>
              <input
                className="form-control"
                type="number"
                name="discount"
                onBlur={handleEvent}
              />
            </div>
            <button className="btn btn-sm btn-primary" onClick={saveCoupon}>
              Save Coupons
            </button>
          </div>
          <div>
            <h4>Your saved discounts</h4>
            <div className="couponList">
              {couponsList.map((cp) => (
                <ul>
                  <li key={cp.code}>
                    {cp.code} - ${cp.discount}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Admin;
