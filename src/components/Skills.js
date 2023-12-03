import React from 'react';
import './Skills.css'; // Make sure to create this CSS file

const Skills = () => {
  const skills = [
    {
        category: 'Programming',
        list: [
          { name: 'C/C++', rating: 5 },
          { name: 'Java', rating: 4 },
          { name: 'Python', rating: 5 },
          { name: 'C#', rating: 4 },
          { name: 'Dart', rating: 5 },
          { name: 'Swift', rating: 4 },
          { name: 'GraphQL', rating: 5 },
        ],
    },
    {
        category: 'Web Technologies',
        list: [
          { name: 'HTML & CSS', rating: 5 },
          { name: 'Angular', rating: 5 },
          { name: 'React', rating: 5 },
          { name: 'NodeJs', rating: 5 },
          { name: 'Folio', rating: 5 },
          { name: 'Bootstrap', rating: 5 },
        ],
    },
    {
        category: 'Embedded Systems',
        list: [
          { name: '8085 & 8086', rating: 4 },
          { name: 'Arduino Uno 3', rating: 5 },
          { name: 'ESP 8266', rating: 5 },
          { name: 'Raspberry Pi 3', rating: 4 },
          { name: 'HC-05 Bluetooth', rating: 5 },
        ],
    },
    {
        category: 'Platforms',
        list: [
          { name: 'Arduino IDE', rating: 5 },
          { name: 'Android Studio', rating: 5 },
          { name: 'Xcode', rating: 5 },
          { name: 'Flutter', rating: 5 },
        ],
    },
  ];

  const getStars = (rating) => {
    const totalStars = 5;
    let stars = '';
    for (let i = 0; i < totalStars; i++) {
      stars += i < rating ? '★' : '☆'; // Filled star for ratings above the index, empty star otherwise
    }
    return stars;
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skills-column">
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.list.map((skill, idx) => (
                <li key={idx}>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-rating">{getStars(skill.rating)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
