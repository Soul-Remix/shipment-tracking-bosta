import { TransitEvents } from "@/features/tracking/types/TransitEvents";
import compareDates from "./compareDates";

interface IEvent {
  date: Date;
  events: Array<{
    time: Date;
    event: string;
    hub?: string;
    reason?: string;
  }>;
}

function groupTransitEvents(arr: Array<TransitEvents>) {
  const events: Array<IEvent> = [];

  if (arr.length === 0) {
    return events;
  }

  events.push(createEvent(arr[0]));

  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    if (compareDates(item.timestamp, events[events.length - 1].date)) {
      events[events.length - 1].events.push({
        time: item.timestamp,
        event: item.state,
        hub: item.hub,
        reason: item.reason,
      });
    } else {
      events.push(createEvent(arr[i]));
    }
  }

  return events;
}

function createEvent({ hub, reason, state, timestamp }: TransitEvents) {
  return {
    date: timestamp,
    events: [
      {
        time: timestamp,
        event: state,
        hub: hub,
        reason: reason,
      },
    ],
  };
}

export default groupTransitEvents;
