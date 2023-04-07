import {
  Avatar,
  Badge,
  Box,
  FormControlLabel,
  IconButton,
  Switch,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import MenuIcon from "@mui/icons-material/Menu";
import NavButton from "./NavButton";
import { useStateContext } from "@/Contexts/ContextProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { useColorModeContext } from "@/Contexts/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
const Navbar = () => {
  const theme = useTheme();
  const colorMode = useColorModeContext();
  const {
    activeMenu,
    setActiveMenu,
    handleClickMore,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
  } = useStateContext();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <Box
      className={cx("wrapper")}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        position: "relative",
      }}
    >
      <NavButton
        title="Menu"
        onClick={() => {
          setActiveMenu((previousActiveMenu) => !previousActiveMenu);
        }}
        color="info"
        icon={<MenuIcon />}
      />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FormControlLabel
          control={
            <Switch
              color={theme.palette.mode === "light" ? "warning" : "secondary"}
              checked={checked}
              onChange={() => {
                handleChange();
                colorMode.ToggleColorMode();
              }}
            />
          }
          label={theme.palette.mode}
        />
        <Box sx={{ ml: -1 }}>
          {theme.palette.mode === "light" ? (
            <Brightness7Icon color="warning" />
          ) : (
            <Brightness4Icon color="secondary" />
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", mt: 1 }}>
        <Badge badgeContent={4} color="success">
          <NavButton
            title="Cart"
            onClick={() => {
              setActiveMenu((previousActiveMenu) => !previousActiveMenu);
            }}
            color="info"
            icon={<ShoppingCartIcon />}
          />
        </Badge>
        <Badge badgeContent={4} color="info">
          <NavButton
            title="Chats"
            onClick={() => {
              setActiveMenu((previousActiveMenu) => !previousActiveMenu);
            }}
            color="info"
            icon={<ChatBubbleOutlineIcon />}
          />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <NavButton
            title="Notifications"
            onClick={() => {
              setActiveMenu((previousActiveMenu) => !previousActiveMenu);
            }}
            color="info"
            icon={<NotificationsIcon />}
          />
        </Badge>
        <Tooltip title="Profile">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: "20px",
            }}
          >
            <Avatar alt="Quang Thinh" src="./images/avatars/avatar.jpg" />
            <Typography
              sx={{ color: "gray", fontSize: "14px", mr: "4px", ml: "4px" }}
              component="span"
            >
              Hi,
            </Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "14px",
                fontWeight: "600",
              }}
              component="span"
            >
              Quang Thinh
            </Typography>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Navbar;
