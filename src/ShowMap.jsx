// import { useState } from "react";
// import Map from "./Map";
// import { Button, Card, Row, Col, Container } from "react-bootstrap";

// export default function Showmap() {
//   const [selected, setSelected] = useState("option1");
//   let keyName = "";
//   const content = {
//     option1: {
//       title: "ส่ง (origin)",
//       content: {
//         "value/concept": {
//           อิทธิพลจากอินเดีย: [
//             "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
//             "ปฏิทินดาราคติ – จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
//           ],
//           อิทธิพลจากศรีลังกา: ["พุทธศาสนาเถรวาท"],
//         },
//         Element: { data1: ["detail1"], data2: ["detail2"] },
//       },
//     },
//     option2: {
//       title: "เลือก รับ (Destination)",
//       content: {
//         "value/concept": {
//           "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์": [
//             "อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู/พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัย)",
//           ],
//           "ปฏิทินดาราคติ– จุลศักราช – เมษสงกรานต์ – วันเถลิงศก": [
//             "อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู (ศรีเกษตร ตั้งต้นนับจุล) ไป /พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัยไปลาว) -1",
//             "อินเดีย -> เมาะมะตะ -> อยุธยา -> นครศรี -> ลาว -2-> กัมพูชา",
//           ],
//         },
//       },
//     },
//     option3: {
//         title: "ปรับ ใช้ (localization)",
//         content: {
//           "value/concept": {
//             อิทธิพลจากอินเดีย: [
//               "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
//               "ปฏิทินดาราคติ – จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
//             ],
//             อิทธิพลจากศรีลังกา: ["พุทธศาสนาเถรวาท"],
//           },
//           Element: { data1: ["detail1"], data2: ["detail2"] },
//         },
//     },
//     option4: {
//         title: "Shared Value",
//         content: {
//           "value/concept": {
//             อิทธิพลจากอินเดีย: [
//               "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
//               "ปฏิทินดาราคติ – จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
//             ],
//             อิทธิพลจากศรีลังกา: ["พุทธศาสนาเถรวาท"],
//           },
//           Element: { data1: ["detail1"], data2: ["detail2"] },
//         },
//     },
//   };

//   return (
//     <Container>
//       <Row>
//         <Col md={3}>
//           <div className="flex flex-col gap-2">
//             {Object.keys(content).map((key) => (
//               <button
//                 key={keyName}
//                 className={`px-4 py-2 rounded-lg map ${
//                   selected === key ? "bg-blue-500 text-white" : "bg-gray-300"
//                 }`}
//                 onClick={() => setSelected(key)}
//               >
//                 {(keyName = content[key]["title"])}
//               </button>
//             ))}
//           </div>
//         </Col>

//         <Col md={9}>
//           <Map optionSelected={selected} />
//           <div>
//             <Card
//               style={{
//                 width: "50vw",
//                 marginTop: "20px",
//               }}
//             >
//               <Card.Header>{content[selected].title}</Card.Header>
//               {Object.keys(content[selected].content).map((item) => (
//                 <Card.Body>
//                   <Card.Title>{item}</Card.Title>
//                   {Object.keys(content[selected].content[item]).map(
//                     (topic) => (
//                       <>
//                         <Card.Subtitle>{topic}</Card.Subtitle>
//                         {content[selected].content[item][topic].map(
//                           (item, index) => (
//                             <li style={{ marginLeft: "20px" }} key={index}>
//                               {item}
//                             </li>
//                           )
//                         )}
//                       </>
//                     )
//                   )}
//                 </Card.Body>
//               ))}
//             </Card>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


import { useState } from "react";
import Map from "./Map";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

export default function Showmap() {
  const [selected, setSelected] = useState("option1");
  let keyName = "";
  const content = {
    option1: {
      title: "The Origin of Songkran",
      content: {
        "value/concept": {
          อิทธิพลที่ส่งทอดจากอินเดีย: [
            "ปฏิทินสุริยคติ",
            "ปฏิทินดาราคติ",
            "มหาศักราช",
            "เมษสงกรานต์",
          ],
          อิทธิพลที่ส่งทอดจากศรีลังกา: ["พุทธศาสนาเถรวาท"],
          อิทธิพลที่ส่งทอดจากจีน: [
            "ปฏิทินจันทรคติ",
            "ปีนักษัตร",
          ],
        },
        Element: { data1: ["detail1"], data2: ["detail2"] },
      },
    },
    option2: {
      title: "เลือกรับ (Destination)",
      content: {
        "value/concept": {
          "ปฏิทินสุริยคติ –> มหาศักราช –> เมษสงกรานต์": [
            "ส่งทอดจากอินเดีย ไปปยู, พม่า, ยะไข่, มอญ และไปยังเขมรโบราณ ก่อนเข้าสู่สุโขทัย",
          ],
          "ปฏิทินดาราคติ– จุลศักราช –> เมษสงกรานต์ –> วันเถลิงศก": [
            "วัฒนธรรมกลุ่มนี้คาดว่ามีการส่งทอด 2 ทาง ได้แก่",
            "ทางที่ 1 : ส่งทอดจากอินเดีย ไปยังเมืองปยู (ศรีเกษตร) ไปยังพม่า, ยะไข่, มอญ และไปยังเขมรโบราณ ก่อนเข้าสู่สุโขทัย และส่งทอดไปลาว",
            "ทางที่ 2 : ส่งทอดจากอินเดีย ไปยังเมาะตะมะ ไปยังอยุธยา (และกัมพูชา) และไปยังนครศรีธรรมราช และถ่ายทอดไปยังลาว",
          ],
          "พุทธศาสนาเถรวาท": [
            "ส่งทอดจากศรีลังกา ไปยังเมาะตะมะ ไปยังสุโขทัย และล้านนา"
          ],
          "ปีนักษัตร (ปีหนไทย -ปีหนขอม)": [
            "วัฒนธรรมกลุ่มนี้คาดว่ามีการส่งทอด 2 ทาง ได้แก่",
            "ส่งทอดจากจีน ผ่านกลุ่มไทใหญ่, 12 ปันนา และล้านนา ส่งต่อไปยังล่ว จนมาถึงสุโขทัย",
            "ส่งทอดจากจีน ผ่านเวียดนามตอนบน มายังจามปา (เวียดนามใต้) ส่งต่อไปยังขอม เข้ามายังลพบุรี และกระจายสู่สุโขทัย อยุธยา และนครศรีธรรมราช",
          ],
          "ปฏิทินจันทรคติ (ข้างขึ้น-แรม)": [
            "ส่งมาจากจีน ไปยังล้านนา เข้าสู่สุโขทัย ไปยังสุพรรณบุรี และ อยุธยา",
            "ส่งมาจากจีน ไปยังเขมร เข้าสู่ลพบุรีสุโขทัย ไปยังสุพรรณบุรี และ อยุธยา",
          ],
        },
      },
    },
    option3: {
        title: "ปรับใช้ (Localization)",
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
        title: "วัฒนธรรมร่วม (Shared Value)",
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