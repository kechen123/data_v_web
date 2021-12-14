import { Input, InputNumber } from 'antd'

const Text = (props: any) => {
  const onChange = (e) => {
    let val = e.target.value
    props.change(props.id, val)
  }
  return <Input {...props?.props} onChange={onChange} />
}

export default Text
