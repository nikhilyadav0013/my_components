import React, { useState, useEffect } from "react"
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native"
import { Searchbar, Card } from 'react-native-paper'
import { API_KEY, API_URL } from "../utils"

const HomeScreen = ({ navigation }) => {

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${search}`)
                const data = await response.json()
                setSearchResults(data.results)
            } catch (error) {
                console.error(error)
            }
        }

        if (search) {
            fetchSearchResults()
        } else {
            setSearchResults([])
            const getTrendingMovies = async () => {
                try {
                    const response = await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`)
                    const data = await response.json()
                    setTrendingMovies(data.results)
                } catch (error) {
                    console.error(error)
                }
            }
            getTrendingMovies()
        }
    }, [search])

    const renderSearchItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
                {item.poster_path ? (
                    <Image
                        style={{ width: 50, height: 70, marginRight: 10 }}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                        }}
                    />
                ) : (
                    <View style={{ width: 50, height: 70, marginRight: 10 }} />
                )}
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    const renderTrendingItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
            <Card style={{ margin: 7 }}>
                <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
                <Card.Title title={item.title} />
            </Card>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1 }}>
                <Searchbar
                    placeholder="Search Movies..."
                    onChangeText={setSearch}
                    value={search}
                    style={{ margin: 5, top: 5 }}
                />
                {search ? <FlatList
                    data={searchResults}
                    renderItem={renderSearchItem}
                    keyExtractor={item => item.id.toString()}
                /> :
                    <>
                        <Text style={styles.heading}>Trending</Text>
                        <FlatList
                            data={trendingMovies}
                            renderItem={renderTrendingItem}
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={{ padding: 10 }}
                        />
                    </>}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
        marginTop: 10,
        fontFamily: 'serif'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
})