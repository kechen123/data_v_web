import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Hello World!</div>
      <button
        onClick={() => {
          navigate('/design')
        }}
      >
        编辑大屏
      </button>
    </>
  )
}

export default Home
