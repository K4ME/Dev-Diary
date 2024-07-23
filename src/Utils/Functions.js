import dayjs from "dayjs";
dayjs.locale("pt-br");

export function FormatDateBR(date) {
  return dayjs(date).format("DD/MM/YYYY");
}
