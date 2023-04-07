import {
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import styles from "./ECommerce.module.scss";
import classNames from "classnames/bind";

import { earningData, SparkLineAreaData } from "@/data/dummy";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SparkLine from "./SparkLine";
import Stacked from "./Stacked";

const cx = classNames.bind(styles);

const Ecommerce = () => {
  const theme = useTheme();
  let stylesData = "";
  if (theme.palette.mode === "light") {
    stylesData = "light-data";
  } else stylesData = "dark-data";
  return (
    <Box sx={{ mt: "48px", padding: "10px" }}>
      <Box className={cx("wrapper")}>
        <Box className={`${cx("start-wrapper")} ${cx(stylesData)}`}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color:
                    theme.palette.mode === "light"
                      ? "rgb(55, 65, 81)"
                      : "white",
                }}
                component={"p"}
              >
                Earnings
              </Typography>
              <Typography
                sx={{
                  color:
                    theme.palette.mode === "light"
                      ? "rgb(55, 65, 81)"
                      : "white",
                }}
                component={"p"}
              >
                $63,448.79
              </Typography>
            </Box>
          </Box>
          <Button
            sx={{
              backgroundColor: "#0288d1",
              color: "white",
              "&.MuiButton-root": {
                mt: 2,
                ":hover": {
                  backgroundColor: "rgb(2,136,209,0.8)",
                },
              },
            }}
          >
            Download
          </Button>
        </Box>
        <Box
          sx={{
            m: "12px",
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            alignItems: "center",
          }}
        >
          {earningData.map((data, index) => (
            <Paper
              className={`${cx("earning-data")} ${cx(stylesData)}`}
              elevation={4}
              key={index}
            >
              <IconButton
                sx={{ color: data.iconColor, backgroundColor: data.iconBg }}
              >
                {data.icon}
              </IconButton>
              <Typography sx={{ mt: "12px" }} component={"p"}>
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    fontWeight: "600",
                  }}
                >
                  {data.amount}
                </Typography>
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "600",
                    color: data.pcColor,
                    ml: "8px",
                  }}
                >
                  {data.percentage}
                </Typography>
              </Typography>
              <Typography
                sx={{
                  mt: "4px",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "rgb(156 ,163, 175)",
                }}
                component={"p"}
              >
                {data.title}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} className={`${cx("chart")} ${cx(stylesData)}`}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontSize: "20px", lineHeight: "28px", fontWeight: 600 }}
              component={"p"}
            >
              Revenue Updates
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "rgb(75, 85, 99)",
                  "&.MuiTypography-root": {
                    ":hover": {
                      filter: "drop-shadow(8px 8px 10px gray)",
                    },
                  },
                }}
              >
                <Typography
                  component={"span"}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "1.1rem", mr: -1 }} />
                </Typography>
                <Typography component={"span"}> Expense</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: " rgb(74 222 128)",
                  "&.MuiTypography-root": {
                    ":hover": {
                      filter: "drop-shadow(8px 8px 10px gray)",
                    },
                  },
                }}
              >
                <Typography
                  component={"span"}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: "1.1rem", mr: -1 }} />
                </Typography>
                <Typography component={"span"}> Budget</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 10,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                borderRight: 1,
                borderColor: "black",
                m: "12px",
                pr: "40px",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: 600, fontSize: "30px", lineHeight: "36px" }}
                  component={"span"}
                >
                  $93,438
                </Typography>
                <Typography
                  sx={{
                    p: "6px",
                    cursor: "pointer",
                    borderRadius: "9999px",
                    backgroundColor: " rgb(74 222 128)",
                    ml: 3,
                    "&.MuiTypography-root": {
                      ":hover": {
                        filter: "drop-shadow(8px 8px 10px gray)",
                      },
                    },
                  }}
                  component={"span"}
                >
                  37%
                </Typography>
                <Typography
                  sx={{ color: "rgb(107 114 128)", mt: 1 }}
                  component={"p"}
                >
                  Budget
                </Typography>
              </Box>
              <Box sx={{ mt: 8 }}>
                <Typography
                  sx={{ fontWeight: 600, fontSize: "30px", lineHeight: "36px" }}
                  component={"span"}
                >
                  $93,438
                </Typography>
                <Typography
                  sx={{ color: "rgb(107 114 128)", mt: 1 }}
                  component={"p"}
                >
                  Expense
                </Typography>
              </Box>
              <Box sx={{ mt: 5 }}>
                <SparkLine />
              </Box>
              <Box sx={{ mt: 10 }}>
                <Button
                  sx={{
                    background: "#0288d1",
                    color: "white",
                    "&.MuiButton-root": {
                      ":hover": {
                        background: "rgba(255, 213, 79, 0.08)",
                        color: "text.primary",
                      },
                    },
                  }}
                >
                  Download Report
                </Button>
              </Box>
            </Box>
            <Box>
              <Stacked />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default Ecommerce;
