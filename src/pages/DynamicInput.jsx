import React, { useState } from "react";

//Import React Icons
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const DynamicInput = () => {
  //State For Inputs  Field

  const [inputs, setInputs] = useState([
    {
      id: Date.now(),
      itemName: "itemName",
      price: 0,
      quantity: 0,
      total: 0,
    },
  ]);

  //Add Input Field

  function handleInputSet() {
    setInputs((state) => {
      return [
        ...state,
        {
          id: Date.now(),
          itemName: "",
          price: 0,
          quantity: 0,
          total: 0,
        },
      ];
    });
  }

  //Get Value Of Inputs Fields

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedInputs = [...inputs];
    updatedInputs[index] = {
      ...inputs[index],
      [name]: value,
    };
    setInputs(updatedInputs);
  };

  //Remove Input Field

  const removeInputSet = (id) => {
    const updateInputs = inputs.filter((item) => item.id !== id);
    setInputs(updateInputs);
  };

  //Handle Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  //Arr Of each Row Total
  const TotalArr = inputs.map((item) => item.total);

  //Container For Total Of Over All
  const OverAllTotal = TotalArr.reduce((prev, current) => prev + current, 0);

  return (
    // Main Div
    <div className="flex items-center p-4 justify-center mx-auto mt-10 w-[90%]">
      {/* Form */}
      <form onSubmit={handleSubmit}>
        {inputs.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center mt-3 gap-2 p-4 bg-gray-100 rounded-lg"
          >
            <input
              required
              className="px-2 py-1 border rounded"
              type="text"
              placeholder="Enter Item Name"
              name="itemName"
              value={item.itemName}
              onChange={(event) => handleInputChange(index, event)}
            />
            <input
              required
              className="px-2 py-1 border rounded"
              type="number"
              placeholder="Enter Price"
              name="price"
              value={item.price}
              onChange={(event) => handleInputChange(index, event)}
            />
            <input
              required
              className="px-2 py-1 border rounded"
              type="number"
              placeholder="Enter Quantity"
              name="quantity"
              value={item.quantity}
              onChange={(event) => handleInputChange(index, event)}
            />
            <input
              required
              className="px-2 py-1 border rounded"
              type="number"
              placeholder="Total"
              name="total"
              value={(item.total = item.price * item.quantity)}
              onChange={(event) => handleInputChange(index, event)}
            />
            {/* Button For Remove Input Field */}
            {index >= 1 && (
              <AiOutlineMinusSquare
                className="text-blue-500 cursor-pointer hover:text-blue-900"
                size={30}
                onClick={() => removeInputSet(item.id)}
              />
            )}
          </div>
        ))}
        {/* Button For Add Input Field */}
        <AiOutlinePlusSquare
          className="text-blue-700 cursor-pointer hover:text-blue-900 absolute top-6 right-32"
          size={30}
          onClick={handleInputSet}
          title="Add Input Field"
        />
        {/* Set Inputs With Initial value Reset Button */}
        <button
          onClick={() =>
            setInputs([
              {
                id: Date.now(),
                itemName: "itemName",
                price: 0,
                quantity: 0,
                total: 0,
              },
            ])
          }
          className="absolute top-4 p-2 bg-red-600 hover:bg-red-900 rounded-md text-white font-semibold"
        >
          Reset
        </button>
        {/* Div For Display Total */}
        {OverAllTotal > 0 && (
          <div className="mt-2 text-blue-800 font-semibold text-2xl">
            Total :
            <span className="text-2xl font-bold ml-3">{OverAllTotal}</span>
          </div>
        )}
        {/* Button For Print Values Of Inputs Fields */}
        <button
          type="submit"
          className="p-2 bg-slate-600 hover:bg-slate-900 font-semibold text-white rounded-md mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicInput;
