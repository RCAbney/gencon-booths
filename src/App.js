import React, { useState, useEffect } from "react";
import "./App.css";

const data = [
  {
    id: 0,
    publisher: "AEG",
    title: "Captain is Dead: Dangerous Planet",
    booth: 701,
    visited: false
  },
  {
    id: 1,
    publisher: "B&B",
    title: "The Refuge: Terror From the Deep",
    booth: 275,
    visited: false
  },
  {
    id: 2,
    publisher: "Blue Orange Games",
    title: "Planet",
    booth: 1813,
    visited: false
  },
  {
    id: 3,
    publisher: "Board & Dice",
    title: "Teotihuacan Expansion",
    booth: 2535,
    visited: false
  },
  {
    id: 4,
    publisher: "Capstone Games",
    title: "Watergate",
    booth: 457,
    visited: false
  },
  {
    id: 5,
    publisher: "CMON",
    title: "God of War",
    booth: 417,
    visited: false
  },
  {
    id: 6,
    publisher: "CMON",
    title: "Zombicide Invader",
    booth: 417,
    visited: false
  },
  {
    id: 7,
    publisher: "Czech Games",
    title: "Sanctum",
    booth: 237,
    visited: false
  },
  {
    id: 8,
    publisher: "Deep Water Games",
    title: "Floor Plan",
    booth: 471,
    visited: false
  },
  {
    id: 9,
    publisher: "Deep Water Games",
    title: "Welcome To (Solo)",
    booth: 471,
    visited: false
  },
  {
    id: 10,
    publisher: "Everything Epic Games",
    title: "Grind House",
    booth: 2819,
    visited: false
  },
  {
    id: 11,
    publisher: "Heidelbar Games",
    title: "Wordsmith",
    booth: 1819,
    visited: false
  },
  {
    id: 12,
    publisher: "Indie Board and Cards",
    title: "Aeon's End: New Age",
    booth: 2447,
    visited: false
  },
  {
    id: 13,
    publisher: "Mythic Games",
    title: "Super Fantasy Brawl",
    booth: 2805,
    visited: false
  },
  {
    id: 14,
    publisher: "Penguin & Panda",
    title: "Onimaru",
    booth: 329,
    visited: false
  },
  {
    id: 15,
    publisher: "Plaid Hat Games",
    title: "Super Punch Fighter",
    booth: 823,
    visited: false
  },
  {
    id: 16,
    publisher: "Ravensberger",
    title: "Jaws",
    booth: 2111,
    visited: false
  },
  {
    id: 17,
    publisher: "Renegade Games",
    title: "Clank! Stuffs",
    booth: 2201,
    visited: false
  },
  {
    id: 18,
    publisher: "Renegade Games",
    title: "Terror Below (Tremors)",
    booth: 2201,
    visited: false
  },
  {
    id: 19,
    publisher: "Steve Jackson Games",
    title: "Deadly Doodles",
    booth: 1401,
    visited: false
  },
  {
    id: 20,
    publisher: "The OP",
    title: "Die Hard: Nakatomi Plaza",
    booth: 137,
    visited: false
  },
  {
    id: 21,
    publisher: "The OP",
    title: "IT: Evil Below",
    booth: 137,
    visited: false
  }
];

const App = () => {
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem("tableDataInLocalStorage")) || [...data]
  );

  useEffect(() => {
    localStorage.setItem("tableDataInLocalStorage", JSON.stringify(tableData));
  }, [tableData]);

  const handleClick = e => {
    e.preventDefault();
    const index = e.target.id;
    tableData[index].visited = !tableData[index].visited;
    setTableData([...tableData]);
  };

  return (
    <>
      <h1>Gencon Games & Booths</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Booth #</th>
            <th scope="col">Publisher</th>
            <th scope="col">Game</th>
            <th scope="col">Visited this booth</th>
          </tr>
        </thead>
        <tbody>
          {tableData
            .sort((a, b) => a.booth - b.booth)
            .map((game, i) => (
              <tr key={game.id} className={game.visited ? "visited" : ""}>
                <td>{game.booth}</td>
                <td>{game.publisher}</td>
                <td>{game.title}</td>
                <td>
                  <button
                    id={i}
                    className="btn btn-primary"
                    onClick={handleClick}
                  >
                    Visited
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default App;
