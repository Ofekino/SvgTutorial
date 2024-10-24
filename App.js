import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Svg, Defs, LinearGradient, Stop, Path } from 'react-native-svg';


export default function App() {

  const [progress, setProgress] = useState(0);

  return (
    <View style={styles.container}>
      <Svg width="150" height="150" viewBox="0 0 24 24">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="1" x2="0" y2="0">
            <Stop offset="0%" stopColor="orange" stopOpacity="1" />
            <Stop offset={`${progress * 100}%`} stopColor="red" stopOpacity="1" />
            {/* <Stop offset={`${progress * 100 + 0.01}%`} stopColor="transparent" stopOpacity="0" /> */}
          </LinearGradient>
        </Defs>

        <Path
        d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z"
        fill="url(#grad)"
        />
      </Svg>
      <Button
      title="Increase Progress"
      onPress={() => setProgress(prev => Math.min(prev + 0.1, 1))}
      />
      <Button
      title="Reset Progress"
      onPress={() => setProgress(0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
