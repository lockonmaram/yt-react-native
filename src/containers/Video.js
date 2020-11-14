import React, { Component, Fragment } from 'react';
import { View, WebView, ScrollView, ProgressBarAndroid } from 'react-native'
import { H3, Content, Card, CardItem, Thumbnail, Text, Left, Body, Accordion, Container } from 'native-base'
import { connect } from 'react-redux'
import Videos from '../actions/Videos'
import VidDetail from '../components/VidDetail'

const mapStateToProps = state => {
  return{
    video: state.video
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    getVid: (videoId) => {
      dispatch(Videos.getVid(videoId))
    }
  }
}

export class Video extends Component {
  componentDidMount(){
    this.props.getVid(this.props.navigation.getParam('videoId'))
  }
  render() {
    return (
      <Fragment>
        {
          this.props.video.loading ?
          <ProgressBarAndroid styleAttr="Large" />:
          <ScrollView>
            <Card>
              <View style={{ height: 250 }}>
                <WebView
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: `https://www.youtube.com/embed/${this.props.navigation.getParam('videoId')}` }}
                  />
              </View>
              <VidDetail video={this.props.video}/>
            </Card>
          </ScrollView>
        }
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Video);
