import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import { RootComponent } from './src/screens/RootComponent';

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  }
})

export default function App() {
  return (
    <ApolloProvider client={client} style={styles.root}>
      <RootComponent />
    </ApolloProvider>
  );
}
