import React from 'react';
import { Form, Select, InputNumber, Button } from 'antd';
import dayjs from 'dayjs';
import { DatePicker } from '@/components';

const FormItem = Form.Item;
const Option = Select.Option;

export default function Home(): JSX.Element {
  const [form] = Form.useForm();

  const submitVal = () => {
    console.log(form.getFieldsValue(true));
  };

  return (
    <div style={{ marginTop: 100 }}>
      <Form
        layout="horizontal"
        form={form}
        initialValues={{
          dateTime: dayjs(),
          pigType: '0',
          periodType: '0',
          changeReason: '0',
          pingNum: 0,
          pigWeight: 0,
        }}
      >
        <FormItem
          label="日期"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 8 }}
          name="dateTime"
        >
          <DatePicker name="startDate" />
        </FormItem>

        <FormItem
          label="种类"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 8 }}
          name="pigType"
        >
          <Select size="large" style={{ width: 192 }}>
            <Option value="0">公猪</Option>
            <Option value="1">母猪</Option>
          </Select>
        </FormItem>

        <FormItem
          label="增减时期"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 8 }}
          name="periodType"
        >
          <Select size="large" style={{ width: 192 }}>
            <Option value="0">期初</Option>
            <Option value="1">增加</Option>
            <Option value="2">减少</Option>
            <Option value="3">期末</Option>
          </Select>
        </FormItem>

        <FormItem
          label="增减原因"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 8 }}
          name="changeReason"
        >
          <Select size="large" style={{ width: 192 }}>
            <Option value="0">转群</Option>
            <Option value="1">购入调拨</Option>

            <Option value="2">转群</Option>
            <Option value="3">出售（转出）</Option>
            <Option value="4">死亡</Option>
            <Option value="5">淘汰</Option>
          </Select>
        </FormItem>

        <FormItem
          label="头数"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 8 }}
          name="pingNum"
        >
          <InputNumber size="large" style={{ width: 100 }} />
        </FormItem>

        <FormItem
          label="重量"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 8 }}
          name="pigWeight"
        >
          <InputNumber size="large" style={{ width: 100 }} />
        </FormItem>

        <FormItem
          style={{ marginTop: 48 }}
          wrapperCol={{ span: 10, offset: 10 }}
        >
          <Button size="large" type="primary" onClick={submitVal}>
            提交
          </Button>
          <Button danger size="large" style={{ marginLeft: 8 }}>
            清除
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}
