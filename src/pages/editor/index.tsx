import { Box } from "@mui/material";
import styles from "./Editor.module.scss";
import classNames from "classnames/bind";
import Header from "@/components/HeaderPage/Header";
import Editor from "./EditorComponent";


const cx = classNames.bind(styles);

const index = () => {
  return (
    <Box className={cx("wrapper")}>
      <Header category="Page" title="Editor" />
      <Box sx={{ mt: 5, my: 10 }}>
        <Editor />
      </Box>
    </Box>
  );
};

export default index;
