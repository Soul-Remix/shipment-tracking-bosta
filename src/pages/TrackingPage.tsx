import styles from "./trackingPage.module.css"
import TrackingInput from "@/features/tracking/TrackingInput/TrackingInput";
import TrackingDetail from "@/features/tracking/TrackingDetail/TrackingDetail";
import ActivityLog from "@/features/tracking/ActivityLog/ActivityLog";
import {useState} from "react";
import {useQuery} from "react-query";
import searchNum from "@/features/tracking/api/searchNum";

function TrackingPage() {
    const [trackingNum, setTrackingNum] = useState("");
    const {
        isLoading,
        isError,
        data,
        error,
        refetch,
    } = useQuery(trackingNum, searchNum, {
        enabled: false,
    })

    const handleNumChange = (val: string) => {
        setTrackingNum(val);
    }

    return <div className={styles.container}>
        <TrackingInput inputValue={trackingNum} onInputChange={handleNumChange} onSubmit={refetch}/>
        <TrackingDetail/>
        <ActivityLog/>
    </div>
}

export default TrackingPage;