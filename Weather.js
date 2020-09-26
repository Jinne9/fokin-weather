import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#000C40", "#F0F2F0"],
        title: "흐릿한 날씨",
        subTitle: "날씨가 흐릿흐릿합니다"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#141e30", "#243b55"],
        title: "천둥번개",
        subTitle: "콰르르 쾅쾅..!!"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#4286f4", "#373B44"],
        title: "이슬비",
        subTitle: "비가 부슬부슬 내리는 호랑이 장가 가는 날"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#021B79", "#0575E6"],
        title: "비",
        subTitle: "빗소리와 함께 하는 하루"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#FFEFBA", "#FFFFFF"],
        title: "눈",
        subTitle: "올라프를 만날 수 있는 기회에요!"
    },
    Atmosphere: {
        iconName: "weather-windy-variant",
        gradient: ["#F8FFAE", "#43C6AC"],
        title: "대기 청정",
        subTitle: "미세먼지 FREE"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FFFFFF", "#6DD5FA", "#2980B9"],
        title: "쾌청",
        subTitle: "행운이 가득한 하루"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#74ebd5", "#ACB6E5"],
        title: "우중충",
        subTitle: "우중충하네요"
    },
    Mist: {
        iconName: "weather-tornado",
        gradient: ["#ffc3a0", "#FFAFBD"],
        title: "안개",
        subTitle: "흐린 기억 속의 그대"
    },
    Dust: {
        iconName: "weather-tornado",
        gradient: ["#a2ab58", "#636363"],
        title: "먼지",
        subTitle: "마스크 꼭 챙기세요"
    }

}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            // colors={weatherOptions[condition].gradient}
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>
                    {temp}˚
                    </Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Haze",
        "Mist",
        "Clouds",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300"
    },
    subTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})