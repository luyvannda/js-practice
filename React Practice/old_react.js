function MyReact() {
  return (
    <ul>
      <li>This is the first React list</li>
      <li>I'm the second React list</li>
    </ul>
  )
};

ReactDOM.render(< MyReact />, document.getElementById("root"));


// This how we write react with one liner
// ReactDOM.render(<h1>Hello, everyone!!!</h1>, document.getElementById("root"));

/*
function MyApp() {
  return <h1>Hello, world!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
*/