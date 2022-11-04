import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },

  um: {
    /* paddingTop: 10, substituição do statusBar */
    width: "100%",
    backgroundColor: "salmon",
    flex: 2,
  },

  dois: {
    width: "100%",
    backgroundColor: "lightgreen",
    flex: 3,
  },

  titulo: {
    color: "blue",
    fontSize: 24,
  },

  subtitulo: {
    color: "#f00",
    fontSize: 20,
  },
});

export default estilos;
