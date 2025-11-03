import DataContextProvider from "../../context/DataContextProvider";
import BottomContainer from "../BottomContainer/BottomContainer";
import CoordNet from "../CoordNet/CoordNet";
import TopContainer from "../TopContainer/TopContainer";
import styles from "./Container.module.scss";

export default function Container() {
  return (
    <DataContextProvider>
      <div className={styles.root}>
        <CoordNet />
        <TopContainer />
        <BottomContainer />
      </div>
    </DataContextProvider>
  );
}
