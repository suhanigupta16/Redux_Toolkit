import React, { Fragment } from "react";
import styles from "../cart/cart.module.scss";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import empty from "../../assets/empty.gif";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/cartSlice";
import { incrementQuantity, decrementQuantity } from "../../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/web/Products");
  };
  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };
  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };
  const removeFromCart = (itemId) => {
    dispatch(remove(itemId));
  };

  const totalValue = cartProduct
    .map((val) => val.price * val.quantity)
    .reduce((t, v) => t + v, 0);

  return (
    <>
      {cartProduct?.length ? (
        <div className={styles.cartContainer}>
          <h2>Cart Items</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>SubTotal</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {cartProduct?.map((item) => (
                <Fragment key={item.id}>
                  {console.log(item, "jjj")}
                  <tr>
                    <td>
                      <img src={item.images[0]} width={80} alt="click" />
                      <span>{item.title}</span>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        className={styles.btn}
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                      <span className={styles.qty}>{item.quantity}</span>
                      <button
                        className={styles.btn}
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <span>${item.price * item.quantity}</span>
                    </td>
                    <td>
                      <RiDeleteBin6Line
                        className={styles.bin}
                        onClick={() => removeFromCart(item.id)}
                      />
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className={styles.total}>Total:</td>
                <td className={styles.totalCheck}>${totalValue}</td>
              </tr>
            </tfoot>
          </table>
          <button className={styles.back} onClick={handleBack}>
            Back to Shopping
          </button>

          <button className={styles.check}>Check Out</button>
        </div>
      ) : (
        <div className={styles.empty}>
          <h2>Empty Cart</h2>
          <img src={empty} alt="empty" />
        </div>
      )}
    </>
  );
};

export default Cart;
