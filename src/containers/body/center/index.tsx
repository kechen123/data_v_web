import React from 'react'
import Drop from '@components/drop'
import { useAppSelector } from '@storeApp/hooks'
import style from './index.module.less'
import {screen} from "@features/screenSlice";

const Center = (props) => {
    const { width,height,scale } = useAppSelector(screen)
  return (
      <div className={style.center}>
          <div className={style.screen}>
              <Drop style={{width:width+'px',height:height+'px'}}>
                  <div>

                  </div>
              </Drop>
          </div>

          <div className={style.content}>

          </div>
      </div>
  )
}

export default Center
