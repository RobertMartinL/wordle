import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { IoMdPodium } from 'react-icons/io'
import { IoMdSettings } from 'react-icons/io'
import '../css/nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <button className='menuBtn'><AiOutlineMenu/></button>
        <h1>Wordle</h1>
        <div className='options'>
          <button className='iconGroup'><AiOutlineQuestionCircle/></button>
          <button className='iconGroup'><IoMdPodium/></button>
          <button className='iconGroup'><IoMdSettings/></button>
        </div>
    </div>
  )
}

export default Nav