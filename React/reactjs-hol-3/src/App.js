import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Shree"
        School="DAV Public School"
        total={784}
        goal={840}
      />
    </div>
  );
}

export default App;