import React from 'react';
import './style.css';

export default class Grid_Top10 extends React.Component {

  render() {
    const { users, updateUser } = this.props
    return (
    <main id="page-wrap">
      <div class="wrapper">
        <div class="post">
          <div class="post_header">
            <header class="header">
              <div class="header_inner clear">
                <div class="header_brand">
                  <div class="header_profile">
                    <a href="/profile">
                      <img class="header_picture" src="http://imagizer.imageshack.us/v2/280x200q90/922/OnNMZB.jpg"
                       alt="toretore's Picture" />
                    </a>
                  </div>
                  <div class="header_titles">
                    <a href="/">
                      <h1 class="header_title">asdfasdf</h1>
                    </a>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div class="post_body">
            <article class="post_mainland">
              <div class="post_header">
                <h1 class="post_title">asdfasdfasadf</h1>
                <div class="post_meta">
                  <div class="meta">
                    <div class="meta_inner ellipsis">
                      <div class="meta_datetime">
                        <i class="fa fa-clock-o" aria-hidden="true">
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="post_contents">
                <div class="contents">
                  <div class="contents_inner">
                     <ul class="list_of_doggis">
                       <li>
                         <div class="firstContainer">
                             {users
                               .sort((p1, p2) => (p2.score - p1.score))
                               .map((user, index) => (
                               <User
                                 key={index}
                                 onChange={updateUser}
                                 { ...user }
                               />
                             ))}
                         </div>
                       </li>
                       <li>
                         <div class="secondContainer">
                         {users
                           .sort((p1, p2) => (p2.score - p1.score))
                           .map((user, index) => (
                           <User
                             key={index}
                             onChange={updateUser}
                             { ...user }
                           />
                         ))}
                         </div>
                       </li>
                       <li>
                         <div class="thirdContainer">
                         {users
                           .sort((p1, p2) => (p2.score - p1.score))
                           .map((user, index) => (
                           <User
                             key={index}
                             onChange={updateUser}
                             { ...user }
                           />
                         ))}
                         </div>
                       </li>
                       <li>
                         <div class="fourthContainer">
                         {users
                           .sort((p1, p2) => (p2.score - p1.score))
                           .map((user, index) => (
                           <User
                             key={index}
                             onChange={updateUser}
                             { ...user }
                           />
                         ))}
                         </div>
                       </li>
                       <li>
                         <div class="fifthContainer">
                         {users
                           .sort((p1, p2) => (p2.score - p1.score))
                           .map((user, index) => (
                           <User
                             key={index}
                             onChange={updateUser}
                             { ...user }
                           />
                         ))}
                         </div>
                       </li>
                       <li>
                         <div class="sixthContainer">
                         {users
                           .sort((p1, p2) => (p2.score - p1.score))
                           .map((user, index) => (
                           <User
                             key={index}
                             onChange={updateUser}
                             { ...user }
                           />
                         ))}
                         </div>
                       </li>
                       <li>
                         <div class="seventhContainer">
                         {users
                           .sort((p1, p2) => (p2.score - p1.score))
                           .map((user, index) => (
                           <User
                             key={index}
                             onChange={updateUser}
                             { ...user }
                           />
                         ))}
                         </div>
                       </li>
                       <li>
                         <div class="eighthContainer">
                         {users
                           .sort((p1, p2) => (p2.score - p1.score))
                           .map((user, index) => (
                           <User
                             key={index}
                             onChange={updateUser}
                             { ...user }
                           />
                         ))}
                         </div>
                       </li>
                       <li>
                         <div class="ninthContainer">
                         {users
                           .sort((p1, p2) => (p2.score - p1.score))
                           .map((user, index) => (
                           <User
                             key={index}
                             onChange={updateUser}
                             { ...user }
                           />
                         ))}
                         </div>
                       </li>
                       <li>
                         <div class="tenthContainer">
                         {users
                           .sort((p1, p2) => (p2.score - p1.score))
                           .map((user, index) => (
                           <User
                             key={index}
                             onChange={updateUser}
                             { ...user }
                           />
                         ))}
                         </div>
                       </li>
                     </ul>
                </div>
              </div>
          </div>
      </div>
    </main>
    )
  }
}
