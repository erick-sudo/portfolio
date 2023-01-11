import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Blogs from './components/blogs/Blogs';

function App() {
  return (
    <div className="App">
        <div className='name'>
            <Header classname="virtual"/>
        </div>
        <Navbar />
            
        <Blogs />

        <Footer />
    </div>
  );
}

export default App;
