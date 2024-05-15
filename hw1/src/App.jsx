import "./css/App.css";
import Sample from "./components/Sample";
function App() {
  return (
    <div className="container">
      <h1>과제1 : Event-Handling과 map함수 사용 + useState맛보기</h1>
      <h2>등록가능한 스택 이름(대문자까지 일치해야함)</h2>
      <ul>
        <li>Java</li>
        <li>Spring</li>
        <li>Vue</li>
        <li>Mysql</li>
        <li>Swift</li>
        <li>Python</li>
        <li>React</li>
        <li>Kotlin</li>
      </ul>
      <Sample />
    </div>
  );
}

export default App;
