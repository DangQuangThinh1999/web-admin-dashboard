import classNames from "classnames/bind";
import styles from "./Layout.module.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton, Tooltip, Box } from "@mui/material";
import Sidebar from "../Sidebar";
import { useStateContext } from "@/Contexts/ContextProvider";
import Navbar from "../Navbar";

const cx = classNames.bind(styles);

type Props = {
  children: any;
};
const Layout = ({ children }: Props) => {
  const { activeMenu } = useStateContext();

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Box
        sx={{
          display: "flex",
          right: 16,
          bottom: 16,
          zIndex: 1000,
          position: "fixed",
        }}
      >
        <Tooltip placement="top" title="Setting">
          <IconButton
            sx={{
              background: "blue",
              padding: "12px",
              color: "white",
              "&.MuiIconButton-root": {
                ":hover": {
                  background: "gray",
                },
              },
            }}
          >
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </Box>
      {activeMenu ? (
        <Box
          className={cx("sidebar")}
          sx={{ width: "288px", position: "fixed" }}
        >
          <Sidebar />
        </Box>
      ) : (
        <Box sx={{ display: "none" }}>
          <Sidebar />
        </Box>
      )}
      <Box
        className={cx(`${activeMenu ? "first-sidebar" : "first-sidebarFalse"}`)}
        sx={{ minHeight: "100vh", width: "100%" }}
      >
        <Box
          className={cx("last-sidebar")}
          sx={{ position: "fixed", width: "100%" }}
        >
          <Navbar />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
