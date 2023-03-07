import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
// import businesses from '../cars.json' // remove this

const Home = (props) => {
    return (
        <div className="card-container">
            {/* Change cars to props.cars and remove the cars.json import above */}
            {props.businesses.map((business, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{business.name.toUpperCase()}</span>
                        <ul>
                        <li>Location: {business["location"]}</li>
                       
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${business.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home