import React from 'react';
import './style.css';

class Services extends React.Component {
  render() {

    const imageTop = require('../../assets/service-1.jpeg');
    const imageBottom = require('../../assets/service-2.jpg');

    return (
      <div className="services">
        <h1>Services</h1>

        <div className="services-top">
          <div className="services-content">
            <p className="services-headings">Professional Development,<br />Training & Consulting</p>
            <p>Seed the Way provides professional development and consultation for educators, 
              non-profit organizations, and businesses through interactive training workshops, 
              facilitated discussions, and collaborative strategic planning.</p>
              <h3>Examples of trainings offered:</h3>
              <ul className="service-list">
                <li>Equity Literacy: Anti-Bias Learning Environments</li>
                <li>Talking About Race and Racism</li>
                <li>Microaggressions: Intent & Impact</li>
                <li>Unpacking Privilege</li>
                <li>Identity and Intersectionality</li>
                <li>Implicit Bias and Student Achievement</li>
                <li>Privilege and Poverty: Serving Diverse Communities</li>
                <li>Supporting Queer and Trans Students</li>
                <li>The Model Minority Myth and Asian Identity</li>
                <li>Analyzing Data through an Equity Lens</li>
                <li>Effective Allyship: Calling Out vs. Calling In</li>
                <li>Visioning for the Future: Strategic Planning for Equity</li>
                <li>Growing Empathy</li>
                <li>Culturally Relevant Teaching: Practice and Pedagogy</li>
                <li>Diversity, Equity and Inclusion​</li>
            </ul>
          </div>
          <div className="services-image">
            <img className="top" src={imageTop} height="370" width="450" alt="workshop" />
          </div>
        </div>
        
        <div className="services-bottom">
          <div className="services-image">
            <img className="bottom" src={imageBottom} height="380" width="450" alt="children in classroom"/>
          </div>
          <div className="services-content">
            <p className="services-headings">Educational Resources</p>
            <h3>Educational resource services offered:</h3>
            <ul className="service-list">
              <li>Working with teachers, guidance counselors, administrators, and school leaders to create content-rich lessons and units for students that are aligned with CCSS, integrated with literacy and social sciences, and reflect the student population being served.</li>
              <li>Assessing a classroom's, teacher's, or school's cultural proficiency; assessing a program or curriculum's cultural relevance; designing specific goals and improvement plans based on results; providing metrics for growth</li>
              <li>Supplementing or adapting existing curricula to increase cultural relevance for all students, to provide intercultural connections, and to infuse equity principles into core academics.</li>
              <li>Co-teaching and model-teaching lessons in the classroom.  Planning and visioning with teachers and teams, follow up, feedback, and ongoing consultation.​</li>
              <li>Facilitating book groups or study circles with staff and/or students</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Services;