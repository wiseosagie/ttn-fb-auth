import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

class SignUpForm extends Component {
  state = { email: '', pass: '', first_name: '', last_name: '' };

  handleSubmit = async () => {
    try {
      await axios.post('https://us-central1-tellthemnow-4bf4d.cloudfunctions.net/createUser', {
        email: this.state.email,
        pass: this.state.pass,
        first_name: this.state.first_name,
        last_name: this.state.last_name
      });
      return console.log('new');
    } catch (err) {
      console.log(err);
    }
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

          <FormLabel>Enter First Name</FormLabel>
          <FormInput
            value={this.state.first_name}
            onChangeText={first_name => this.setState({ first_name })}
          />

          <FormLabel>Enter Last Name</FormLabel>
          <FormInput
            value={this.state.last_name}
            onChangeText={last_name => this.setState({ last_name })}
          />
        </View>
          <Button onPress={this.handleSubmit.bind(this)} title="Submit" />
      </View>
    );
  }
}

export default SignUpForm;
