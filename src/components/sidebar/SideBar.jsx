import "./sidebar.css"
import DOGE from "../../assets/doge.jpg"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sideBarItem">
            <span className="sideBarTitle"> ABOUT ME</span>
            <img className ="doge" src={DOGE}></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae culpa, obcaecati.</p>
        </div>
        <div className="sideBarItem">
            <span className="sideBarTitle">CATEGORIES</span>
            <ul className="sideBarList">
                <li className="sideBarListItem">Life</li>
                <li className="sideBarListItem">Music</li>
                <li className="sideBarListItem">Style</li>
                <li className="sideBarListItem">Sport</li>
                <li className="sideBarListItem">Tech</li>
                <li className="sideBarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sideBarItem">
            <span className="sideBarTitle">FOLLOW US</span>
            <div className="sideBarSocial">
            <i className="sideBarIcon fa-brands fa-square-facebook"></i>
            <i className="sideBarIcon fa-brands fa-square-twitter"></i>
            <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
            <i className="sideBarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
