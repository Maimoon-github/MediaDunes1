import React, { useState } from "react";

const DigitalADFAQ = () => {
    const faqData = [
      {
        question: "What is Digital Ad Design?",
        answer:
          "Digital Design Admin & Assistance involves managing design projects, ensuring quality checks, and coordinating tasks to streamline creative workflows.",
      },
      {
        question: "How important is Digital Ad Design?",
        answer:
          "It is crucial for maintaining efficiency, meeting deadlines, and ensuring the highest quality of design work by reducing administrative overhead for designers.",
      },
      {
        question: "Is Digital Ad Design the same as Digital Design?",
        answer:
          "No, it complements Digital design by focusing on managing tasks and processes, allowing designers to focus on creativity rather than logistics.",
      },
      {
        question:
          "What is the role of design in Digital Ad Design?",
        answer:
          "The role of design in our service is to enhance brand identity, ensure consistency, and align design outputs with client goals.",
      },
      {
        question:
          "What type of customers use our Digital Ad Design service??",
        answer:
          "Our services are ideal for businesses, startups, and creative teams looking to streamline their design workflows and improve output quality.",
      },
      {
        question:
          "Why is Hatchly's offering better than other Digital Ad Design services?",
        answer:
          "We provide comprehensive support, personalized solutions, and a commitment to quality that sets us apart from others in the industry.",
      },
    ];
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="faq-container">
        <h2 className="faq-title text-center">Related Frequently Asked Questions</h2>
        <ul className="faq-list">
          {faqData.map((faq, index) => (
            <li key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default DigitalADFAQ