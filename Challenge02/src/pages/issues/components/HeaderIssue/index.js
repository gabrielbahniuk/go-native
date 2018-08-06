import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

export default class HeaderIssue extends Component {
  render() {
    const { availableFilters, handleChangeFilter, activeFilter } = this.props;
    return (
      <View style={styles.container}>
        {availableFilters.map(filter => (
          <TouchableOpacity
            key={filter.state}
            style={styles.stateButton}
            onPress={() => handleChangeFilter(filter.state)}
          >
            <Text
              style={[
                styles.filterText,
                filter.state === activeFilter ? styles.activeFilterText : {},
              ]}
            >
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
