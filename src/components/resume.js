import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import ResumeEducation from './ResumeEducation'
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';
class Resume extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={require('../assets/avatarPic.png')}
                className='myImage'
                alt='Ameya Avatar'
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Ameya Kulkarni</h2>
            <h4 style={{ color: 'gray' }}>Software Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              I am a graduate cs student at usc interested in web and mobile
              development.past experience in etc etc . developed and worked on
              projects that involved. keen to learn new tech react etc
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>1226 W Adams Boulevard, Los Angeles, CA, 90007.</p>
            <h5>Email</h5>
            <p>abkulkar@usc.edu</p>
          </Cell>
          <Cell col={8} className='resume-right'>
            <h2>Education</h2>
            <ResumeEducation
              startYear={2013}
              endYear={2017}
              universityName='Government College of Engineering, Aurangabad'
              degree='Bachelor of Engineering(B.E.) in Computer Science and Engineering'
            />
            <ResumeEducation
              startYear={2018}
              endYear={'2020 (expected)'}
              universityName='University of Southern California'
              degree='Master of Science(M.S) in Computer Science'
            />
            <hr style={{ borderTop: '2px solid #e22947' }} />
            <h2>Experience</h2>
            <ResumeExperience 
            startYear={'June 2019'}
            endYear={'July 2019'}
            jobName='Reach Technologies, Bangalore'
            jobTitle='Full Stack Development Intern'
            />
            <hr style={{ borderTop: '2px solid #e22947' }} />
            <h2>Skills</h2>
            <ResumeSkills
            skill='Java Programming'
            strengthPercent={90}
             />
            <ResumeSkills
            skill='JavaScript'
            strengthPercent={90}
             />
            <ResumeSkills
            skill='PHP'
            strengthPercent={80}
             />
            <ResumeSkills
            skill='NodeJS'
            strengthPercent={70}
             />
            <ResumeSkills
            skill='Angular'
            strengthPercent={70}
             />
            <ResumeSkills
            skill='React'
            strengthPercent={60}
             />
            <ResumeSkills
            skill='Mobile Development(Android)'
            strengthPercent={60}
             />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
