import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Blogs from './components/blogs/Blogs';
import React, {useState, useEffect} from 'react';

function App() {

  const [blogs, setBlogs] = useState([]);

  function showBlogForm(event) {
    const postform = document.querySelector(".post-form")
    postform.classList.add("zoom-out")
    postform.classList.remove("zoom-in")
    postform.style.display = "block"
  }

  useEffect(() => {
    fetch('http://localhost:4000/blogs')
    .then(response => response.json())
    .then(data => setBlogs(data))
    }, [])
  return (
    <div className="App">
        <div className='name'>
            <Header classname="virtual"/>
        </div>
        <Navbar />

        <div className="blog" onClick={showBlogForm}>POST</div>
        <Blogs blogs={blogs} />

        <Footer />
    </div>
  );
}

export default App;
