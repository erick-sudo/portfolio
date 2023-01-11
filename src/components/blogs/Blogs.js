import React from "react"
import "./Blogs.css"
import subaru from "../../assets/posts/subaru-impreza.png"
import telegram from "../../assets/iconsHv/telegram.png"

function Blogs() {
    return (
        <div className="blogs">
            <Post author="Erick Ochieng" time={Date()} image={subaru} />
            <Post author="Erick Ochieng" time={Date()} image={subaru} />
            <Post author="Erick Ochieng" time={Date()} image={subaru} />
            <Post author="Erick Ochieng" time={Date()} image={subaru} />
        </div>
    );
}

function PostForm() {
    return (
        <div>
            <h1>Post Form</h1>
            <form>

            </form>
        </div>
    );
}


function Post({author, time, image}) {
    return (
        <div className="posts">
            <h3 className="author">{author}</h3>
            <div className="time">{time}</div>
            <div className="post-content">
                <Pic url={image} />
                <p>Nothing drives like a Subaru, because nothing else is built like one. Each Subaru is engineered to put your mind at ease, while giving you the power to deeply engage with your life.</p>
            </div>
            <div className="comments">
                COMMENTS
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
            <CommentForm send={telegram}/>
        </div>
    );
}

function Pic({url}) {
    return (
        <div className="pics">
            <img className="pictures" src={url} alt="post-pic" />
        </div>
    );
}

function Comment() {
    return (
        <div className="comment">
            COMMENT
        </div>
    );
}

function CommentForm({send}) {
    return (
        <div className="comment-form">
            <div className="message-icon"><img src="https://cdn.pixabay.com/photo/2017/03/17/06/47/email-2151046_960_720.png" /></div>
            <form>
                <textarea className="write-comment" ></textarea>
                <div className="comment-author">
                    <input className="email" name="email" type="email"/>
                    <button className="comment-btn"><img src={send} alt="comment" /></button>
                </div>
            </form>
        </div>
    );
}

export default Blogs