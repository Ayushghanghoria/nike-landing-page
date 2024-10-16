import reactLogo from '../assets/react.svg'

const Navigation = () => {
  return (
    <nav className="container">
        <div className="logo">
          <img src={reactLogo} alt="logo" />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Products</li>
          <li href="#">Contact</li>
          <li href="#">Cart</li>
        </ul>

        <button>Login</button>
      </nav>
  )
}

export default Navigation