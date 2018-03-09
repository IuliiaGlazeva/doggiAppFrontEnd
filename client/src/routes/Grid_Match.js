import React from 'react';
import './Styles.css';

export default class Grid_Match extends React.Component {

  render() {
    return (
    <main id="page-wrap">
        <div className="post">
              <div className="header_inner clear">
                <h1 className="header_title">Match Result</h1>
              </div>
          <div className="post_body">
            <article className="post_mainland">
            <h3 className="userName">UserName</h3>
            <div className="AmountOfLikes"></div>
            <div className="listOfMatches">
              <ol className = list_of_doggis>
              </ol>
            </article>
          </div>
        </div>
    </main>
    )
  }
}
