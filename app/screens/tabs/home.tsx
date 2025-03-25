import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Card, Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import WorkList from "../../../components/Worklist";

const Home = () => {
  const router = useRouter();
  const [isAvailable, setIsAvailable] = useState(false);
  const income = "5,000,000 VNĐ";
  const workHistory = 10;
  const ongoingWorks = [
    {
      id: "1",
      name: "Chăm sóc ông A",
      address: "Quận 1, TP.HCM",
      time: "5pm - 8pm",
      earnings: "250.000đ",
    },
  ];
  const newWorks = [
    {
      id: "2",
      name: "Chăm sóc bà B",
      address: "Quận 3, TP.HCM",
      time: "6pm - 9pm",
      earnings: "300.000đ",
    },
  ];

  const data = [...ongoingWorks, ...newWorks];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
        />
        <View style={styles.headerButtons}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="black"
            onPress={() => alert("Xem thông báo")}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color="black"
            onPress={() => alert("Nhắn tin")}
          />
        </View>
      </View>

      {/* Trạng thái sẵn sàng nhận ca */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Sẵn sàng nhận ca</Text>
        <Switch value={isAvailable} onValueChange={setIsAvailable} />
      </View>

      {/* Danh sách công việc */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            {/* Thu nhập hiện tại */}
            <TouchableOpacity onPress={() => alert("Lịch sử thu nhập")}>
              <Card style={styles.card}>
                <Card.Title
                  title="Thu nhập hiện tại"
                  left={() => (
                    <Ionicons name="cash-outline" size={24} color="green" />
                  )}
                />
                <Card.Content>
                  <Text style={styles.income}>{income}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>

            {/* Công việc đang làm */}
            <WorkList
              title="Công việc đang làm"
              icon="time-outline"
              color="blue"
              data={ongoingWorks}
            />

            {/* Công việc mới */}
            <WorkList
              title="Công việc mới"
              icon="briefcase-outline"
              color="orange"
              data={newWorks}
              showButton
            />

            <Divider style={styles.divider} />
          </>
        }
        renderItem={null} // Không cần render item vì WorkList đã hiển thị danh sách
        ListFooterComponent={
          <TouchableOpacity onPress={() => router.push("/screens/auth/Login")}>
            <Card style={styles.card}>
              <Card.Title
                title="Số ca đã làm trong tuần"
                left={() => (
                  <Ionicons
                    name="stats-chart-outline"
                    size={24}
                    color="purple"
                  />
                )}
              />
              <Card.Content>
                <Text style={styles.stats}>{workHistory} ca</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  headerButtons: {
    flexDirection: "row",
    gap: 20,
  },
  logo: {
    width: 160,
    height: 80,
    resizeMode: "stretch",
  },
  card: {
    margin: 10,
    borderRadius: 10,
  },
  income: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    marginVertical: 10,
  },
  stats: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
