function AllData() {
  const [data, setData] = React.useState("");

  fetchData().then((res) => {
    setData(res);
  });

  const table = {
    color: "#b2e6",
    border: "3px solid black",
    padding: "6px",
    background: "white",
  };

  const box = {
    color: "#b2e6",
    border: "3px solid black",
    padding: "6px",
    background: "white",
  };
       //in future show when they are in debt or not
  return Array.isArray(data) ? (
    <>
      <h5>Data:</h5>
      <table>
        <tr style={table}>
          <th style={box}>Id</th>
          <th style={box}>Name</th>
          <th style={box}>Email</th>
          <th style={box}>Password</th>
          <th style={box}>Balance or Debt</th>
        </tr>
        {data.map((d) => {
          return (
            <tr key={d._id} style={table}>
              <td style={box}>{d._id}</td>
              <td style={box}>{d.name}</td>
              <td style={box}>{d.email}</td>
              <td style={box}>{d.password}</td>
              <td style={box}>${d.balance}</td>
            </tr>
          );
        })}
      </table>

      {/* {data} */}
    </>
  ) : (
    <h2>your data is loading please be patient.....</h2>
  );
}

async function fetchData() {
  return await fetch("/account/all")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
