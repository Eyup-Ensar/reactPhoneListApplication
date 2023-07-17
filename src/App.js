import { useEffect, useState } from 'react'
import './App.css'
import Index from './Components/Contacts/index.js'

function App() {

  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("deneme");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()
    .then(user => setUsers({ user }))
    .catch(error => console.log(error))
    .finally(setIsLoading(false)));
  }, []);

  return (
    <div className="App">
      <Index/>
      <br/><br/><br/>
      { isLoading && "loading..." }
      { 
        users.user &&
        users.user.map((item, index) => <div key={ index }> { item.name } { item.username } </div>) 
      }
    </div>
  );
}

export default App
