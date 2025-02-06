import { useState } from "react";
import photo1 from "./images/ส่ง.jpg";
import photo2 from "./images/รับ.jpg";
import photo3 from "./images/ปรับใช้.jpg";
import photo4 from "./images/SharedValue.jpg";
import Map from "./Map";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

export default function Showmap() {
  //   const [selected, setSelected] = useState("option1");
  const [selected, setSelected] = useState("option_test_1");
  let keyName = "";
  const content_test = {
    option_test_1: {
      title: "ส่ง (origin)",
      img: photo1,
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
    option_test_2: {
      title: "เลือก รับ (Destination)",
      img: photo2,
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
  };

  const content = {
    option1: {
      title: "ส่ง (origin)",
      img: photo1,
      value1: "value/concept",
      title1: "อิทธิพลจากอินเดีย",
      detail1: [
        "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
        "ปฏิทินดาราคติ – จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
      ],
      title2: "อิทธิพลจากศรีลังกา",
      detail2: ["พุทธศาสนาเถรวาท"],
    },
    option2: {
      title: "เลือก รับ (Destination)",
      img: photo2,
      value1: "value/concept",
      title1: "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
      detail1: [
        "อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู/พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัย)",
      ],
      title2: "ปฏิทินดาราคติ– จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
      detail2: [
        "อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู (ศรีเกษตร ตั้งต้นนับจุล) ไป /พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัยไปลาว) -1",
        "อินเดีย -> เมาะมะตะ -> อยุธยา -> นครศรี -> ลาว -2-> กัมพูชา",
      ],
    },
    option3: {
      title: "ปรับ ใช้ (localization)",
      img: photo3,
      value1: "value/concept",
      title1: "อิทธิพลจากอินเดีย",
    },
    option4: {
      title: "Shared Value",
      img: photo4,
      value1: "value/concept",
      value2: "tradition/ way of practice",
      value3: "Elements",
    },
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <div className="flex flex-col gap-2">
            {Object.keys(content_test).map((key) => (
              <button
                key={keyName}
                className={`px-4 py-2 rounded-lg map ${
                  selected === key ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
                onClick={() => setSelected(key)}
              >
                {(keyName = content_test[key]["title"])}
              </button>
            ))}
          </div>
        </Col>

        <Col md={9}>
          <Map optionSelected={selected} />
          {/* <p className="mt-4 text-2xl font-semibold">
            {content_test[selected].title}
          </p> */}
          <div>
            <Card style={{
          width: "50vw",
          marginTop: "20px"
        }}>
              <Card.Header>{content_test[selected].title}</Card.Header>
              {Object.keys(content_test[selected].content).map((item) => (
                <Card.Body>
                  <Card.Title>{item}</Card.Title>
                  {Object.keys(content_test[selected].content[item]).map(
                    (topic) => (
                      <>
                        <Card.Subtitle>{topic}</Card.Subtitle>
                        {/* {content_test[selected].content[item][topic].forEach(
                          (contentDetail) => {
                            {console.log(contentDetail)}
                            <Card.Text>xxxxxxx</Card.Text>;
                          }
                        )} */}
                        {content_test[selected].content[item][topic].map(
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
