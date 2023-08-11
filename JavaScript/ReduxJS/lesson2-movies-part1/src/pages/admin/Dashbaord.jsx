import { Button, Col, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Dashboard() {
    const movies = useSelector(p=>p);
    
  return (
   <Container>
    <h1 className='text-center text-dark my-5'>Admin Panel</h1>
    <Button variant='success mb-4'>Add movie</Button>  
        
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
          <td><Button variant='warning'>Edit</Button></td>
          <td><Button variant='danger'>X</Button></td>
        </tr>
        ))}
        
      
      </tbody>
    </Table>
        </Col>
   </Container>
  );
}

export default Dashboard;