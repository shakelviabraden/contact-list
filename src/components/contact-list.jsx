import React from 'react'
import { useState, useEffect } from 'react';


const ContactList = () => {
  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    async function fetchContacts() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await data.json()
        setContacts(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchContacts()
  }, [])

  if (!contacts) {
    return (
        <h1>Loading...</h1>
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3"><h1>Contact List</h1></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ContactList