import type { Meta, StoryObj} from "@storybook/react"
import Table from "../components/table";

const meta = {
  title: "Components/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const Basic: Story = {
  args: {},
};

export { Basic };
