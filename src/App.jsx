import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <>
            <div className="main-container">
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
