import { useState } from 'react'
import Title from './Title/index.js'
import List from './List/index'
import Form from './Form/index'

function Components () {

  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <Title />
      <List 
        contacts={ contacts } 
      />
      <Form 
        contacts={ contacts }
        addContact={ setContacts }
      />
    </div>
  )

}

export default Components