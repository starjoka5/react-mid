import React from "react";

import { useTableSortCustom } from "../hooks/useTableSort";
import { Column } from "../../../interface/table.interfaces";

interface UserDataA {
  name: string;
  age: number;
}

const columns: Column<UserDataA>[] = [
  { field: "name", name: "Name" },
  { field: "age", name: "Age" },
];

const initialData: UserDataA[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Cara", age: 22 },
  { name: "John", age: 33 },
];

export const UserTable = () => {
  const { data, getColumnProps } = useTableSortCustom<UserDataA>(initialData);

  const logSort = (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
  ) => {
    console.log("logSort", event);
  };

  return (
    <table className="table w-full min-w-[300px] text-center border-separate p-4">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              id={column.field}
              {...getColumnProps({
                onClick: logSort
              })}
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-slate-300 hover:cursor-pointer">
            <td className="py-4">{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
