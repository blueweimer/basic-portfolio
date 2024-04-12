import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to the Home page</h2>;
}

function About() {
  return <h2>Learn more about us on the About page</h2>;
}

function Contact() {
  return <h2>Contact us through the Contact page</h2>;
}

function App() {

  return (
   <Router>
         <div>
           <nav>
             <ul>
               <li>
                 <Link to="/">Home</Link>
               </li>
               <li>
                 <Link to="/about">About</Link>
               </li>
               <li>
                 <Link to="/contact">Contact</Link>
               </li>
             </ul>
           </nav>
           <Routes>
               <Route exact path="/" component={Home} />
               <Route path="/about" component={About} />
               <Route path="/contact" component={Contact} />
           </Routes>
         </div>

       </Router>
  );
}

export default App
