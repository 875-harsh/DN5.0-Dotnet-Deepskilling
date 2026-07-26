function Scorebelow70(props) {

  const playersBelow70 = props.players.filter(
    (player) => player.score < 70
  );

  return (

    <div>

      {
        playersBelow70.map((player, index) => (

          <div key={index}>

            <li>
              Mr. {player.name} &nbsp; Score : {player.score}
            </li>

          </div>

        ))
      }

    </div>

  );

}

export default Scorebelow70;