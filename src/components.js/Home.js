import React from 'react'
import { Card, CardContent, CardActions, Divider, Container } from '@mui/material'
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home = (props) => {
    return (
        <Container>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Business</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.businesses.map((business) => (
              <TableRow
                key={business.name}
                sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
              >
                <TableCell component="th" scope="row">
                  {business.name}
                </TableCell>
                <TableCell align="right">{business.location}</TableCell>
                <TableCell align="right">{business.location}</TableCell>
                <TableCell align="right">{business.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       
       </Container>
       
       
       
       
    )
}




export default Home



{/* <div className="card-container">
            {/* Change cars to props.cars and remove the cars.json import above */}
            


        //     {props.businesses.map((business, idx) => (
        //         <Card key={idx} className="card">
        //             <CardContent className="text-gray">
        //                 <span>{business.name.toUpperCase()}</span>
        //                 <ul>
        //                 <li>Location: {business["location"]}</li>
                       
        //                 </ul>
        //             </CardContent>
        //             <Divider />
        //             <CardActions style={{ color: 'mediumblue' }}>
        //                 <Link to={`/car/${business.id}`}>See More Details</Link>
        //             </CardActions>
        //         </Card>
        //     ))}
        // </div> */}