import '../../config/ReactotronConfig';
import React, { Component } from 'react';
import api from '../../services/api';
import { View, FlatList, ActivityIndicator, AsyncStorage } from 'react-native';
import styles from './styles';
import Issue from './components/Issue';
import HeaderIssue from './components/HeaderIssue';

export default class Issues extends Component {
  state = {
    issues: [],
    loading: true,
    refreshing: false,
    filter: 'all',
  };

  availableFilters = [
    { state: 'all', label: 'All' },
    { state: 'open', label: 'Open' },
    { state: 'closed', label: 'Closed' },
  ];

  handleChangeFilter = async filter => {
    await AsyncStorage.setItem('@GitIssues:filter', filter);
    this.setState({ filter }, this.loadIssues);
  };

  static navigationOptions = {
    title: 'Issues',
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    const { repository } = this.props.navigation.state.params;
    const { filter } = this.state;
    this.setState({ refreshing: true });
    const response = await api.get(`/repos/${repository.full_name}/issues`, {
      params: { state: filter },
    });
    this.setState({ issues: response.data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <Issue issue={item} />;

  renderListIssues = () => (
    <View>
      <HeaderIssue
        activeFilter={this.state.filter}
        availableFilters={this.availableFilters}
        handleChangeFilter={this.handleChangeFilter}
        loadIssues={this.loadIssues}
      />
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
