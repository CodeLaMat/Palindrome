import "./App.css";

import Header from "./Header";
import Palindrome from "./Palindrome";
import Bubble from "./Bubble.js";
import Stack from "./Stack.js";
import Queue from "./Queue";

const App = () => {
  return (
    <div>
      {" "}
      <Header className="header-component" />
      <div className="App">
        <Palindrome className="palindrome-component" />
        <Bubble className="bubble-component" />
        <Stack className="stack-component" />
        <Queue className="queue-component" />
      </div>
    </div>
  );
};

export default App;
