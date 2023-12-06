
import './App.scss'

/**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
     */

function App() {

  function handleClick() {
    console.log("I was clicked!")
  }

  function mouseEnter() {
    console.log("Mouse is hover over me!")
  }

  function mouseLeave() {
    console.log("mouse just left!")
  }

  return (
    <>

      <div className="container">
        <img onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} src="https://picsum.photos/640/360" />
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  )
}

export default App
