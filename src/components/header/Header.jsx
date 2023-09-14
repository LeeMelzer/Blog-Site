import "./header.css"
import HeaderImg from "../../assets/headerImg.jpg"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSmall">React & Node</span>
            <span className="headerTitleLarge">Blog</span>
        </div>
        <img className="headerImg" src={HeaderImg} />
    </div>
  )
}
