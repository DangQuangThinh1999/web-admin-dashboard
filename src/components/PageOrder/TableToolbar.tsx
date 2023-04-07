import React from "react";

// MATERIAL UI
import {
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from "@/pages/orders/Orders.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const TableToolbar = () => {
  return (
    <Box sx={{ p: 1 }}>
      <GridToolbarColumnsButton className={cx("toolbarStyles")} />
      <GridToolbarFilterButton className={cx("toolbarStyles")} />
      <GridToolbarDensitySelector className={cx("toolbarStyles")} />
      <GridToolbarExport className={cx("toolbarStyles")} />
    </Box>
  );
};

export default TableToolbar;
