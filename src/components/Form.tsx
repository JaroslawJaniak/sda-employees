import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";

interface FormProps {
  hidden: boolean;
}

export const Form = ({ hidden }: FormProps) => {
const context = useContext(EmployeesContext);

  return (
    <>
      <form
        action=""
        className="fixed-top needs-validation col-4 shadow m-auto my-5 bg-white border border-4 border-dark  shadow-lg "
        hidden={hidden}
      >
        <div className="m-1 text-start row g-5">
          <div className="col-6">
            <label className="form-label">First name*</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
            />
          </div>
          <div className="col-6">
            <label className="form-label">Last name*</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label">Phone number*</label>
            <input
              type="text"
              className="form-control"
              id="phone1"
              placeholder="1234 Main St"
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label">Address*</label>
            <input
              type="text"
              className="form-control"
              id="address1"
              placeholder="1234 Main St"
              required
            />
          </div>
          <div className="col-12 col-md-5">
            <label className="form-label">Country*</label>
            <select
              id="country"
              className="form-select"
              aria-label="Default select example"
              required
            >
              <option selected disabled>
                Choose employee state...
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-12 col-md-5">
            <label className="form-label">State*</label>
            <select
              id="state"
              className="form-select"
              aria-label="Default select example"
              required
            >
              <option selected disabled>
                Choose...
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-12 col-md-2">
            <label className="form-label">Zip*</label>
            <input type="text" className="form-control" id="zip" required />
          </div>

          <div className="col-12">
            <label className="form-label">
              Email <span className="text-body-secondary">(optional)</span>
            </label>
            <div className="input-group">
              <input
                type="email"
                className="form-control text-body-secondary"
                id="basic-url"
                placeholder="your@mail.com"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
        </div>

        <hr className="my-5" />
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label">
              Shipping address is the same as my billing address
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label">
              Save this information for the next time
            </label>
          </div>
        </div>
        <hr className="my-5" />

        <button
          type="button"
          className="btn-close  position-absolute top-0 end-0 mt-2 me-2"
          aria-label="Close"
          onClick={() =>
            context?.setIsOpenFormEditData(!context.isOpenFormEditData)
          }
        ></button>
      </form>
    </>
  );
};
