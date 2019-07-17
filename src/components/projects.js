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
      <div class='container' style={{ margin: 'auto',width:'80%' }}>
        <div class='row'>
          <div class='col-sm-6'>
            <div
              class='card topcard mycard'
              style={{
                width: '100%',
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
                <a href='https://github.com/ameya-k/Ebay-ProductSearch-Web-Application.git' class='card-link'>
                  Github Link-Web Application
                </a>
                <a href='https://github.com/ameya-k/ProductSearch-Android.git' class='card-link'>
                  Github Link-Mobile Application
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
          <div class='col-sm-6'>
            <div
              class='card topcard'
              style={{
                width: '100%',
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
                <a href='https://github.com/ameya-k/ReactFitnessBot.git' class='card-link'>
                  Github Link
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
          <div class='col-sm-6'>
            <div
              class='card topcard'
              style={{
                width: '100%',
                height: '17rem',
                margin: '20px',
                overflowY: 'scroll'
              }}
            >
              <div class='card-body'>
                <h5 class='card-title'>Portfolio Website</h5>
                <h6 class='card-subtitle mb-2 text-muted'>
                  Web Development | Natural Language Processing | Databases
                </h6>
                <a href='https://github.com/ameya-k/My-Personal-Portfolio.git' class='card-link'>
                  Github Link
                </a>

                <p class='card-text'>
                  Developed this portfolio website using React.js. Used the react-mdl library components and Bootstrap for 
                  making the frontend of the website. Used Amazon AWS in order to host the website.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm-6'>
            <div
              class='card topcard'
              style={{
                width: '100%',
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

                <p class='card-text'>
                  Developed a mini search Engine using Apache Solr and Apache
                  Lucene as a part of the coursework for CSCI 572 Information
                  Retrieval and Web Search engines coursework at USC. I used the
                  data scrapped from Yahoo News website and used Lucene to build
                  an inverted Index on top of it to enable querying. I used
                  Apache Solr along with PHP to query the index based on users
                  search terms and display results. In addition to searching, I
                  leveraged Peter Norvig's spelling correction algorithm to
                  provide automatc spelling correction for users query terms.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm-6'>
            <div
              class='card topcard'
              style={{
                width: '100%',
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

                <p class='card-text'>
                  Developed a sentiment analysis tool that fetched tweets from
                  twitter based on the search term provided by the user and
                  classified them into postive/negative polarity. The tool then
                  provided users with a summarized result of sentiment on
                  twitter for the particular search term. I implemented two
                  approaches for the project: <br />
                  1.Machine Learning approach using Naive Bayes Classifier which
                  gave me an accuracy of 65% 2.Lexicon based approach using
                  VADER(Valance aware dictionary and sentiment Reasoner)
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm-6'>
            <div
              class='card topcard'
              style={{
                width: '100%',
                height: '17rem',
                margin: '20px',
                overflowY: 'scroll'
              }}
            >
              <div class='card-body'>
                <h5 class='card-title'>College Department Feedback Portal</h5>
                <h6 class='card-subtitle mb-2 text-muted'>
                  ASP.NET Development | SQL
                </h6>

                <p class='card-text'>
                  I built an Android application to help farmers of my home
                  village by providing them information about various types of
                  crop diseases and regional weather forecasts. Used the SQLite
                  database at the backend for storing crop information and used
                  the Android local storage to save farmer specific information
                  in the application. The user interface was designedin the
                  local language for the ease of use of the application for the
                  farmsers.I also Coordinated with the local government
                  authorities to obtain village specific crop disease data for
                  the application.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm-6'>
            <div
              class='card topcard'
              style={{
                width: '100%',
                height: '17rem',
                margin: '20px',
                overflowY: 'scroll'
              }}
            >
              <div class='card-body'>
                <h5 class='card-title'>FarmHelp</h5>
                <h6 class='card-subtitle mb-2 text-muted'>
                  Mobile Development
                </h6>

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
