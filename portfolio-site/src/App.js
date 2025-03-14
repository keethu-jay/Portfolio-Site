import React from 'react';
import { Button, Typography } from '@mui/material';
import {useHistory, useNavigate} from 'react-router-dom';
import './App.css'; // Import your CSS
import backgroundImage from '../assets/home_background.png'; // Correct path

function App() {
    const navigate = useNavigate();

    const handlePortfolioRedirect = () => {
        navigate('/Projects'); // Update this to your PortfolioPage route
    };

    return (
        <div
            className="app-background"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Use inline style
        >
            <div className="app-content"> {/* Scoped class for content */}
                <Typography variant="h2" component="h1" className="name">
                    Your Name
                </Typography>
                <Typography variant="h5" component="h2" className="title">
                    Digital Engineer
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePortfolioRedirect}
                    className="portfolio-button"
                >
                    View Portfolio
                </Button>
            </div>
        </div>
    );
}

export default App;