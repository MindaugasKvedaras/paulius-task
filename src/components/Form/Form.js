import "./Form.css";
import { BsArrowRight } from "react-icons/bs";

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <div className="first-container">
          <div>
            <label for="senderadress" className="label">
              Paėmimo šalis<span className="mandatory"> *</span>
            </label>
            <br />
            <select
              id="sendercountry"
              name="sendercountry"
              className="select-country"
            >
              <option value="lithuania" className="option-text">
                Lietuva
              </option>
              <option value="latvia" className="option-text">
                Latvija
              </option>
            </select>
          </div>
          <BsArrowRight className="right-arrow" />
          <div>
            <label for="deliveryaddress" className="label">
              Paėmimo šalis<span className="mandatory"> *</span>
            </label>
            <br />
            <select
              id="deliveryaddress"
              name="deliveryaddress"
              className="select-country"
            >
              <option value="norway" className="option-text">
                Norvegija
              </option>
              <option value="sweden" className="option-text">
                Švedija
              </option>
            </select>
          </div>
        </div>
        <div className="second-container">
          <div>
            <label for="date" className="label">
              Siuntimo data<span className="mandatory"> *</span>
            </label>
            <br />
            <input type="date" id="deliverydate" name="deliverydate" />
          </div>
          <div>
            <label for="shipment" className="label">
              Siuntos tipas<span className="mandatory"> *</span>
            </label>
            <br />
            <select
              id="shipment"
              name="shipment"
              className="select-country shipment-type"
            >
              <option
                value=""
                disabled
                selected
                hidden
                className="option-text disabled"
              >
                Pasirinkite
              </option>
              <option value="fast" className="option-text">
                Skubus
              </option>
              <option value="regular" className="option-text">
                Įprastas
              </option>
            </select>
          </div>
          <div>
            <label for="weight" className="label">
              Svoris (kg)<span className="mandatory"> *</span>
            </label>
            <br />
            <input
              type="number"
              id="weight"
              name="weight"
              className="select-country weight"
            />
          </div>
        </div>
        <div className="second-container">
            <div>
              <label for="description" className="label">
                Siuntos aprašymas
              </label><br/>
              <textarea id="description" name="description" minLength="2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </textarea>
            </div>
          </div>

      </form>
    </div>
  );
};

export default Form;
