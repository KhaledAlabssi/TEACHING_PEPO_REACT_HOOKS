import "./App.css"

function App() {
    // function logHi() {
    //     console.log("hi")
    // }
    // logHi()
    let num = 0

    return (
        <div className="App">
            <header>
                <h1>React is Fun</h1>
            </header>
            <main>
                <p>{num && num}</p>
                <button onClick={() => console.log("clicked")}>
                    Increase Counter by 1
                </button>
            </main>
        </div>
    )
}

export default App

// step 1

// function incNum () {
//   num ++
//   console.log(num);
// }
// <button onClick={incNum}>Increase Counter by 1</button>

// step 2

// const [num, setNum] = useState(0)
{
    /* <button onClick={() => setNum(num + 1)}>
        Increase Counter by 1
    </button> */
}
