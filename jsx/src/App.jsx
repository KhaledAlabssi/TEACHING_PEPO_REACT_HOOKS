
import "./App.css"

function App() {

    const username = "Khaled"
    function logHi() {
        console.log("hi")
    }

    
    logHi()


    return (
        <div className="App">
            <header>
                <h1>React is Fun</h1>
            </header>
            <main>
                  {username && <p> Hi, I'm {username}</p>} 
            </main>
        </div>
    )
}

export default App
