import "./Cart.css";

function Cart() {
  return (
    <div className="cart">
      <h1>Your Online Store Cart</h1>
      <div className="pic1">
        <h5>(1) Wireless Gaming Mouse</h5>
        &nbsp;
        <br />
        <img className="cartImage" src="/mouse.jpeg" alt="Picture 1" />
      </div>
    </div>
  );
}

export default Cart;
