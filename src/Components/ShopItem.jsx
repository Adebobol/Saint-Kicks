/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "./ShopItem.module.css";

function ShopItem({ item }) {
  return (
    <Link to={`${item.id}?pr=${item.price}&qr=${item.quantity}`}>
      <div className={styles.each} onClick={() => console.log(item)}>
        <div className={styles.pic}>
          <img src={item.image} alt="" />
        </div>
        <div className={styles.description}>
          <p>{`$${item.price}`}</p>
          <p>{item.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default ShopItem;
