import { AsideLeft } from "./components/AsideLeft";
import Main from "./components/Main";
import MenuBar from "./components/MenuBar";

import "./styles/Global.css";

function App() {
  return (
    <div className="container">
      <MenuBar />
      <AsideLeft />
      <Main />
    </div>
  );
}

export default App;
