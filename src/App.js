import $store from "./$store";
import Display from "./Display";

function App() {
  window.$store = $store();

  return (
    <div className="App">
      <h1>App Component</h1>
      <div>
        <input autoFocus defaultValue={window.$store.data.name} onChange={(e) => window.$store.setData({ ...window.$store.data, name: e.target.value })} />
        <input defaultValue={window.$store.data.surname} onChange={(e) => window.$store.setData({ ...window.$store.data, surname: e.target.value })} />
      </div>

      <hr />

      <Display />
    </div>
  );
}

export default App;
