const Home = () => {

  const handleClick = (e) => {
    console.log('hello world', e);
  }


  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click</button>
      <button onClick={(e) => handleClickAgain('Dileepa', e)}>Click again</button>
    </div>
  );
}
 
export default Home;
