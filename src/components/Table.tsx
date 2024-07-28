import React, { useState } from "react";
import { Employee } from "../models/Employee";
interface TableProps {
  data: Employee[];
}

export const Table = ({ data }: TableProps) => {
  const [inputValue, setInputValue] = useState("");
  const [dataTable, setDataTable] = useState(data);
  const [displayData, setDisplayData] = useState<Employee[]>(data);

  const filterData = (inputValue: string) => {
    const newData = data.filter(
      (item) =>
        item.id === inputValue ||
        item.firstname === inputValue ||
        item.lastname === inputValue ||
        item.status === inputValue ||
        item.salary.toString() === inputValue
    );
    if (inputValue !== "") {
      setDataTable(newData);
    } else {
      setDataTable(data);
    }
  };

  const handleSearchType = (event: React.KeyboardEvent) => {
    const input = event.target as HTMLInputElement;
    const phrase = input.value.toLowerCase();

    const newData = data.filter(
      (item) =>
        item.firstname.toLowerCase().includes(phrase) ||
        item.lastname.toLowerCase().includes(phrase) ||
        item.salary.toString().toLowerCase().includes(phrase) ||
        item.status.toLowerCase().includes(phrase) ||
        item.phonenumber.toLowerCase().includes(phrase)
    );
    setDisplayData(newData);
  };

  return (
    <>
      <div>
        {/* <input
          className="form-control mb-4"
          type="search"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            filterData(event.target.value);
          }}
          placeholder="Find employee..."
        /> */}
        <input
          className="form-control mb-4"
          type="search"
          
          onKeyUp={handleSearchType}
          placeholder="Find employee..."
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.salary}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
