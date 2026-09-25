import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Audio, AVPlaybackStatus } from "expo-av";

type Note = {
  color: string;
  file: number;
};

const notes: Note[] = [
  { color: "#FF595E", file: require("../assets/sounds/note1.mp3") },
  { color: "#FFCA3A", file: require("../assets/sounds/note2.mp3") },
  { color: "#8AC926", file: require("../assets/sounds/note3.mp3") },
  { color: "#1982C4", file: require("../assets/sounds/note4.mp3") },
  { color: "#6A4C93", file: require("../assets/sounds/note5.mp3") },
  { color: "#FF924C", file: require("../assets/sounds/note6.mp3") },
  { color: "#52B788", file: require("../assets/sounds/note7.mp3") },
];

export default function App() {
  const playSound = async (file: number) => {
    const { sound } = await Audio.Sound.createAsync(file);

    sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
      if (status.isLoaded && status.didJustFinish) {
        sound.unloadAsync();
      }
    });

    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      {notes.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.key, { backgroundColor: item.color }]}
          onPress={() => playSound(item.file)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  key: {
    flex: 1,
  },
});
