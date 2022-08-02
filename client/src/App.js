import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Category from './components/Category';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Services from './components/Services';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Publish from './components/Publish';
import PostDetail from './components/PostDetail';
import CategoryPost from './components/CategoryPost';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user.value);
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={user._id==="" ? <SignUp /> : <Blog />} />
          <Route path="/blog/:_id" element={user._id==="" ? <SignUp /> : <PostDetail />} />
          <Route path="/publish" element={user._id==="" ? <SignUp /> : <Publish />} />
          <Route path="/category" element={user._id==="" ? <SignUp /> : <Category />} />
          <Route path="/blog/category/:_id" element={user._id==="" ? <SignUp /> : <CategoryPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:_id" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;