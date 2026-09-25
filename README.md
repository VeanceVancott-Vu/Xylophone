# 🎵 Xylophone App

[![React Native](https://img.shields.io/badge/React_Native-0.81-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK_54-000000?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A colorful, interactive, cross-platform **Xylophone** mobile application built using **React Native**, **Expo SDK 54**, and **TypeScript**. Tapping each colored bar triggers a crisp musical note sound effect, delivering an engaging user experience across iOS, Android, and Web platforms.

---

## 🌟 Key Features

- 🎼 **7 Vibrant Musical Keys**: Beautifully styled vertical keys corresponding to 7 distinct musical note audio files (`note1.mp3` through `note7.mp3`).
- 🔊 **Instant Low-Latency Audio Playback**: Powered by `expo-av` audio management for smooth playback upon touch interaction.
- ⚡ **Automatic Resource Cleanup**: Uses playback status listeners to unload sound instances automatically after playback completes, avoiding memory leaks.
- 📱 **Responsive & Edge-to-Edge Layout**: Dynamically stretches keys across the screen using flexbox for seamless multi-device support.
- 🌐 **Cross-Platform Compatibility**: Runs effortlessly on Android devices/emulators, iOS Simulators, and modern web browsers.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [React Native](https://reactnative.dev/) (v0.81) with [Expo](https://expo.dev/) (SDK 54)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (v6)
- **Audio Library**: [`expo-av`](https://docs.expo.dev/versions/latest/sdk/av/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📁 Project Structure

```text
Xylophone-main/
├── app/
│   └── index.tsx          # Main Xylophone screen component with key definitions & audio logic
├── assets/
│   ├── images/            # Icons, splash screen, and logos
│   └── sounds/            # 7 MP3 audio note files (note1.mp3 ... note7.mp3)
├── app.json               # Expo project configuration
├── package.json           # Project dependencies & scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) app on your mobile device (optional, for physical device testing)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VeanceVancott-Vu/Xylophone.git
   cd Xylophone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npx expo start
   ```

### Running on Platforms

- **Web**: Run `npm run web` or press `w` in the Expo terminal.
- **Android**: Run `npm run android` or press `a` in the Expo terminal (requires Android Studio / Emulator or Expo Go).
- **iOS**: Run `npm run ios` or press `i` in the Expo terminal (requires macOS & Xcode Simulator).

---

## 💡 How It Works

Each note key is rendered dynamically from a structured list of colors and audio files:

```typescript
const notes: Note[] = [
  { color: "#FF595E", file: require("../assets/sounds/note1.mp3") },
  { color: "#FFCA3A", file: require("../assets/sounds/note2.mp3") },
  { color: "#8AC926", file: require("../assets/sounds/note3.mp3") },
  { color: "#1982C4", file: require("../assets/sounds/note4.mp3") },
  { color: "#6A4C93", file: require("../assets/sounds/note5.mp3") },
  { color: "#FF924C", file: require("../assets/sounds/note6.mp3") },
  { color: "#52B788", file: require("../assets/sounds/note7.mp3") },
];
```

When a user taps a key, `Audio.Sound.createAsync` initializes the sound file and automatically unloads it once finished:

```typescript
const playSound = async (file: number) => {
  const { sound } = await Audio.Sound.createAsync(file);

  sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
    if (status.isLoaded && status.didJustFinish) {
      sound.unloadAsync();
    }
  });

  await sound.playAsync();
};
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).