import { useRef } from 'react'
import Editor from '@monaco-editor/react'

interface Props {
  code: string
  onChange: (value: string | undefined) => void
}

const Code = (props: Props) => {
  const { code } = props
  console.log(code)
  const editorRef = useRef(null)

  const editorDidMount = (editor, monaco) => {
    editorRef.current = editor
  }
  const onChange = (value: string | undefined) => {
    console.log('onChange', value)
  }
  const options = {
    selectOnLineNumbers: true,
  }
  return <Editor language="javascript" theme="vs-dark" value={code} options={options} onChange={onChange} onMount={editorDidMount} />
}
export default Code
