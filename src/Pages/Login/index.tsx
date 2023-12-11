import { Button, Form, Input } from "antd";
import styles from "./styles.module.less";

const Login = () => {
  return (
    <Form layout="vertical" name="login_form" className={styles.form}>
      <Form.Item
        label="Email / Phone number"
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
        label="Password"
        rules={[
          {
            whitespace: true,
            required: true,
            message: "Please enter email",
          },
        ]}
      >
        <Input placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
