import React, {useContext} from 'react'

const Header = (props) => {

  const year = new Date().getFullYear()

  return (
    <footer>
      <span>© Aaron {year}</span>
    </footer>
  )
}

export default Header;
