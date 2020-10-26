import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  topBar: { 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
  },
  textInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '70%'
  },
  image: {
    height: 80,
    width: 120
  },
  thumbnail: {
    backgroundColor: 'grey',
    height: 120,
    width: 80
  },
  movieContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
  sidebar: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: 'white',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
