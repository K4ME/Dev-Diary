import React, { useRef, useEffect } from "react";
import { Col } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./QuillEditor.css";

export default function DiaryNote({ Disabled, CalendarNote, setCalendarNote }) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches; // Ajuste o breakpoint conforme necessário

  return (
    <Col xs={22} sm={22} md={22} lg={17} xl={17}>
      <ReactQuill
        style={{
          marginTop: 24,
          marginLeft: isMobile ? "16px" : "48px",
          width: "100%",
        }}
        readOnly={Disabled}
        value={CalendarNote ? CalendarNote : "Comece a anotar..."}
        onChange={(content) => setCalendarNote(content)}
        theme="snow"
      />
    </Col>
  );
}
