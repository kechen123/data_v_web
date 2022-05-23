import React from 'react'

interface Props {
  children: any
}

interface State {
  error: any
  errorInfo: any
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
        <div>
          <h2>配置项加载失败...</h2>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
