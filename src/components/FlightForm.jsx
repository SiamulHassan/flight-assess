// import React from "react";
import Button from "./Button";
import HorizontalBorder from "./HorizontalBorder";
import Input from "./Input";
import SelectBox from "./SelectBox";
import { HiOutlinePlusSm } from "react-icons/hi";
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
const FlightForm = () => {
  return (
    <form className="my-4">
      <div className="grid grid-cols-8 gap-x-2 items-center">
        <Input placeholder="LHR" type="text" />
        <Input placeholder="CDG" type="text" />
        <Input placeholder="" type="date" />
        <SelectBox options={dayFrom} />
        <SelectBox options={dayTo} />
        <div className="flex items-center gap-2">
          <SelectBox options={travelTime} />
          <HiOutlinePlusSm className="text-[25px]" />
        </div>
        <SelectBox options={travePersonType} />
        <div className="flex items-center gap-2">
          <SelectBox options={totalPerson} />
          <HiOutlinePlusSm className="text-[25px]" />
        </div>
      </div>
      <div className="mt-4">
        <HorizontalBorder color="#2e3791" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <Input type="checkbox" />
          <span className="font-bold text-md mt-1">Extra Options</span>
        </div>

        <div className="font-bold flex gap-4">
          <span>Environment</span>
          <div className="flex gap-2">
            <Input type="radio" name="dummy" />
            <label htmlFor="dummy">Dummy</label>
          </div>
          <div className="flex gap-2">
            <Input type="radio" name="PDT" />
            <label htmlFor="PDT">PDT</label>
          </div>
        </div>
        <div className="search btn">
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default FlightForm;
