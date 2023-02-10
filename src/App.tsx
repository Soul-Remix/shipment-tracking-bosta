import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {queryClient} from "@/lib/react-query";
import {QueryClientProvider} from "react-query";
import TrackingPage from "@/pages/TrackingPage";

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <NavBar/>
                <TrackingPage/>
            </div>
        </QueryClientProvider>
    );
}

export default App;
