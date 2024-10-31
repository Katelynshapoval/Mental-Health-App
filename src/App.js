import "./App.css";
import { IoHome } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <div className="sidebar">
          <img src="images/logo.png" alt="logo" id="logo" />
          <ul class="menuOptions">
            <li>
              <IoHome />
              Home
            </li>
            <li>
              <FaQuestionCircle />
              About us
            </li>
            <li>
              <IoChatboxEllipses />
              Chat
            </li>
            <li>
              <MdTipsAndUpdates />
              Tips
            </li>
          </ul>
        </div>
        <div className="topBar">
          <p>
            Take care <IoIosHeartEmpty />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
