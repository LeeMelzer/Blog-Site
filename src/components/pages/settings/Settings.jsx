import SideBar from "../../sidebar/SideBar"
import SNOW from "../../../assets/snowy.jpg"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={SNOW}></img>
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Lee"></input>
                <label>Email</label>
                <input type="email" placeholder="lee@gmail.com"></input>
                <label>Password</label>
                <input type="password"></input>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <SideBar/>
    </div>
  )
}
