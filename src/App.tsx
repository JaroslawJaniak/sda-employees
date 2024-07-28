import { Table } from "./components/Table";
import { Employee } from "./models/Employee";
import "./App.css";

function App() {
  const mockData: Employee[] = [
    {
      id: "29",
      firstname: "John",
      lastname: "Doe",
      salary: 999,
      status: "Na urlopie",
      phonenumber: "523-122-333",
    },
    {
      id: "4",
      firstname: "Fox",
      lastname: "Mulder",
      salary: 1000,
      status: "?",
      phonenumber: "545-122-563",
    },
    {
      id: "3",
      firstname: "Dana",
      lastname: "Scully",
      salary: 12000,
      status: "????",
      phonenumber: "555-122-222",
    },
    {
      id: "17",
      firstname: "Dana",
      lastname: "Ecully",
      salary: 12000,
      status: "????",
      phonenumber: "555-122-222",
    },
    {
      id: "13",
      firstname: "Diana",
      lastname: "Spencer",
      salary: 12000,
      status: "????",
      phonenumber: "555-122-222",
    },
    {
      id: "2",
      firstname: "Alan",
      lastname: "Doe",
      salary: 1000,
      status: "Na urlopie",
      phonenumber: "555-122-113",
    },
    {
      id: "8",
      firstname: "Martin",
      lastname: "Mulder",
      salary: 999,
      status: "Na urlopie",
      phonenumber: "555-122-456",
    },
  ];

  return (
    <>
      <main className="container ">
        <h1 className="pt-4 pb-4 mx-auto title-project">Employees List - React App</h1>
        <Table data={mockData} />
      </main>
    </>
  );
}

export default App;
