import Container from "./ui/Container";
import Header from "./ui/Header";
import SelectTrip from "./ui/SelectTrip";
import HorizontalBorder from "./ui/HorizontalBorder";
import FlightForm from "./Features/FindFlight/FlightForm";
import FlightTable from "./Features/FindFlight/FlightTable";
import NavBar from "./ui/NavBar";
import { useState } from "react";
import fakeData from "../data/data.json";

function App() {
  const [hasSearchedFlight, setHasSearchedFlight] = useState(false);
  return (
    <>
      <div className="shadow-md">
        <div className="bg-[#1f2937] py-4">
          <Container>
            <NavBar />
          </Container>
        </div>
        <Container>
          <Header />
        </Container>
      </div>
      <Container>
        <SelectTrip />
        <div>
          <HorizontalBorder color="#2e3791" />
          <FlightForm setHasSearchedFlight={setHasSearchedFlight} />
          <HorizontalBorder color="#2e3791" />
        </div>
        {hasSearchedFlight && <p className="mt-2">data parsed successfully</p>}
        <div className="mb-7">
          {hasSearchedFlight && <FlightTable fakeData={fakeData} />}
        </div>
        {/* <FlightTable fakeData={fakeData} /> */}
      </Container>
    </>
  );
}

export default App;
