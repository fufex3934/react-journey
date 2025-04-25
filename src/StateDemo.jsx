import { useState } from "react";
import { sculptureList } from "./data1";
export default function StateDemo() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  function handleMoreClick(){
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
    <button className="bg-indigo-500 m-5" onClick={handleNextClick}>Next</button>
    <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
    <h3>
      ({index +1} of {sculptureList.length})
    </h3>
    <button onClick={handleMoreClick} className="bg-indigo-500 m-5">{showMore ? 'Hide':'Show'} details</button>
    {
      showMore && <p>{sculpture.description}</p>
    }
    <img src={sculpture.url} alt={sculpture.alt} />
  </>
  );
}
