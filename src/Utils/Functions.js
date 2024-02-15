import dayjs from "dayjs";

export function FormatDateBR(date) {
  return dayjs(date).format("DD/MM/YYYY");
}
