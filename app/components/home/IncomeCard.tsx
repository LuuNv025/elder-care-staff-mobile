import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const IncomeCard = ({ income }: { income: string }) => {
  return (
    <TouchableOpacity onPress={() => alert("Lịch sử thu nhập")}>
      <Card style={styles.card}>
        <Card.Title
          title="Thu nhập hiện tại"
          left={() => <Ionicons name="cash-outline" size={24} color="green" />}
        />
        <Card.Content>
          <Text style={styles.income}>{income}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 20,
  },
  income: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
});

export default IncomeCard;
