import React from 'react';
import AllDogs from '../components/Alldogs'
import './Styles.css';



export default class Grid_AllDogs extends React.Component {

  render() {
    return (
      <div>
      <div style={{backgroundColor: "#f9f4f7", overflow: "scroll", color: 'black'}}
                 key={"b"}
                 _grid={{i: 'b',
                         x: 1,
                         y: 0,
                         w: 3,
                         h: 2,
                         minW: 2,
                         maxW: 4}}>
            <div className="wrapper">
              <div className="home">
                <div className="home_inner">
                  <div className="home_articles">
                    <div className="articles">
                      <div className="articles_inner">
                        <ul className="articles_list clear">
                        <li className="articles_item">
                          <article className="articles_contents">
                            <div className="articles_body">
                              <div className="contents">
                                <div className="contents_inner">
                                  <AllDogs />
                                </div>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li className="articles_item">
                        <article className="articles_contents">
                          <div className="articles_body">
                            <div className="contents">
                              <div className="contents_inner">
                                <p>asdsad</p>
                              </div>
                            </div>
                          </div>
                        </article>
                        </li>
                        <li className="articles_item">
                        <article className="articles_contents">
                          <div className="articles_body">
                            <div className="contents">
                              <div className="contents_inner">
                                <p>asdsad</p>
                              </div>
                            </div>
                          </div>
                        </article>
                        </li>
                        <li className="articles_item">
                        <article className="articles_contents">
                          <div className="articles_body">
                            <div className="contents">
                              <div className="contents_inner">
                                <p>asdsad</p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
     </div>
    );
  }
}
