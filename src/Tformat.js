import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

const Tformat = () => {
    const [fname, Fname]=useState('Mark');
    const [lname, Lname]=useState('Otto');
    const [uname, Uname]=useState('@mdo');

    function update(){
        Fname('Shruti');
        Lname('Bhujbal');
        Uname('@shruti');
    }

    

  return (
    <>
    <div>
    <Table striped bordered hover variant='warning'>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{1}</td>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{uname}</td>
      
        </tr>
      </tbody>
    </Table>
    </div>
     
    <div>  
      <center>
      <button onClick={update}>Update_Data</button>
      </center>
    </div>
    </>
  )
}

export default Tformat