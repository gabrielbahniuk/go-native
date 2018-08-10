import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PropTypes from 'prop-types';

const RepositoryItem = ({ repository, openIssues }) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Image
        style={styles.avatarUrl}
        source={{ uri: repository.owner.avatar_url }}
      />
      <View style={styles.info}>
        <Text style={styles.repoTitle}>{repository.full_name}</Text>
        <Text style={styles.repoSubtitle}>{repository.owner.login}</Text>
      </View>
      <TouchableOpacity onPress={openIssues}>
        <Icon name="angle-right" size={20} />
      </TouchableOpacity>
    </View>
  </View>
);
export default RepositoryItem;

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};
