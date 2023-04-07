import { SiShopware } from "react-icons/Si";
import { IconButton, Tooltip, Box, Typography, Icon } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { links } from "@/data/dummy";
import React, { useEffect, useState } from "react";
import { useColorModeContext } from "@/Contexts/ThemeContext";
import CloseIcon from "@mui/icons-material/Close";
import { useStateContext } from "@/Contexts/ContextProvider";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Sidebar = () => {
  const { activeMenu, setActiveMenu, isActive, screenSize } = useStateContext();
  const [normalStyle, setNormalStyle] = useState<string>("");
  const theme = useTheme();
  const colorMode = useColorModeContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize < 900) {
      setActiveMenu(false);
    }
  };
  useEffect(() => {
    if (theme.palette.mode === "dark") {
      setNormalStyle(`${cx("normal-link")} ${cx("normal-dark")}`);
    } else setNormalStyle(`${cx("normal-link")} ${cx("normal-light")}`);
  }, [theme.palette.mode]);
  return (
    <Box className={cx("wrapper")}>
      {activeMenu && (
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              className={cx("item-center")}
              href="/"
              onClick={handleCloseSidebar}
            >
              <SiShopware style={{ color: theme.palette.text.primary }} />
              <Typography color="text.primary" component="span">
                Shoppy
              </Typography>
            </Link>
            <Tooltip placement="bottom" title="Menu">
              <IconButton
                sx={{
                  bgcolor: "background.default",
                  color: "text.primary",
                  mr: "10px",
                  mt: "13px",
                  "&.MuiIconButton-root": {
                    borderColor: "background.default",
                    border: 3,
                    padding: "1px",
                    ":hover": {
                      background: theme.palette.action.hover,
                    },
                  },
                }}
                onClick={() => {
                  setActiveMenu((previousActiveMenu) => !previousActiveMenu);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ mt: "40px" }}>
            {links.map((item, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    color: "GrayText",
                    margin: "12px",
                    mt: 4,
                    textDecoration: "uppercase",
                  }}
                  component={"p"}
                >
                  {item.title}
                </Typography>
                {item.links.map((link) => (
                  <Link
                    key={link.name}
                    onClick={() => {}}
                    href={`/${link.name}`}
                    className={isActive ? cx("active-link") : normalStyle}
                  >
                    {link.icon}
                    <Typography
                      component={"span"}
                      sx={{ textDecoration: "capitalize" }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
