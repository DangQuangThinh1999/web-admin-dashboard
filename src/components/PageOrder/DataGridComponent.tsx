import * as React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Box, CardMedia, Typography } from "@mui/material";
import { IOrderData, IOrderGrid } from "@/types";

import Image from "next/image";
import TableToolbar from "./TableToolbar";
type Props = {
  dataRows: Array<IOrderData>;
  dataColumns: Array<IOrderGrid>;
};
// ---------------------------- STATUS----------------------------
interface GridCellExpandProps {
  value: string;
}

const GridCellExpand = React.memo(function GridCellExpand(
  props: GridCellExpandProps
) {
  let statusBg = "";
  const { value } = props;
  if (value === "active") {
    statusBg = "#8BE78B";
  } else if (value === "pending") {
    statusBg = "#FEC90F";
  } else if (value === "rejected") {
    statusBg = "red";
  } else if (value === "canceled") {
    statusBg = "#f28482";
  } else {
    statusBg = "#219ebc";
  }
  return (
    <Box
      sx={{
        color: value === "complete" || value === "rejected" ? "white" : "black",
        p: "4px 10px",
        borderRadius: "24px",
        backgroundColor: statusBg,
      }}
    >
      {value}
    </Box>
  );
});
function renderCellExpand(params: GridRenderCellParams<any, string>) {
  return <GridCellExpand value={params.value || ""} />;
}
// ----------------------------- IMAGE- -------------------------------

const GridCellExpandImage = React.memo(function GridCellExpand(
  props: GridCellExpandProps
) {
  const { value } = props;

  return (
    <CardMedia
      sx={{
        height: "50px",
        width: "50px",
        borderRadius: "24px",
      }}
    >
      <Image src={value} alt="Logo" height={50} width={50} />
    </CardMedia>
  );
});
function renderCellExpandImage(params: GridRenderCellParams<any, string>) {
  return <GridCellExpandImage value={params.value || ""} />;
}
// ----------------------------- LOCATION- -------------------------------
const GridCellExpandLocation = React.memo(function GridCellExpand(
  props: GridCellExpandProps
) {
  const { value } = props;
  let valueImage = "";
  if (value === "New York") {
    valueImage = "NewYork";
  } else valueImage = value;
  return (
    <Box sx={{ display: "flex" }}>
      <Image
        style={{ marginRight: 10 }}
        src={`/images/location/${valueImage}.png`}
        alt="Image"
        height={20}
        width={30}
      />
      <Typography component={"p"}>{value}</Typography>
    </Box>
  );
});
function renderCellExpandLocation(params: GridRenderCellParams<any, string>) {
  return <GridCellExpandLocation value={params.value || ""} />;
}

export default function DataGridComponent({ dataRows, dataColumns }: Props) {
  const columns: GridColDef[] = dataColumns?.map((column, index) => {
    if (column.headerText === "Status") {
      return {
        ...column,
        field: `col${index + 1}`,
        headerName: column.headerText,
        renderCell: renderCellExpand,
      };
    } else if (column.headerText === "Image") {
      return {
        ...column,
        field: `col${index + 1}`,
        headerName: column.headerText,
        renderCell: renderCellExpandImage,
      };
    } else if (column.headerText === "Location") {
      return {
        ...column,
        field: `col${index + 1}`,
        headerName: column.headerText,
        renderCell: renderCellExpandLocation,
      };
    } else
      return {
        ...column,
        field: `col${index + 1}`,
        headerName: column.headerText,
      };
  });
  const rows: GridRowsProp = dataRows.map((rows, index) => {
    return {
      id: index + 1,
      col1: rows.ProductImage,
      col2: rows.OrderItems,
      col3: rows.CustomerName,
      col4: rows.TotalAmount,
      col5: rows.Status,
      col6: rows.OrderID,
      col7: rows.Location,
    };
  });
  return (
    <Box sx={{ height: 450, width: "auto", color: "black", mt: 6 }}>
      <DataGrid
        slots={{
          toolbar: TableToolbar,
        }}
        checkboxSelection
        rows={rows}
        columns={columns}
        componentsProps={{
          panel: {
            sx: {
              "& .MuiTypography-root": {
                color: "dodgerblue",
                fontSize: 18,
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "dodgerblue",
              },
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "dodgerblue  ",
              },
              "& .MuiDataGrid-filterForm": {
                bgcolor: "white",
              },
              " .MuiButtonBase-root": {
                color: "dodgerblue",
              },
              ".MuiInputLabel-root": {
                color: "dodgerblue",
              },
            },
          },
        }}
      />
    </Box>
  );
}
