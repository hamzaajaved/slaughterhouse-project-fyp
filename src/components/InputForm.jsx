import React, { useRef, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const InputForm = () => {
  const { sendTransaction, isLoading } = useContext(ProductsContext);
  const categoryRef = useRef();
  const slaughterhouseNameRef = useRef();
  const slaughterhouseLocationRef = useRef();
  const batchNoRef = useRef();
  const useWithinDaysRef = useRef();
  const halalRef = useRef();
  const haramRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Check for halal
    const halal = halalRef.current.checked ? true : false;
    let productData = {
      category: categoryRef.current.value,
      halal: halal,
      slaughterhouseName: slaughterhouseNameRef.current.value,
      slaughterhouseLocation: slaughterhouseLocationRef.current.value,
      batchNo: batchNoRef.current.value,
      useWithinDays: useWithinDaysRef.current.value,
    };
    sendTransaction(productData);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Category"
          name="category"
          id="category"
          ref={categoryRef}
          required
        />
        <div>
          <label>
            <input
              type="radio"
              name="Halal"
              id="Halal"
              ref={halalRef}
              defaultChecked
            />
            Halal
          </label>
          <label>
            <input type="radio" name="Halal" id="Halal" ref={haramRef} />
            Haram
          </label>
        </div>
        <input
          type="text"
          placeholder="Slaughterhouse Name"
          name="slaughterhouseName"
          id="slaughterhouseName"
          ref={slaughterhouseNameRef}
        />
        <input
          type="text"
          placeholder="Slaughterhouse Location"
          name="slaughterhouseLocation"
          id="slaughterhouseLocation"
          ref={slaughterhouseLocationRef}
        />
        <input
          type="number"
          placeholder="Use Within Days"
          name="useWithinDays"
          id="useWithinDays"
          ref={useWithinDaysRef}
        />
        <input
          type="number"
          placeholder="Batch No"
          name="batchNo"
          id="batchNo"
          ref={batchNoRef}
        />
        {!isLoading ? <button type="submit">Submit</button> : <p>Loading...</p>}
      </form>
    </div>
  );
};

export default InputForm;
