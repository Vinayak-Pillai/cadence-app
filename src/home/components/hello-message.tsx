import React from 'react';
import { View, Text } from 'react-native';
import { helloMessageStyles } from '@home/styling/hello-message-styles';

export interface HelloMessageProps {
  name?: string;
}

export const HelloMessage: React.FC<HelloMessageProps> = ({ name = 'there' }) => {
  return (
    <View style={helloMessageStyles.card}>
      <View style={helloMessageStyles.badge}>
        <Text style={helloMessageStyles.badgeText}>Welcome</Text>
      </View>
      <Text style={helloMessageStyles.title}>Hello, {name}!</Text>
      <Text style={helloMessageStyles.description}>
        Welcome to Cadence. Your offline-first SQLite database is ready with Drizzle ORM.
      </Text>
    </View>
  );
};
