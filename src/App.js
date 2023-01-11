import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Blogs from './components/blogs/Blogs';

function App() {
  function showBlogForm(event) {
    const postform = document.querySelector(".post-form")
    postform.classList.add("zoom-out")
    postform.classList.remove("zoom-in")
    postform.style.display = "block"
  }
  return (
    <div className="App">
        <div className='name'>
            <Header classname="virtual"/>
        </div>
        <Navbar />

        <div className="blog" onClick={showBlogForm}>POST</div>
        <Blogs />

        <Footer />
    </div>
  );
}

export default App;
