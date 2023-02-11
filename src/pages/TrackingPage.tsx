import styles from "./trackingPage.module.css";
import TrackingInput from "@/features/tracking/TrackingInput/TrackingInput";
import TrackingDetail from "@/features/tracking/TrackingDetail/TrackingDetail";
import ActivityLog from "@/features/tracking/ActivityLog/ActivityLog";
import { useState } from "react";
import { useQuery } from "react-query";
import searchNum from "@/features/tracking/api/searchNum";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

function TrackingPage() {
  const [trackingNum, setTrackingNum] = useState("");
  const [num, setNum] = useState("");

  const { isLoading, isError, data, error, refetch } = useQuery(
    "Tracking",
    async () => searchNum(trackingNum),
    { enabled: false }
  );

  const handleValueChange = (val: string) => {
    setTrackingNum(val);
  };

  const handleSubmit = () => {
    setNum(trackingNum);
    refetch();
  };

  return (
    <div className={styles.container}>
      <TrackingInput
        inputValue={trackingNum}
        onInputChange={handleValueChange}
        onSubmit={handleSubmit}
      />
      {isError && <ErrorMessage shipmentNum={num} />}
      {data && (
        <>
          <TrackingDetail
            shipmentNum={data.TrackingNumber}
            status={data.CurrentStatus.state}
            message={data.CurrentStatus.state}
            date={data.CurrentStatus.timestamp}
            lastUpdate={data.CurrentStatus.timestamp}
          />
          <ActivityLog transitEvents={data.TransitEvents} />
        </>
      )}
    </div>
  );
}

export default TrackingPage;
