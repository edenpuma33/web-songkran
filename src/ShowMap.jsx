import { useState } from "react";
import photo1 from "./images/ส่ง.jpg"
import photo2 from "./images/รับ.jpg"
import photo3 from "./images/ปรับใช้.jpg"
import photo4 from "./images/SharedValue.jpg"

export default function Showmap() {
const [selected, setSelected] = useState("option1");

const content = {
option1: {
    text: "ส่ง (origin)",
    img: photo1,
    value1:"value/concept",
    title1: "อิทธิพลจากอินเดีย",
    detailt11:"ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
    detailt12:"ปฏิทินดาราคติ – จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
    title2: "อิทธิพลจากศรีลังกา",
    detailt21:"พุทธศาสนาเถรวาท",
    title3: "อิทธิพลจากจีน ",
    detailt31: "ปฏิทินจันทรคติ - ปีนักษัตร",
},
option2: {
    text: "เลือก รับ (Destination)",
    img: photo2,
    value1:"value/concept",
    title1: "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
    detailt11:"อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู/พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัย) ",
    title2: "ปฏิทินดาราคติ– จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
    detailt21:"อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู (ศรีเกษตร ตั้งต้นนับจุล) ไป /พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัยไปลาว) -1",
    detailt22:"อิทธิพลจากศรีลังกา (ผ่านสู่วัฒนธรรมมอญโบราณที่เมืองเมาะตะมะ และผ่านมาสู่วัฒนธรรมสุโขทัย-ล้านนา) ส่งต่อเป็นทอดๆ",
    title3: "พุทธศาสนาเถรวาท",
    detailt31: ""
},
option3: {
    text: "ปรับ ใช้ localization",
    img: photo3,
    value1:"value/concept",
    title1: "อิทธิพลจากอินเดีย",
    detailt11:"ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
    detailt12:"ปฏิทินดาราคติ – จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
    title2: "อิทธิพลจากศรีลังกา",
    detailt21:"พุทธศาสนาเถรวาท",
    title3: "อิทธิพลจากจีน ",
    detailt31: "ปฏิทินจันทรคติ - ปีนักษัตร",
},
option4: {
    text: "Shared Value",
    hello: "hello",
    img: photo4,
    value1:"value/concept",
    value2:"tradition/ way of practice",
    value3: "Elements"
},
};

return (
<div className="flex items-start gap-4 p-4">
    <div className="flex flex-col gap-4 w-1/8">
    {Object.keys(content).map((key) => (
        <button
        key={key}
        className={`px-4 py-2 rounded-lg map ${
            selected === key ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
        onClick={() => setSelected(key)}
        >
        {key.replace("option", "Button")}
        </button>
    ))}
    </div>

    <div className="flex flex-col gap-4 items-center w-7/8 justify-center">
    <p className="mt-4 text-xl font-semibold">{content[selected].text}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].hello}</p>
    <img
        src={content[selected].img}
        alt="Selected"
        className="mapimg w-240 h-120 rounded-lg shadow-lg"
    />
    <p className="mt-4 text-lg font-semibold">{content[selected].value1}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].title1}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].detailt11}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].detailt12}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].title2}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].detailt21}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].title3}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].detailt31}</p>
    </div>
</div>
);
}
