import React from "react"
import "./Blogs.css"
import subaru from "../../assets/posts/subaru-impreza.png"
import telegram from "../../assets/iconsHv/telegram.png"
import arrowLeft from "../../assets/iconsHv/arrow-left.png"

function Blogs() {
    return (
        <div className="blogs-wrapper">
            <h2>Blogs</h2>
            <PostForm send={telegram} />
            <div className="blogs">
                <Post author="Erick Ochieng" time={Date()} image={subaru} />
            </div>
        </div>
    );
}

function PostForm({send}) {
    function hideBlogForm(event) {
        document.querySelector(".post-form").style.display = "none"
    }

    return (
        <div className="post-form">
            <div className="hide-poster" onClick={hideBlogForm}><img src={arrowLeft} alt="close poster" /></div>
            <h2>Conversation is king. Content is just something to talk about.</h2>
            <form className="form-post">
              <input name="firstname" type="text" placeholder="Firstname" />
              <input name="lastname" type="text" placeholder="Lastname" />
              <input name="email" type="text" required  placeholder="Email"/>
              <input name="image" type="file" />
              <textarea className="blog-info" name="blog-info" placeholder="About" required></textarea>
              <button className="post-btn"><img src={send} alt="post" /></button>
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