import React from "react";
import { ColumnType, ItemType } from "@/utils/enums";
import { DragItem, TaskModel } from "@/utils/models";
import { useDrop } from "react-dnd";
const useColumnDrop = (
  column: ColumnType,
  handleDrop: (fromColumn: ColumnType, taskId: TaskModel["id"]) => void
) => {
  const [{ isOver }, dropRef] = useDrop<DragItem, void, { isOver: boolean }>({
    accept: ItemType.Task,
    drop: (DragItem) => {
      if (!DragItem || DragItem.from === column) {
        return;
      }
      handleDrop(DragItem.from, DragItem.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return {
    isOver,
    dropRef,
  };
};

export default useColumnDrop;
