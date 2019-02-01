import React from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';

class ShipDetails extends React.Component {
    /**
     * Renders the main subject of the attributes
     * and then provides information based around the
     * subject regarding the vehicle.
     */
  render() {
    return (
        <View>
                <ListItem
                    key={404}
                    title={this.props.title}
                    bottomDivider
                    disabled
                    titleStyle={styles.titleStyle}
                />
                {this.props.elements.map((l, i) => (
                    <ListItem
                    key={i}
                    title={this.props.titles[i]}
                    rightTitle={l}
                    />
                ))}
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
      color: 'red',
      fontSize: 25,
      marginBottom: 15
  },
  titleStyle: {
      fontWeight: 'bold'
  }
};

export default ShipDetails;
