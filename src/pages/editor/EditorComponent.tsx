import MUIRichTextEditor from "mui-rte";
import styles from "./Editor.module.scss";
import classNames from "classnames/bind";
import { Box, ThemeProvider, createTheme } from "@mui/material";
const cx = classNames.bind(styles);

const myTheme = createTheme({
  // Set up your custom MUI theme here
});
const EditorComponent = () => {
  const save = (data: any) => {
    // console.log(data);
  };

  return (
    <Box>
      <ThemeProvider theme={myTheme}>
        <MUIRichTextEditor
          label="Type something here..."
          onSave={save}
          inlineToolbar={true}
        />
      </ThemeProvider>
    </Box>
  );
};

export default EditorComponent;
