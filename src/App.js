import {useSelector} from "react-redux";


function App() {

    const store = useSelector(store => store);

    return (
        <div className="App">
            Redux-saga tutorial
        </div>
    );
}

export default App;
