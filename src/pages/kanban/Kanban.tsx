import { ColumnType } from "@/utils/enums";
import { Box, Grid } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "../../components/PageKanBan/components/Column";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("../../components/PageKanBan/components/Column")
);
const Kanban = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ py: 10, px: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <DynamicComponent column={ColumnType.TO_DO} />
          </Grid>
          <Grid item xs={12} md={3}>
            <DynamicComponent column={ColumnType.IN_PROGRESS} />
          </Grid>
          <Grid item xs={12} md={3}>
            <DynamicComponent column={ColumnType.BLOCKED} />
          </Grid>
          <Grid item xs={12} md={3}>
            <DynamicComponent column={ColumnType.COMPLETED} />
          </Grid>
        </Grid>
      </Box>
    </DndProvider>
  );
};

export default Kanban;
