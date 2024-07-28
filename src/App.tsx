import { Table } from "./components/Table";
import { Employee } from "./models/Employee";
import "./App.css";

function App() {
  const mockData: Employee[] = [
    {
      id: "1",
      firstname: "John",
      lastname: "Doe",
      salary: 999,
      status: "Na urlopie",
      phonenumber: "523-122-333",
    },
    {
      id: "2",
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
      id: "4",
      firstname: "Alan",
      lastname: "Doe",
      salary: 1000,
      status: "Na urlopie",
      phonenumber: "555-122-113",
    },
    {
      id: "1",
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
        <h1 className="pt-4 pb-4">SDA Employee App</h1>
        <Table data={mockData} />
      </main>
    </>
  );
}

export default App;
