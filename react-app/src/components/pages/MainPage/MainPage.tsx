import {Header, CardBoard, SideMenu} from "../../widgets";
import "./MainPage.css"

export default function MainPage() {
    return (
      <div className="main-container">
        <Header title=""></Header>
        <SideMenu></SideMenu>
        <CardBoard></CardBoard>
      </div>
    );
}