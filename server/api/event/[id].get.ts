import * as eventsData from "~/assets/data/events-detail.json";
import { Event } from "~/model/event";

let events = [] as Event[];

export default defineEventHandler((event) => {
  if (events.length === 0) {
    if (!("default" in eventsData)) {
      throw new Error("events.json has no default property");
    }
    eventsData.default.forEach((event) => {
      events.push(event);
    });
  }

  const id = getRouterParam(event, "id");
  if (id === undefined) {
    return {};
  }
  // convert to number, throw error if failed
  if (Number.isNaN(id)) {
    throw new Error("id is not a number");
  }
  const idNumber = Number(id);
  return events.find((e) => e.id === idNumber);
});
