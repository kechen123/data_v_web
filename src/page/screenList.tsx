import React, { useMemo, useState, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { message } from 'antd'
import { getFetch } from '@utils/request'
import style from '@assets/less/screenList.module.less'

type Screen = {
  id: string
  name?: string
  url?: string
}

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: fixed;
  --nav-height: 45px;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 10;
    width: 2px;
    height: 100%;
    background: var(--lightest-navy);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 10;
    width: 2px;
    height: var(--nav-height);
    background: var(--green);
    transform: translateY(calc(${(props) => props.index} * var(--nav-height)));
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
  }
`

const Header = () => {
  return (
    <header className={style.header}>
      <Link to={`/`}>
        <div className={style.logo}>
          <div>
            <i className="icon iconfont icon-dataflow"></i>
          </div>
          <div className={style.title}>
            <span>DATAKK</span>
          </div>
        </div>
      </Link>
      <div className={style.content}></div>
      <div className={style.menu}>
        <div className={style.user}></div>
      </div>
    </header>
  )
}

const BodyLeft = () => {
  const [active, setActive] = useState(0)
  const handleClick = useCallback(
    (index) => {
      setActive(index)
    },
    [setActive]
  )
  const arr = ['我的项目', 'Balalala', 'Balalala', 'Balalala']
  return (
    <div className={style.bodyLeft}>
      {/* <div className={style.leftHeader}>
        <span className={style.leftHeaderTitle}>大屏列表</span>
        <div className={style.leftHeaderBtn}>
          <i className="icon iconfont icon-shouqijiantouxiao"></i>
        </div>
      </div> */}
      <div className={style.list}>
        <Ul index={active}>
          {arr.map((item, index) => {
            return (
              <li key={index} className={active === index ? style.active : ''} onClick={() => handleClick(index)}>
                <div className={style.listTitle}>{item}</div>
              </li>
            )
          })}
        </Ul>
      </div>
    </div>
  )
}

const Create = () => {
  return (
    <div className={style.screen}>
      <Link to={`/design`} target="_blank">
        <div className={style.create}>
          <div className={style.createBtn}>
            <i className="icon iconfont icon-zengjia"></i>
          </div>
          <div className={style.createTitle}>新建大屏</div>
        </div>
      </Link>
    </div>
  )
}

const BodyContent = () => {
  const defaultWidget = async () => {
    return await getFetch('/rs/screen?sort=update_time desc')
  }
  const [list, setList] = useState<Array<Screen>>([])
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      const res = await defaultWidget()
      if (res.status === 200) {
        const arr = res.data.map((item) => {
          return {
            id: item.id,
            name: item.screen?.name,
            url: item.screen?.backgroundImage,
          }
        })
        setList(arr)
      } else {
        message.error('获取大屏数据失败')
      }
    })()
  }, [])
  return (
    <section className={style.content}>
      <div className={style.list}>
        <Create />
        {list.map((item, index) => {
          return (
            <div key={index} className={style.screen}>
              <div className={style.screenItem}>
                <div className={style.thumb}>
                  <Link to={`/preview?id=${item.id}`} target="_blank">
                    <img src={item?.url} />
                  </Link>
                </div>
                <div className={style.bottom}>
                  <div className={style.name}>{item?.name}</div>
                  <div className={style.btns}>
                    <Link to={`/design?id=${item.id}`} target="_blank">
                      <i className="icon iconfont icon-bianji"></i>
                    </Link>
                    <Link to={`/preview?id=${item.id}`} target="_blank">
                      <i className="icon iconfont icon-daohang"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const Body = () => {
  return (
    <div className={style.body}>
      <BodyLeft />
      <BodyContent />
    </div>
  )
}

const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <Body />
    </div>
  )
}

export default Home
