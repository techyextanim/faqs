import React,{useState} from 'react'

import style from './faq.module.css'

export default function Faq({id,title,des}) {
  const [toogle,settoogle]=useState(false)
  return (
   <article className={style.faq}>
     <div>
        <h4>{title}</h4>
        <button onClick={()=>{
          settoogle(!toogle)
        }}>{toogle ? "-" : "+"}</button>
     </div>
   {toogle && <p>{des}</p>}

   </article>
  )
}
