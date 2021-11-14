import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles'; 
import { gql, useQuery } from '@apollo/client';
import RepositoryItem from '../components/RepositoryItem';

const GET_REPOS = gql`
  query {
    repositoryOwner(login: "Shopify") {
    login
    repositories(orderBy: {field: STARGAZERS, direction: ASC}, last: 3) {
      nodes {
        name
        forkCount
        description
        url
      }
    }
  }
  }
`;

export function RootComponent() {
  const { data } = useQuery(GET_REPOS);
    console.log(data)
    return (
      <View style={styles.container}>
      {data &&
        <>
          <Text style={styles.title}>{data.repositoryOwner.login}'s Top 3 Repositories</Text>
            <FlatList 
              data={data.repositoryOwner.repositories.nodes}
              renderItem={({item}) => (
                <RepositoryItem item={item} />
            )}
            keyExtractor={(item) => item.name}
            />
        </>
      }
      </View>
    );
}
  