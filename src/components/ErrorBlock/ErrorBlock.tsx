import React from "react";
import { useStyles } from "../../hooks/useStyles";
import styles from "./errorBlock.module.scss";

export const ErrorBlock: React.FC = () => {
  const cx = useStyles(styles);
  return <div className={cx("container")}>Ошибка отображения данных</div>;
};
