import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, type User as GoogleUser } from '@react-native-google-signin/google-signin';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: '482624345274-3k86iam9246ao61mqh99bn5e839ga39i.apps.googleusercontent.com',
  iosClientId: '482624345274-i21oqmbvlbiq40e1oevl23s9hm5qhcr0.apps.googleusercontent.com',
  offlineAccess: true,
});

type UserInfo = {
  email: string;
  name: string;
  photo: string;
  id: string;
};

const Googlesigninscreen = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setUserInfo({
          email: user.email || '',
          name: user.displayName || '',
          photo: user.photoURL || '',
          id: user.uid,
        });
      } else {
        setUserInfo(null);
      }
    });
    return subscriber;
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      // ✅ In v14+, idToken is directly returned on signIn
      const signInResult = await GoogleSignin.signIn();

      const idToken = signInResult.data?.idToken
      console.log(idToken,"Idtoken mmm")

      if (!idToken) {
        console.log(idToken,"Idtoken mmm")
        throw new Error('No idToken returned from Google');       
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      console.error('Google Sign-In error', error);
      Alert.alert('Error', 'Failed to sign in with Google.');
    }
  };

  const handleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
      setUserInfo(null);
    } catch (error) {
      console.error('Sign out error', error);
    }
  };

  return (
    <View style={styles.container}>
      {userInfo ? (
        <>
          <Text style={styles.welcome}>Welcome, {userInfo.name}</Text>
          {userInfo.photo && (
            <Image source={{ uri: userInfo.photo }} style={styles.avatar} />
          )}
          <Button title="Sign Out" onPress={handleSignOut} />
        </>
      ) : (
        <Button title="Sign In with Google" onPress={handleGoogleSignIn} />
      )}
    </View>
  );
};

export default Googlesigninscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});
//482624345274-3k86iam9246ao61mqh99bn5e839ga39i.apps.googleusercontent.com