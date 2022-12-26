import React, { useMemo, useState, useRef } from "react";
import "./Palindrome.css";

function Main() {
  const [word, setWord] = useState("");
  const wordRef = useRef();
  const isPalindrome = useMemo(() => {
    return word === word.split("").reverse().join("").replace(/\D/g, "");
  }, [word]);

  return (
    <div className="palindrome_container">
      <div>
        {" "}
        <h2>Check Palindrome word</h2>
      </div>
      <form className="form-palindrome">
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
