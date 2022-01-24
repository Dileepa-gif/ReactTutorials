import { useState } from "react";

const Home = () => {
  // let name = 'Dileepa';
  const [name, setName] = useState('Dileepa');
  const [age, setAge] = useState(23);

  const handleClick = () => {
    // name = 'Malaka';
    setName('Malaka');
    setAge(56);
  }

  return (
    <div className="home">
      <p>{ name } - { age }</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
 
export default Home;
