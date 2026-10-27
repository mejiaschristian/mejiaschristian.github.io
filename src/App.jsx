import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Header from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route index element={<Header />} />
                <Route path="about" element={<Header />} />
                <Route path="projects" element={<Projects />} />
                <Route path="certifications" element={<Certificates />} />
                <Route path="contacts" element={<Contacts />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
