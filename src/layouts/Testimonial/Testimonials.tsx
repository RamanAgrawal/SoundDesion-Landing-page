import React, { ReactElement } from "react";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";
import "./style.scss";

// Define the structure of a single testimonial
interface Testimonial {
  img: string;
  name: string;
  company: string;
  review: string;
}

const Testimonials: React.FC = (): ReactElement => {
  // Array of testimonials
  const testimonials: Testimonial[] = [
    {
      img: testimonial1,
      name: "John Doe",
      company: "Google",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: testimonial2,
      name: "Adrak Doe",
      company: "Instagram",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: testimonial3,
      name: "Lashan Doe",
      company: "Meta",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];

  return (
    <section id="testimonials" aria-label="Testimonials" role="region">
      <div className="wrapper">
        {/* Title for the testimonials section */}
        <h2>What Students Say?</h2>

        <div className="content-container">
          {testimonials.map((testimonial: Testimonial, i: number) => (
            <div className="testimonial" key={i}>
              {/* Testimonial image */}
              <img src={testimonial.img} alt={testimonial.name} />
              {/* Testimonial details */}
              <div className="reviewer-details">
                {/* Testimonial name */}
                <div className="name">{testimonial.name}</div>

                <div className="company">{testimonial.company}</div>

                <div className="review">{testimonial.review}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
