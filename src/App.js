import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Banner from './Components/Banner.jsx';
import SingUp from './Components/SignUp';
import ComingSoon from './Components/ComingSoon.jsx';
import WhatIsOn from './Components/WhatIsOn.jsx';
import JoinClub from './Components/JoinClub.jsx';
import Modal from './Components/utils/Modal.jsx';
import NotFound from './Components/utils/NotFound.jsx';
import SignUp from './Components/SignUp';

function App() {

  const [getError, setGetError] = useState(``);
  const [postError, setPostError] = useState(``);
  const [putError, setPutError] = useState(``);

  return (
    <Router>
      {getError && <Modal handleClose={() => setGetError(``)} message={getError} />}
      {putError && <Modal handleClose={() => setPutError(``)} message={putError} />}
      {postError && <Modal handleClose={() => setPostError(``)} message={postError} />}
      <div>
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Banner name = "home" />, <WhatIsOn />}/>
            <Route path="/whatIsOn" element={<Banner name = "whatIsOn" />, <WhatIsOn />}/>
            <Route path="/comingSoon" element={<Banner name = "comingSoon" />, <ComingSoon />}/>
            <Route path="/joinClub" element={<Banner name = "joinClub" />, <JoinClub />}/>
            <Route path="/signUp" element={<Banner name = "signUp" />, <SignUp />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;