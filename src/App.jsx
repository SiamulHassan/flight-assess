import Container from "./components/Container";
import Header from "./components/Header";
import SelectTrip from "./components/SelectTrip";
import HorizontalBorder from "./components/HorizontalBorder";
import FlightForm from "./components/FlightForm";
import FlightTable from "./components/FlightTable";
import NavBar from "./components/NavBar";
import { useState } from "react";
import fakeData from "../data/data.json";

function App() {
  // const parsed = JSON.parse(fakeData);
  const [hasSearchedFlight, setHasSearchedFlight] = useState(false);
  console.log(hasSearchedFlight);
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
      </Container>
    </>
  );
}

export default App;
