import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import Widget from '@config/widget'

import style from '@assets/less/home.module.less'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={style.body}>
      <div>Hello World!</div>
      <Widget />
      <Button
        type="primary"
        onClick={() => {
          navigate('/design')
        }}
      >
        编辑大屏
      </Button>
    </div>
  )
}

export default Home
