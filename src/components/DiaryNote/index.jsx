import { Col, Input } from "antd";

export default function DiaryNote() {
  return (
    <Col span={18}>
      <div style={{ marginTop: 24, marginRight: 24 }}>
        <Input.TextArea placeholder="Comece a anotar..." rows={100} />
      </div>
    </Col>
  );
}
