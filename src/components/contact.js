import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
  render () {
    return (
      <div className='contact-div'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Ameya Kulkarni</h2>
            <img
              src={require('../assets/finalAvatar.png')}
              className='myImage'
              style={{ padding: '0' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Graduate Computer Science Student at University of Southern
              California. Actively looking for full time job opportunities.
            </p>
          </Cell>
          <Cell col={6}>
            {/* <h2>Contact Me</h2>
            <hr />
            <div className='contact-column-list'>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                  <i className='fa fa-phone-square' aria-hidden='true'></i>
                    (323) 540-7914
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                  <div style={{display:'inline',float:'left'}}>
                  <i className='fa fa-envelope' aria-hidden='true'></i>
                    <a href='mail to:abkulkar@usc.edu'>abkulkar@usc.edu</a>
                    </div>
                  </ListItemContent>
                </ListItem>

              </List>
            </div> */}
            <h2>Contact Me</h2>
            <br />
            <div className='row ' style={{justifyContent:'center'}}>
            <div style={{ display: 'inline',justifyContent:'center' }}>
              <i className='fa fa-phone-square' style={{fontSize:'30px',margin:'auto'}} aria-hidden='true' />
              <span  style={{fontSize:'30px',paddingLeft:'20px',marginRight:'50px',fontFamily:'Anton'}}>(323) 540-7914</span>
            </div>
            </div>
            <br />
            <div className='row' style={{justifyContent:'center'}}>
            <div  style={{ display: 'inline',justifyContent:'center' }}>
              <i className='fa fa-envelope' style={{fontSize:'30px'}} aria-hidden='true'></i>
                    <span style={{fontSize:'30px',paddingLeft:'20px',fontFamily:'Anton'}}><a href='mailto: abkulkar@usc.edu'>abkulkar@usc.edu</a></span>
            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
