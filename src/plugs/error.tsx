import React from 'react'

interface Props {
  children: any
}

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

//类组件建立方式
class ErrorBoundary extends React.Component<Props, State> {
  //初始化生命周期
  constructor(props: Props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  //捕获错误边界，在render时错误会执行
  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div style={styleBody}>
          <i style={styleIcon} className="icon iconfont icon-tupianjiazaishibai02"></i>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
