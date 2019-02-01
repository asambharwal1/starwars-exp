import React from 'react';
import {Image, Text, View, ScrollView } from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';

class ShipSearch extends React.Component {

    /**
     * The state contains:
     * search: to keep track of changes made in the search bar.
     * apis: to obtain the entire list of the vehicles to search/select from.
     * loaded: to ensure that the apis variable has been populated.
     */

    state = {
        search: '',
        apis: [],
        loaded: false
    };

    /**
     * Initiate obtaining data before the component mounts. 
     * Avoids calling the API multiple times, if the apis variable
     * is already populated.
     */

    componentWillMount() {
        if(this.state.apis.length==0) this.renderList("https://swapi.co/api/starships/", 1);
    }

    /**
     * Recursive function which is given a link and a page number.
     * Iterates through the pages, until there are none, and populates
     * the apis variable page by page.
     */

    renderList = (link, i) => {
        fetch(link+"?page="+i)
        .then((response) => {
            var jsonRes = JSON.parse(response._bodyInit);
            this.setState({apis: [...this.state.apis, ...jsonRes.results]});
            if (jsonRes.next != null) {
                this.renderList(link, i+1);
            } else {
                this.setState({loaded: true});
            }
        })
        .catch((err)=>{console.log(err)});
    }
    
    /**
     * Updates the search given the value.
     */
    updateSearch = search => {
        this.setState({ search });
    };
    
    /**
     * Renders the search bar for filtering or finding
     * a specific vehicle. Initially, provides the
     * list of all the vehicles. Filteration uses includes
     * function so it may partially match the name or the
     * model of any vehicle in the API.
     */

    render() {
        const { search } = this.state;
    
        return (
            <View style={{flex:1, backgroundColor: 'gray'}}>
                <SearchBar
                    placeholder="Search Starship.."
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme
                    round
                />
                <ScrollView>
                {this.state.loaded ? 
                    this.state.apis.map((l, i) => (
                         (l.name.toLowerCase().includes(this.state.search.toLowerCase()) 
                         || l.model.toLowerCase().includes(this.state.search.toLowerCase())) ?
                            <ListItem
                                key={i}
                                title={l.name}
                                subtitle={l.model+"\nCredit(s): "+l.cost_in_credits}
                                leftAvatar={{source: require("../assets/starship-icon.png")}}
                                onPress={()=>this.props.navigation.navigate('Details', {dets: l, navtitle: l.name, id: i})}
                            /> : <View/>
                        
                    ))
                    :   <View style={styles.container}>
                            <Image source={require('../assets/loadingScreen.gif')}/>
                            <Text style={{marginTop:10, color:'red', fontSize: 20}}>Loading...</Text>
                        </View>
                        }
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default ShipSearch;
