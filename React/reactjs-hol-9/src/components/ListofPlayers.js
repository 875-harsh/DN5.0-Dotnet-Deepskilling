function ListofPlayers(props) {

  return (

    <div>

      {
        props.players.map((player, index) => (

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

export default ListofPlayers;