import '../../config/ReactotronConfig';
import React, { Component } from 'react';
import api from '../../services/api';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RepositoryItem from './components/RepositoryItem';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    repositories: [],
    repository: '',
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const myArray = await AsyncStorage.getItem('@Githuber:repos');
    if (myArray) {
      const repositories = JSON.parse(myArray);
      this.setState({
        repositories,
      });
    }
  };

  openIssues = repository => {
    this.props.navigation.navigate('Issues', { repository });
  };

  checkRepositoryExists = async repository => {
    const repo = await api.get(`/repos/${repository}`);
    return repo;
  };

  addRepository = async () => {
    const { repository } = this.state;
    if (repository.length === 0) return;
    try {
      const response = await this.checkRepositoryExists(repository);
      this.setState({
        repositories: [...this.state.repositories, response.data],
      });
      await AsyncStorage.setItem(
        '@Githuber:repos',
        JSON.stringify(this.state.repositories),
      );
    } catch (err) {
      console.log(err);
    }
  };

  renderListItem = ({ item }) => (
    <RepositoryItem
      openIssues={() => this.openIssues(item)}
      repository={item}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerSearch}>
          <TextInput
            style={styles.input}
            placeholder="Type {organization/repository}..."
            underlineColorAndroid="rgba(0,0,0,0)"
            value={this.state.repository}
            onChangeText={repository => this.setState({ repository })}
          />
          <TouchableOpacity style={styles.button} onPress={this.addRepository}>
            <Icon name="plus" size={18} />
          </TouchableOpacity>
        </View>
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
