import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  category: string;
  title: string;
};
const Header = ({ category, title }: Props) => {
  return (
    <Box sx={{ mb: -5 }}>
      <Typography sx={{ color: "rgb(107 114 128)" }} component={"p"}>
        {category}
      </Typography>
      <Typography
        sx={{
          fontSize: "1.875rem",
          lineHeight: "2.25rem",
          color: "rgb(15 23 42)",
          fontWeight: 800,
          letterSpacing: "-0.05em",
        }}
        component={"p"}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
