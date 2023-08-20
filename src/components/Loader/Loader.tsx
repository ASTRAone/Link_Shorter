import React from "react";
import { useStyles } from "../../hooks/useStyles";
import styles from "./loader.module.scss";

export const Loader: React.FC = () => {
  const cx = useStyles(styles);
  return (
    <div className={cx('container')}>
      <span className={cx("loader")}></span>
    </div>
  );
};
