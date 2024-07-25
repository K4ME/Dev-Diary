import React, { useRef, useEffect } from "react";
import { Col, Input } from "antd";
import JoditEditor from "jodit-react";
//import "../../../../node_modules/jodit/build/jodit.min.css";
//import "jodit/build/jodit.min.css";
import "./index.css";

export default function DiaryNote({ Disabled, CalendarNote, setCalendarNote }) {
  const editor = useRef(null);

  const config = {
    // Configurações personalizadas do Jodit
    readonly: Disabled, // ou true para modo somente leitura
    height: 1000,
    toolbar: true,
    language: "pt-br",
    //theme: "custom",
    theme: "dark",
    // Adicione outras configurações conforme necessário
  };

  return (
    <Col span={16}>
      <div
        style={{
          marginTop: 24,
          /* width: "100%", */
        }}
      >
        <JoditEditor
          ref={editor}
          value={CalendarNote ? CalendarNote : "Comece a anotar..."}
          config={config}
          onChange={(newContent) => setCalendarNote(newContent)}
        />
        {/* <Input.TextArea
          disabled={Disabled}
          placeholder="Comece a anotar..."
          rows={100}
          value={CalendarNote}
          onChange={(e) => setCalendarNote(e.target.value)}
        /> */}
      </div>
    </Col>
  );
}
