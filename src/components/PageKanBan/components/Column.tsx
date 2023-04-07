import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, IconButton, Stack } from "@mui/material";

import useColumnTasks from "@/hooks/useColumnTasks";
import { ColumnType } from "@/utils/enums";
import Task from "./Task";
import { TaskModel } from "@/utils/models";
import Typography from "@mui/material/Typography";
import styles from "@/pages/kanban/Kanban.module.scss";
import classNames from "classnames/bind";
import { pink, purple } from "@mui/material/colors";
import useColumnDrop from "@/hooks/useColumnDrop";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: "gray",
  "In Progress": "blue",
  Blocked: "red",
  Completed: "green",
};

function Column({ column }: { column: ColumnType }) {
  const {
    value,
    addEmptyTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
    updateTask,
  } = useColumnTasks(column);

  const [valueTasks, setValueTask] = useState(value);
  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  useEffect(() => {
    setValueTask(value);
  }, [value]);
  return (
    <Box sx={{ backgroundColor: "gray" }}>
      <Typography
        sx={{
          color: ColumnColorScheme[column],
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: pink[50],
        }}
      >
        {column}
      </Typography>
      <Button
        sx={{
          width: "100%",
          p: 1,
          backgroundColor: "GrayText",
          color: "black",
        }}
        onClick={addEmptyTask}
      >
        <AddCircleOutlineIcon />
      </Button>
      <Stack
        ref={dropRef}
        className={cx("hover-stack")}
        sx={{ p: 1, height: 360, opacity: isOver ? 0.85 : 1 }}
        direction={{ xs: "row", sm: "column" }}
        spacing={{ xs: 1, sm: 2 }}
      >
        {valueTasks.map((task: TaskModel, index: number) => (
          <Task
            key={task.id}
            task={task}
            index={index}
            onDropHover={swapTasks}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Column;
