import { useState, useContext } from "react";
import { Employee } from "../models/Employee";
import { DataView } from "./DataView";

import { EmployeesContext } from "../context/EmployeesContext";

import "./Collapsible.css";

interface TableProps {
  data: Employee[];
}

export function Table({ data }: TableProps) {
  const [displayData, setDisplayData] = useState<Employee[]>(data);
  const [sortKey, setSortKey] = useState<null | keyof Employee>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const [isDataViewOpen, setDataViewIsOpen] = useState(false);

  const toggleCollapse = () => {
    setDataViewIsOpen(true);
  };

  const context = useContext(EmployeesContext);

  const ascSvg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.75735 5.63605L6.34314 7.05026L12 12.7071L17.6569 7.05029L16.2427 5.63608L12 9.87872L7.75735 5.63605Z"
        fill="currentColor"
      />
      <path
        d="M6.34314 12.7071L7.75735 11.2929L12 15.5356L16.2427 11.2929L17.6569 12.7071L12 18.364L6.34314 12.7071Z"
        fill="currentColor"
      />
    </svg>
  );

  const descSvg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6569 11.2929L16.2427 12.7071L12 8.46444L7.75735 12.7071L6.34314 11.2929L12 5.63605L17.6569 11.2929Z"
        fill="currentColor"
      />
      <path
        d="M17.6569 16.9497L16.2427 18.3639L12 14.1213L7.75735 18.364L6.34314 16.9498L12 11.2929L17.6569 16.9497Z"
        fill="currentColor"
      />
    </svg>
  );

  const handleSearchType = (event: React.KeyboardEvent | React.ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    const phrase = input.value.toLowerCase();

    if (phrase !== "") {
      const newData = data.filter((item) => {
        return (
          item.firstname.toLowerCase().includes(phrase) ||
          item.lastname.toLowerCase().includes(phrase) ||
          item.phonenumber.toString().includes(phrase)
        );
      });
      setDisplayData(newData);
    } else {
      setDisplayData(data);
    }
  };

  const getSortDirection = (key: keyof Employee): "asc" | "desc" | null => {
    if (key === sortKey) {
      if (sortDirection === null) {
        return "asc";
      } else if (sortDirection === "asc") {
        return "desc";
      } else {
        return null;
      }
    }

    return "asc";
  };

  const handleSort = (event: React.MouseEvent, key: keyof Employee) => {
    event.preventDefault();

    const tempSortDirection = getSortDirection(key);

    let sortedData;
    if (tempSortDirection === "asc") {
      sortedData = [...displayData].sort((a, b) => sortAsc(a, b, key));
    } else if (tempSortDirection === "desc") {
      sortedData = [...displayData].sort((a, b) => sortDesc(a, b, key));
    } else {
      sortedData = [...data];
    }

    setDisplayData(sortedData);
    setSortKey(key);
    setSortDirection(tempSortDirection);
  };

  const sortAsc = (a: Employee, b: Employee, key: keyof Employee): number => {
    if (a[key] > b[key]) {
      return 1;
    }

    if (a[key] < b[key]) {
      return -1;
    }

    return 0;
  };

  const sortDesc = (a: Employee, b: Employee, key: keyof Employee): number => {
    if (a[key] < b[key]) {
      return 1;
    }
    if (a[key] > b[key]) {
      return -1;
    }

    return 0;
  };

  const renderSvg = (key: keyof Employee) => {
    if (sortDirection === "asc" && sortKey === key) {
      return ascSvg;
    } else if (sortDirection === "desc" && sortKey === key) {
      return descSvg;
    } else {
      return "";
    }
  };

  return (
    <>
      <div className="mb-4 ">
        <input
          onChange={handleSearchType}
          placeholder="Find by phrase..."
          type="search"
          className="form-control"
        />
      </div>
      <table className="table table-hover table-responsive shadow p-3 mb-5 bg-body-tertiary ">
        <thead className="table-dark">
          <tr>
            <th
              className="cursor-pointer"
              onClick={(event) => handleSort(event, "id")}
            >
              ID{renderSvg("id")}
            </th>
            <th
              className="cursor-pointer"
              onClick={(event) => handleSort(event, "firstname")}
            >
              Firstname{renderSvg("firstname")}
            </th>
            <th
              className="cursor-pointer"
              onClick={(event) => handleSort(event, "lastname")}
            >
              Lastname{renderSvg("lastname")}
            </th>
            <th
              className="cursor-pointer"
              onClick={(event) => handleSort(event, "salary")}
            >
              Salary{renderSvg("salary")}
            </th>
            <th
              className="cursor-pointer"
              onClick={(event) => handleSort(event, "status")}
            >
              Status{renderSvg("status")}
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {displayData.map((item) => (
            <tr
              className="cursor-pointer"
              onClick={() => {
                toggleCollapse();
                context?.filterById(item.id);
              }}
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample"
              aria-expanded="false"
              aria-controls="multiCollapseExample"
            >
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.salary}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <DataView isOpen={isDataViewOpen} setIsOpen={setDataViewIsOpen} />
    </>
  );
}

/**
 *
 * <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample" aria-expanded="false" aria-controls="multiCollapseExample">Toggle second element</button>
 */
