import eventsData from "~/assets/data/events-detail.json";
import type { Event } from "~/model/event";

const events = [] as Event[];

eventsData.forEach((e: Event) => {
  events.push(e);
});

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  if (id === undefined) {
    return {};
  }
  // convert to number, throw error if failed
  if (Number.isNaN(id)) {
    throw new TypeError("id is not a number");
  }
  const idNumber = Number(id);
  return events.find((e) => e.id === idNumber);
});
