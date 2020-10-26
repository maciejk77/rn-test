import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import logo from './assets/logo.png';
import { Movies } from './movies';
import styles from './styles';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [activeMovie, setActiveMovie] = useState({});

  const handleChange = ({ nativeEvent: { text } }) => {
    Movies.search(text).then((movies) => {
      setMovies(movies);
    });
  };

  const activateSidebar = () => {
    // TODO: animate sidebar
    setIsSidebarActive(true);
  };

  const hideSidebar = () => setIsSidebarActive(false);
  const isFavorite = (movie) => favorites.includes(movie.id);

  const showFavourites = () => {
    // TODO: Show list of favourites
    console.log(activeMovie);

    return favorites.map((movieId) => (
      <View key={movieId}>
        <Text>
          <TouchableOpacity onPress={() => unfavorite(movieId)}>
            <Text>{movieId}</Text>
          </TouchableOpacity>
        </Text>
      </View>
    ));
  };

  const favorite = (id) => {
    if (favorites.includes(id)) return;
    setFavorites([...favorites, id]);
  };

  const unfavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav !== id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topBar} onPress={activateSidebar}>
        <Image source={logo} style={styles.image} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search ...."
        placeholderTextColor="grey"
        onChange={handleChange}
        style={styles.textInput}
      />
      {movies &&
        movies.map((movie) => (
          <View key={movie.id}>
            <View style={styles.movieContainer}>
              <Image
                style={styles.thumbnail}
                source={{
                  uri: `http://image.tmdb.org/t/p/w185/${movie.poster_path}`,
                }}
              />
              <Text style={styles.text}>{movie.title.toUpperCase()}</Text>
              <TouchableOpacity onPress={() => favorite(movie.id)}>
                <Text style={styles.text}>Add to favourites</Text>
              </TouchableOpacity>
              <Text style={styles.text}>
                {movie.overview || 'No description'}
              </Text>
            </View>
          </View>
        ))}
      {isSidebarActive && (
        <View style={styles.sidebar}>
          <TouchableOpacity onPress={showFavourites}>
            <Text style={styles.title}>FAVOURITE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={hideSidebar}>
            <Text style={styles.title}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default App;
