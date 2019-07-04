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
              src={require('../assets/myAvatar.png')}
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
                  <ListItemContent icon='person'>
                    Bryan Cranston
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon='person'>Aaron Paul</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon='person'>Bob Odenkirk</ListItemContent>
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
