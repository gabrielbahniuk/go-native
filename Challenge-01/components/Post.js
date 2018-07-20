import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

const bgColor = '#FFFFFF';
const hrColor = '#EEEEEE';
const postTitleColor = '#333333';
const postAuthorColor = '#999999';
const postContentColor = '#666666';

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: bgColor,
    marginVertical: 15,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: hrColor,
    paddingBottom: 10,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: postTitleColor,
  },
  postAuthor: {
    color: postAuthorColor,
  },
  postContent: {
    marginTop: 10,
    color: postContentColor,
  },
});

const Post = ({ data }) => (
  <View style={styles.postContainer}>
    <View style={styles.header}>
      <Text style={styles.postTitle}>
        { data.title}
      </Text>
      <Text style={styles.postAuthor}>
        { data.author}
      </Text>
    </View>
    <Text style={styles.postContent}>
      { data.text }
    </Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Post;
