import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Table  from 'react-bootstrap/Table';
import './Task1.css'

const Task1 = () => {
    const[data,setdata]=useState([]);
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            setdata(res.data);
        })
        .catch((err)=>{
            console.log('error:',err)
        })
    },[])
  return (
    <div className='t1'>
      <Table bordered hover>
          <thead>
            <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
            </tr>
           </thead>
      </Table>
      {
        data.map((item)=>{
            return(
                <div className='t2'>
                    <Table bordered hover>
                        <tbody>
                            <tr>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )
        })
      }
      
    </div>

  )
}

export default Task1