import React from 'react'
import { useEffect, useState } from 'react'
import './Home.css'

function Home() {
  const [list1, setList1] = useState([])
  const [list2, setList2] = useState([])

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const modulesParam = searchParams.get('modules')
    if (!modulesParam || !modulesParam.includes('newlist')) {
      fetch(' http://localhost:8080/api1')
        .then((response) => response.json())
        .then((data) => {
          setList1(data)
        })
        .catch((error) => console.error(error))
    } else {
      fetch(' http://localhost:8080/api1')
        .then((response) => response.json())
        .then((data) => {
          setList1(data)
        })
        .catch((error) => console.error(error))

      fetch(' http://localhost:8080/api2')
        .then((response) => response.json())
        .then((data) => {
          setList2(data)
        })
        .catch((error) => console.error(error))
    }
  }, [])

  return (
    <div className='list-grid-container'>
      {list1.length > 0 && (
        <div className='list1'>
          <h2>Colors</h2>
          <ul>
            {list1.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
      {list2.length > 0 && (
        <div className='list2'>
          <h2>Animals</h2>
          <ul>
            {list2.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Home
