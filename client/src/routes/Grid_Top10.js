import React from 'react';
import './Styles.css';

export default class Grid_Top10 extends React.Component {

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
                      <h1 className="header_title">asdfasdf</h1>
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
                <div className="post_meta">
                  <div className="meta">
                    <div className="meta_inner ellipsis">
                      <div className="meta_datetime">
                        <i className="fa fa-clock-o" aria-hidden="true">
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post_contents">
                <div className="contents">
                  <div className="contents_inner">
                  <ul className="list_of_doggis">
                     <li>
                       <div className="firstContainer">
                          <p>Name</p>
                       </div>
                     </li>
                     <li>
                       <div className="secondContainer">
                          <p>Name</p>
                       </div>
                     </li>
                     <li>
                       <div className="thirdContainer">
                          <p>Name</p>
                       </div>
                     </li>
                     <li>
                       <div className="fourthContainer">
                          <p>Name</p>
                       </div>
                     </li>
                     <li>
                       <div className="fifthContainer">
                          <p>Name</p>
                       </div>
                     </li>
                     <li>
                       <div className="sixthContainer">
                          <p>Name</p>
                       </div>
                     </li>
                     <li>
                       <div className="seventhContainer">
                          <p>Name</p>
                       </div>
                     </li>
                     <li>
                       <div className="eighthContainer">
                          <p>Name</p>
                       </div>
                     </li>
                     <li>
                       <div className="ninthContainer">
                          <p>Name</p>
                       </div>
                     </li>
                     <li>
                       <div className="tenthContainer">
                          <p>Name</p>
                       </div>
                     </li>
                   </ul>
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
