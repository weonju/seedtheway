import React from 'react';
import './style.css';

class Testimonials extends React.Component {
  render() {

    return (
      <div className="testimonials">
        <h1>Client Testimonials</h1>
        <div className="testimonials-content">
          <div className="left-column">
            <p>
              “Rebecca came to speak to us not just as community members, but as a company looking
              to make Inclusion and Equity more than buzz words, and as parents looking how to talk
              to our children about current events. She couldn’t have come at a more important
              time, just a week after the 2016 Presidential election. Her clear and courageous
              words shared through a teacher’s lens, brilliantly built upon previous trainings our
              community had gone through and moved and inspired many if not all of us. I received
              overwhelming positive feedback, being told by one employee that she could listen to
              Rebecca all day. Most importantly, she provided reassurance to some people in our
              community that they are not alone and helped those of us who have privilege understand
              that it is our responsibility to use it to stand up for those who need it the most
              right now. Many left that engagement thinking hard about how they can be better
              advocates. We hope to have the opportunity to work with Rebecca again in the future.”
            </p>
            <p className="client">
              ~Deb Nison, Business Intelligence Developer at <a href="http://www.seventhgeneration.com">Seventh Generation</a>
            </p>
          </div>
          <div className="right-column">
            <p>
              “Our Residence Life team at Saint Michael’s College could not be more excited about
              our partnership with Rebecca and the work that she did with our Resident Director and
              Resident Assistance staff this summer. Rebecca’s ability to explore diversity and
              inclusion with college-age students on a personal and compassionate level allowed
              students to feel immediately comfortable. Rebecca spoke through a student lens and
              made them feel like she truly understood what they were going through and the hard
              work they face each and every day. She knew how to get the students moving and how
              to engage them in a dynamic and passionate way. Her workshop was a highlight of our
              training and we look forward to a continued partnership with Rebecca in the future.
              We thank her for bringing our conversation around diversity and inclusion to a higher
              level.”
            </p>
            <p className="client">
              ~Catherine Welch, Assistant Dean of Students/Title IX Coordinator;
              and Lou DiMasi, Dean of Students, <a href="http://smcvt.edu">Saint Michael’s College</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials;