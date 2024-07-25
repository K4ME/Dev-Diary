import { Col, Input } from "antd";

export default function DiaryNote({ Disabled, CalendarNote, setCalendarNote }) {
  return (
    <Col span={16}>
      <div
        style={{
          marginTop: 24,
          /* width: "100%", */
        }}
      >
        <Input.TextArea
          disabled={Disabled}
          placeholder="Comece a anotar..."
          rows={100}
          value={CalendarNote}
          onChange={(e) => setCalendarNote(e.target.value)}
        />
      </div>
    </Col>
  );
}
