import React, { Component, Fragment } from 'react';
import { View, WebView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import {Input} from 'native-base';
import { connect } from 'react-redux'
import Videos from '../actions/Videos'
import Octicons from 'react-native-vector-icons/Octicons';

const mapDistpatchToProps = dispatch => {
  return {
    searchVid: (keyword) => {
      dispatch(Videos.searchVid(keyword))
    }
  }
}

const mapStateToProps = state => {
  return{
    search: state.search
  }
}

class SearchBar extends Component {
  state = {
    searchView: false,
    keyword: ''
  }

  showSearchBar(){
    if (this.state.searchView == false) {
      this.setState({searchView: true})
    }else {
      this.setState({searchView: false})
    }
  }

  search(){
    this.props.searchVid(this.state.keyword);
    this.props.navigation.navigate('Search')
  }

  render() {
    return (
      <Fragment>
        <TouchableOpacity onPress={()=> this.showSearchBar()}>
          <Octicons style={styles.icon} name='search' size={25} color='gray'/>
        </TouchableOpacity>
        {
          this.state.searchView &&
          (
            <View style={styles.bar}>
              <Input placeholder="Search"
              onChangeText={(keyword) => this.setState({keyword})}
              onSubmitEditing={()=>this.search()}/>
            </View>
          )
        }
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  bar: {
    width: 200
  },
  icon: {
    padding: 15
  }
});

export default connect(mapStateToProps, mapDistpatchToProps)(SearchBar);
