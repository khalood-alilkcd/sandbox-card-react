import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div className="frame">
      <img
        className="pic"
        src="https://th.bing.com/th/id/R.01c7b181419e15cc614b2297a0e0b959?rik=zGf2g7HyblIvTg&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fstill%2favatar114.jpg&ehk=A2qdetFD%2bCnHXOA868yrfaHHPewee02Hh2kWzPtS81Y%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
    </div>
  );
}
function Intro() {
  return (
    <div className="">
      <h2>Khaled Ali Sedeeq</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet facilis
        perspiciatis sapiente iste deleniti, quis, praesentium laudantium
        similiqueperspiciatis sapiente iste deleniti, quis, praesentium
        laudantium
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill">
      <Skill skill="HTML + CSS" omoji="✨" color="red" />
      <Skill skill="JavaScript" omoji="✨" color="blue" />
      <Skill skill="Web Design" omoji="✨" color="yellow" />
      <Skill skill="Git and GitHub" omoji="✨" color="green" />
      <Skill skill="React" omoji="✨" color="#234293" />
      <Skill skill="Svelte" omoji="✨" color="#3453f2" />
    </div>
  );
}
function Skill(prop) {
  return (
    <div className="skillList" style={{ backgroundColor: prop.color }}>
      <span>{prop.skill}</span>
      <span>{prop.omoji}</span>
    </div>
  );
}
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
