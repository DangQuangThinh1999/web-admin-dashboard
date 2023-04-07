import React, { ReactNode, useContext } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";

import { amber, grey } from "@mui/material/colors";

const ColorModeContext = React.createContext({
  ToggleColorMode: () => {},
});

export const useColorModeContext = () => useContext(ColorModeContext);

const ToggleColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      ToggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...amber,
            ...(mode === "dark" && {
              main: amber[300],
            }),
          },
          ...(mode === "dark" && {
            background: {
              default: "#000000",
              paper: "gray",
            },
          }),
          text: {
            ...(mode === "light"
              ? {
                  primary: grey[900],
                  secondary: grey[800],
                }
              : {
                  primary: "#ffffff",
                  secondary: grey[500],
                }),
          },
          action: {
            ...(mode === "dark"
              ? {
                  hover: "rgba(0, 0, 0, 0.6)",
                }
              : {
                  hover: "rgba(0, 0, 0, 0.04)",
                }),
          },
        },
        components: {
          // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
          MuiDataGrid: {
            styleOverrides: {
              root: {
                backgroundColor: "white",
                color: "black",
                "& .Mui-checked": {
                  color: "blue",
                },

                ".MuiSvgIcon-root": {
                  color: "black",
                },
                ".MuiTablePagination-root": {
                  color: "black",
                },
                ".MuiTableSortLabel-root": {
                  color: "black",
                },
                ".MuiTextField-root": {
                  color: "black",
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorModeProvider;
