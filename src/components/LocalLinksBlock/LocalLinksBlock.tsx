import React from "react";
import { useStyles } from "../../hooks/useStyles";
import styles from "./localLinksBlock.module.scss";
import { LinksBlockItem } from "../LinksBlockItem/LinksBlockItem";
import { useAppSelector } from "../../store/hooks";
import { getLocalLinksData } from "../../store/localLinksData/data";

export const LocalLinksBlock: React.FC = () => {
  const cx = useStyles(styles);
  const { localLinksData } = useAppSelector(getLocalLinksData);

  if (!localLinksData.length) return null;

  return (
    <div className={cx("container")}>
      <p className={cx("text")}>Мои ссылки</p>
      {localLinksData.map((item, index) => (
        <LinksBlockItem
          data={item}
          counter={index + 1}
          key={`${item.id}${index}`}
        />
      ))}
    </div>
  );
};
