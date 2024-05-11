import { useMemo } from "react";
import Button from "../../ui/Button";
import Table from "../../ui/Table";

// destructuring flightOffer array from fakeData.

const FlightTable = ({ fakeData: { flightOffer } }) => {
  /*
  
** flightColumns : table columns and its values are mapped here.
** useMemo for memoizing the values for avoiding unnecessary re-render 

**Table, Table.Header and Table.Row (Compound Composition Pattern for better reusability)**
** Table component takes 'how many table cols we want' as grid values
** Table.Header represents table header 
** Table.Row represents table rows

*/

  const flightColumns = useMemo(
    () => [
      {
        title: "Flight",
        getColumnValue: (flightOffer) =>
          flightOffer.itineraries.map((segment) =>
            segment.segments.map((seg, i) => (
              <p key={i}>
                {seg.marketingCarrier} {seg.aircraft}
              </p>
            ))
          ),
      },

      {
        title: "Aircraft",
        getColumnValue: (flightOffer) =>
          flightOffer.itineraries.map((segment) =>
            segment.segments.map((seg, i) => <p key={i}>{seg.flightNumber}</p>)
          ),
      },
      {
        title: "Class",
        getColumnValue: (flightOffer) =>
          flightOffer.class.map((classes) =>
            classes.map((cls, i) => <p key={i}>{cls}</p>)
          ),
      },
      {
        title: "Fare",
        getColumnValue: (flightOffer) =>
          flightOffer.fareBasis.map((fares) =>
            fares.map((fare, i) => <p key={i}>{fare}</p>)
          ),
      },
      {
        title: "Route",
        getColumnValue: (flightOffer) =>
          flightOffer.itineraries.map((segment) =>
            segment.segments.map((seg, i) => (
              <p key={i}>
                {seg.departure.iataCode} - {seg.arrival.iataCode}
              </p>
            ))
          ),
      },
      {
        title: "Departure",
        getColumnValue: (flightOffer) =>
          flightOffer.itineraries.map((segment) =>
            segment.segments.map((seg, i) => <p key={i}>{seg.departure.at}</p>)
          ),
      },
      {
        title: "Arrival",
        getColumnValue: (flightOffer) =>
          flightOffer.itineraries.map((segment) =>
            segment.segments.map((seg, i) => (
              <div key={i} className="flex gap-8">
                <span>{seg.arrival.at} </span>
                <span>-----</span>
              </div>
            ))
          ),
      },
      {
        title: "Duration",
        getColumnValue: (flightOffer) =>
          flightOffer.itineraries.map((segment, i) => (
            <p key={i}>{segment.duration}</p>
          )),
      },
      {
        title: "Price",
        getColumnValue: (flightOffer) => (
          <div className="flex flex-col items-center">
            <p>{flightOffer.price}</p>
            <Button>Select</Button>
          </div>
        ),
      },
    ],
    []
  );
  return (
    <Table cols="0.5fr 0.5fr 0.5fr 1.2fr 1fr 1fr 1fr 0.6fr 0.5fr">
      <Table.Header>
        {flightColumns.map((column) => (
          <div key={column.title}>{column.title}</div>
        ))}
      </Table.Header>

      <div>
        {flightOffer.map((flightOffer, index) => (
          <Table.Row key={index} isEven={(index + 1) % 2 === 0}>
            {flightColumns.map((column) => (
              <div key={column.title}>{column.getColumnValue(flightOffer)}</div>
            ))}
          </Table.Row>
        ))}
      </div>
    </Table>
  );
};

export default FlightTable;
