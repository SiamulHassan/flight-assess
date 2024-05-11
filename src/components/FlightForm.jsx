// import React from "react";
import { useEffect, useState } from "react";
import Button from "./Button";
import HorizontalBorder from "./HorizontalBorder";
import Input from "./Input";
import SelectBox from "./SelectBox";
import { HiOutlinePlusSm } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fakeData from "../../data/data.json";
const dayFrom = [
  { value: "1", label: "Day- 1" },
  { value: "2", label: "Day- 2" },
  { value: "3", label: "Day- 3" },
];
const dayTo = [
  { value: "1", label: "Day+ 1" },
  { value: "2", label: "Day+ 2" },
  { value: "3", label: "Day+ 3" },
];
const travelTime = [
  { value: "Anytime", label: "Anytime" },
  { value: "Today", label: "Today" },
  { value: "Tommorow", label: "Tommorow" },
];
const travePersonType = [
  { value: "ADT ", label: "ADT " },
  { value: "CHD", label: "CHD" },
  { value: "STD", label: "STD" },
];
const totalPerson = [
  { value: "1 ", label: "1 " },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];
const FlightForm = ({ setHasSearchedFlight }) => {
  const [formData, setFormData] = useState({
    lhr: "",
    cdg: "",
    date: "",
    dayFrom: "1",
    dayTo: "1",
    travelTime: "Anytime",
    travePersonType: "ADT",
    totalPerson: "1",
    extraOptions: false,
    environment: "dummy",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "") {
        errors[key] = "field cannot be empty";
      }
    });
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Form is valid, proceed with submission
      // pass the fake dummy data form here
      setHasSearchedFlight(true);
    }
  };
  useEffect(() => {
    const errorMessage = Object.keys(formErrors)
      .map((key) => `${key} ${formErrors[key]}`)
      .join("\n");
    if (errorMessage) {
      toast.error("fields can not be empty");
    }
  }, [formErrors]);

  return (
    <>
      <ToastContainer />
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-8 gap-x-2 items-center">
          <Input
            placeholder="LHR"
            type="text"
            name="lhr"
            onChange={handleChange}
          />
          <Input
            placeholder="CDG"
            type="text"
            name="cdg"
            onChange={handleChange}
          />
          <Input
            placeholder=""
            type="date"
            name="date"
            onChange={handleChange}
          />
          <SelectBox options={dayFrom} name="dayFrom" onChange={handleChange} />
          <SelectBox options={dayTo} name="dayTo" onChange={handleChange} />
          <div className="flex items-center gap-2">
            <SelectBox
              options={travelTime}
              name="travelTime"
              onChange={handleChange}
            />
            <HiOutlinePlusSm className="text-[25px]" />
          </div>
          <SelectBox
            options={travePersonType}
            name="travePersonType"
            onChange={handleChange}
          />
          <div className="flex items-center gap-2">
            <SelectBox
              options={totalPerson}
              name="totalPerson"
              onChange={handleChange}
            />
            <HiOutlinePlusSm className="text-[25px]" />
          </div>
        </div>
        <div className="mt-4">
          <HorizontalBorder color="#2e3791" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <Input
              type="checkbox"
              name="extraOptions"
              onChange={handleChange}
            />
            <span className="font-bold text-md mt-1">Extra Options</span>
          </div>

          <div className="font-bold flex gap-4">
            <span>Environment</span>
            <div className="flex gap-2">
              <Input type="radio" name="environment" onChange={handleChange} />
              <label htmlFor="dummy">Dummy</label>
            </div>
            <div className="flex gap-2">
              <Input type="radio" name="environment" onChange={handleChange} />
              <label htmlFor="PDT">PDT</label>
            </div>
          </div>
          <div className="search btn">
            <Button>Submit</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FlightForm;
