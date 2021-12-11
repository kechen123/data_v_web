import React, { useEffect, useRef } from 'react'
import style from './index.module.less'

const Ruler = (props) => {
  const ruler = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    let r: HTMLElement | null = document.getElementById('ruler')
    if (r) {
      // const guides = new Guides(r, {
      //   type: 'horizontal',
      //   width: 1720,
      //   height: 20,
      //   backgroundColor:'#FFF',
      //   lineColor:'#333',
      //   textColor:'#666'
      // }).on('changeGuides', (e) => {
      //   console.log(e.guides)
      // })
    }
  }, [])
  return (
    <div className={style.ruler}>
      <div className={style.hContainer}></div>
      <div className={style.vContainer}></div>
    </div>
  )
}

export default Ruler
