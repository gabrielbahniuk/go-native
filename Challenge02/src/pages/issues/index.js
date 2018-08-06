import '../../config/ReactotronConfig';
import React, { Component } from 'react';
import api from '../../services/api';
import { View, Text } from 'react-native';
import styles from './styles';
import Issue from './components/Issue';

export default class Issues extends Component {
  state = {
    issues: [],
    issueState: 'all',
  };

  static navigationOptions = {
    title: 'Issues',
  };

  loadIssues = async repository => {
    const response = await api.get(
      `/repos/${repository}/issues?state=${this.state.issueState}`,
    );
    this.setState({ issues: response.data });
  };

  componentDidMount() {
    const { repository } = this.props.navigation.state.params;
    this.loadIssues(repository.full_name);
  }

  render() {
    return (
      <View>
        {this.state.issues.map(issue => <Issue issue={issue} key={issue.id} />)}
      </View>
    );
  }
}
