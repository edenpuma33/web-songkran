import { useState } from "react";
import photo1 from "./images/ส่ง.jpg"
import photo2 from "./images/รับ.jpg"
import photo3 from "./images/ปรับใช้.jpg"
import photo4 from "./images/SharedValue.jpg"
import Map from "./Map";

export default function Showmap() {
const [selected, setSelected] = useState("option1");
const [map,setMap] = useState("{<Map/>}");

const content = {
option1: {
    title: "ส่ง (origin)",
    img: photo1,
    value1:"value/concept",
    title1: "อิทธิพลจากอินเดีย",
    detail1: ["ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์","ปฏิทินดาราคติ – จุลศักราช – เมษสงกรานต์ – วันเถลิงศก"],
    title2: "อิทธิพลจากศรีลังกา",
    detail2: ["พุทธศาสนาเถรวาท"],
},
option2: {
    title: "เลือก รับ (Destination)",
    img: photo2,
    value1:"value/concept",
    title1: "ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์",
    detail1: ["อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู/พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัย)"],
    title2: "ปฏิทินดาราคติ– จุลศักราช – เมษสงกรานต์ – วันเถลิงศก",
    detail2: ["อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู (ศรีเกษตร ตั้งต้นนับจุล) ไป /พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัยไปลาว) -1","อินเดีย -> เมาะมะตะ -> อยุธยา -> นครศรี -> ลาว -2-> กัมพูชา"],

},
option3: {
    title: "ปรับ ใช้ (localization)",
    img: photo3,
    value1:"value/concept",
    title1: "อิทธิพลจากอินเดีย",
},
option4: {
    title: "Shared Value",
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
    <p className="mt-4 text-2xl font-semibold">{content[selected].title}</p>
    {/* <img
        src={content[selected].img}
        alt="Selected"
        className="mapimg w-240 h-120 rounded-lg shadow-lg"
    />  */}
    <Map />
    
    <p className="mt-4 text-2xl font-semibold">{content[selected].value1}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].title1}</p>
    <li className="mt-4 text-lg font-semibold">{content[selected].detailt11}</li>
    <li className="mt-4 text-lg font-semibold">{content[selected].detailt12}</li>
    <p className="mt-4 text-lg font-semibold">{content[selected].title2}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].detailt21}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].title3}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].detailt31}</p>
    </div>
</div>
);
}




