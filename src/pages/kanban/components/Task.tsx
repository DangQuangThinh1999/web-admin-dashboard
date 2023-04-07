import { Box, IconButton, Paper, TextField, useTheme } from "@mui/material";
import { TaskModel } from "@/utils/models";
import DeleteIcon from "@mui/icons-material/Delete";
import _ from "lodash";
import { memo } from "react";
import { useDragTaskAndDrop } from "@/hooks/useDragTaskAndDrop";

import styles from "../Kanban.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel["id"], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel["id"]) => void;
  onDropHover: (i: number, j: number) => void;
};

const Task = ({
  index,
  task,
  onUpdate: handleUpdate,
  onDropHover: handleDropHover,
  onDelete: handleDelete,
}: TaskProps) => {
  const { ref, isDragging } = useDragTaskAndDrop<HTMLDivElement>(
    { task, index: index },
    handleDropHover
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };
  let valueColor = false;
  if (
    task.color === "red" ||
    task.color === "blue" ||
    task.color === "green" ||
    task.color === "purple"
  ) {
    valueColor = true;
  }

  return (
    <Paper
      className={cx("task-responsive")}
      ref={ref}
      elevation={3}
      sx={{
        position: "relative",
        borderRadius: "8px",
        width: "100%",

        pl: 3,
        pr: 7,
        pt: 3,
        pb: 1,
        cursor: "grab",
        bgcolor: task.color,

        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <IconButton
        onClick={handleDeleteClick}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 100,
          color: "black",
        }}
      >
        <DeleteIcon />
      </IconButton>
      <TextField
        multiline
        variant="standard"
        sx={{
          fontWeight: "bold",
          minHeight: 70,
          maxHeight: 200,
          ".MuiInputBase-input": {
            color: valueColor ? "white" : "black",
          },
        }}
        onChange={handleTitleChange}
        value={task.title}
      />
    </Paper>
  );
};

export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover &&
    prev.onUpdate === next.onUpdate
  ) {
    return true;
  }

  return false;
});
