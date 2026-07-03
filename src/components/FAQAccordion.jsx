import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="faq-item" key={faq.question}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{faq.question}</span>
              <ChevronDown className={isOpen ? "rotate" : ""} size={18} />
            </button>
            {isOpen && <p>{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
