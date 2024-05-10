import fakeData from "../data/data.json";
import Container from "./components/Container";
import Header from "./components/Header";
import img from "../images/output.png";
import SelectTrip from "./components/SelectTrip";
import HorizontalBorder from "./components/HorizontalBorder";
import FlightForm from "./components/FlightForm";
import FlightTable from "./components/FlightTable";
import NavBar from "./components/NavBar";

function App() {
  // const parsed = JSON.parse(fakeData);
  // console.log(fakeData.flightOffer);
  return (
    <>
      <div className="shadow-md">
        <div className="bg-[#1f2937] py-6">
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
          <FlightForm />
          <HorizontalBorder color="#2e3791" />
        </div>
        <p className="mt-2">data parsed successfully</p>
        <br />
        <FlightTable />
        <br />
        <img src={img} alt="img" />;
      </Container>
    </>
  );
}

export default App;
