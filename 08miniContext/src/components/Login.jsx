import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className="bg-gray-600 h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>

      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id = "username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-grey focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  )
}

export default Login
