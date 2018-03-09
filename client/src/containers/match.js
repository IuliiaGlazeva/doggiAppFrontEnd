import React from 'react';
import './style.css';
import Title from '../components/Title'



export default class Match_users extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(userShape).isRequired,
    updateUser: PropTypes.func.isRequired
  }
  render() {
    return (
      <main id="page-wrap">
        <div class="wrapper">
                <Title content="Title" />
            <div class="user">
                <h3 class="userName">UserName</h3>
                <div class="AmountOfLikes"></div>
            </div>
            <div class="listOfMatches">
              <ol class = list_of_doggis>
              </ol>
            </div>
        </div>
      </main>
    )
  }
}
