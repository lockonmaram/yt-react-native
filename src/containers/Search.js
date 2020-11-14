import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, FlatList, ProgressBarAndroid } from 'react-native'
import { connect } from 'react-redux'
import Videos from '../actions/Videos'
import VidsDisplay from '../components/VidsDisplay'

const mapStateToProps = state => {
  return{
    search: state.search
  }
}

export class Search extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.search.loading ?
          <ProgressBarAndroid styleAttr="Horizontal" />:
          <FlatList
            data={this.props.search.data}
            renderItem = {({item, index}) => <VidsDisplay video={item} navigation={this.props.navigation} videoId={item.id.videoId}/>}
            keyExtractor = {(item) => item.id.videoId}
          />
        }
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, null)(Search);
