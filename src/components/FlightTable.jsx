// import React from 'react'
import Button from "./Button";
import Table from "./Table";
import fakeData from "../../data/data.json";
// import FlightColumn from "./FlightColumn";
const FlightTable = () => {
  //   console.log(fakeData.flightOffer);
  // const mySlice = fakeData.flightOffer.slice(0, 2);
  // console.log(mySlice);
  const handleSelect = () => {};
  return (
    <Table cols="0.5fr 0.5fr 0.5fr 1.3fr 1fr 1fr 1fr 0.5fr 0.5fr">
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
        {fakeData.flightOffer.map((flightOffer, index) => (
          <Table.Row key={index} isEven={index % 2 === 0}>
            <div>
              {flightOffer.itineraries.map((segment) =>
                segment.segments.map((seg, index) => (
                  <div key={index}>
                    <span>
                      {seg.marketingCarrier} {seg.aircraft}
                    </span>
                  </div>
                ))
              )}
            </div>
            <div>
              {flightOffer.itineraries.map((segment) =>
                segment.segments.map((seg, index) => (
                  <div key={index}>
                    <span>{seg.flightNumber}</span>
                  </div>
                ))
              )}
            </div>
            <div>
              {flightOffer.class.map((cls, index) => (
                <div key={index}>
                  <span>{cls}</span>
                </div>
              ))}
            </div>
            <div>
              {flightOffer.fareBasis.map((fare, index) => (
                <div key={index}>
                  <span>{fare}</span>
                </div>
              ))}
            </div>
            <div>
              {flightOffer.itineraries.map((segment) =>
                segment.segments.map((seg, index) => (
                  <div key={index}>
                    <span>
                      {seg.departure.iataCode} - {seg.arrival.iataCode}
                    </span>
                  </div>
                ))
              )}
            </div>
            <div>
              {flightOffer.itineraries.map((segment) =>
                segment.segments.map((seg, index) => (
                  <div key={index}>
                    <span>{seg.departure.at}</span>
                  </div>
                ))
              )}
            </div>
            <div>
              {flightOffer.itineraries.map((segment) =>
                segment.segments.map((seg, index) => (
                  <div key={index} className="flex gap-8">
                    <span>{seg.arrival.at} </span>
                    <span>-----</span>
                  </div>
                ))
              )}
            </div>
            <div>
              {flightOffer.itineraries.map((segment, index) => (
                <span key={index}>{segment.duration}</span>
              ))}
            </div>
            <div>
              {<span key={index}>{flightOffer.price}</span>}
              <div>
                <Button onClick={handleSelect}>Select</Button>
              </div>
            </div>
          </Table.Row>
        ))}
      </div>
    </Table>
  );
};

export default FlightTable;
