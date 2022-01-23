import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_100Thin,
  Inter_300Light,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_300Light,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Main />;
  }
}

const getDOY = () => {
  const time = new Date();

  const isLeapYear = () => {
    var year = time.getFullYear();
    if ((year & 3) != 0) return false;
    return year % 100 != 0 || year % 400 == 0;
  };

  var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  var mn = time.getMonth();
  var dn = time.getDate();
  var dayOfYear = dayCount[mn] + dn;
  if (mn > 1 && isLeapYear()) dayOfYear++;
  return dayOfYear;
};

const getDate = (): string => {
  const strDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const strMonth = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const time = new Date();
  return `${strDay[time.getDay()]} ${
    strMonth[time.getMonth()]
  } ${time.getDate()}`;
};

const Main: React.FC = () => {
  // Calendar Retreival
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Calendar.requestCalendarPermissionsAsync();
  //     if (status === "granted") {
  //       const calendars = await Calendar.getCalendarsAsync(
  //         Calendar.EntityTypes.EVENT
  //       );
  //       console.log("Here are all your calendars:");
  //       console.log({ calendars });
  //     }
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 200,
          backgroundColor: "#000",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Inter_900Black",
            fontSize: 27.5,
          }}
        >
          {getDate()}
        </Text>
        <Text
          style={{
            color: "#fff",
            fontFamily: "Inter_300Light",
            fontSize: 10,
            opacity: 0.7,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {`Today is Jan 9 2022 day ${getDOY()}/365. It is 7:47 pm on a Sunday. You have zero tasks due today. Nothing scheduled today.`}
        </Text>
      </View>
      <Text>Todo app by Nick Mandylas</Text>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
