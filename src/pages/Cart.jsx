import "./Cart.css";

function Cart() {
  return (
    <div className="cart">
      <h1>Your Online Store Cart</h1>
      <div className="pic1">
        <h5>This is picture 1</h5>
        <img className="cartImage" src="/mouse.jpeg" alt="Picture 1" />
      </div>
    </div>
  );
}

export default Cart;
