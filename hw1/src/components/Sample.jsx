import { useState } from "react";
import "../css/Sample.css";

const stacks_array = [
  {
    name: "React",
    img: import.meta.env.VITE_PUBLIC_URL + "/images/React.png",
  },
  {
    name: "Java",
    img: import.meta.env.VITE_PUBLIC_URL + "/images/Java.png",
  },
  {
    name: "Kotlin",
    img: import.meta.env.VITE_PUBLIC_URL + "/images/Kotlin.png",
  },
  {
    name: "Mysql",
    img: import.meta.env.VITE_PUBLIC_URL + "/images/Mysql.png",
  },
  {
    name: "Python",
    img: import.meta.env.VITE_PUBLIC_URL + "/images/Python.png",
  },
  {
    name: "Spring",
    img: import.meta.env.VITE_PUBLIC_URL + "/images/Spring.png",
  },
  {
    name: "Swift",
    img: import.meta.env.VITE_PUBLIC_URL + "/images/Swift.png",
  },
  {
    name: "Vue",
    img: import.meta.env.VITE_PUBLIC_URL + "/images/Vue.png",
  },
];

const Sample = () => {
  const [stack, setStack] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    const foundStack = stacks_array.find((stack) => stack.name === inputText);
    if (foundStack) {
      setStack((prevStack) => [...prevStack, foundStack]);
    } else {
      alert("잘못된 스택 이름입니다.");
    }
    setInputText("");
  };

  const handleDoubleClick = (name) => {
    const updatedStack = stack.filter((s) => s.name !== name);
    setStack(updatedStack);
  };

  return (
    <div>
      <div>
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={handleClick}>추가</button>
      </div>
      <div>
        {stack.map((s, index) => (
          <div key={index} onDoubleClick={() => handleDoubleClick(s.name)}>
            <img src={s.img} alt={s.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sample;
