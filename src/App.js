import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Blogs from './components/blogs/Blogs';
import React, {useState, useEffect} from 'react';

function App() {

  const [blogs, setBlogs] = useState([]);

  function showBlogForm() {
    const postform = document.querySelector(".post-form")
    postform.classList.add("zoom-out")
    postform.classList.remove("zoom-in")
    postform.style.display = "block"
  }

  function postComment(blogId, comment) {
    //
    const newBlog = blogs.find(blog => blog.id === blogId)
    if(newBlog) {
      comment.id = newBlog.comments.length+1
      newBlog.comments.unshift(comment)
      
      fetch(`http://localhost:4000/blogs/${blogId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
    .then(response => response.json())
    .then(data => {

      setBlogs([...blogs].map(blog => {
        if(blog.id === data.id) {
          return data
        } else {
          return blog
        }
      }))
    })

    }
  }

  useEffect(() => {
    fetch('http://localhost:4000/blogs')
    .then(response => response.json())
    .then(data => setBlogs(data.reverse()))
    }, [])
  return (
    <div className="App">
        <div className='name'>
            <Header classname="virtual"/>
        </div>
        <Navbar />

        <div className="blog" onClick={showBlogForm}>POST</div>
        <Blogs blogs={blogs} setBlogs={setBlogs} postComment={postComment}/>

        <Footer />
    </div>
  );
}

export default App;
