import React, { useEffect } from 'react'
import OptionPageCard from '../optionsPageCard/optionsPageCard'
import './SelectionPage.css';

export default function SelectionPage({ setType }) {
   const elem = [{ name: 'blind', image: 'blind.png' }, { name: 'deaf', image: 'deaf.png' }, { name: 'physically impared', image: 'physical.png' }, { name: 'speech', image: 'other.png' }, { name: 'All', image: 'other.png' }]
   const msg = new SpeechSynthesisUtterance()
   const message = 'Select Disability , Blind  , Deaf,  Physically Impared,Speech and  all'
   msg.text = message
   useEffect(() => {
      window.speechSynthesis.speak(msg)
   }, [])
   return (
      <div className='SelectionPageContainer'>
         <h2 className={'h2'}>Please Select Diability</h2>
         <div className={'optionContainer'} >
            {
               elem.map((el, k) => <OptionPageCard setType={setType} key={k} name={el.name} image={el.image}></OptionPageCard>)
            }

         </div>
      </div >
   )
}
