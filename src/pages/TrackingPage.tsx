import styles from "./trackingPage.module.css";
import TrackingInput from "@/features/tracking/TrackingInput/TrackingInput";
import TrackingDetail from "@/features/tracking/TrackingDetail/TrackingDetail";
import ActivityLog from "@/features/tracking/ActivityLog/ActivityLog";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import searchNum from "@/features/tracking/api/searchNum";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import LoadingModal from "@/components/LoadingModal/LoadingModal";
import useGetQueryParams from "@/hooks/useGetQueryParams";
import FooterImage from "@/assets/FooterImage";

function TrackingPage() {
  const params = useGetQueryParams();

  const [trackingNum, setTrackingNum] = useState(
    params["shipmentTracking"] ?? ""
  );
  const [num, setNum] = useState("");

  useEffect(() => {
    if (trackingNum !== "") {
      refetch();
    }
  }, []);

  const { isLoading, isError, data, refetch } = useQuery(
    "Tracking",
    async () => await searchNum(trackingNum),
    { enabled: false }
  );

  const handleValueChange = (val: string) => {
    setTrackingNum(val);
  };

  const handleSubmit = () => {
    if (trackingNum.length === 0) {
      return;
    }

    let currentUrlParams = new URLSearchParams(window.location.search);
    currentUrlParams.set("shipmentTracking", trackingNum);
    history.pushState(
      history.state,
      "",
      window.location.pathname + "?" + currentUrlParams.toString()
    );
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
      {data && !isError && (
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
      {data === undefined && (
        <div className={styles.footer}>
          <FooterImage />
        </div>
      )}
      <LoadingModal isOpen={isLoading} />
    </div>
  );
}

export default TrackingPage;
