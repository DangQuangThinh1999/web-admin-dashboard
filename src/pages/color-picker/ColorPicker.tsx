import { ChromePicker, ColorResult, CompactPicker } from "react-color";
import { Box, Typography } from "@mui/material";
import styles from "./ColorPicker.module.scss";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("blue");
  const refs = useRef<HTMLDivElement>(null);

  if (refs.current) {
    refs.current.style.backgroundColor = backgroundColor;
  }

  const handleChangeBackgroundColorCompact = (
    color: ColorResult,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(color.hex);
  };
  const handleChangeBackgroundColorChrome = (
    color: ColorResult,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(color.hex);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mb: 4,
        }}
      >
        <Box ref={refs} sx={{ width: "100%" }} id={styles.preview}></Box>
      </Box>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box sx={{ mr: 15 }}>
          <Typography
            sx={{
              mb: 3,
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {" "}
            InLine Pallete
          </Typography>
          <CompactPicker
            color={backgroundColor}
            onChange={handleChangeBackgroundColorCompact}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              mb: 3,
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {" "}
            InLine Picker
          </Typography>

          <ChromePicker
            color={backgroundColor}
            onChange={handleChangeBackgroundColorChrome}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ColorPicker;
