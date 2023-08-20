import React from "react";
import { useStyles } from "../../hooks/useStyles";
import styles from './header.module.scss'

export const Header: React.FC = () => {
  const cx = useStyles(styles)

  return (
    <div className={cx('container')}>Сокращатель</div>
  )
}