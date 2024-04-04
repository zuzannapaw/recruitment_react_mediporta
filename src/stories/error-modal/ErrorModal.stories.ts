import type { Meta, StoryObj } from "@storybook/react";
import "../../index.css";
import ErrorModal from "../../components/error-modal";

const meta = {
  title: "Components/ErrorModal",
  component: ErrorModal,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<typeof ErrorModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const Base: Story = {
  args: {
    message:
      "The server encountered an unexpected condition that prevented it from fulfilling the request.",
  },
};

export { Base };
