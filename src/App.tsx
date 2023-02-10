import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {queryClient} from "@/lib/react-query";
import {QueryClientProvider} from "react-query";
import TrackingPage from "@/pages/TrackingPage";
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from "dayjs";

dayjs.extend(relativeTime)

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
