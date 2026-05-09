import "./Navigation.css";

function Navigation() {
  const navigation = [
    { title: "Men's clothing", path: "/men" },
    { title: "Women's clothing", path: "/women" },
    { title: "Electronics", path: "/electronics" },
    { title: "Jewerly", path: "/jewerlys" },
  ];
  return (
    <ul>
      {navigation.map((nav) => (
        <li>{nav.title}</li>
      ))}
    </ul>
  );
}

export default Navigation;
