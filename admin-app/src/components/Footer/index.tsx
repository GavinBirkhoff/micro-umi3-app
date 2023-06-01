import { Link } from 'umi'
import { Row, Space, Col } from 'antd'
import styles from './index.less'

const Footer = () => {
  return (
    <div className={styles.appFooter}>
      <Row justify="center">
        <Col>
          <Space>
            <Link to="#">关于我们</Link>
            <Link to="#">使用须知</Link>
            <Link to="#">帮助中心</Link>
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
