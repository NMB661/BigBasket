import React from 'react'
import Table from 'react-bootstrap/Table';
import Placeholder from 'react-bootstrap/Placeholder';
import './Table1.css'
const Table1 = () => {
  return (
    <>
    <div id='t1'>
    <Table className='table table-bordered border-black' variant='info'  >
    <thead>
      <tr >
        <th>Sr.No</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th> 
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Shruti</td>
        <td>Bhujbal</td>
        <td>@Shruti</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Vaishnavi</td>
        <td>Shinde</td>
        <td>@Vaishnavi</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Friends Forever</td>
        <td>@besti</td>
      </tr>
    </tbody>
  </Table>
  </div>
  </>
  )
}

export default Table1