// import { useState } from "react";

// const ShowMap  = () => {
// const [activeButton, setActiveButton] = useState("Button 1");

// const toggleButton = (button) => {
// setActiveButton(activeButton === button ? button : button);
// };

// return (
// <div className="flex items-start gap-4 p-4">
// <div className="flex flex-col gap-2 w-1/8">
// <button
//     onClick={() => toggleButton("Button 1")}
//     className={`px-4 py-2 rounded-lg map ${
//     activeButton === "Button 1" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
//     }`}
// >
//     The Original ต้นทาง
// </button>

// <button
//     onClick={() => toggleButton("Button 2")}
//     className={`px-4 py-2 rounded-lg map ${
//     activeButton === "Button 2" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
//     }`}
// >
//     เลือกรับ Destiny
// </button>

// <button
//     onClick={() => toggleButton("Button 3")}
//     className={`px-4 py-2 rounded-lg map ${
//     activeButton === "Button 3" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
//     }`}
// >
//     ปรับใช้ Locallized
// </button>

// <button 
//     onClick={() => toggleButton("Button 4")}
//     className={`px-4 py-2 rounded-lg map ${
//     activeButton === "Button 4" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
//     }`}
// >
//     เส้นทางการส่งต่อวัฒนธรรม
// </button>
// </div>

// <div className="flex items-center w-7/8 justify-center">
// <p className="text-lg font-semibold">
// {activeButton ? `Detail: ${activeButton} `
// : "No button selected"}
// </p>
// </div>

// </div>
// );
// };

// export default ShowMap

import { useState } from "react";
import photo1 from "./images/ส่ง.jpg"
import photo2 from "./images/รับ.jpg"
import photo3 from "./images/ปรับใช้.jpg"
import photo4 from "./images/SharedValue.jpg"

export default function Showmap() {
const [selected, setSelected] = useState("option1");

const content = {
option1: {
    text: "This is Image 1",
    description: "songkran1",
    img: photo1,
    value1:"ปฏิทินสุริยคติ – มหาศักราช – เมษสงกรานต์อิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู/พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัย)" ,
    value2:"ปฏิทินดาราคติ– จุลศักราช – เมษสงกรานต์ – วันเถลิงศกอิทธิพลจากอินเดีย (ผ่านสู่วัฒนธรรมปยู (ศรีเกษตร ตั้งต้นนับจุล) ไป /พม่า/ยะไข่/มอญ และวัฒนธรรมเขมรโบราณ กระทั่งมาสู่วัฒนธรรมสุโขทัยไปลาว) -1 อินเดีย -> เมาะมะตะ -> อยุธยา -> นครศรี -> ลาว -2-> กัมพูชา อิทธิพลจากศรีลังกา (ผ่านสู่วัฒนธรรมมอญโบราณที่เมืองเมาะตะมะ และผ่านมาสู่วัฒนธรรมสุโขทัย-ล้านนา) ส่งต่อเป็นทอดๆ"
},
option2: {
    text: "This is Image 2",
    description: "songkran2",
    img: photo2,
},
option3: {
    text: "This is Image 3",
    description: "songkran3",
    img: photo3,
},
option4: {
    text: "This is Image 4",
    description: "songkran4",
    hello: "hello",
    img: photo4,
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
    <p className="mt-4 text-lg font-semibold">{content[selected].text}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].description}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].hello}</p>
    <img
        src={content[selected].img}
        alt="Selected"
        className="w-240 h-120 rounded-lg shadow-lg"
    />
    <p className="mt-4 text-lg font-semibold">{content[selected].value1}</p>
    <p className="mt-4 text-lg font-semibold">{content[selected].value2}</p>
    </div>
</div>
);
}
