import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Charpter from "./page/Charpter";
import Course from "./page/Course";

function App() {
return (
<Router>

    <Routes>
    <Route path="/" element={<Course/>} />
    <Route path="/course/:id" element={<Charpter/>} />

    </Routes>
</Router>
);
}
export default App;