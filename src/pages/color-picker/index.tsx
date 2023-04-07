import { Box } from "@mui/material";
import styles from "./ColorPicker.module.scss";
import classNames from "classnames/bind";
import Header from "@/components/HeaderPage/Header";
import { ColorMappingPrimaryXAxis } from "@/data/dummy";
import ColorPicker from "./ColorPicker";

const cx = classNames.bind(styles);

const index = () => {
  return (
    <Box className={cx("wrapper")}>
      <Header category="Page" title="Color Picker" />
      <Box sx={{ mt: 5, my: 10 }}>
        <ColorPicker />
      </Box>
    </Box>
  );
};

export default index;
