import React, { Component } from 'react';
import { Image, View, TouchableHighlight } from 'react-native';
import { Content, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

class VidsDisplay extends Component {
  render() {
    return (
      <View>
        <Content>
          <Card>
            <CardItem>
              <Image
                source={{uri: `${this.props.video.snippet.thumbnails.high.url}`}}
                style={{height: 150, flex: 1}}
                onPress={ () => this.props.navigation.navigate('Video', { videoId: this.props.videoId }) }
                />
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: `https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png`}} />
                <Body>
                  <Text onPress={ () => this.props.navigation.navigate('Video', { videoId: this.props.videoId }) }>{ this.props.video.snippet.title }</Text>
                  <Text note>{ this.props.video.snippet.channelTitle }</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}

export default VidsDisplay
