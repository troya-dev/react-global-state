export default function Display() {
  return (
    <>
      <h1>Display Component</h1>
      <h3>
        {window.$store.data.name} {window.$store.data.surname}
      </h3>
    </>
  );
}
