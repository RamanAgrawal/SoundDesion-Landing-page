import "./style.scss";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";
const Testimonials = () => {
  const testimonials = [
    {
      img: testimonial1,
      name: "John Doe",
      company:"Google",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: testimonial2,
      name: "Adrak Doe",
      company:"Instagram",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: testimonial3,
      name: "Lashan Doe",
      company:"meta",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];

  return (
    <section id="testimonials">
      <div className="wrapper">
        <h2>What Students Say ?</h2>
        <div className="content-container">
          {testimonials.map((testimonial, i) => (
            <div className="testimonial" key={i}>
              <img src={testimonial.img} alt={testimonial.name} />
              <div className="reviewer-details">
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
