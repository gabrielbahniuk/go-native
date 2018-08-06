import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
const Issue = ({ issue }) => {
  <View>
    <Image src={issue.user.avatar_url} alt={issue.user.login} />
    <View className="info">
      <Text className="title">{issue.title}</Text>

      <Text className="login">{issue.user.login}</Text>
    </View>
  </View>;
};
export default Issue;
