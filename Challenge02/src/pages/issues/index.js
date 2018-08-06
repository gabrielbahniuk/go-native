import '../../config/ReactotronConfig';
import React, { Component } from 'react';
import api from '../../services/api';
import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import Issue from './components/Issue';

export default class Issues extends Component {
  state = {
    issues: [],
    issueState: 'all',
    loading: true,
    refreshing: false,
  };

  static navigationOptions = {
    title: 'Issues',
  };

  componentDidMount() {
    const { repository } = this.props.navigation.state.params;
    this.loadIssues(repository.full_name);
  }

  loadIssues = async repository => {
    this.setState({ refreshing: true });
    const response = await api.get(
      `/repos/${repository}/issues?state=${this.state.issueState}`,
    );
    this.setState({ issues: response.data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <Issue issue={item} />;

  renderListIssues = () => (
    <FlatList
      data={this.state.issues}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadIssues(
        this.props.navigation.state.params.repository.full_name,
      )}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderListIssues()
        )}
      </View>
    );
  }
}
