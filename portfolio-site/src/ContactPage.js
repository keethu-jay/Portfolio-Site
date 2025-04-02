import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import './index.css';
import backgroundImage from './assets/background2.webp';
import backArrow from './assets/back_arrow.png';
import profilePicture from './assets/profile_picture.jpg';
import resumeImage from './assets/resume_image.png';
import downloadIcon from './assets/download_icon.png';
import emailjs from 'emailjs-com'; // import EmailJS

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                // Reset form after submission
                setFormData({ name: '', email: '', message: '' });
                alert('Message sent successfully!');
            }, (err) => {
                console.error('Failed to send message.', err);
                alert('Failed to send message. Please try again later.');
            });
    };

    const handleDownload = () => {
        window.open('/assets/resume.pdf'); // Update this to your actual PDF path
    };

    return (
        <div
            className="contact-background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="/" className="back-arrow" aria-label="Back to Home">
                    <img src={backArrow} alt="Back" className="rotated" />
                </a>

                {/* Profile Section */}
                <Box
                    sx={{
                        display: 'flex',
                        marginTop: '30px',
                        backgroundColor: 'rgba(243, 121, 68, 0.9)',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        maxWidth: '800px',
                        width: '100%',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <img src={profilePicture} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '75px', marginBottom: { xs: '20px', md: '0' }, objectFit: 'cover' }} />
                    <Box sx={{ textAlign: 'left' }}>
                        <Box
                            sx={{
                                backgroundColor: 'rgba(144, 238, 144, 0.9)',
                                padding: '10px',
                                borderRadius: '5px',
                                textAlign: 'center',
                                marginBottom: '10px',
                                width: 'fit-content',
                                align: 'center',
                            }}
                        >
                            <Typography variant="h6" sx={{ margin: 0 }} fontFamily={'Road Rage'} align={'center'}>About Me</Typography>
                        </Box>
                        <Typography fontFamily={'Road Rage'}>
                            Hello! My name is Keerthana Jayamoorthy, and I am a third-year Computer Science student at Worcester Polytechnic University, minoring in Law and Technology. I have a strong interest in UI design and artificial intelligence, which I pursue by developing personal projects.
                        </Typography>
                        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
                            <Box
                                sx={{
                                    backgroundColor: 'rgba(144, 238, 144, 0.9)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    margin: '5px 0',
                                    width: 'fit-content',
                                }}
                            >
                                <Typography align={'left'} fontFamily={'Road Rage'}><strong>Email:</strong> keerthana.sa.jayamoorthy@gmail.com</Typography>
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: 'rgba(144, 238, 144, 0.9)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    margin: '5px 0',
                                    width: 'fit-content',
                                }}
                            >
                                <Typography align={'left'} fontFamily={'Road Rage'}><strong>Phone:</strong> (508) 847-6494</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Resume Section */}
                <Box sx={{ marginTop: '30px', textAlign: 'center' }}>
                    <Box
                        sx={{
                            backgroundColor: 'rgba(243, 121, 68, 0.9)',
                            padding: '20px',
                            borderRadius: '10px',
                            marginBottom: '10px',
                        }}
                    >
                        <Typography variant="h6" sx={{ margin: 0 }} fontFamily={'Road Rage'}>My Resume</Typography>
                    </Box>
                    <img src={resumeImage} alt="Resume" style={{ width: '300px', height: 'auto', marginBottom: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                    <Box
                        sx={{
                            backgroundColor: 'rgba(144, 238, 144, 0.9)',
                            borderRadius: '5px',
                            padding: '10px',
                            display: 'inline-block',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={handleDownload}
                    >
                        <img src={downloadIcon} alt="Download" style={{ width: '50px', height: '50px' }} />
                        <Typography sx={{ margin: 0 }} fontFamily={'Road Rage'}>Download Resume</Typography>
                    </Box>
                </Box>

                {/* Contact Form Section */}
                <Box sx={{ marginTop: '30px', width: '100%', maxWidth: '500px' }}>
                    <Typography variant="h6" fontFamily={'Road Rage'} align="center">Contact Me</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            sx={{ marginBottom: '16px' }}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            sx={{ marginBottom: '16px' }}
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            multiline
                            rows={4}
                            fullWidth
                            sx={{ marginBottom: '16px' }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Send Message
                        </Button>
                    </form>
                </Box>
            </Box>
        </div>
    );
}

export default ContactPage;