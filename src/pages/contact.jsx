import React from 'react'
import { ContactForm } from '../modules/ContactForm'
import { Headline } from '../modules/Headline'
import { ContactFeatures } from '../modules/ContactFeatures'
import { InfoCard } from '../modules/InfoCard'

export const Contact = () => {

  const headline = {
    title : "Get in Touch with QuantumGiz",
    subtitle : "Explore Our Demo React Website and Reach Out for Feedback or Inquiries",
}

  return (
    <>
      <Headline {...headline}/>
      <ContactForm />
      <ContactFeatures />
      <InfoCard />
    </>
  )
}
