import React from "react"
import "./Blogs.css"
import subaru from "../../assets/posts/subaru-impreza.png"
import telegram from "../../assets/iconsHv/telegram.png"
import arrowLeft from "../../assets/iconsHv/x-mark.png"
import arrowup from "../../assets/iconsFg/arrow-up.png"
import arrowdown from "../../assets/iconsFg/arrow-down.png"

function Blogs() {
    return (
        <div className="blogs-wrapper">
            <h2>Blogs</h2>
            <PostForm send={telegram} />
            <div className="blogs">
                <Post author="Erick Ochieng" time={Date()} image={subaru} info={"Nothing drives like a Subaru, because nothing else is built like one. Each Subaru is engineered to put your mind at ease, while giving you the power to deeply engage with your life."} />
                <Post author="Toms Hardware" time={Date()} image={"https://cdn.mos.cms.futurecdn.net/kVCu83sCoAvp5wPGisLotj-970-80.jpg.webp"} info={"AMD's $429 twelve-core Ryzen 9 7900, $329 eight-core Ryzen 7 7700, and $229 six-core Ryzen 5 7600 come to market as the first 'Non-X' Ryzen models for the company's new AM5 platform for Zen 4 processors. As we've seen with AMD's previous-gen lower-power models, these 65W models offer the same core counts and cache as their full-fledged X-series counterparts but come with lower clock speeds and a lower price point."} />
                <Post author="Pixa May" time={Date()} image={"https://cdn.pixabay.com/photo/2019/09/08/20/54/elephant-4461911_960_720.jpg"} info={"Savanna elephants (Loxodonta africana) are intelligent, sociable, affectionate animals. They portray behaviors similar to humans such as caring for weaker individuals, adoption of orphaned calves and grieving over dead companions. Living in family groups of varying sizes and led by matriarchs, elephants traverse vast landscapes in search of food and water, paying no attention to political borders. With a single mature individual consuming between 250 and 350 kg of vegetation and requiring 110 to 190 litres of water per day, the home ranges of these elephants can span several hundred square kilometres. As a result, elephants play an important role in the modification of ecosystems and creation of conditions suitable for the survival of some plants and animals. They maintain grasslands by reducing tree cover and create water ponds/ wallows for other wildlife as they dig for water using their trunks and tusks. They help with the dispersal and germination of tree species such as Borassus palms and Balanitis aegyptiaca trees, which are native to much of Africa."} />
            </div>
        </div>
    );
}

function PostForm({send}) {
    function hideBlogForm(event) {
        const postform = document.querySelector(".post-form")
        postform.classList.add("zoom-in")
        postform.classList.remove("zoom-out")
        postform.style.display = "none"
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


function Post({author, time, image, info}) {
    function collapseComments(event) {
        const comments = event.target.closest("section")
        if(comments.getAttribute("id") === "up") {
            comments.setAttribute("id","down")
            comments.style.height = "max-content"
            comments.firstElementChild.firstElementChild.setAttribute("src", arrowdown)
        } else {
            comments.setAttribute("id","up")
            comments.style.height = "32px"
            comments.firstElementChild.firstElementChild.setAttribute("src", arrowup)
        }
    }
    return (
        <div className="posts">
            <h3 className="author">{author}</h3>
            <div className="time">{time}</div>
            <div className="post-content">
                <Pic url={image} />
                <p className="about-post">{info}</p>
            </div>
            <section className="comments" id="up">
                <div className="expand-comments" onClick={collapseComments}><img src={arrowup} alt="collapse comments"/></div>
                <h5 className="h5" >COMMENTS</h5>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </section>
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