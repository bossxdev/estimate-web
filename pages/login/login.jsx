import React from 'react'
import { LoginLayout } from '../../styles/index.style'
import { Card, Col, Row, Form, Input, Checkbox, Button } from 'antd'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { login } from '../../src/store/reducers/AuthReducer'
import Cookies from 'js-cookie'

export default function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    const data = {
      username: values.username,
      password: values.password,
      program: 'HR',
    }
    await dispatch(login(data))
    const token = Cookies.get('token')
    if (token) await router.push(`/quotation`)
  }

  return (
    <LoginLayout>
      <Row>
        <Col span={8} />
        <Col span={8}>
          <Card style={{ width: '100%' }}>
            <Form
              name="loginForm"
              layout="vertical"
              initialValues={{
                remember: true,
                username: '00001',
                password: '12345678',
              }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  SIGN IN
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={8} />
      </Row>
    </LoginLayout>
  )
}
