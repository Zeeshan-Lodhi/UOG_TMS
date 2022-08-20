import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import AddBus from "./screens/AddBus/AddBus";
import UpdateBus from "./screens/Update/UpdateBus";
import MainDashBoard from './screens/Dashboard/MainDashBoard'
import Buses from "./screens/MyBuses/Buses";
import Driver from "./screens/Driver/Driver";
import Students from "./screens/Students/Students";
import AddStudent from "./screens/AddStudent/AddStudent";
function App() {

  return (
    <>
      <main className="App">
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            {/* <Route path="/" element={<LandingPage />} exact /> */}
            <Route path="/" exact element={<LoginScreen />} />
            <Route path="/dashboard" element={<MainDashBoard />} />
            <Route path="/buses" element={<Buses />} />
            <Route path="/api/bus/add" element={<AddBus />} />
            <Route path="/api/bus/get/:id" element={<UpdateBus />} />
            <Route path="/api/drivers/get" element={<Driver />} />
            <Route path="/api/student/get" element={<Students />} />
            <Route path="/api/student/add" element={<AddStudent />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
