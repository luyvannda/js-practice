
import './App.scss'

function App() {

  function handleClick() {
    console.log("I was clicked!")
  }

  return (
    <>

      <div className="container">
        <img src="https://picsum.photos/640/360" />
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  )
}

export default App
