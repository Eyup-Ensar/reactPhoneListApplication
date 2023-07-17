import { useState } from 'react'

function List ({ contacts }) {

  const [filter, setFilter] = useState("");

  const filtered = contacts.filter(item => {
    return Object.keys(item).some(key => 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filter.toLocaleLowerCase())
    )
  });

  return (
    <div>
      <input 
        placeholder='Filter' 
        onChange={ (e) => setFilter(() => e.target.value) } 
        value={ filter } 
      />
      <ul>
        { filtered.map((item, index) => <li key={ index }> { item.name } - { item.phone } </li>) }
      </ul>
    </div>
  )

}

export default List
