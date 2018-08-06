import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PropTypes from 'prop-types';

export default class RepositoryItem extends Component {
  render() {
    const {
      owner: { avatar_url, login },
      full_name,
    } = this.props.repository;
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Image style={styles.avatarUrl} source={{ uri: avatar_url }} />
          <View style={styles.info}>
            <Text style={styles.repoTitle}>{full_name}</Text>
            <Text style={styles.repoSubtitle}>{login}</Text>
          </View>
          <TouchableOpacity onPress={this.props.openIssues}>
            <Icon name="angle-right" size={22} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};
