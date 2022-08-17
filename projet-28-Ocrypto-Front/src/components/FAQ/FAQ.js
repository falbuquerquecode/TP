import React, { useState } from 'react';
import Header from './Header';
import Motor from './Motor';

function FAQ() {
  const [faqs, setfaqs] = useState([
    {
      question: 'La formation est payante?',
      answer: 'Non. Tout est gratuit.',
      open: false
    },
    {
      question: 'J\'ai besoin de connaître le monde des finances?',
      answer: 'Non. Vous êtes là pour apprendre la technologie derrière les cryptomonnaies.',
      open: false
    },
    {
      question: 'Mes données personnelles sont elles enregistrées?',
      answer: 'Vous ne rentrez aucune donnée personnelle a part votre mail.',
      open: false
    },
    {
      question: 'Quelle est la team la plus incroyable?',
      answer: 'La team O\'crypto, bien évidemment.',
      open: false
    },
    {
      question: 'Qui sont ces garçons?',
      answer: 'Product Owner : Fabiano , Scrum master : Florent , Lead developer front : Matthieu , Lead developer back : Quentin , et le Git master JEDI: Hugo !',
      open: false
    },
    {
      question: 'Finiront ils ce projet à temps?',
      answer: 'En tout cas ils travaillent durement pour ça !.',
      open: false
    }
  ]);

  const toggleFAQ = (index) => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      }
      else {
        faq.open = false;
      }

      return faq;
    }));
  };

  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Motor faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(FAQ);
