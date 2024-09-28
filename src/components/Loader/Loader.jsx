import { Circles } from "react-loader-spinner";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <Circles />
    </div>
  );
}

export default Loader;
