import Carousel from "../Carousel";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function App() {
    return (
        <div>
            <header>
                <Header />
            </header>

            <main>
                <div className="maincontent">
                    <Carousel />
                    <Content />
                </div>
                <Sidebar />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}