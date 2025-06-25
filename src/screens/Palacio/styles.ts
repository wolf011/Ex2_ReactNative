import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    titulo: {
        paddingTop: "5%",
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        objectFit: "cover",

    },
    texto: {
        textAlign: "justify",
        padding: "5%",
    },
    button: {
        backgroundColor: "#495678",
        padding: 12,
        borderRadius: 8,
        position: "absolute",
        bottom: "10%"
    },
        buttonText: {
        color: "yellow",
        fontWeight: "bold",
    },
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 24,
        borderRadius: 8,
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    modalText: {
        marginBottom: 16,
        fontSize: 18,
        fontWeight: "500",
        textAlign: 'center',
        paddingBottom: "20%"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
    },
    imagem: {
        padding: 0,
        margin: 0,
        height: '100%'
    }
});