import React from 'react'
import Header from '../../Components/Header/Header'
import Price from '../../Components/Pricing/Price'
import Footer from '../../Components/Footer/Footer'
import WorkflowSection from '../../Components/Workflow/Workflow'
import FAQ from '../../Components/Faqs/Faqs'
function Pricing() {
  return (
    <div>
        <Header/>
        <Price/>
        <WorkflowSection/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Pricing