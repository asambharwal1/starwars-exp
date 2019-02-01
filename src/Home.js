import React from 'react';
import {Image, ImageBackground, Text, View, Button } from 'react-native';


/**
 * Variable to provide the background image.
 */
var backgoundImage = require('../assets/home-page.jpg');

class Home extends React.Component {
    /**
     * Renders the home-page in which the user
     * is greeted and from which can begin to search
     * the given list of vehicles in the STARWARS franchise.
     */

  render() {
    return (
        <ImageBackground source={backgoundImage} style={{height:'100%', width:'100%'}}>
            <View style={styles.container}>
                <Image source={require('../assets/Star_Wars_logo.png')}/>
                <Text style={styles.textStyle}>Welcome to Starship Search</Text>
            </View>
            <View style={styles.container}>
                <Button title='Begin Search' color='red' onPress={()=>this.props.navigation.navigate('Search')}/>
            </View>
        </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
      color: 'red',
      fontSize: 25,
      marginBottom: 50
  },
};

export default Home;
