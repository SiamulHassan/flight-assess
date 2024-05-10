// import React from 'react'
import Button from "./Button";
import Table from "./Table";

const FlightTable = () => {
  const handleSelect = () => {};
  return (
    <Table cols="0.7fr 0.7fr 0.8fr 0.7fr 1fr 1fr 1fr 1fr 0.7fr">
      <Table.Header>
        <div>Flight</div>
        <div>Aircraf</div>
        <div>Class</div>
        <div>Fare</div>
        <div>Route</div>
        <div>Departure</div>
        <div>Arrival</div>
        <div>Duration</div>
        <div>Price</div>
      </Table.Header>
      <div>
        <Table.Row>
          <p>TK 333</p>
          <p>723</p>
          <p>E</p>
          <p>EFPXOW</p>
          <p>DAC-IST</p>
          <p>2022-11-22222</p>
          <div className="flex gap-8">
            <p>2022-15-22222</p>
            <span>---</span>
          </div>
          <p>19H 00M</p>
          <p>2630.30</p>
        </Table.Row>
        <Table.Row>
          <p>TK 333</p>
          <p>723</p>
          <p>E</p>
          <p>EFPXOW</p>
          <p>DAC-IST</p>
          <p>2022-11-22222</p>
          <div className="flex gap-8">
            <p>2022-15-22222</p>
            <span>---</span>
          </div>
          <p></p>
          <Button onClick={handleSelect}>Select</Button>
        </Table.Row>
      </div>
    </Table>
  );
};

export default FlightTable;
