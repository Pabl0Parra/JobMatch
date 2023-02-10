
import { View, Text, StyleSheet } from 'react-native';

const Fav = () => {
  return (
    <View style={styles.container}>
      <Text>En esta seccion se ven perfiles que te gustaron pero aun no les diste like para poder matchear</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
  },
});

export default Fav;