/* eslint-disable react/prop-types */
import React from 'react';
import './FAQ.scss';

function Motor({ faq, index, toggleFAQ }) {
  return (
    <div
      className={`faq ${faq.open ? 'open' : ''}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
      </div>
    </div>
  );
}

export default React.memo(Motor);
