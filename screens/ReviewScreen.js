import React, { Component} from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        headerRight:
        <Button
          title="Setings"
          onPress={() => { navigation.navigate('settings') }}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
          />
      })




  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}
const style = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0
  }
});
export default ReviewScreen;
