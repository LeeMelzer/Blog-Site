import "./post.css"
import SKI from "../../assets/skiing.jpeg"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={SKI}/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor, sit amet !</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente quibusdam quam iusto fugit cumque sunt dicta tempora necessitatibus. 
        Obcaecati fugit officia cupiditate sequi exercitationem vitae, repellendus tempora accusantium! Hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente quibusdam quam iusto fugit cumque sunt dicta tempora necessitatibus. 
        Obcaecati fugit officia cupiditate sequi exercitationem vitae, repellendus tempora accusantium! Hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente quibusdam quam iusto fugit cumque sunt dicta tempora necessitatibus. 
        Obcaecati fugit officia cupiditate sequi exercitationem vitae, repellendus tempora accusantium! Hic.</p>
    </div>
  )
}
