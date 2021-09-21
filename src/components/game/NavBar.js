const styles = {
  borderBottom: "2px solid black",
  fontSize: "1 rem",
  width: "4000px",
  fontSize: "25px",
};

const NavBar = ({ name1, name2, firstCounter, secondCounter, drawCounter }) => {
  return (
    <div className="navbar" style={styles}>
      TicTacToe | {name1} - {firstCounter} vs {name2} - {secondCounter} | Draws{" "}
      {drawCounter}
    </div>
  );
};

export default NavBar;
