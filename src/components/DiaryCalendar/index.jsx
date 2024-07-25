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

  const isMobile = window.matchMedia("(max-width: 768px)").matches; // Ajuste o breakpoint conforme necessário

  return (
    <Col xs={22} sm={22} md={22} lg={3}>
      {isMobile ? (
        <div style={{ marginTop: 24 }}>
          <DatePicker
            defaultValue={CalendarDate}
            format="DD/MM/YYYY"
            style={{
              width: "100%",
              marginLeft: isMobile ? "16px" : "24px",
              fontSize: "42px",
              fontWeight: "bold",
            }}
            onChange={(e) => setCalendarDate(e)}
            disabledDate={disabledDate}
          />
        </div>
      ) : (
        <Affix>
          <div style={{ marginTop: 24 }}>
            <DatePicker
              defaultValue={CalendarDate}
              format="DD/MM/YYYY"
              style={{
                width: "100%",
                marginLeft: isMobile ? "16px" : "24px",
                fontSize: "42px",
                fontWeight: "bold",
              }}
              onChange={(e) => setCalendarDate(e)}
              disabledDate={disabledDate}
            />
          </div>
        </Affix>
      )}
    </Col>
  );
}
