export default function Header() {
  console.log("Re-rendering HEADER")
  return (
    <header>
      <img src="react-logo-xs.png" alt="React logo" />
      <div>
        <h1>React.js</h1>
        <p>i.e., using the React library for rendering the UI</p>
      </div>
    </header>
  );
}
