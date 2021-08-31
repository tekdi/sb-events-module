import { CalendarEvent } from "angular-calendar";

export interface MyCalendarEvent<MetaType = any> extends CalendarEvent {
  venue?: {
    name?: string;
  };
  code?: string;
  registrationStartDate?: string;
  keywords?: [];

  description?: string;
  language?: [];
  source?: string;
  createdOn?: string;
  objectType?: string;
  registrationEndDate?: string;
  lastUpdatedOn?: string;
  starttime?: string;
  contentType?: string;
  trackable?: {
    enabled?: string;
    autoBatch?: string;
  };
  onlineProviderData?: {
    meetingLink?: string;
  };
  identifier?: string;
  lastStatusChangedOn?: string;
  createdFor?: [];
  audience?: [];
  visibility?: string;
  consumerId?: string;
  eventType?: string;
  languageCode?: [];
  version?: number;
  versionKey?: string;
  leafNodesCount?: number;
  endTime?: string;
  status?: string;
  owner?: string;
}
