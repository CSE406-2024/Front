// components/GradientBackground.jsx
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export function GradientBackground({ children }) {
  const color1 = '#5e5eb4' + '80';
  const color2 = '#66E7A6' + '40';
  const color3 = '#3AFBF7' + '40';

  return (
    <LinearGradient
      colors={[color1, color2, color3]}
      style={styles.container}
      locations={[0.25, 0.75, 0.91]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});