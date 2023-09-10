import { useState } from "react";
import styles from "./Search.module.css";

function Search() {
  const [search, setSearch] = useState(false);

  return (
    <div className={styles.search}>
      {search && <input type="text" name="" id="" placeholder="SEARCH" />}
      <p onClick={() => setSearch(!search)}>
        {search ? <span>&#8594;</span> : "SEARCH"}
      </p>
    </div>
  );
}

export default Search;
