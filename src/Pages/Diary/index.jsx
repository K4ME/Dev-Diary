import { useContext, useEffect, useState } from "react";
import { Col, Input, Row } from "antd";
import DiaryCalendar from "../../components/DiaryCalendar";
import DiaryHeader from "../../components/DiaryHeader";
import DiaryNote from "../../components/DiaryNote";
import dayjs from "dayjs";
import { FormatDateBR } from "../../Utils/functions";
import { UserContext } from "../../components/UserContext";
import { CreateDiary, GetDiary, UpdateDiary } from "../../services/api";
import "./index.css";

export default function Diary() {
  const { user } = useContext(UserContext);
  const today = dayjs(new Date());
  const [Diary, setDiary] = useState("");
  const [IsToday, setIsToday] = useState(true);
  const [CalendarDate, setCalendarDate] = useState(today);
  const [CalendarNote, setCalendarNote] = useState("");
  const [CalendarTitle, setCalendarTitle] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    async function LoadData() {
      const diary = await GetDiary(user.id, FormatDateBR(CalendarDate));

      if (diary) {
        setDiary(diary);
        setCalendarNote(diary.diaryText);
        setCalendarTitle(diary.diaryTitle);
        setIsToday(diary.diaryDate < FormatDateBR(today) ? false : true);
      }

      if (!diary) {
        const data = {
          IdGithub: user.id,
          Name: user.name,
          AvatarUrl: user.avatar_url,
          DiaryTitle: "",
          DiaryText: "",
          DiaryDate: FormatDateBR(CalendarDate),
        };
        await CreateDiary(data);
        setDiary(data);
        setCalendarNote("");
        setCalendarTitle("");
      }
    }
    LoadData();
  }, [CalendarDate]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else {
      async function LoadData() {
        const updatedDiary = { ...Diary };

        updatedDiary.DiaryText =
          updatedDiary.DiaryText != undefined
            ? updatedDiary.DiaryText + CalendarNote
            : CalendarNote;

        updatedDiary.DiaryTitle =
          updatedDiary.DiaryTitle != undefined
            ? updatedDiary.DiaryTitle + CalendarTitle
            : CalendarTitle;

        await UpdateDiary(updatedDiary);
      }
      LoadData();
    }
  }, [CalendarNote, CalendarTitle]);

  const isMobile = window.matchMedia("(max-width: 768px)").matches; // Ajuste o breakpoint conforme necessário

  return (
    <>
      <DiaryHeader />
      <div className="mainDiv">
        <Row justify="start">
          <DiaryCalendar
            IdGithub={user.id}
            CalendarDate={CalendarDate}
            setCalendarDate={setCalendarDate}
          />
          <Col xs={22} sm={22} md={22} lg={17} xl={17}>
            <Input
              disabled={!IsToday}
              style={{
                marginTop: 24,
                marginLeft: isMobile ? "16px" : "48px",
                fontSize: "36px",
                fontWeight: "bold",
                width: "100%",
                height: "52px",
                padding: "10px",
              }}
              placeholder="De um título para a sua nota..."
              value={CalendarTitle}
              onChange={(e) => setCalendarTitle(e.target.value)}
            />
          </Col>
        </Row>
        <Row justify="start">
          <Col span={3}></Col>
          <DiaryNote
            Disabled={!IsToday}
            CalendarNote={CalendarNote}
            setCalendarNote={setCalendarNote}
          />
        </Row>
      </div>
    </>
  );
}
