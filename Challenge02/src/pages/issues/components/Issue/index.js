import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { substr } from '../../../../utils';
const Issue = ({ issue }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{substr(issue.title)}</Text>
      <Text style={styles.login}>{issue.user.login}</Text>
    </View>
    <TouchableOpacity
      style={styles.buttonIssue}
      onPress={() => Linking.openURL(issue.html_url)}
    >
      <Icon name="angle-right" size={16} />
    </TouchableOpacity>
  </View>
);
export default Issue;
