import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, FlatList, ProgressBarAndroid } from 'react-native'
import { connect } from 'react-redux'
import Videos from '../actions/Videos'
import VidsDisplay from '../components/VidsDisplay'

const mapStateToProps = state => {
  return{
    trendings: state.trendings
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    getTrends: () => {
      dispatch(Videos.getTrends())
    }
  }
}

export class Trending extends Component {
  componentDidMount(){
    this.props.getTrends()
  }
  render() {
    return (
      <Fragment>
        {
          this.props.trendings.loading ?
          <ProgressBarAndroid styleAttr="Horizontal" />:
          <FlatList
            data={this.props.trendings.data}
            renderItem = {({item, index}) => <VidsDisplay video={item} navigation={this.props.navigation} videoId={item.id}/>}
            keyExtractor = {(item) => item.id}
          />
        }
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Trending);
