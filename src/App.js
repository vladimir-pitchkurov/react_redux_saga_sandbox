import {useDispatch, useSelector} from "react-redux";


function App() {

    const store = useSelector(store => store);
    const dispatch = useDispatch();

    console.log(store);

    return (
        <div className="App">
            Redux-saga tutorial
            <button onClick={() => dispatch({type: "CLICK"})}>Click ME!</button>
        </div>
    );
}

export default App;
