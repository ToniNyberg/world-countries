import React from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2';

const Header = () => {

  const changeTheme = () => {
      const moon = document.querySelector('.moon-icon')
      const header = document.querySelector('.header')
      const input = document.querySelector('#search')
      const select = document.querySelector('select')
      const sIcon = document.querySelector('.search-icon')
      const details = document.querySelectorAll('.details')

      moon.addEventListener('click', () => {
        document.body.classList.toggle('light-theme')
        header.classList.toggle('light-theme')
        input.classList.toggle('light-theme')
        select.classList.toggle('light-theme')
        sIcon.classList.toggle('light-theme')

        details.forEach((detail) => {
          detail.classList.toggle('light-theme')
        })
      })
  }

    return (
        <>
          <header className="header">
              <div>
              <h1>Where in the world!?</h1>
              </div>
              <div className="m-icon">
                <Brightness2Icon className="moon-icon" onClick={() => changeTheme()}/>Dark Mode
                </div>
             
              </header> 
        </>
    )
}

export default Header
