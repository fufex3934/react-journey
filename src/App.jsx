function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}
function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl py-4">Amazing Scientists</h1>
        <div className="  flex gap-2">
          <Profile />
          <Profile />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
