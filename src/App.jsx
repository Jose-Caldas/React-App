import MenuBar from "./components/MenuBar";
import AsideBar from "./components/AsideBarLeft";
import Main from "./components/Main";
import AsideBarRight from "./components/AsideBarRight";

import "./styles/Global.css";

function App() {
  return (
    <div className="container">
      <MenuBar />
      <AsideBar></AsideBar>
      <Main />
      <AsideBarRight />
    </div>
  );
}

export default App;
