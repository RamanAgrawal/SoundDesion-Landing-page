import React, { ReactElement, useState } from "react";
import "./style.scss";
import {
  daw,
  frequencies,
  vocalsProcessing,
  mixing,
  mixingConsole,
  mastering,
  bgElement1,
} from "../../assets";

// Define the structure of each topic
interface Topic {
  text: string;
  img: string;
}

const Topics: React.FC = (): ReactElement => {
  // State to handle changing topic images
  const [topicImg, setTopicImg] = useState<string>(frequencies);

  // List of topics with their respective images
  const topics: Topic[] = [
    { text: "What are frequencies", img: frequencies },
    { text: "Using the DAW", img: daw },
    { text: "Vocals Processing", img: vocalsProcessing },
    { text: "Mixing", img: mixing },
    { text: "Mixing Console", img: mixingConsole },
    { text: "Mastering", img: mastering },
  ];

  return (
    // Topics section with an aria-label for accessibility
    <section id="topics" aria-label="Topics" role="region">
      <div className="wrapper">
        {/* Title for the topics section */}
        <h2>What Will You Learn..?</h2>
        <div className="content-container">
          {/* List of topics */}
          <ul>
            {/* Map through topics and display as list items */}
            {topics.map((topic: Topic, i: number) => (
              <li key={i} onMouseEnter={() => setTopicImg(topic.img)}>
                {topic.text}
              </li>
            ))}
          </ul>
          {/* Container to display the topic image */}
          <div className="topic-img">
            <img src={topicImg} alt={topicImg} />
          </div>
        </div>
        {/* Background element */}
        <img
          src={bgElement1}
          className="ele1"
          alt="Background Element"
          useMap="#topicMap"
        />
        {/* Define a map for area tags */}
        <map name="topicMap">
          {topics.map((topic: Topic, i: number) => (
            <area
              key={i}
              shape="rect"
              coords="0,0,100,100"
              href={`#${topic.text.toLowerCase().replace(/\s/g, "-")}`}
              alt={topic.text}
            />
          ))}
        </map>
      </div>
    </section>
  );
};

export default Topics;
