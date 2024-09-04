import React, {useState} from 'react'

import { FaqsData } from './data'
import Faq from './faq'
import Style from './faqs.module.css'

 const Faqs=() =>{
  console.log(FaqsData)
    const [faqs,setfaqs]=useState(FaqsData);
  return (
    <main className={Style.container}> 
       
        <section className={Style.faqs}>
        <h1>FAQs</h1>
        {faqs.map(faq=>(<Faq key={faq.id} {...faq} />))}
        </section>
       
    </main>)
     
    
  
}

export default Faqs;