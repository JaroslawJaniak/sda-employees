import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";


interface DataViewProps {
  isOpen: boolean;
  setIsOpen: (status: boolean) => void;
}

export const DataView = ({ isOpen, setIsOpen }: DataViewProps) => {
  const context = useContext(EmployeesContext);

  return (
    <section>
      <div
        className={` p-3 col-8 position-relative border border-dark-subtle m-auto  bg-dark text-light collapsible`}
        hidden={!isOpen}
      >
        <p>
          {context?.employee?.firstname} {context?.employee?.lastname}, phone:{" "}
          {context?.employee?.phonenumber}, address:{" "}
          {context?.employee?.address}
        </p>

        <button
          type="button"
          className="btn-close btn-close-white position-absolute top-0 end-0 mt-2 me-2"
          aria-label="Close"
          onClick={() => setIsOpen(false)}
        ></button>

        <div className="row justify-content-around position-absolute bottom-0 col-12 mb-3">
          <button type="button" className="btn btn-secondary btn-sm col-2" onClick={()=>context?.setIsOpenFormEditData(true)}>
            Edit
          </button>
          <button type="button" className="btn btn-secondary btn-sm col-2">
            Delete
          </button>
        </div>
      </div>
      
    </section>
  );
};
