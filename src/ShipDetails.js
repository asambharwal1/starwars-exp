import React from 'react';
import {Image, Text, View, ScrollView } from 'react-native';
import AttributeDetail from './AttributeDetail';


/**
 * Provides statically linked image sources for 
 * image generation of the vehicle.
 */
const images = {
    image0: require('../assets/starwars-icons/0.jpg'),
    image1: require('../assets/starwars-icons/1.jpg'),
    image2: require('../assets/starwars-icons/2.jpg'),
    image3: require('../assets/starwars-icons/3.jpg'),
    image4: require('../assets/starwars-icons/4.jpg'),
    image5: require('../assets/starwars-icons/5.jpg'),
    image6: require('../assets/starwars-icons/6.jpg'),
    image7: require('../assets/starwars-icons/7.jpg'),
    image8: require('../assets/starwars-icons/8.jpg'),
    image9: require('../assets/starwars-icons/9.jpg'),
    image10: require('../assets/starwars-icons/10.jpg'),
    image11: require('../assets/starwars-icons/11.jpg'),
    image12: require('../assets/starwars-icons/12.jpg'),
    image13: require('../assets/starwars-icons/13.jpg'),
    image14: require('../assets/starwars-icons/14.jpg'),
    image15: require('../assets/starwars-icons/15.jpg'),
    image16: require('../assets/starwars-icons/16.jpg'),
    image17: require('../assets/starwars-icons/17.jpg'),
    image18: require('../assets/starwars-icons/18.jpg'),
    image19: require('../assets/starwars-icons/19.jpg'),
    image20: require('../assets/starwars-icons/20.jpg'),
    image21: require('../assets/starwars-icons/21.jpg'),
    image22: require('../assets/starwars-icons/22.jpg'),
    image23: require('../assets/starwars-icons/23.jpg'),
    image24: require('../assets/starwars-icons/24.jpg'),
    image25: require('../assets/starwars-icons/25.jpg'),
    image26: require('../assets/starwars-icons/26.jpg'),
    image27: require('../assets/starwars-icons/27.jpg'),
    image28: require('../assets/starwars-icons/28.jpg'),
    image29: require('../assets/starwars-icons/29.jpg'),
    image30: require('../assets/starwars-icons/30.jpg'),
    image31: require('../assets/starwars-icons/31.jpg'),
    image32: require('../assets/starwars-icons/32.jpg'),
    image33: require('../assets/starwars-icons/33.jpg'),
    image34: require('../assets/starwars-icons/34.jpg'),
    image35: require('../assets/starwars-icons/35.jpg'),
    image36: require('../assets/starwars-icons/36.jpg')
};


class ShipDetails extends React.Component {

    /**
     * Changes the navigation bar's title to the current vehicle's name 
     * and keeps the styling.
     */

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
          title: navigation.getParam('navtitle', 'N/A Starship'),
          headerStyle: {
            backgroundColor: navigationOptions.headerStyle.backgroundColor,
          },
          headerTintColor: navigationOptions.headerTintColor,
        };
      };
    
    /**
     * Obtains a static image for the vehicle.
     *  */  

    getImage = (id) => {
        return images["image"+id];
    }

/**
 * Renders the major attributes of the vehicle 
 * and provides information based on the header.
 */
  render() {
    var temp = this.props.navigation.getParam('dets', {});
    var idc = this.props.navigation.getParam('id', 0);
    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>{temp.name}</Text>
                <Text>{temp.model}</Text>
                <Image source={this.getImage(idc)} style={{height: 200, width:200, resizeMode:"contain"}}/>
            </View>
            <ScrollView>
                <AttributeDetail 
                title={"Cost"} 
                titles={["Galactic Credit Standard (Units)"]} 
                elements={[temp.cost_in_credits]}/>
                <AttributeDetail 
                title={"Manufacturer"} 
                titles={[temp.manufacturer]} 
                elements={[""]}/>
                <AttributeDetail 
                title={"Starship Class"} 
                titles={[temp.starship_class]} 
                elements={[""]}/>
                <AttributeDetail 
                title={"Capacity"} 
                titles={["Cargo Capacity", "Consumables", "Crew", "Length"]} 
                elements={[temp.cargo_capacity, temp.consumables, temp.crew, temp.length]}/>
                <AttributeDetail 
                title={"Maneuverability"} 
                titles={["Hyperdrive Rating", "Maximum Atmosphering Speed"]} 
                elements={[temp.hyperdrive_rating, temp.max_atmosphering_speed]}/>
            </ScrollView>
        </View>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center',
  },
  textStyle: {
      color: 'red',
      fontSize: 25,
      marginBottom: 15
  }
};

export default ShipDetails;
