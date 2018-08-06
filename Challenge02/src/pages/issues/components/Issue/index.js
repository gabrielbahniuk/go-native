import React from 'react';
import { View, Text, Image } from 'react-native';
const Issue = ({ issue }) => {
  <View>
    <Image source={{ uri: issue.user.avatar_url }} />
    <View className="info">
      <Text className="title">{issue.title}</Text>

      <Text className="login">{issue.user.login}</Text>
    </View>
  </View>;
};
export default Issue;
