
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import {Routes} from "./routes";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
    return(
        <Provider store = {store}>
            <Routes />
        </Provider>
    )
    
};

export default App;