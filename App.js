import React ,{Component}from 'react';

import { Router, Scene , Stack } from 'react-native-router-flux';
import Splash from './src/MadeEasy/Splash';
import Login from './src/MadeEasy/Login';
import ForgotPassword from './src/MadeEasy/ForgotPassword';
import VerifyOtp from './src/MadeEasy/VerifyOtp';
import Set_Password from './src/MadeEasy/Set_password';
import Signup from './src/MadeEasy/Signup';
import Approve from './src/MadeEasy/Approve';
import Feedback_Suggestion from './src/MadeEasy/Feedback_Suggestion';
import Faculty from './src/MadeEasy/Faculty';

import Suggestion from './src/MadeEasy/Suggestion';
import Feed from './src/MadeEasy/feed';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="splash" component={Splash}  initial = {true}/>
      <Scene key="login" component={Login}  />
      <Scene key="forgot_password" component={ForgotPassword}  />
      <Scene key="verify_otp" component={VerifyOtp} />
      <Scene key="set_password" component={Set_Password} />
      <Scene key="signup" component={Signup} />
      <Scene key="approve" component={Approve} />
      <Scene key="feedback_suggestion" component={Feedback_Suggestion} />
      <Scene key="faculty" component={Faculty} />
    
      <Scene key="suggest" component={Suggestion} />
      <Scene key="feed" component={Feed}  />
      </Scene>
  </Router>
);
export default App

