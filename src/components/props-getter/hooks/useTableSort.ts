import { useState } from "react";

interface GetColumnProps {
  onClick: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
}

const callAll = <T extends unknown[]>(...fns: Array<(...args: T) => void>) => {
  return (...args: T): void => {
    fns.forEach((fn) => fn && fn(...args));
  };
};

export function useTableSortCustom<T>(initialData: T[]) {
  const [data, setData] = useState(initialData);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
  ) => {
    const { id } = event.currentTarget;

    const sortedData = [...data].sort((a, b) => {
      const aValue = a[id as keyof typeof a];
      const bValue = b[id as keyof typeof b];

      if (aValue < bValue) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const getColumnProps = (customProps: GetColumnProps) => {
    return {
      ...customProps,
      onClick: callAll(customProps.onClick, handleSort),
    };
  };

  return {
    data,
    handleSort,
    getColumnProps,
  };
}
