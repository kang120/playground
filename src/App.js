import logo from "./logo.svg";
import "./App.css";
import ScrollAnimation from "./components/ScrollAnimation";
import ButtonsView from "./views/ButtonsView";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Modal from "./components/Modals";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleModal } from "./helpers";
import { CodeBlock, dracula } from "react-code-blocks";
import useAppStore from "./stores/AppStore";

function App() {
    const { codeBlock } = useAppStore();

    return (
        <div className="App relative">
            <Router>
                <Routes>
                    <Route path="/" element={<ButtonsView />} />
                </Routes>
            </Router>

            <Modal type="code">
                <div className="px-8 py-8 center bg-slate-700 select-text">
                    <div className="w-full max-h-96 text-sm overflow-auto">
                        <CodeBlock text={codeBlock?.code} language={codeBlock?.language} theme={dracula} />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default App;
