const T20Players = [
  "Sachin",
  "Dhoni",
  "Virat"
];

const RanjiPlayers = [
  "Rohit",
  "Raina",
  "Jadeja"
];

export const IndianPlayers = [
  ...T20Players,
  ...RanjiPlayers
];

export function OddPlayers(players) {

  return (

    <ul>

      <li>{players[0]}</li>
      <li>{players[2]}</li>
      <li>{players[4]}</li>

    </ul>

  );

}

export function EvenPlayers(players) {

  return (

    <ul>

      <li>{players[1]}</li>
      <li>{players[3]}</li>
      <li>{players[5]}</li>

    </ul>

  );

}

export function ListofIndianPlayers(props) {

  return (

    <ul>

      {
        props.IndianPlayers.map((player, index) => (

          <li key={index}>{player}</li>

        ))
      }

    </ul>

  );

}