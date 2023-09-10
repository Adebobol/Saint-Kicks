import { useContext } from "react";
import { Outlet } from "react-router-dom";
import ShopItem from "../Components/ShopItem";
import { StoreContext } from "../Contexts/StoreContext";

import styles from "./Shop.module.css";

function Shop() {
  const { items } = useContext(StoreContext);
  return (
    <div className={styles.shop}>
      Shop
      <div className={styles.item}>
        {items.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Shop;
