import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
type Props = {
  title: string;
  onClick: () => void;
  icon: JSX.Element;
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  dotColor?: string;
};

const NavButton = ({ title, onClick, icon, color, dotColor }: Props) => {
  return (
    <Tooltip title={title} placement="bottom">
      <IconButton color={color} onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default NavButton;
