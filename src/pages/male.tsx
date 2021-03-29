import React from 'react';
import { InputNumber, Button, Descriptions, Divider } from 'antd';
import { DatePicker } from '@/components';

export default function Home(): JSX.Element {
  return (
    <div style={{ marginTop: 100 }}>
      <Descriptions title="公猪报表" bordered>
        <Descriptions.Item label="日期" span={3}>
          <DatePicker />
        </Descriptions.Item>

        <Descriptions.Item label="期初" span={4}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              数量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
            <div>
              重量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
          </div>
        </Descriptions.Item>

        <Descriptions.Item label="期末" span={4}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              数量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
            <div>
              重量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
          </div>
        </Descriptions.Item>

        <Descriptions.Item label="增加-转入" span={2}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              数量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
            <div>
              重量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
          </div>
        </Descriptions.Item>

        <Descriptions.Item label="增加-购买" span={2}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              数量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
            <div>
              重量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
          </div>
        </Descriptions.Item>

        <Descriptions.Item label="减少-转出" span={2}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              数量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
            <div>
              重量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
          </div>
        </Descriptions.Item>

        <Descriptions.Item label="减少-卖出" span={2}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              数量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
            <div>
              重量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
          </div>
        </Descriptions.Item>

        <Descriptions.Item label="减少-死亡" span={2}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              数量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
            <div>
              重量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
          </div>
        </Descriptions.Item>

        <Descriptions.Item label="减少-其他">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              数量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
            <div>
              重量：
              <InputNumber size="large" style={{ width: 100 }} />
            </div>
          </div>
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      <Button size="large" type="primary">
        提交
      </Button>
      <Button danger size="large" style={{ marginLeft: 8 }}>
        清除
      </Button>
    </div>
  );
}
