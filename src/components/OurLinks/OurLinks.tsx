import React, { useEffect } from "react";
import { useStyles } from "../../hooks/useStyles";
import styles from "./ourLinks.module.scss";
import { LinksBlockItem } from "../LinksBlockItem";
import { GET_SHORT_URLS } from "../../apollo/getShortUrls";
import { useQuery } from "@apollo/client";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  changeCurrentPage,
  getOurLinksData,
  saveGlobalLinks,
} from "../../store/ourLinksData/data";
import { Pagination } from "../Pagination";
import { ShortUrlResponse } from "../../models/ShortUrl/models";
import { Loader } from "../Loader";
import { ErrorBlock } from "../ErrorBlock";

export const OurLinks: React.FC = () => {
  const cx = useStyles(styles);
  const dispatch = useAppDispatch();
  const { globalLinksData, currentPage } = useAppSelector(getOurLinksData);

  const { data, loading, error } = useQuery<ShortUrlResponse>(GET_SHORT_URLS, {
    variables: { page: currentPage },
  });

  useEffect(() => {
    if (data) {
      dispatch(saveGlobalLinks(data?.short_urls.data));
    }
  }, [data, currentPage]);

  const handlePageChange = (value: number) => {
    dispatch(changeCurrentPage(value));
  };

  if (error) {
    return (
      <div className={cx("container")}>
        <ErrorBlock />
      </div>
    );
  }

  return (
    <div className={cx("container")}>
      <p className={cx("text")}>Список ссылок</p>
      <div className={cx("content")}>
        {loading ? (
          <div className={cx("contentLoader")}>
            <Loader />
          </div>
        ) : (
          globalLinksData.map((item, index) => (
            <LinksBlockItem data={item} key={item.id} counter={index + 1} />
          ))
        )}
      </div>
      <div className={cx("container-pagination")}>
        <Pagination handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};
