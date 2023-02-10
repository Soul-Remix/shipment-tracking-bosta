import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TrackingInput from "@/components/TrackingInput/TrackingInput";
import TrackingDetail from "@/components/TrackingDetail/TrackingDetail";
import ActivityLog from "@/components/ActivityLog/ActivityLog";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <TrackingInput/>
            <div className="details-container">
                <TrackingDetail/>
                <ActivityLog/>
            </div>
        </div>
    );
}

export default App;
