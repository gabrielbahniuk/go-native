import './src/config/ReactotronConfig';
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
} from 'react-native';

import Post from './components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  header: {
    backgroundColor: '#FFFFFF',
    height: Platform.OS === 'ios' ? 70 : 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Titulo 1',
        author: 'Gabriel',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel porta augue, eu ullamcorper dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut fringilla justo nibh, eget suscipit velit blandit tristique. Nullam pharetra faucibus lacus non condimentum. Praesent tempus leo in leo ultrices blandit. Nulla sem risus, sodales eu nisl in, imperdiet dignissim ipsum. Ut tincidunt faucibus faucibus. Suspendisse non pretium nibh, nec interdum dui. Nulla varius ut nibh non venenatis. Nulla malesuada quam et vehicula mollis. Ut faucibus dui vitae congue pretium. Nulla facilisi.',
      },
      {
        id: 2,
        title: 'Titulo 2',
        author: 'Joaozin',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel porta augue, eu ullamcorper dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut fringilla justo nibh, eget suscipit velit blandit tristique. Nullam pharetra faucibus lacus non condimentum. Praesent tempus leo in leo ultrices blandit. Nulla sem risus, sodales eu nisl in, imperdiet dignissim ipsum. Ut tincidunt faucibus faucibus. Suspendisse non pretium nibh, nec interdum dui. Nulla varius ut nibh non venenatis. Nulla malesuada quam et vehicula mollis. Ut faucibus dui vitae congue pretium. Nulla facilisi.',
      },
      {
        id: 3,
        title: 'Titulo 3',
        author: 'Pedro',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel porta augue, eu ullamcorper dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut fringilla justo nibh, eget suscipit velit blandit tristique. Nullam pharetra faucibus lacus non condimentum. Praesent tempus leo in leo ultrices blandit. Nulla sem risus, sodales eu nisl in, imperdiet dignissim ipsum. Ut tincidunt faucibus faucibus. Suspendisse non pretium nibh, nec interdum dui. Nulla varius ut nibh non venenatis. Nulla malesuada quam et vehicula mollis. Ut faucibus dui vitae congue pretium. Nulla facilisi.',
      },
      {
        id: 4,
        title: 'Titulo 4',
        author: 'Maria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel porta augue, eu ullamcorper dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut fringilla justo nibh, eget suscipit velit blandit tristique. Nullam pharetra faucibus lacus non condimentum. Praesent tempus leo in leo ultrices blandit. Nulla sem risus, sodales eu nisl in, imperdiet dignissim ipsum. Ut tincidunt faucibus faucibus. Suspendisse non pretium nibh, nec interdum dui. Nulla varius ut nibh non venenatis. Nulla malesuada quam et vehicula mollis. Ut faucibus dui vitae congue pretium. Nulla facilisi.',
      },
      {
        id: 5,
        title: 'Titulo 5',
        author: 'Kabral',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel porta augue, eu ullamcorper dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut fringilla justo nibh, eget suscipit velit blandit tristique. Nullam pharetra faucibus lacus non condimentum. Praesent tempus leo in leo ultrices blandit. Nulla sem risus, sodales eu nisl in, imperdiet dignissim ipsum. Ut tincidunt faucibus faucibus. Suspendisse non pretium nibh, nec interdum dui. Nulla varius ut nibh non venenatis. Nulla malesuada quam et vehicula mollis. Ut faucibus dui vitae congue pretium. Nulla facilisi.',
      },
      {
        id: 6,
        title: 'Titulo 6',
        author: 'Harry Potter',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel porta augue, eu ullamcorper dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut fringilla justo nibh, eget suscipit velit blandit tristique. Nullam pharetra faucibus lacus non condimentum. Praesent tempus leo in leo ultrices blandit. Nulla sem risus, sodales eu nisl in, imperdiet dignissim ipsum. Ut tincidunt faucibus faucibus. Suspendisse non pretium nibh, nec interdum dui. Nulla varius ut nibh non venenatis. Nulla malesuada quam et vehicula mollis. Ut faucibus dui vitae congue pretium. Nulla facilisi.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GoNative App</Text>
        </View>
        <ScrollView>
          {posts.map(post => <Post data={post} key={post.id} />)}
        </ScrollView>
      </View>
    );
  }
}
