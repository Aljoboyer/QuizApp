import 'bootstrap/dist/css/bootstrap.min.css';
import "./asset/css/animate.min.css";
import "./asset/css/boxicons.min.css";
import "./asset/css/meanmenu.css";
import "./asset/css/responsive.css";
import "./asset/css/style.css";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/HomePage/LandingPage/LandingPage';
import Login from './Pages/Authentication/Login/Login';
import Registration from './Pages/Authentication/Registration/Registration';
import AddQuiz from './Pages/AddQuiz/AddQuiz';
import QuizPage from './Pages/QuizPage/QuizPage';
import Congrates from './Pages/Congrates/Congrates';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />

          <Route path="/AddQuiz" element={<AddQuiz />} />
          <Route path="/QuizPage" element={<QuizPage />} />
          <Route path="/Congrates" element={<Congrates />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
