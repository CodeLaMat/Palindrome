import React, { useMemo, useState, useRef } from "react";

function Main() {
  const [word, setWord] = useState("");
  const wordRef = useRef();
  const isPalindrome = useMemo(() => {
    return word === word.split("").reverse().join("");
  }, [word]);
  return (
    <div className="Main">
      <form>
        <div>
          <label>Word to check</label>
        </div>
        <div>
          <input
            ref={wordRef}
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
        <div className="result container">Is the word palindrome: </div>
        <div className="result"> {isPalindrome ? "Yes" : "No"}</div>{" "}
      </form>
    </div>
  );
}
export default Main;
