import type { Meta, StoryObj } from "@storybook/react";
import Table from "../components/table";
import { columns } from "../App";

const rows = [
  { name: "javascript", count: "2767" },
  { name: "php", count: "543" },
  { name: "javascript", count: "677" },
  { name: "ed", count: "769" },
  { name: "javascript", count: "2767" },
  { name: "php", count: "543" },
  { name: "c++", count: "677" },
  { name: "ed", count: "769" },
];
const meta = {
  title: "Components/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const Basic: Story = {
  args: { columns: columns, rows: rows },
};

export { Basic };
