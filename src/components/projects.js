import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from 'react-mdl'
class Projects extends Component {
  render () {
    return (
      <div class='container' style={{ margin: 'auto' }}>
        <div class='row'>
          <div class='col-sm'>
            <div
              class='card topcard'
              style={{
                width: '30rem',
                height: '17rem',
                margin: '20px',
                overflowY: 'scroll'
              }}
            >
              <div class='card-body'>
                <h5 class='card-title'>Ebay Product Search Application</h5>
                <h6 class='card-subtitle mb-2 text-muted'>
                  Web Development | Mobile Development
                </h6>
                <a href='#' class='card-link'>
                  Card link
                </a>
                <a href='#' class='card-link'>
                  Another link
                </a>
                <p class='card-text'>
                  I developed this project as a part of the coursework of CSCI
                  571 Web Technologies course at USC. It is a web application
                  developed using Angular 7 and Node.js that allows users to
                  search for products available on the Ebay shopping platform.I
                  used Node.js to create an express API in order to fetch and
                  perform response validations from various API's like the Ebay
                  API, Google Custom search API used in the application. I also
                  developed a Mobile version of the same in Android using Java.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm'>
            <div
              class='card topcard'
              style={{
                width: '30rem',
                height: '17rem',
                margin: '20px',
                overflowY: 'scroll'
              }}
            >
              <div class='card-body'>
                <h5 class='card-title'>FitBot</h5>
                <h6 class='card-subtitle mb-2 text-muted'>
                  Web Development | Natural Language Processing | Databases
                </h6>
                <a href='#' class='card-link'>
                  Card link
                </a>
                <a href='#' class='card-link'>
                  Another link
                </a>
                <p class='card-text'>
                  Developed a Fitness Chatbot that recommended exercises the
                  user can perform when he is in the Gym. The bot provides the
                  user with the exercise details and link to the video
                  demonstration of the exercise in the response so that user
                  does not have to scroll through multiple links in google
                  search results. I used Google's DialogFlow API to provide
                  natural language processiong capability to the bot. In order
                  to save the users preferences and choices during an ongoing
                  conversation with the bot, I saved the data in a MongoDB
                  database using the mongoose framwework with Node.js. I used
                  React to build the frontend for the chatbot.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm'>
            <div
              class='card topcard'
              style={{
                width: '30rem',
                height: '17rem',
                margin: '20px',
                overflowY: 'scroll'
              }}
            >
              <div class='card-body'>
                <h5 class='card-title'>
                  Mini Search Engine Using Apache Solr and Lucene
                </h5>
                <h6 class='card-subtitle mb-2 text-muted'>
                  Information Retrieval | Web Development
                </h6>
                <a href='#' class='card-link'>
                  Card link
                </a>
                <a href='#' class='card-link'>
                  Another link
                </a>
                <p class='card-text'>
                  Developed a mini search Engine using Apache Solr and Apache Lucene as a part of the coursework
                  for CSCI 572 Information Retrieval and Web Search engines coursework at USC. I used the data scrapped
                  from Yahoo News website and used Lucene to build an inverted Index on top of it to enable querying.
                  I used Apache Solr along with PHP to query the index based on users search terms and display results.
                  In addition to searching, I leveraged Peter Norvig's spelling correction algorithm to provide
                  automatc spelling correction for users query terms.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm'>
            <div
              class='card topcard'
              style={{
                width: '30rem',
                height: '17rem',
                margin: '20px',
                overflowY: 'scroll'
              }}
            >
              <div class='card-body'>
                <h5 class='card-title'>Twitter Based Sentiment Analysis</h5>
                <h6 class='card-subtitle mb-2 text-muted'>
                  Machine Learning | Text Processing
                </h6>
                <a href='#' class='card-link'>
                  Card link
                </a>
                <a href='#' class='card-link'>
                  Another link
                </a>                
                <p class='card-text'>
                  Developed a sentiment analysis tool that fetched tweets from twitter based on the search term provided
                  by the user and classified them into postive/negative polarity. The tool then provided users with a summarized 
                  result of sentiment on twitter for the particular search term. I implemented two approaches for the project: <br />
                  1.Machine Learning approach using Naive Bayes Classifier which gave me an accuracy of 65%
                  2.Lexicon based approach using VADER(Valance aware dictionary and sentiment Reasoner)
                </p>

              </div>
            </div>
          </div>
          <div class='col-sm'>
            <div
              class='card topcard'
              style={{
                width: '30rem',
                height: '17rem',
                margin: '20px',
                overflowY: 'scroll'
              }}
            >
              <div class='card-body'>
                <h5 class='card-title'>College Department Feedback Portal</h5>
                <h6 class='card-subtitle mb-2 text-muted'>
                  ASP.NET Development
                </h6>
                <a href='#' class='card-link'>
                  Card link
                </a>
                <a href='#' class='card-link'>
                  Another link
                </a>
                <p class='card-text'>
                  Developed a web application using ASP.NET framework for students of the Computer Science Department
                  of my undergraduate college to provide feedback and ratings for the department organized events.
                  The application eliminated the need for paper based feedback and digitized the process. I used bootstrap
                  framework to develop the frontend and leverage a MySQL database at the backend to store the feedback data.
                </p>

              </div>
            </div>
          </div>
          <div class='col-sm'>
            <div
              class='card topcard'
              style={{
                width: '30rem',
                height: '17rem',
                margin: '20px',
                overflowY: 'scroll'
              }}
            >
              <div class='card-body'>
                <h5 class='card-title'>Ebay Product Search Application</h5>
                <h6 class='card-subtitle mb-2 text-muted'>
                  Web and Mobile Development
                </h6>
                <a href='#' class='card-link'>
                  Card link
                </a>
                <a href='#' class='card-link'>
                  Another link
                </a>
                <p class='card-text'>
                  I developed this project as a part of the coursework of CSCI
                  571 Web Technologies course at USC. It is a web application
                  developed using Angular 7 and Node.js that allows users to
                  search for products available on the Ebay shopping platform.I
                  used Node.js to create an express API in order to fetch and
                  perform response validations from various API's like the Ebay
                  API, Google Custom search API used in the application. I also
                  developed a Mobile version of the same in Android using Java.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
