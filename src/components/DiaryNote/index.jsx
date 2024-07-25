import React, { useRef, useEffect } from "react";
import { Col, Input } from "antd";
import JoditEditor from "jodit-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./QuillEditor.css";

export default function DiaryNote({ Disabled, CalendarNote, setCalendarNote }) {
  /* const editor = useRef(null);

  const config = {
    readonly: Disabled,
    height: 1000,
    toolbar: true,
    language: "pt-br",
    theme: "dark",
  }; */

  return (
    <Col span={16}>
      <ReactQuill
        value={CalendarNote ? CalendarNote : "Comece a anotar..."}
        onChange={(content) => setCalendarNote(content)}
        theme="snow"
      />
      {/* <JoditEditor
          ref={editor}
          value={CalendarNote ? CalendarNote : "Comece a anotar..."}
          config={config}
          onChange={(newContent) => setCalendarNote(newContent)}
        /> */}
      {/* <Input.TextArea
          disabled={Disabled}
          placeholder="Comece a anotar..."
          rows={100}
          value={CalendarNote}
          onChange={(e) => setCalendarNote(e.target.value)}
        /> */}
    </Col>
  );
}
