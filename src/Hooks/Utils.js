import { format } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";
import id from "date-fns/locale/id"

export const formatWib = (date) =>{
    const timeZone = "Asia/Jakarta";
    const utcDate = fromZonedTime(date, timeZone);
    const zonedDate = toZonedTime (utcDate, timeZone);

    return format(zonedDate, "HH:mm dd MMM yyyy ", { locale: id });
  }