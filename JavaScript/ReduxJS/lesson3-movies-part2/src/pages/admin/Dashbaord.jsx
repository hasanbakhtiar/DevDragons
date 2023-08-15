import { Button, Col, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMovie } from '../../manager/actions/movieAction';

function Dashboard() {
    const movies = useSelector(p=>p);
    const dispatch = useDispatch();
  return (
   <Container>
    <h1 className='text-center text-dark my-5'>Admin Panel</h1>
    <Link className="btn btn-success my-4" to="/admin/add">Add movie</Link>  
        
        <Col md={12}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Rate</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((item,count)=>(
            <tr key={count}>
          <td>{count+1}</td>
          <td><img src={item.image} width={100} alt="" /></td>
          <td>{item.title}</td>
          <td>{item.rate} IMDB</td>
          <td><Link className='btn btn-warning' to={`/admin/edit/${item.id}`}>Edit</Link></td>
          <td><Button onClick={()=>{dispatch(deleteMovie({id:item.id}))}} variant='danger'>X</Button></td>
        </tr>
        ))}
        
      
      </tbody>
    </Table>
        </Col>
   </Container>
  );
}

export default Dashboard;