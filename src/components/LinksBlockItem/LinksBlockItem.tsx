import React from "react";
import styles from "./linksBlockItem.module.scss";
import { useStyles } from "../../hooks/useStyles";
import { ShortUrl } from "../../models/ShortUrl";

type IProps = {
  data: ShortUrl;
  counter: number;
}

export const LinksBlockItem: React.FC<IProps> = ({data, counter}) => {
  if (!data) return null 
  const cx = useStyles(styles);
  const {url, short_url, clicks = 0} = data

  return (
    <div className={cx("container")}>
      <div className={cx('contentLeft')}>
        <p className={cx('counter')}>{counter}</p>
        <a href={short_url} className={cx('link')}>{short_url}</a>
      </div>
      <div className={cx('contentRight')}>
        <a href="#" className={cx('link')}>{url}</a>
        {clicks > 0 && <p className={cx('visited')}>{clicks}</p>}
      </div>
    </div>
  );
};
