import { create } from "zustand";
import customers from "../data/customers.json";

// Mock products data
const mockProducts = [
  {
    id: "P001",
    itemCode: "221-0515",
    itemName: "DNC 530 PH BL",
    brandType: "DNC",
    barCodeEA: "8851989035376",
    barCodePK: "8851989035376",
    barCodeCS: "8851989035376",
    price: 245.5,
    eaCs: 12,
    disc1: 19.25,
    tpr: 29.16,
    netPrice: 143.23,
    amount: 7519.45,
    promo: "No",
  },
  {
    id: "P002",
    itemCode: "221-0516",
    itemName: "ABC 530 PH BL",
    brandType: "ABC",
    barCodeEA: "8851989035377",
    barCodePK: "8851989035377",
    barCodeCS: "8851989035377",
    price: 198.75,
    eaCs: 24,
    disc1: 15.5,
    tpr: 22.3,
    netPrice: 118.95,
    amount: 5947.5,
    promo: "Yes",
  },
  {
    id: "P003",
    itemCode: "221-0517",
    itemName: "XYZ 530 PH BL",
    brandType: "XYZ",
    barCodeEA: "8851989035378",
    barCodePK: "8851989035378",
    barCodeCS: "8851989035378",
    price: 167.25,
    eaCs: 6,
    disc1: 8.75,
    tpr: 12.5,
    netPrice: 98.5,
    amount: 1773.0,
    promo: "No",
  },
  {
    id: "P004",
    itemCode: "221-0518",
    itemName: "DEF 530 PH BL",
    brandType: "DEF",
    barCodeEA: "8851989035379",
    barCodePK: "8851989035379",
    barCodeCS: "8851989035379",
    price: 312.0,
    eaCs: 18,
    disc1: 25.8,
    tpr: 35.4,
    netPrice: 189.2,
    amount: 11351.2,
    promo: "Yes",
  },
  {
    id: "P005",
    itemCode: "221-0519",
    itemName: "GHI 530 PH BL",
    brandType: "GHI",
    barCodeEA: "8851989035380",
    barCodePK: "8851989035380",
    barCodeCS: "8851989035380",
    price: 134.5,
    eaCs: 8,
    disc1: 6.25,
    tpr: 9.85,
    netPrice: 82.75,
    amount: 2482.5,
    promo: "No",
  },
  {
    id: "P006",
    itemCode: "221-0520",
    itemName: "JKL 530 PH BL",
    brandType: "JKL",
    barCodeEA: "8851989035381",
    barCodePK: "8851989035381",
    barCodeCS: "8851989035381",
    price: 289.75,
    eaCs: 15,
    disc1: 22.4,
    tpr: 31.65,
    netPrice: 175.85,
    amount: 8792.5,
    promo: "Yes",
  },
];

const useMockData = create((set, get) => ({
  customers: [],
  products: [],
  selectedCustomer: null,
  fetchCustomers: async () => {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve(customers), 1000);
      });
      set({ customers: response });
    } catch (error) {
      console.error("Failed to fetch customers:", error);
    }
  },
  fetchProducts: async () => {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve(mockProducts), 800);
      });
      set({ products: response });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
  setSelectedCustomer: (customer) => {
    set({ selectedCustomer: customer });
  },
}));

export default useMockData;
