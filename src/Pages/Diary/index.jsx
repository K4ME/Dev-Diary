import DiaryHeader from "../../components/DiaryHeader";
import DiaryCalendar from "../../components/DiaryCalendar";
import DiaryNote from "../../components/DiaryNote";
import { Col, Row } from "antd";

export default function Diary() {
  return (
    <>
      <DiaryHeader />
      <Row justify="start" gutter={[20, 20]}>
        <Col span={3}></Col>
        <DiaryNote />
        <DiaryCalendar />
      </Row>
    </>
  );
}
