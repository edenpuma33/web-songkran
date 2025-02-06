import { useState } from "react";
import Map from "./Map";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

export default function Showmap() {
  const [selected, setSelected] = useState("option1");
  let keyName = "";
  const content = {
    option1: {
      title: "ส่ง (origin)",
      content: {
        "value/concept": {
          อิทธิพลจากอินเดีย: [
            "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
            "ปฏิทินดาราคติ – จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
          ],
          อิทธิพลจากศรีลังกา: ["พุทธศาสนาเถรวาท"],
        },
        Element: { data1: ["detail1"], data2: ["detail2"] },
      },
    },
    option2: {
      title: "เลือก รับ (Destination)",
      content: {
        "value/concept": {
          "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์": [
            "อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู/พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัย)",
          ],
          "ปฏิทินดาราคติ– จุลศักราช – เมษสงกรานต์ – วันเถลิงศก": [
            "อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู (ศรีเกษตร ตั้งต้นนับจุล) ไป /พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัยไปลาว) -1",
            "อินเดีย -> เมาะมะตะ -> อยุธยา -> นครศรี -> ลาว -2-> กัมพูชา",
          ],
        },
      },
    },
    option3: {
        title: "ปรับ ใช้ (localization)",
        content: {
          "value/concept": {
            อิทธิพลจากอินเดีย: [
              "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
              "ปฏิทินดาราคติ – จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
            ],
            อิทธิพลจากศรีลังกา: ["พุทธศาสนาเถรวาท"],
          },
          Element: { data1: ["detail1"], data2: ["detail2"] },
        },
    },
    option4: {
        title: "Shared Value",
        content: {
          "value/concept": {
            อิทธิพลจากอินเดีย: [
              "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
              "ปฏิทินดาราคติ – จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
            ],
            อิทธิพลจากศรีลังกา: ["พุทธศาสนาเถรวาท"],
          },
          Element: { data1: ["detail1"], data2: ["detail2"] },
        },
    },
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <div className="flex flex-col gap-2">
            {Object.keys(content).map((key) => (
              <button
                key={keyName}
                className={`px-4 py-2 rounded-lg map ${
                  selected === key ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
                onClick={() => setSelected(key)}
              >
                {(keyName = content[key]["title"])}
              </button>
            ))}
          </div>
        </Col>

        <Col md={9}>
          <Map optionSelected={selected} />
          <div>
            <Card
              style={{
                width: "50vw",
                marginTop: "20px",
              }}
            >
              <Card.Header>{content[selected].title}</Card.Header>
              {Object.keys(content[selected].content).map((item) => (
                <Card.Body>
                  <Card.Title>{item}</Card.Title>
                  {Object.keys(content[selected].content[item]).map(
                    (topic) => (
                      <>
                        <Card.Subtitle>{topic}</Card.Subtitle>
                        {content[selected].content[item][topic].map(
                          (item, index) => (
                            <li style={{ marginLeft: "20px" }} key={index}>
                              {item}
                            </li>
                          )
                        )}
                      </>
                    )
                  )}
                </Card.Body>
              ))}
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
