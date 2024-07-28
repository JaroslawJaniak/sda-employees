import React, { useState } from "react";
import { Employee } from "../models/Employee";
interface TableProps {
  data: Employee[];
}

export const Table = ({ data }: TableProps) => {
  const [inputValue, setInputValue] = useState("");
  const [dataTable, setDataTable] = useState(data);
  const [displayData, setDisplayData] = useState<Employee[]>(data);

  const [stateSort, setstateSort] = useState(false);
  const [sortDirection, setsortDirection] = useState(false);

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

  const handleSortByFirstName = () => {
    const sortedData = [...displayData].sort((a, b) => {
      const nameA = a.firstname.toUpperCase();
      const nameB = b.firstname.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setDisplayData(sortedData);
  };

  const handleSortById = (event: React.MouseEvent) => {
    const sortedData = [...displayData];
    if (!stateSort) {
      sortedData.sort((a, b) => {
        if (a.id.toUpperCase() < b.id.toUpperCase()) {
          return -1;
        } else if (a.id.toUpperCase() > b.id.toUpperCase()) {
          return 1;
        }

        return 0;
      });
    } else {
      sortedData.sort((a, b) => {
        if (a.id.toUpperCase() < b.id.toUpperCase()) {
          return 1;
        } else if (a.id.toUpperCase() > b.id.toUpperCase()) {
          return -1;
        }

        return 0;
      });
    }
    setDisplayData(sortedData);
    setstateSort(!stateSort);
  };

  const sortAsc = (a: Employee, b: Employee, key: keyof Employee): number => {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] > b[key]) {
      return 1;
    }

    return 0;
  };

  const sortDesc = (a: Employee, b: Employee, key: keyof Employee): number => {
    if (a[key] < b[key]) {
      return 1;
    } else if (a[key] > b[key]) {
      return -1;
    }

    return 0;
  };

  const [sortKey, setsortKey] = useState();

  const getSortDirection = (
    key: keyof Employee,
    direction: "asc" | "desc" | null
  ) => {
    if (key === sortKey) {
      if (sortDirection === null) {
        return "asc";
      } else if (sortDirection === "asc") {
        return "desc";
      } else if (sortDirection === "desc") {
        return "asc";
      } else {
        return null;
      }
    }
  };

  const handleSort = (event: React.MouseEvent, key: keyof Employee) => {
    event.preventDefault;
    const sortedData = [...displayData];
    if (!stateSort) {
      sortedData.sort((a, b) => sortAsc(a, b, key));
    } else {
      sortedData.sort((a, b) => sortDesc(a, b, key));
    }

    setDisplayData(sortedData);
    setstateSort(!stateSort);
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
            <th
              onClick={(event) => handleSort(event, "id")}
              className="cursor-pointer"
            >
              Id
            </th>
            <th onClick={handleSortByFirstName} className="cursor-pointer">
              First Name
            </th>
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
