import { Toaster } from "@/components/ui/toaster";
import Router from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/slides/counterSlider";

function App() {
    // const count = useSelector((state: any) => state.counter.value);
    // const dispatch = useDispatch();

    return (
        <>
            {/* <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
            </div> */}
            <Router />
            <Toaster />
        </>
    );
}

export default App;
