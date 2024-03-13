import { StatusBar, StyleSheet, Platform } from "react-native";

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  container: {
    paddingTop: isIOS ? StatusBar.currentHeight : StatusBar.currentHeight,
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,

    
  },
  label: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Inter', 
    
  },
  segbut: {
    paddingVertical: 15,
    height: 80,
  },
  disDu: {
    marginVertical: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 300,
    borderColor: '#ccc',
    fontSize: 16,
    color: '#333',
    fontFamily: 'Inter', 
  },
  button: {
    marginTop: 20,
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#64dd17', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    marginTop: 20,
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#64dd17', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter', 
  },
  buttonText2: {
    color: '#64dd17', 
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter', 
  },
  chipView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  chip: {
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#64dd17', 
    backgroundColor: '#fff',
    color: '#64dd17', 
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Inter', 
  },
  flatlist: {
    marginVertical: 20,
  },
  card: {
    padding: 20,
    marginVertical: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#C7F6C7',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Inter', 
  },
  border: {
    padding: 5,
    marginBottom: 10,
  },
  hoveredButton: {
    backgroundColor: '#C7F6C7', 
  },
});






