import { EmployeesList } from "./components/EmployeesList";
import "./App.css";

export interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  salary: number;
  status: string;

}

function App() {
  const mockData: Employee[] = [
    {
      id: "1",
      firstname: "John",
      lastname: "Doe",
      salary: 999,
      status: "Na urlopie",
    },
    {
      id: "2",
      firstname: "Fox",
      lastname: "Mulder",
      salary: 1000,
      status: "?",
    },
    {
      id: "3",
      firstname: "Dana",
      lastname: "Scully",
      salary: 1000,
      status: "?",
    },
  ];

  return (
    <>
      <h1 className="read-the-docs">SDA Employee App</h1>
      <EmployeesList data={mockData} />
    </>
  );
}

export default App;
