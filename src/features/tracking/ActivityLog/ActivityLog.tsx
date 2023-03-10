import { useEffect, useMemo, useState } from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import styles from "./activityLog.module.css";
import TimeLineComponent from "@/components/TimeLineComponent/TimeLineComponent";
import { TransitEvents } from "@/features/tracking/types/TransitEvents";
import groupTransitEvents from "../util/groupTransitEvents";
import { t } from "i18next";

interface props {
  transitEvents: Array<TransitEvents>;
}

function ActivityLog({ transitEvents }: props) {
  const groupedEvents = useMemo(() => {
    return groupTransitEvents(transitEvents);
  }, [transitEvents]);

  return (
    <div className={styles.container}>
      <p>{t("activityLog")}</p>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {groupedEvents.length > 0 &&
          groupedEvents.reverse().map((x, i) => (
            <TimelineItem key={i}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimeLineComponent date={x.date} events={x.events.reverse()} />
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </div>
  );
}

export default ActivityLog;
