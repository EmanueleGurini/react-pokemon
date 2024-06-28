import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div>
      <Card
        name="pippo"
        urlImage="https://plus.unsplash.com/premium_photo-1675237625806-d6258a9bb40e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8ZDNaV09JS1Z2U2d8fGVufDB8fHx8fA%3D%3D"
      />
      <Card name="pluto" />
      <Card name="topolino" />
      <Card name="minnie" />
      <Card name="paperina" />
    </div>
  );
}

export default App;
