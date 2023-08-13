import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ createBox }) => {
  const initialState = {
    height: "",
    width: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="height">Height</label>
        <input
          onChange={handleChange}
          id="height"
          type="text"
          name="height"
          placeholder="height"
          value={formData.height}
        />
      </div>
      <div>
        <label htmlFor="width">Width</label>
        <input
          onChange={handleChange}
          id="width"
          type="text"
          name="width"
          placeholder="width"
          value={formData.width}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          onChange={handleChange}
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          placeholder="background color"
          value={formData.backgroundColor}
        />
      </div>
      <button id="new-box-btn">Add Box</button>
    </form>
  );
};

export default NewBoxForm;
