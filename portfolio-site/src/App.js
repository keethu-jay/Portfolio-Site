import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import './App.css'; // Import your CSS
import backgroundImage from './assets/home_background.png'; // Correct path
import mailboxImage from './assets/mailbox.png'; // Update the path as necessary

function App() {
    const navigate = useNavigate();

    const handlePortfolioRedirect = () => {
        navigate('/Projects'); // Update this to your PortfolioPage route
    };
    const handleContactRedirect = () => {
        navigate('/Contact'); // Update this to your ContactPage route
    };

    return (
        <div
            className="app-background"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Use inline style
        >
            <div className="app-content"> {/* Scoped class for content */}
                <Box
                    style = {{
                        display: 'flex',
                        backgroundColor: 'rgba(243, 121, 68, 0.62)',
                        padding: '1rem',
                        borderWidth: '2px',
                        borderColor: 'black',
                        borderStyle: 'solid',
                        borderRadius: '2rem',
                }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        fontFamily={'Road Rage'}
                        style={{
                            color: 'black', // Solid color for text
                            opacity: '1',   // Ensure text is fully opaque
                        }}
                    >
                        Keerthana Jayamoorthy
                        </Typography>

                </Box>
                <Box
                    style = {{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        backgroundColor: 'rgba(243, 121, 68, 0.62)',
                        padding: '1rem',
                        borderWidth: '2px',
                        borderColor: 'black',
                        borderRadius: '5px',
                        borderStyle: 'solid',
                        margin: '1rem',
                        maxWidth: '90%',
                        width: 'fit-content',
                    }}>
                    <Typography
                        variant="h3"
                        component="h1"
                        fontFamily={'Road Rage'}
                        style={{
                            color: 'black', // Solid color for text
                            opacity: '1',   // Ensure text is fully opaque
                        }}
                    >
                        Digital Engineer
                    </Typography>

                </Box>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'fixed',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={handlePortfolioRedirect}
                        style={{
                            backgroundColor: 'rgba(243, 121, 68, 0.62)',
                            color: 'black',
                            borderRadius: '25px',
                            padding: '10px 20px',
                            transition: 'background-color 0.3s', // transition for hover
                            cursor: 'pointer', // Pointer cursor on hover
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(243, 101, 48, 0.62)'; // Darker orange on hover
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(243, 121, 68, 0.62)'; // Original color when not hovering
                        }}
                    >
                        <Typography
                            variant="h4"
                            style={{
                                textAlign: 'center',
                                fontFamily: 'Road Rage',
                            }}
                        >
                            View Portfolio
                        </Typography>
                    </Button>
                </Box>
                <Button
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'fixed',
                        bottom: '80px', // Push up the box by 75 pixels
                        left: '20px',
                        cursor: 'pointer',
                    }}
                    onClick={handleContactRedirect}
                >
                    <Box
                        style={{
                            backgroundColor: 'rgba(243, 121, 68)', // Orange background
                            borderRadius: '15px', // Rounded edges
                            padding: '3px 3px', // Padding around the text
                            // Space between title and image
                        }}
                    >
                        <Typography variant="h6" style={{ color: 'black' }} fontFamily={'Road Rage'}>
                            Contact
                        </Typography>
                    </Box>
                    <img src={mailboxImage} alt="Contact" style={{ width: '100px', height: '100px' }} />
                </Button>
            </div>
        </div>
    );
}

export default App;