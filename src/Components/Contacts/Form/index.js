import { useState } from 'react'
import styles from './style.module.css'

function Form({ contacts, addContact }) {

  const initialFormValues = { name: "", phone: "" };

  const [form, setForm] = useState(initialFormValues);

  const changeInput = (e) => {

    setForm({ ...form, [e.target.name]: e.target.value });

  }
  
  const onSubmit = (e) => {

    e.preventDefault();

    if(form.name === '' || form.phone === '') return false;

    addContact([ ...contacts, form]);

    setForm(initialFormValues);

  }
  
  return (
    <form onSubmit = { onSubmit }>
      <div>
        <input 
          placeholder='Name'
          name='name'
          onChange={ changeInput }
          value={ form.name } 
        />
      </div>
      <br/>
      <div>
        <input 
          placeholder='Phone Number' 
          name='phone' 
          onChange={ changeInput } 
          value={ form.phone } 
        />
      </div>
      <br/>
      <div>
        <button className={ styles.addcolor }>Add</button>
      </div>
    </form>
  )

}

export default Form