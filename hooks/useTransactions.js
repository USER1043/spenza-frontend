// react custom hook file
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { API_URL } from "../constants/api";

export const useTransactions = (userId) => {
  const [transactions, setTransactions] = useState([]); // For the array of transactions done till now
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // useCallback is used for performance reasons. It will memoize the function and only call it when the input changes
  const fetchAllTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${userId}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions: ", error);
    }
  }, [userId]);

  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.error("Error fetching summary: ", error);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) reuturn;

    setIsLoading(true);
    try {
      // to run the functions in parallel
      await Promise.all([fetchAllTransactions(), fetchSummary()]);
    } catch (error) {
      console.error("Error loading data: ", error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchAllTransactions, fetchSummary, userId]);

  // Delete transaction by its transaction id
  const deleteTransaction = async (id) => {
    try {
      const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete the transaction");

      // Refresh the Data after deleting
      loadData();
      Alert.alert("Success", "Transaction deleted succesfully!");
    } catch (error) {
      console.error("Error deleting the transaction: ", error);
      Alert.alert("Error", error.message);
    }
  };
  // fetchAllTransactions and fetchSummary are called under loadData that's why we aren't exporting them
  return { transactions, summary, isLoading, deleteTransaction, loadData };
};
