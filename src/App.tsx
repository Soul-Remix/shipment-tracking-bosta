import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TrackingInput from "@/components/TrackingInput/TrackingInput";
import TrackingDetail from "@/components/TrackingDetail/TrackingDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
        <TrackingInput/>
        <TrackingDetail/>
    </div>
  );
}

export default App;
