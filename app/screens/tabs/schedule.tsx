import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const getWeekDays = () => {
  const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const today = new Date();
  return days.map((day, index) => ({
    day,
    date: new Date(
      today.setDate(today.getDate() - today.getDay() + index)
    ).getDate(),
    isSelected: index === today.getDay(),
  }));
};

const scheduleData = [
  {
    time: "08:00 AM",
    title: "Chăm sóc khách A",
    details: "Tắm rửa, ăn sáng, đo huyết áp",
    status: "done",
  },
  {
    time: "10:00 AM",
    title: "Vật lý trị liệu khách B",
    details: "Bài tập giãn cơ, hỗ trợ vận động",
    status: "progress",
  },
  {
    time: "12:00 PM",
    title: "Chăm sóc khách C",
    details: "Chuẩn bị bữa trưa, đo huyết áp",
    status: "pending",
  },
  {
    time: "03:00 PM",
    title: "Dọn dẹp và kiểm tra phòng khách D",
    details: "Dọn giường, kiểm tra tủ thuốc",
    status: "done",
  },
  {
    time: "06:00 PM",
    title: "Chăm sóc buổi tối khách E",
    details: "Chuẩn bị ăn tối, kiểm tra sức khỏe",
    status: "progress",
  },
];

export default function ScheduleScreen() {
  const [weekDays, setWeekDays] = useState(getWeekDays());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lịch làm việc</Text>
      </View>

      {/* Thanh chọn ngày */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={weekDays}
        keyExtractor={(item) => item.date.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              item.date === selectedDay && styles.activeDayButton,
            ]}
            onPress={() => setSelectedDay(item.date)}
          >
            <Text
              style={[
                styles.dayText,
                item.date === selectedDay && styles.activeDayText,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                styles.dateText,
                item.date === selectedDay && styles.activeDateText,
              ]}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Danh sách công việc */}
      <ScrollView style={styles.scheduleList}>
        {scheduleData.map((item, index) => (
          <View key={index} style={styles.scheduleItem}>
            <Text style={styles.scheduleTime}>{item.time}</Text>
            <View style={styles.scheduleContent}>
              <Text style={styles.scheduleTitle}>{item.title}</Text>
              <Text style={styles.scheduleDetails}>{item.details}</Text>
            </View>
            <View style={styles.statusIcon}>
              {item.status === "done" && (
                <Ionicons name="checkmark-circle" size={28} color="#28A745" />
              )}
              {item.status === "progress" && (
                <Ionicons name="time-outline" size={28} color="#FF9800" />
              )}
              {item.status === "pending" && (
                <Ionicons name="close-circle" size={28} color="#E91E63" />
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#28A745",
  },
  dayButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#E9ECEF",
    borderRadius: 10,
    alignItems: "center", // Căn giữa theo chiều ngang
    justifyContent: "center", // Căn giữa theo chiều dọc
    marginHorizontal: 5,
    width: 60,
    height: 70, // Tăng chiều cao để có đủ không gian căn giữa
  },
  activeDayButton: {
    backgroundColor: "#28A745",
  },
  dayText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6C757D",
  },
  activeDayText: {
    color: "#FFFFFF",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6C757D",
  },
  activeDateText: {
    color: "#FFFFFF",
  },
  scheduleList: {
    marginTop: 20,
  },
  scheduleItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  scheduleTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#28A745",
    width: 90,
  },
  scheduleContent: {
    flex: 1,
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  scheduleDetails: {
    fontSize: 14,
    color: "#6C757D",
  },
  statusIcon: {
    marginLeft: 10,
  },
});
