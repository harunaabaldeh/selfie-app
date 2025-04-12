import { Image, StyleSheet, useColorScheme, View } from "react-native"

// images
import DarkLogo from "../assets/img/logo_dark.png";
import LightLogo from "../assets/img/logo_light.png";

const ThemedLogo = ({ ...props }) => {
    const colorShcheme = useColorScheme();
    const logo = colorShcheme === "dark" ? DarkLogo : LightLogo;

    return (
        <Image source={logo} {...props} />
    )
}

export default ThemedLogo;


const styles = StyleSheet.create({})