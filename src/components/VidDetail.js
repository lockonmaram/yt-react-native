import React, { Component, Fragment } from 'react';
import { View, WebView, ScrollView } from 'react-native'
import { H3, Content, Card, CardItem, Thumbnail, Text, Left, Body, Accordion, Container } from 'native-base'

class VidDetail extends Component {
  render() {
    return (
      <Fragment>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: `https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png`}} />
            <Body>
              <Text>{ this.props.video.data.title }</Text>
              <Text note>{ this.props.video.data.channelTitle }</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Container>
            <Content padder>
              <Accordion dataArray={[
                { title: "Description", content: `${JSON.stringify(this.props.video.data.description)}` }
              ]} expanded={1}/>
            </Content>
          </Container>
        </CardItem>
      </Fragment>
    );
  }
}

export default VidDetail
