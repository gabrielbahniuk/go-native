import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

export default class HeaderIssue extends Component {
  render() {
    const { loadIssues } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.stateButton}
          onPress={() => loadIssues()}
        >
          <Text>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.stateButton}
          onPress={() => loadIssues('open')}
        >
          <Text>Opened</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.stateButton}
          onPress={() => loadIssues('closed')}
        >
          <Text>Closed</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
