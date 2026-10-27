import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function MainPage() {
    return (
        <div className="container">
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainPage;
