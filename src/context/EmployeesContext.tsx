import React, { createContext, useContext, useState } from "react";
import { Employee } from "../models/Employee";

type EmployeesContextType = {
  employees: Employee[] | null;
  setEmployees: (employees: Employee[] | null) => void;
  employee: Employee | null;
  setEmployee: (employee: Employee | null) => void;
  filterById: (id: string) => void;
  isOpenFormEditData: boolean;
  setIsOpenFormEditData: (status: boolean) => void;
};

export const EmployeesContext = createContext<EmployeesContextType | undefined>(
  undefined
);

export const useEmployeeContext = () => {
  const context = useContext(EmployeesContext);
  if (!context) {
    throw new Error(
      "useEmployeeContext must be used within a EmployeeProvider"
    );
  }
  return context;
};

export const EmployeesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const filterById = (id: string) => {
    const filteredEmployees: Employee[] | undefined = employees?.filter(
      (item) => item.id === id
    );
    if (filteredEmployees?.length) {
      setEmployee(filteredEmployees[0]);
    } else {
      setEmployee(null); // or handle the case where no user or multiple users are found
    }

    console.log(employee);
  };

  const [isOpenFormEditData, setIsOpenFormEditData] = useState<boolean>(false);
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [employees, setEmployees] = useState<Employee[] | null>([
    {
      id: "a29",
      firstname: "John",
      lastname: "Doe",
      salary: 999,
      status: "Na urlopie",
      phonenumber: "523-122-333",
      address: "string",
      city: "string",
      zip: "string",
      dateofbirth: "date",
    },
    {
      id: "a4",
      firstname: "Fox",
      lastname: "Mulder",
      salary: 1000,
      status: "?",
      phonenumber: "545-122-563",
      address: "string",
      city: "Washingtone",
      zip: "string",
      dateofbirth: "date",
    },
    {
      id: "b3",
      firstname: "Dana",
      lastname: "Scully",
      salary: 12000,
      status: "????",
      phonenumber: "555-122-222",
      address: "string",
      city: "string",
      zip: "string",
      dateofbirth: "date",
    },
    {
      id: "b17",
      firstname: "Dana",
      lastname: "Ecully",
      salary: 12000,
      status: "????",
      phonenumber: "555-122-222",
      address: "string",
      city: "string",
      zip: "string",
      dateofbirth: "date",
    },
    {
      id: "13",
      firstname: "Diana",
      lastname: "Spencer",
      salary: 12000,
      status: "????",
      phonenumber: "555-122-222",

      address: "string",
      city: "string",
      zip: "string",
      dateofbirth: "date",
    },
    {
      id: "c2z",
      firstname: "Alan",
      lastname: "Doe",
      salary: 1000,
      status: "Na urlopie",
      phonenumber: "555-122-113",
      address: "string",
      city: "string",
      zip: "string",
      dateofbirth: "date",
    },
    {
      id: "b8",
      firstname: "Martin",
      lastname: "Mulder",
      salary: 999,
      status: "Na urlopie",
      phonenumber: "555-122-456",
      address: "string",
      city: "string",
      zip: "string",
      dateofbirth: "date",
    },
  ]);

  const context = {
    employees,
    setEmployees,
    employee,
    setEmployee,
    filterById,
    isOpenFormEditData,
    setIsOpenFormEditData,
  };

  return (
    <EmployeesContext.Provider value={context}>
      {children}
    </EmployeesContext.Provider>
  );
};
