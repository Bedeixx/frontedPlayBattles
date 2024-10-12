function App() {
  const loginWithSpotify = () => {
    window.location.href = 'https://playbattles-f33e38167e8a.herokuapp.com/auth/spotify';
  };

  return (
    <div className="App">
      <h1>Bienvenido a Play Battles</h1>
      <button onClick={loginWithSpotify}>Iniciar sesión con Spotify</button>
    </div>
  );
}

export default App;
