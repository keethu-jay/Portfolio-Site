import React, { useState } from 'react';
import './index.css';
import backgroundImage from "./assets/background2.webp";
import MnistPic from "./assets/mnist_pic.png";
import shellProj from "./assets/shell_code.png";
import HKSite from "./assets/HKsite.png";
import portPic from "./assets/portfolio_pic.png";
import backArrow from "./assets/back_arrow.png";

function ProjectPage() {
    // State to manage filter selections
    const [filters, setFilters] = useState({
        school: false,
        personal: false,
        cpp: false,
        python: false,
        javascript: false,
        htmlcss: false,
    });

    // Handler for filter checkbox changes
    const handleFilterChange = (event) => {
        const { name, checked } = event.target;  // Destructure name and checked from the event target
        setFilters((prevFilters) => ({
            ...prevFilters,  // Spread the previous filters
            [name]: checked, // Update the specific filter with the new checked state
        }));
    };

    // Array of project objects, each with unique properties
    const projects = [
        {
            id: 1,
            title: 'MNIST Classifier',
            image: MnistPic, // Path to project image
            tags: ['Personal', 'Python', 'React', 'VScode', 'NodeJS', 'Keras', 'Tensorflow', 'AI'],
            description: 'An AI algorithim that identifies for handwritten digits using deep learning.',
            githubLink: 'https://github.com/keethu-jay/Simple-digit-classifier',
        },
        {
            id: 2,
            title: 'Custom Shells',
            image: shellProj, // Path to project image
            tags: ['School', 'Operating Systems', 'C++', 'VScode', 'Collaborative'],
            description: 'Made a custom shell in Operating Systems with a partner.',
            githubLink: 'https://github.com/keethu-jay/Operating-Systems-Project-1',
        },
        {
            id: 3,
            title: 'Research on Status of Pollinators',
            image: HKSite, // Path to project image
            tags: ['School', 'Typescript', 'Collaborative', 'Git/GitHub', 'React'],
            description: 'A collaborative website worked on with another student for a sponsor during a study abroad project..',
            githubLink: 'https://github.com/VoDylan/beetalesproj',
        },
        {
            id: 4,
            title: 'Portfolio Site',
            image: portPic, // Path to project image
            tags: ['Personal', 'Javascript', 'HTML/CSS', 'Git/GitHub', 'React', 'NodeJS'],
            description: 'A website made to display all my projects.',
            githubLink: 'https://github.com/VoDylan/beetalesproj',
        },
        // Add more projects here with different properties
    ];

    // Filter projects based on selected filters
    const filteredProjects = projects.filter(project => {
        if (filters.school && !project.tags.includes('School')) return false;
        if (filters.personal && !project.tags.includes('Personal')) return false;
        if (filters.cpp && !project.tags.includes('C++')) return false;
        if (filters.python && !project.tags.includes('Python')) return false;
        if (filters.javascript && !project.tags.includes('JavaScript')) return false;
        if (filters.htmlcss && !project.tags.includes('HTML/CSS')) return false;
        return true; // Include project if it passes all filters
    });

    return (
        <div
            className="project-background"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Use inline style
        >
        <div className="project-page">
            <h1 className="projects-title">Projects</h1>
            <div className="content-wrapper">
                <div className="filter-bar">
                    <h2 className="filter-title">Filter</h2>
                    <div>
                        {/* Checkboxes for filtering projects */}
                        <label>
                            <input
                                type="checkbox"
                                name="school"
                                checked={filters.school}
                                onChange={handleFilterChange}
                            />
                            School
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="personal"
                                checked={filters.personal}
                                onChange={handleFilterChange}
                            />
                            Personal
                        </label>
                        <h3 className="language-title">Language</h3>
                        <label>
                            <input
                                type="checkbox"
                                name="cpp"
                                checked={filters.cpp}
                                onChange={handleFilterChange}
                            />
                            C++
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="python"
                                checked={filters.python}
                                onChange={handleFilterChange}
                            />
                            Python
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="javascript"
                                checked={filters.javascript}
                                onChange={handleFilterChange}
                            />
                            JavaScript
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="htmlcss"
                                checked={filters.htmlcss}
                                onChange={handleFilterChange}
                            />
                            HTML/CSS
                        </label>
                    </div>
                </div>
                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div className="project-card" key={project.id}>
                            <h2>{project.title}</h2>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                <div className="image-container">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                    <div className="description-popup">{project.description}</div>
                                </div>
                            </a>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span className="tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <a href="/" className="back-arrow" aria-label="Back to Home">
                <img src={backArrow} alt="Back"  className="rotated"/>
            </a>
        </div>
        </div>
    );
}

export default ProjectPage;