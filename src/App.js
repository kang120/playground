import logo from "./logo.svg";
import "./App.css";
import ScrollAnimation from "./components/ScrollAnimation";

function App() {
    return (
        <div className="App">
            <div className="h-screen"></div>

            <div className="screen2">
                <ScrollAnimation />
            </div>

            <div className="h-screen"></div>
        </div>
    );
}

export default App;
