import "./styles.css";
import Tooltip from "./Tooltip";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Tooltip text="Sample tooltip text. But what happens when the message goes very long? Is there a limit?">
        <h2>Start editing to see some magic happen!</h2>
      </Tooltip>
      <h2>The tooltip should cover this text.</h2>
    </div>
  );
}
