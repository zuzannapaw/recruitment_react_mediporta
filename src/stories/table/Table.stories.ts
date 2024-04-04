import type { Meta, StoryObj } from "@storybook/react";
import Table from "../../components/table";
import { columns, mockedRows } from "../../../utils/static-data";
import "../../index.css";

const meta = {
  title: "Components/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const Base: Story = {
  args: { columns: columns, rows: mockedRows },
};

export { Base };
