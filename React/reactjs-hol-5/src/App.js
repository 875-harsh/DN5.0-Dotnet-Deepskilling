import "./App.css";
import CohortDetails from "./components/CohortDetails";

function App() {
  return (
    <div className="App">
      <h1>Cohorts Details</h1>

      <CohortDetails
        cohortName="INTADMDF10 -.NET FSD"
        startDate="22-Feb-2022"
        currentStatus="Scheduled"
        coach="Adithya"
        trainer="Jojo Jose"
      />

      <CohortDetails
        cohortName="ADM21UF014 - Java FSD"
        startDate="10-Sep-2021"
        currentStatus="Ongoing"
        coach="Apoorv"
        trainer="Elisa Smith"
      />

      <CohortDetails
        cohortName="CDBJF21025 - Java FSD"
        startDate="24-Dec-2021"
        currentStatus="Ongoing"
        coach="Adithya"
        trainer="John Doe"
      />
    </div>
  );
}

export default App;