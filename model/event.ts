import { Genre } from "@/model/genre";
import { Area } from "@/model/area";

export interface Event {
  id: number;
  event_name: string;
  event_genre: Genre;
  event_description: number;
  org_name: string;
  org_description: string;
  x_id: string;
  instagram_id: string;
  facebook_id: string;
  area: Area;
  place_name: string;
  website: string;
  activity_images: number;
}

export interface EventSummary {
  id: number;
  e_name: string;
  e_genre: Genre;
  o_name: string;
  area: Area;
  p_name: string;
}
