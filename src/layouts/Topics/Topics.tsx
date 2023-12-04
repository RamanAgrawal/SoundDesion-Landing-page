import "./style.scss";
import { useState } from "react";
import {
  daw,
  frequencies,
  vocalsProcessing,
  mixing,
  mixingConsole,
  mastering,
  bgElement1,
} from "../../assets";
const Topics = () => {
  const [topicImg, setTopicImg] = useState<string>(frequencies);
  const topics = [
    { text: "What are frequencies", img: frequencies },
    { text: "Using the Dow", img: daw },
    { text: "Vocals Processing", img: vocalsProcessing },
    { text: "Mixing", img: mixing },
    { text: "MixingConsole", img: mixingConsole },
    { text: "Mastering", img: mastering },
  ];
  return (
    <section id="topics">
      <div className="wrapper">
        <h2>What will You Learn..?</h2>
        <div className="content-container">
          <ul>
            {topics.map((topic, i) => (
              <li key={i} onMouseEnter={() => setTopicImg(topic.img)}>
                {topic.text}
              </li>
            ))}
          </ul>
          <div className="topic-img">
            <img src={topicImg} alt={topicImg} />
          </div>
        </div>
        <img src={bgElement1} className="ele1" alt="element" />
      </div>
    </section>
  );
};

export default Topics;
