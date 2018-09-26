import React from "react";
import TableBody from "./tableBody";

const Table = ({ columns, data }) => {
  return (
    <table className="table">
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
