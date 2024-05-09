import fakeData from "../data/data.json";
import Container from "./components/Container";
import Header from "./components/Header";
import img from "../images/output.png";
import SelectTrip from "./components/SelectTrip";
import HorizontalBorder from "./components/HorizontalBorder";
import FlightForm from "./components/FlightForm";

function App() {
  // const parsed = JSON.parse(fakeData);
  console.log(fakeData.flightOffer);
  return (
    <>
      <div className="shadow-md">
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
        <img src={img} alt="img" />;
      </Container>
    </>
  );
}

export default App;
