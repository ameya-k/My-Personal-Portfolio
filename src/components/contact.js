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
              src={require('../assets/avatarPic.png')}
              className='myImage'
              style={{ padding: '0' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Graduate Computer Science Student at University of Southern
              California. Actively looking for full time job opportunities
              starting Summer 2020.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
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
                    abkulkar@usc.edu
                    </div>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
