import { format } from "date-fns";

export const formatDate = (dateString: string) => {
  console.log("dataString", dateString);
  return format(new Date(dateString), "dd LLL yy - hh:mm aa");
};
