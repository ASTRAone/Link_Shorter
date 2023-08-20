import React, { ChangeEvent, useState, useEffect } from "react";
import styles from "./formShorterLink.module.scss";
import { useStyles } from "../../hooks/useStyles";
import { useMutation } from "@apollo/client";
import { SEND_SHORTED_URL } from "../../apollo/sendShortedUrl";
import { useAppDispatch } from "../../store/hooks";
import { saveLocalLinks } from "../../store/localLinksData/data";
import { ShortUrlResult } from "../../models/ShortUrlResult";
import { isValidUrl } from "../../utility/isValidUrl";

export const FormShorterLink: React.FC = () => {
  const cx = useStyles(styles);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");
  const [errorUrl, setErrorUrl] = useState(false);
  const [sendShortedUrl, { error, data }] =
    useMutation<ShortUrlResult>(SEND_SHORTED_URL);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  useEffect(() => {
    if (data !== undefined && data !== null && Object.keys(data).length) {
      const payload = data?.shorten_url?.short_url;
      dispatch(saveLocalLinks(payload));
    }
  }, [data]);

  const onSubmit = () => {
    if (isValidUrl(value)) {
      setErrorUrl(false);
      try {
        sendShortedUrl({ variables: { url: value } });
        setValue("");
      } catch (error) {
        console.log(error);
      }
    } else setErrorUrl(true);
  };

  return (
    <div className={cx("container")}>
      <p className={cx("text")}>Введите ссылку</p>
      <div className={cx("sendBlock")}>
        <input
          className={cx("input")}
          value={value}
          onChange={onChange}
          placeholder="Введите ссылку"
        />
        <button className={cx("btn")} onClick={onSubmit} disabled={!value}>
          Сократить
        </button>
      </div>
      {error || errorUrl ? (
        <p className={cx("error")}>Невалидная ссылка</p>
      ) : null}
    </div>
  );
};
