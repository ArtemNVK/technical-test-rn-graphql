import React, { useCallback } from 'react'
import { View, Text, Linking } from 'react-native'
import styles from './styles';

export default function RepositoryItem({ item }) {
    
    const handlePress = useCallback(async () => {
        await Linking.openURL(item.url);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <View styles={styles.descriptionContainer}>
                <Text>{item.description}</Text>
            </View>
            <View style={styles.row}>
                <Text>Forks: {item.forkCount}</Text>
                <Text onPress={handlePress} style={styles.link}>Link ></Text>
            </View>
        </View>
    )
}
