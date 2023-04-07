import { v4 as uuidv4 } from "uuid";
import { ColumnType } from "@/utils/enums";
import { TaskModel } from "@/utils/models";
import { useCallback, useEffect } from "react";
import useTaskCollection from "./useTaskCollection";
import { pickChakraRandomColor, swap } from "@/utils/helper";
import { useLocalStorage } from "./useLocalStorage";
const MAX_TASKS_PER_COLUMN = 100;
export const initial = {
  Todo: [
    {
      id: uuidv4(),
      column: ColumnType.TO_DO,
      title: "Task 1",
      color: "red",
    },
  ],
  "In Progress": [
    {
      id: uuidv4(),
      column: ColumnType.IN_PROGRESS,
      title: "Task 2",
      color: "yellow",
    },
  ],
  Blocked: [
    {
      id: uuidv4(),
      column: ColumnType.BLOCKED,
      title: "Task 3",
      color: "green",
    },
  ],
  Completed: [
    {
      id: uuidv4(),
      column: ColumnType.COMPLETED,
      title: "Task 4",
      color: "blue",
    },
  ],
};
const useColumnTasks = (column: ColumnType) => {
  // const [tasks, setTasks] = useLocalStorage("tasks", initial);
  const [tasks, setTasks] = useTaskCollection();

  const columnTasks = tasks[column];

  const addEmptyTask = useCallback(() => {
    console.log(`Adding new empty Task to ${column} column`);
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];
      const valueColor = pickChakraRandomColor();
      if (columnTasks.length > MAX_TASKS_PER_COLUMN) {
        console.log("Too many tasks");
        return allTasks;
      }
      const newColumnTasks: TaskModel = {
        id: uuidv4(),
        title: `New ${column} task`,
        color: valueColor,
        column,
      };

      return {
        ...allTasks,
        [column]: [newColumnTasks, ...columnTasks],
      };
    });
  }, [column, setTasks]);
  const deleteTask = useCallback(
    (id: TaskModel["id"]) => {
      console.log(`Removing task ${id}..`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks]
  );

  const updateTask = useCallback(
    (id: TaskModel["id"], updatedTask: Omit<Partial<TaskModel>, "id">) => {
      console.log(`Updating task ${id} with ${JSON.stringify(updateTask)}`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        };
      });
    },
    [column, setTasks]
  );

  const dropTaskFrom = useCallback(
    (from: ColumnType, id: TaskModel["id"]) => {
      setTasks((allTasks) => {
        const fromColumnTasks = allTasks[from];
        const toColumnTasks = allTasks[column];
        const movingTask = fromColumnTasks.find((task) => task.id === id);

        console.log(`Moving task ${movingTask?.id} from ${from} to ${column}`);

        if (!movingTask) {
          return allTasks;
        }

        // remove the task from the original column and copy it within the destination column
        return {
          ...allTasks,
          [from]: fromColumnTasks.filter((task) => task.id !== id),
          [column]: [{ ...movingTask, column }, ...toColumnTasks],
        };
      });
    },
    [column, setTasks]
  );

  const swapTasks = useCallback(
    (i: number, j: number) => {
      console.log(`Swapping task ${i} with ${j} in ${column} column`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: swap(columnTasks, i, j),
        };
      });
    },
    [column, setTasks]
  );

  return {
    value: columnTasks,
    addEmptyTask,
    updateTask,
    dropTaskFrom,
    deleteTask,
    swapTasks,
  };
};

export default useColumnTasks;
