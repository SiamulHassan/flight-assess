import { createContext, useContext } from "react";

// import React from 'react'
const TableContext = createContext();
const Table = ({ cols, children }) => {
  return (
    <TableContext.Provider value={{ cols }}>
      <div role="table">{children}</div>
    </TableContext.Provider>
  );
};

function Header({ children }) {
  const { cols } = useContext(TableContext);

  const gridCol = {
    gridTemplateColumns: cols,
  };
  return (
    <header
      role="row"
      className={`py-4 px-6 bg-[#e5e7eb] text-md rounded-sm uppercase font-medium text-[#858585] grid items-center gap-x-6`}
      style={gridCol}
    >
      {children}
    </header>
  );
}

function Row({ children, isEven }) {
  const { cols } = useContext(TableContext);
  const gridCol = {
    gridTemplateColumns: cols,
  };

  return (
    <div
      role="row"
      className={`grid items-center px-6 py-1 text-[#7e7a7a] text-sm first:border-t-0 ${
        isEven ? "bg-[#e5e7eb]" : "bg-[#f7f7f7] border border-y-orange-700"
      }`}
      style={gridCol}
    >
      {children}
    </div>
  );
}
Table.Header = Header;
Table.Row = Row;
export default Table;
