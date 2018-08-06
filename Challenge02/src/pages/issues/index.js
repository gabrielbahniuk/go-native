import '../../config/ReactotronConfig';
import React, { Component } from 'react';
import api from '../../services/api';
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import Issue from './components/Issue';
import HeaderIssue from './components/HeaderIssue';

export default class Issues extends Component {
  state = {
    issues: [],
    loading: true,
    refreshing: false,
  };

  static navigationOptions = {
    title: 'Issues',
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async (issueState = 'all') => {
    const { repository } = this.props.navigation.state.params;
    this.setState({ refreshing: true });
    const response = await api.get(
      `/repos/${repository.full_name}/issues?state=${issueState}`,
    );
    this.setState({ issues: response.data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <Issue issue={item} />;

  renderListIssues = () => (
    <View>
      <HeaderIssue loadIssues={this.loadIssues} />
      <FlatList
        data={this.state.issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={this.state.refreshing}
      />
    </View>
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
