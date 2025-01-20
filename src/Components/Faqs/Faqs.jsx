import React, { useState } from "react";
import "./Faqs.css";

const FAQ = () => {
  const faqData = [
    {
      question: "For whom is this service designed?",
      answer: "Designed to help growing SaaS and mobile app businesses accelerate their development and enhance their product offerings through expert design and frontend engineering expertise.",
    },
    {
      question: "What types of designs does we specialize in?",
      answer: "Whether you need help with design thinking, wireframes, prototyping, user experience architecture, or frontend development with API integration, we're your go-to UI/UX partner",
    },
    {
      question: "What kind of Designs we can do?",
      answer: "A full range of branding services encompassing logo design, banners, posters, flyers, brochures, banner ads, Facebook covers, stationery, billboards, and other marketing materials.",
    },
    {
      question: "What are the advantages of our unlimited UI/UX and frontend development services?",
      answer: "Our unlimited package offers unlimited design and development requests, ensuring efficient prioritization and timely delivery.",
    },
    {
      question: "Are API integration services included in your frontend development offerings?",
      answer: "Our experienced frontend developers will seamlessly integrate your backend APIs into intuitive user interfaces, utilizing either React or Vue.js based on your preferences.",
    },
    {
      question: "Can you clarify your policy for cancellations and refunds?",
      answer: "Enjoy a 7-day no-questions-asked money-back guarantee. Cancellation is simple: just send us an email. You can also easily resume your subscription at any time.",
    },
    {
      question: "How are you able to offer such cost-effective solutions?",
      answer: "We offer competitive pricing by strategically leveraging our global team, which includes experienced product designers and frontend developers based in Southeast Asia.",
    },
    {
      question: "Do I retain ownership of the designs created by Media dunes? Can I resell or license the work?",
      answer: "The designs will be delivered to you with complete intellectual property rights, ensuring your full ownership and freedom to use them as desired.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Related Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData?.map((faq, index) => (
          <li key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq?.question}
              <span className="toggle-icon">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq?.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
