import { useEffect, useState } from "react";
import { Affix, Col, DatePicker } from "antd";
import dayjs from "dayjs";
import { GetDiariesDates } from "../../services/api";

export default function DiaryCalendar({
  IdGithub,
  CalendarDate,
  setCalendarDate,
}) {
  const [AllowedDates, setAllowedDates] = useState([]);

  useEffect(() => {
    async function LoadData() {
      const allowedDates = await GetDiariesDates(IdGithub);
      const formattedDates = allowedDates
        ? allowedDates.map((dateStr) => dayjs(dateStr, "DD/MM/YYYY"))
        : [];
      setAllowedDates(formattedDates);
    }
    LoadData();
  }, [IdGithub]);

  const disabledDate = (current) => {
    if (!current) {
      return false;
    }
    return !AllowedDates.some((date) => dayjs(date).isSame(current, "day"));
  };

  return (
    <Col span={3}>
      <Affix>
        <div style={{ marginTop: 24 }}>
          <DatePicker
            defaultValue={CalendarDate}
            format="DD/MM/YYYY"
            style={{
              width: "100%",
              fontSize: "42px",
              marginLeft: 24,
              fontWeight: "bold",
            }}
            onChange={(e) => setCalendarDate(e)}
            disabledDate={disabledDate}
          />
        </div>
      </Affix>
    </Col>
  );
}
