import { useMemo } from "react";
import Button from "../../ui/Button";
import Table from "../../ui/Table";

const FlightTable = ({ fakeData: { flightOffer } }) => {
  const flightColumns = useMemo(
    () => [
      {
        title: "Flight",
        accessor: (flightOffer) =>
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
        accessor: (flightOffer) =>
          flightOffer.itineraries.map((segment) =>
            segment.segments.map((seg, i) => <p key={i}>{seg.flightNumber}</p>)
          ),
      },
      {
        title: "Class",
        accessor: (flightOffer) =>
          flightOffer.class.map((cls, i) => <p key={i}>{cls}</p>),
      },
      {
        title: "Fare",
        accessor: (flightOffer) =>
          flightOffer.fareBasis.map((fare, i) => <p key={i}>{fare}</p>),
      },
      {
        title: "Route",
        accessor: (flightOffer) =>
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
        accessor: (flightOffer) =>
          flightOffer.itineraries.map((segment) =>
            segment.segments.map((seg, i) => <p key={i}>{seg.departure.at}</p>)
          ),
      },
      {
        title: "Arrival",
        accessor: (flightOffer) =>
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
        accessor: (flightOffer) =>
          flightOffer.itineraries.map((segment, i) => (
            <p key={i}>{segment.duration}</p>
          )),
      },
      {
        title: "Price",
        accessor: (flightOffer) => (
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
    <Table cols="0.5fr 0.5fr 0.5fr 1.3fr 1fr 1fr 1fr 0.5fr 0.5fr">
      <Table.Header>
        {flightColumns.map((column) => (
          <div key={column.title}>{column.title}</div>
        ))}
      </Table.Header>

      <div>
        {flightOffer.map((flightOffer, index) => (
          <Table.Row key={index} isEven={(index + 1) % 2 === 0}>
            {flightColumns.map((column) => (
              <div key={column.title}>{column.accessor(flightOffer)}</div>
            ))}
          </Table.Row>
        ))}
      </div>
    </Table>
  );
};

export default FlightTable;
