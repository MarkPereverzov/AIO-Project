import {Header, CardBoardMain, SideMenu} from "../../widgets";
import "./MainPage.css"

export default function MainPage() {
    return (
      <div className="main-container">
        <Header title=""></Header>
        <SideMenu></SideMenu>
        <CardBoardMain></CardBoardMain>
      </div>
    );
}