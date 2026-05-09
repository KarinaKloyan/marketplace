import "./Navigation.css";

function Navigation(props) {
  return (
    <ul>
      {props.navigation.map((nav) => (
        <li>{nav.title}</li>
      ))}
    </ul>
  );
}

export default Navigation;
