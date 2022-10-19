import React from 'react'
import { Route } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import styles from '../../styles/optionPageCard.module.css'

export default function OptionPageCard({ name, image, setType }) {
   return (
      <NavLink style={{ textDecoration: 'none' }} to={`/type/${name}`}>
         < div className={styles.card} style={{ backgroundImage: `url('../image/deaf.png')` }}>
            <p className={styles.p}>{name}</p>
         </div >
      </NavLink>
   )
}
