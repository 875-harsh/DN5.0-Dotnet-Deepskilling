import './App.css';

function App() {

  const office = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    }
  ];

  const heading = "Office Space , at Affordable Range";

  return (
    <div className="App">

      <h1>{heading}</h1>

      {
        office.map((item, index) => (

          <div key={index}>

            <img
              src="/office.jpg"
              alt="Office Space"
              width="250"
              height="180"
            />

            <h2>Name: {item.Name}</h2>

            <h3
              style={{
                color: item.Rent <= 60000 ? "red" : "green"
              }}
            >
              Rent: Rs. {item.Rent}
            </h3>

            <h3>
              Address: {item.Address}
            </h3>

          </div>

        ))
      }

    </div>
  );
}

export default App;