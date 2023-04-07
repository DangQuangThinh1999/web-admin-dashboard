import { Box } from "@mui/material";
import styles from "./Kanban.module.scss";
import classNames from "classnames/bind";
import Header from "../../components/HeaderPage/Header";
import Kanban from "./Kanban";

const cx = classNames.bind(styles);

const index = () => {
  return (
    <Box className={cx("wrapper")}>
      <Header category="Page" title="Kanban" />
      <Kanban />
    </Box>
  );
};

export default index;
