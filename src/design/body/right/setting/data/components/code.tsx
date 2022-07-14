import { useRef, useImperativeHandle } from 'react'
import Editor from '@monaco-editor/react'

interface Props {
  code: string
  codeRef?: any
  onChange?: (value: string | undefined) => void
}

const Code = (props: Props) => {
  const { code } = props
  const editorRef = useRef(null)

  const editorDidMount = (editor, monaco) => {
    editorRef.current = editor
  }
  const onChange = (value: string | undefined) => {
    props.onChange && props.onChange(value)
  }
  const getValue = () => {
    return (editorRef?.current as any)?.getValue()
  }
  useImperativeHandle(props?.codeRef, () => {
    return {
      getValue,
    }
  })
  const options = {
    selectOnLineNumbers: true,
  }
  return <Editor language="json" theme="vs-dark" value={code} options={options} onChange={onChange} onMount={editorDidMount} />
}
export default Code
