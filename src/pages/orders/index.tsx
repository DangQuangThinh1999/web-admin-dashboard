import { Box } from "@mui/material";
import styles from "./Orders.module.scss";
import classNames from "classnames/bind";

import DataGridComponent from "./DataGridComponent";
import { ordersData, ordersGrid } from "@/data/dummy";
import Header from "@/components/HeaderPage/Header";
const cx = classNames.bind(styles);

const index = () => {
  return (
    <Box className={cx("wrapper")}>
      <Header category="Page" title="Orders" />
      <DataGridComponent dataColumns={ordersGrid} dataRows={ordersData} />
    </Box>
  );
};

export default index;
