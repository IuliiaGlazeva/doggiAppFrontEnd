import React from 'react';
import './Styles.css';

export default class Grid_Match extends React.Component {

  render() {
    return (
    <main id="page-wrap">
      <div className="wrapper">
        <div className="post">
          <div className="post_header">
            <header className="header">
              <div className="header_inner clear">
                <div className="header_brand">
                  <div className="header_profile">
                    <a href="/profile">
                      <img className="header_picture" src="http://imagizer.imageshack.us/v2/280x200q90/922/OnNMZB.jpg"
                       alt="toretore's Picture" />
                    </a>
                  </div>
                  <div className="header_titles">
                    <a href="/">
                      <h1 className="header_title">Match Result</h1>
                    </a>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="post_body">
            <article className="post_mainland">
              <div className="post_header">
                <h1 className="post_title">asdfasdfasadf</h1>

              </div>
              <div className="post_contents">
                <div className="contents">
                  <div className="contents_inner">


                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
    )
  }
}
