import { useStyles } from "./hooks/useStyles";
import { Header } from "./components/Header";
import { FormShorterLink } from "./components/FormShorterLink/FormShorterLink";
import { LocalLinksBlock } from "./components/LocalLinksBlock";
import { OurLinks } from "./components/OurLinks";

import styles from "./App.module.scss";

function App() {
  const cx = useStyles(styles);

  return (
    <div className={cx("main")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("contentLeft")}>
          <FormShorterLink />
          <LocalLinksBlock />
        </div>
        <OurLinks />
      </div>
    </div>
  );
}

export default App;
