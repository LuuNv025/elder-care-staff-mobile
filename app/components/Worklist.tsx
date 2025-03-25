import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Card, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

type WorkItem = {
  id: string;
  name: string;
  address: string;
  time: string;
  earnings: string;
};

type WorkListProps = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  data: WorkItem[];
  showButton?: boolean;
};

const WorkList: React.FC<WorkListProps> = ({
  title,
  icon,
  color,
  data,
  showButton,
}) => (
  <Card style={styles.card}>
    <Card.Title
      title={title}
      left={() => <Ionicons name={icon} size={24} color={color} />}
    />
    <Card.Content>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.workItem}>
            <View>
              <Text style={styles.workText}>
                {item.name} ({item.address})
              </Text>
              <Text style={styles.workDetail}>Thời gian: {item.time}</Text>
              <Text style={styles.workDetail}>Thu nhập: {item.earnings}</Text>
            </View>
            {showButton && (
              <Button mode="contained" onPress={() => alert("Nhận việc")}>
                Nhận việc
              </Button>
            )}
          </View>
        )}
      />
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
  },
  workItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  workText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  workDetail: {
    fontSize: 14,
    color: "gray",
  },
});

export default WorkList;
