import React, { useState, useEffect } from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import { API_KEY, API_URL } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button, FAB } from 'react-native-paper'

const DetailsScreen = ({ route, navigation }) => {

    const [movieDetails, setMovieDetails] = useState(null)
    const [isFavorite, setIsFavorite] = useState(false)
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const favorites = JSON.parse(await AsyncStorage.getItem('favorites')) || []
                setFavorites(favorites)
                setIsFavorite(favorites.some(movie => movie.id === route.params.id))
            } catch (error) {
                console.error(error)
            }
        }
        loadFavorites()

        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${API_URL}/movie/${route.params.id}?api_key=${API_KEY}`)
                const data = await response.json()
                setMovieDetails(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchMovieDetails()
    }, [])

    const handleToggleFavorite = async () => {
        try {
            const newFavorites = favorites.filter(movie => movie.id !== route.params.id)
            if (!isFavorite) {
                newFavorites.push(movieDetails)
            }
            await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
            setFavorites(newFavorites)
            setIsFavorite(!isFavorite)
        } catch (error) {
            console.error(error)
        }
    }

    if (!movieDetails) {
        return null
    }

    const favoriteButtonTitle = isFavorite ? 'Remove from Favorites' : 'Add to Favorites'

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` }}
                style={{ flex: 1, borderRadius: 1 }}
                resizeMode='contain'
            />
            <View style={{ flex: 1 }}>
                <Text style={styles.subTitle}>{movieDetails.title}</Text>
                <Text style={styles.subTitle}>{movieDetails.release_date}</Text>
                <Text style={[styles.subTitle, { fontSize: 15 }]}>{movieDetails.overview}</Text>
                <Button icon="cards-heart" mode="contained-tonal" onPress={handleToggleFavorite} style={styles.btn}>
                    {favoriteButtonTitle}
                </Button>
            </View>
            <FAB
                icon="arrow-left-bold"
                style={styles.fab}
                color='#fff'
                size={7}
                onPress={() => navigation.goBack()}
            />
        </SafeAreaView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000',
        margin: 5,
        fontFamily: 'serif'
    },
    btn: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0
    },
    fab: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'transparent'
    }
})