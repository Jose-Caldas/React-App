import { AsideLeft } from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import Main from "./components/Main";
import MenuBar from "./components/MenuBar";

import "./styles/Global.css";

function App() {
  return (
    <div className="container">
      <MenuBar />
      <AsideLeft />
      <Main />
      <AsideRight />
    </div>
  );
}

export default App;
