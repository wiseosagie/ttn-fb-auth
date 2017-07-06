import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import axios from 'axios';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

//AsyncStorage.setItem('fb_token', token);
//AsyncStorage.getItem('fb_token');
export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      //Dispatch an action saying FB is done
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
      // start up FB login process
      doFacebookLogin(dispatch);
    }
  };

  const doFacebookLogin = async (dispatch) => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('1062834280493751',{
      permissions: ['public_profile', 'email']
    });

    if (type === 'cancel') {
      return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }
    



    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  };
