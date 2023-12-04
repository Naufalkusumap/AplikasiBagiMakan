import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import Getjsonfile from '../Getjsonfile';
import { WebView } from 'react-native-webview';

const Tab = createBottomTabNavigator();

//Form input dari github pages
const forminput = 'https://naufalkusumap.github.io/BAGIMAKANFIX/'

//Peta web
const webmap = 'https://naufalkusumap.github.io/BAGIMAKANFIX/map'

//Peta Makanan
const webmakan = 'https://naufalkusumap.github.io/makann'


function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>APLIKASI BAGI MAKAN DIY</Text>
            <Text style={styles.description}> SEDERHANA </Text>
            <View style={styles.container}> 
            <Image style={styles.image}
        source={require('ProyekPertama/peta/bagimakan.png')}/>
            </View>
            <View style={styles.container}> 
            <Image style={styles.image}
        source={require('ProyekPertama/peta/bagimakan2.png')}/>
            </View>
            <View style={styles.container}> 
            <View style={styles.container}> 
            <Image style={styles.image}
        source={require('ProyekPertama/peta/bagimakan3.jpg')}/>
            </View>
            <Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 20}}>
            Masalah kelaparan masih menjadi permasalahan serius di banyak negara, baik yang sedang berkembang maupun yang sudah berkembang. Zero Hunger (Tidak Ada Kelaparan), yang merupakan salah satu dari 17 Tujuan Pembangunan Berkelanjutan (Sustainable Development Goals atau SDGs) yang dicanangkan oleh Perserikatan Bangsa-Bangsa, menjadi tujuan yang sangat penting untuk dicapai hingga tahun 2030. Tujuan nomor dua dari 17 tujuan SDGs ini sendiri ingin mengakhiri kelaparan, mencapai ketahanan pangan, memperbaiki nutrisi ataupun sasaran tepat untuk konsumen serta zero hunger bertujuan untuk menghentikan masalah kelaparan, mencapai sasaran jaminan makanan dan pemakanan yang lebih baik (Abdullah, 2019). 
Pada era globalisasi saat ini, ketidaksetaraan dalam hal akses terhadap makanan yang cukup dan bergizi merupakan salah satu tantangan besar yang dihadapi oleh masyarakat dunia (Rizqy Widianingrum et al., 2023). 
</Text>
            </View>
            <View style={styles.container}> 
            <Text> Stack:</Text>
            <Text> 1. React Native</Text>
            <Text> 2. HTML</Text>
            <Text> 3. LeafletJS</Text>
            <Text> 4. Google Sheets</Text>
            <Text> 5. App Script</Text>
            <Text> 6. FontAwesome5</Text>
            <Text> 7. Github</Text>
            </View>
        </ScrollView>
    );
    }
    function Map() {
    return (
        <WebView
            source={{ uri: webmap }}
          />
    );
    }
    function AddDataScreen() {
    return (
        <WebView
            source={{ uri: forminput}}
          />
    );

    }
    function Profile() {
    return (
        <View>
            <Portofolio />
        </View>
    );
    
    }
    function WebMakan() {
        return (
            <WebView
                source={{ uri: webmakan}}
              />
        );
    }
    function MyTabs() {
      return (
        
        <Tab.Navigator screenOptions={{ 
            headerShown: false, tabBarStyle:{
                marginBottom:10,
                marginRight:10,
                marginLeft:10,
                borderRadius:10,
                backgroundColor:'#FFBB5C'
            } }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, size }) => (
              <Fontawesome5 name="home" size={size} style={{color: focused? 'red':'grey'}}/>
        ),
    }}
    />
          <Tab.Screen name="Map" component={Map} options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ focused, size }) => (
              <Fontawesome5 name="map-marked-alt" size={size} style={{color: focused? 'red':'grey'}}/>
        ),
    }} />
          <Tab.Screen name="Add Data" component={AddDataScreen} options={{
        tabBarLabel: 'Add Data',
        tabBarIcon: ({ focused, size }) => (
              <Fontawesome5 name="plus-circle" size={size} style={{color: focused? 'red':'grey'}}/>
        ),
    }} />
          <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, size }) => (
              <Fontawesome5 name="user-alt" size={size} style={{color: focused? 'red':'grey'}}/>
        ),
    }} />
          <Tab.Screen name="Mahasiswa" component={WebMakan} options={{
        tabBarLabel: 'Peta Makan',
        tabBarIcon: ({ focused, size }) => (
              <Fontawesome5 name="users" size={size} style={{color: focused? 'red':'grey'}}/>
        ),
    }} />
        </Tab.Navigator>
        
      );
    }
    
    export default MyTabs;
    
    const styles = StyleSheet.create({
        image: {
            width: '100%',
            height: 200,
            resizeModel: 'strech'
        },
    
        listitems: {
            padding: 20,
            alignItems: 'center',
        },
    
        caption: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            textAlign:'center',
            marginTop: 20,
        },
        container: {
            marginTop:20,
            marginHorizontal: 20,
            padding: 20,
            backgroundColor: '#FFBB5C',
            color: 'white'
        },
        description: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign:'center',
            marginTop: 20,
        }
    });