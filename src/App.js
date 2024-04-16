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
    const { codeBlock, changeCodeBlock } = useAppStore();

    return (
        <div className="App relative">
            <Router>
                <Routes>
                    <Route path="/" element={<ButtonsView />} />
                </Routes>
            </Router>

            <Modal type="code">
                {codeBlock != null ? (
                    <div className="relative px-8 pt-16 pb-8 center bg-slate-700 select-text">
                        <div className="absolute left-8 top-8 h-8 flex items-center">
                            {codeBlock.optionList.map((option) => (
                                <div
                                    className={`h-full px-5 center ${
                                        option.label == codeBlock.selectedOption.label ? "bg-slate-900 text-white" : "bg-slate-500"
                                    } hover:bg-slate-900 hover:text-white cursor-pointer`}
                                    onClick={() => changeCodeBlock(option)}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                        <div className="w-full max-h-96 text-sm overflow-auto">
                            <CodeBlock text={codeBlock.selectedCode} language={codeBlock.selectedOption.language} theme={dracula} />
                        </div>
                    </div>
                ) : null}
            </Modal>
        </div>
    );
}

export default App;
