import React from "react";
import { useStyles } from "../../hooks/useStyles";
import styles from './pagination.module.scss'
import ReactPaginate from "react-paginate";

type IProps = {
  handlePageChange: (value: number) => void
}

type PropsPaginationValues = {
  selected?: number
}

export const Pagination: React.FC<IProps> = ({handlePageChange}) => {
  const cx = useStyles(styles)

  const onPageChange = (value: PropsPaginationValues) => {
    const currentPage = value.selected as number;
    handlePageChange(currentPage + 1)
  }

  return (
    <ReactPaginate
      previousLabel="Назад"
      nextLabel="Вперед"
      pageClassName={cx("page-item")}
      pageLinkClassName={cx("page-link")}
      previousClassName={cx("page-item")}
      previousLinkClassName={cx("page-link")}
      nextClassName={cx("page-item")}
      nextLinkClassName={cx("page-link")}
      breakLabel="..."
      breakClassName={cx("page-item")}
      breakLinkClassName={cx("page-link")}
      pageCount={10}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={cx("pagination")}
      activeClassName={cx("active")}
      // forcePage={pageOffset}
    />
  );
};
