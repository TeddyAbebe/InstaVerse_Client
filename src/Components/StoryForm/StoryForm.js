import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import { Card, Form, Input, Typography, Button } from "antd";
import FileBase64 from "react-file-base64";
import { createStory, updateStory } from "../../Actions/stories";
const { Title } = Typography;

function StoryForm({ selectedId, setSelectedId }) {
  const story = useSelector((state) =>
    selectedId ? state.stories.find((story) => story._id === selectedId) : null
  );
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onSubmit = (formValues) => {
    const newStory = {
      ...formValues,
      userId: uuidv4(),
    };
    selectedId
      ? dispatch(updateStory(selectedId, newStory))
      : dispatch(createStory(newStory));

    console.log(formValues);

    reset();
  };
  useEffect(() => {
    if (story) {
      form.setFieldsValue(story);
    }
  }, [story, form]);

  const reset = () => {
    form.resetFields();
    setSelectedId(null);
  };
  return (
    <Card
      style={styles.formCard}
      title={
        <Title level={4} style={styles.formTitle}>
          <b>{selectedId ? "Editing a Story..." : "Share a Story !"}</b>
        </Title>
      }
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        size="middle"
        onFinish={onSubmit}
      >
        <Form.Item
          name="username"
          label="User Name"
          rules={[{ required: true }]}
        >
          <Input allowClear />
        </Form.Item>

        <Form.Item name="caption" label="Caption" rules={[{ required: true }]}>
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>

        <Form.Item name="tags" label="Tags">
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>

        <Form.Item name="image" label="Image" rules={[{ required: true }]}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={(e) => {
              form.setFieldsValue({
                image: e.base64,
              });
            }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 16,
            offset: 6,
          }}
        >
          <Button type="primary" block htmlType="submit">
            Share
          </Button>
        </Form.Item>

        {!selectedId ? null : (
          <Form.Item
            wrapperCol={{
              span: 16,
              offset: 6,
            }}
          >
            <Button
              type="primary"
              block
              htmlType="button"
              danger
              onClick={reset}
            >
              Discard
            </Button>
          </Form.Item>
        )}
      </Form>
    </Card>
  );
}

export default StoryForm;
