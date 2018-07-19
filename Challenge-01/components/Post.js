import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#FFFFFF',
    marginVertical: 15,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 5,

  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 10,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333'
  },
  postAuthor: {
    color: '#999999',
  },
  postContent: {
    color: '#666666',
  },
});

const Post = ({ data : {title, author, text } }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Text style={styles.postTitle}>
          {title}
        </Text>
        <Text style={styles.postAuthor}>
          {author}
        </Text>
      </View>
      <Text style={styles.postContent}>
        { text }
      </Text>
    </View>
  );
};

export default Post;
