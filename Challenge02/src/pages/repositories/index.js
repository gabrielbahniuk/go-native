import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
} from 'react-native';
import RepositoryItem from './components/RepositoryItem';

export default class Repositories extends Component {
  state = {
    repositories: [],
    repository: '',
  };

  componentDidMount() {
    this.loadRepositories();
  }

  addRepository = repository => {
    this.setState({
      repositories: [...this.state.repositories, repository],
    });
    console.log(repository);
  };

  saveRepository = async repository => {
    await AsyncStorage.setItem(
      '@Githuber:repositories',
      JSON.stringify(repository),
    );
  };

  loadRepositories = async () => {
    const repositories = await AsyncStorage.getItem('@Githuber:repositories');
    if (repositories) {
      const repositoriesArray = JSON.parse(repositories);
      const response = await api.get(`/repos/${repo}`);
      this.setState({
        repositories: [...this.state.repositories, response.data],
      });
    }
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  render() {
    return (
      <View>
        <TextInput
          placeholder="Informe o repositorio..."
          underlineColorAndroid="rgba(0,0,0,0)"
          value={this.state.repository}
          onChangeText={repository => this.setState({ repository })}
        />
        <TouchableOpacity onPress={this.addRepository}>
          <Text>Add</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.repositories}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          refreshing={this.state.refreshing}
        />
      </View>
    );
  }
}
