import { useRef } from 'react'
import Editor from '@monaco-editor/react'

interface Props {
  code: string
  onChange: (value: string | undefined) => void
}

const Code = (props: Props) => {
  const { code } = props
  const editorRef = useRef(null)

  const editorDidMount = (editor, monaco) => {
    editorRef.current = editor
  }
  const onChange = (value: string | undefined) => {
    props.onChange(value)
  }
  const options = {
    selectOnLineNumbers: true,
  }
  return <Editor language="json" theme="vs-dark" value={code} options={options} onChange={onChange} onMount={editorDidMount} />
}
export default Code
