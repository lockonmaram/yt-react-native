import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, FlatList, ProgressBarAndroid } from 'react-native'
import { connect } from 'react-redux'
import Videos from '../actions/Videos'
import VidsDisplay from '../components/VidsDisplay'

const mapStateToProps = state => {
  return{
    videos: state.videos
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    getVids: () => {
      dispatch(Videos.getVids())
    }
  }
}

export class Home extends Component {
  componentDidMount(){
    this.props.getVids()
  }
  render() {
    return (
      <Fragment>
        {
          this.props.videos.loading ?
          <ProgressBarAndroid styleAttr="Horizontal" />:
          <FlatList
            data={this.props.videos.data}
            renderItem = {({item, index}) => <VidsDisplay video={item} navigation={this.props.navigation} videoId={item.id.videoId}/>}

            keyExtractor = {(item) => item.id.videoId}
          />
        }
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Home);
