import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Homepage extends Component {
  render () {
    return (
    // <div  id='hc' className='homepageContainer' style={{ width: '100%', margin: 'auto'}}>
    //   <Grid className='homePageGrid'>
    //     <Cell col={12}>
    //       <img src={require('../assets/finalAvatar.png')} className='myImage' alt="Ameya Kulkarni avatar"/>
    //       <div className='headline'>
    //         <h1>Software Developer</h1>
    //         <hr />
    //         <p>Java Development | HTML/CSS | Bootstrap | JavaScript | Angular | React | NodeJS | Express | PHP | Mobile Development | SQL | Solr | GCP | AWS |</p>
    //         <div className="social-media-links">
    //           {/* LinkedIn icon */}
    //           <a href="https://www.linkedin.com/in/ameyabkulkarni/" rel="noopener noreferrer" target="_blank">
    //               <i className="fa fa-linkedin-square" aria-hidden="true" />
    //           </a>
    //           {/* GitHub icon */}
    //           <a href="https://github.com/ameya-k" rel="noopener noreferrer" target="_blank">
    //               <i className="fa fa-github-square" aria-hidden="true" />
    //           </a>
    //           {/* Twitter icon */}
    //           <a href="https:/twitter.com/whiz_ameya" rel="noopener noreferrer" target="_blank">
    //               <i className="fa fa-twitter-square" aria-hidden="true" />
    //           </a>

    //         </div>
    //       </div>
    //     </Cell>
    //   </Grid>
    // </div>

      <div className='superdiv container'>
        <div className='row'>
          <div className='col' />
          <div className='col' style={{ textAlign: 'center' }}>
            <img
              src={require('../assets/finalAvatar.png')}
              style={{ margin: 'auto' }}
              className='myImage'
              alt='Ameya Kulkarni avatar'
            />
          </div>
          <div className='col' />
        </div>
        <div className='row'>
          <div className='col-1' />
          <div
            className='col-10'
            className='myHeadline'
            style={{ textAlign: 'center' }}
          >
            <h1>Software Developer</h1>
            <hr />
            <p>
              Java Development | HTML/CSS | Bootstrap | JavaScript | Angular |
              React | NodeJS | Express | PHP | Mobile Development | SQL | Solr |
              GCP | AWS |
            </p>

            <div>
            {/* LinkedIn icon */}
               <a href="https://www.linkedin.com/in/ameyabkulkarni/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
               </a>
               {/* GitHub icon */}
               <a href="https://github.com/ameya-k" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
               </a>
             {/* Twitter icon */}
            <a href="https:/twitter.com/whiz_ameya" rel="noopener noreferrer" target="_blank">
                 <i className="fa fa-twitter-square" aria-hidden="true" />
              </a>
            </div>

          </div>
          <div className='col-1' />
        </div>
      </div>
    )
  }
}

export default Homepage
