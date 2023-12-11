import { Form, Input } from "antd";

const Signup = () => {
  return (
    <Form layout="vertical" name="login_form">
      <Form.Item
        label="Full Name"
        rules={[
          {
            whitespace: true,
            required: true,
            message: "Please enter full name",
          },
        ]}
      >
        <Input placeholder="Full name" />
      </Form.Item>
      <Form.Item
        label="Email"
        rules={[
          {
            whitespace: true,
            required: true,
            message: "Please enter email",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        label="Phone number"
        rules={[
          {
            whitespace: true,
            required: true,
            message: "Please enter phone number",
          },
        ]}
      >
        <Input placeholder="Phone number" />
      </Form.Item>
      <Form.Item
        label="Address"
        rules={[
          {
            whitespace: true,
            required: true,
            message: "Please enter address",
          },
        ]}
      >
        <Input placeholder="Address" />
      </Form.Item>
      <Form.Item
        label="City"
        rules={[
          {
            whitespace: true,
            required: true,
            message: "Please enter city",
          },
        ]}
      >
        <Input placeholder="City" />
      </Form.Item>
    </Form>
  );
};

export default Signup;
