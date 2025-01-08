import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home.jsx";
import About from "../components/About";
import Navbar from "../components/Navbar"
import NoteState from "../components/notes/noteState.jsx";
import Message from "../components/message.jsx";



import './App.css';


function App() {

  return (
    <>

      <NoteState>
        <BrowserRouter>

          <Navbar />
          <Message />

          <div className="container h-screen" style={{ height: '100%' }}>
            <Routes>
              <Route  >

                <Route index path="/" element={<Home />} />
                <Route exact path="about" element={<About />} />




              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>






    </>
  )
}

export default App
