import React from 'react'

interface State {
  error: any
  errorInfo: any
}

const styleBody: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#00bcff',
}

const styleIcon: React.CSSProperties = {
  fontSize: '50px',
}

/**
  定制化代码错误时的显示界面
 */

const CustomErrorBoundary = () => {
  return (
    <div style={styleBody}>
      <i style={styleIcon} className="icon iconfont icon-tupianjiazaishibai02"></i>
      定制化代码错误...
    </div>
  )
}

export default CustomErrorBoundary
