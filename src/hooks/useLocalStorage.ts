import { ColumnType } from "@/utils/enums";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initial = {
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
export function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = useState(fallbackValue);
  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) setValue(data ? JSON.parse(data) : fallbackValue);
  }, [key, fallbackValue]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  console.log(value);
  return [value, setValue] as const;
}
