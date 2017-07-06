import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

class SignInForm extends Component {
  state = { email: '', pass: '' };

  handleSubmit = async () => {
    const { email, pass } = this.props;

    this.props.loginUser({ email, pass });

  }

  onButtonPress(){

  }




  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Email </FormLabel>
          <FormInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />

          <FormLabel>Enter Password</FormLabel>
          <FormInput
            value={this.state.pass}
            onChangeText={pass => this.setState({ pass })}
          />
        </View>
          <Button onPress={this.handleSubmit.bind(this)} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
