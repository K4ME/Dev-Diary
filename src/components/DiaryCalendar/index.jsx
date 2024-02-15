import { Affix, Col, DatePicker } from "antd";
import { FormatDateBR } from "../../Utils/functions";

export default function DiaryCalendar() {
  function HandleDate(e) {
    console.log(FormatDateBR(e));
  }

  return (
    <Col span={3}>
      <Affix>
        <div style={{ marginTop: 24, marginRight: 24 }}>
          <DatePicker
            format="DD/MM/YYYY"
            style={{ display: "inline-block", width: "100%" }}
            onChange={HandleDate}
          />
        </div>
      </Affix>
    </Col>
  );
}
