import React, { useState, useEffect } from "react";
import "./App.css";

const data = [
  {
    id: 0,
    publisher: "25th Century",
    title: "On the Rocks",
    booth: 2455,
    visited: false
  },
  {
    id: 1,
    publisher: "AEG",
    title: "Whirling Witchcraft",
    booth: "Not listed",
    visited: false
  },
  {
    id: 2,
    publisher: "ARES Games",
    title: "Last Friday (2nd)",
    booth: 521,
    visited: false
  },
  {
    id: 3,
    publisher: "ARES Games",
    title: "Masters of the Night",
    booth: 521,
    visited: false
  },
  {
    id: 4,
    publisher: "ARES Games",
    title: "Sword and Sorcery",
    booth: 521,
    visited: false
  },
  {
    id: 5,
    publisher: "Asmadi",
    title: "Good Puppers",
    booth: 1429,
    visited: false
  },
  {
    id: 6,
    publisher: "Bezier Games",
    title: "Suburbia",
    booth: "Not listed",
    visited: false
  },
  {
    id: 7,
    publisher: "Bezier Games",
    title: "Suburbia",
    booth: "Not listed",
    visited: false
  },
  {
    id: 8,
    publisher: "Capstone Games",
    title: "Juicy Fruits",
    booth: 731,
    visited: false
  },
  {
    id: 9,
    publisher: "Eggertspiele",
    title: "Great Wester Trail 2nd Ed",
    booth: 2019,
    visited: false
  },
  {
    id: 10,
    publisher: "Forbidden Games",
    title: "Dungeon Party",
    booth: 2111,
    visited: false
  },
  {
    id: 11,
    publisher: "Nuts (Ares)",
    title: "Mini Rogue",
    booth: 521,
    visited: false
  },
  {
    id: 12,
    publisher: "Pandasaurus",
    title: "Dino Island Rawr n Write",
    booth: 1219,
    visited: false
  },
  {
    id: 13,
    publisher: "PSC",
    title: "Caesar + Blitzkrieg",
    booth: 2458,
    visited: false
  },
  {
    id: 14,
    publisher: "Renegade",
    title: "Clank! In! Space! Expansion",
    booth: 1803,
    visited: false
  },
  {
    id: 15,
    publisher: "Renegade",
    title: "Dead Men Tell No Takes 3rd Ed",
    booth: 1803,
    visited: false
  },
  {
    id: 16,
    publisher: "Restoration Games",
    title: "Dark Tower",
    booth: 929,
    visited: false
  },
  {
    id: 17,
    publisher: "WizKids!",
    title: "Super Skill Pinball",
    booth: 309,
    visited: false
  },
];

const App = () => {
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem("tableDataInLocalStorage")) || [...data]
  );

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    localStorage.setItem("tableDataInLocalStorage", JSON.stringify(tableData));
  }, [tableData]);

  const handleClick = e => {
    e.preventDefault();
    const index = e.target.id;
    tableData[index].visited = !tableData[index].visited;
    setTableData([...tableData]);
  };

  const handleToggle = e => {
    e.preventDefault();
    setToggle(!toggle);
  }

  return (
    <>
      <h1>Gencon Games & Booths</h1>
      <button className="btn btn-primary mb-3" onClick={handleToggle}>{toggle ? "Show" : "Hide"} Visited Booths</button>
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
              <tr key={game.id} className={game.visited ? "visited" : ""} id={game.visited && toggle ? "hideMe" : "showMe"}>
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
