import cat from "../assets/photos/cat.jpg";
import seattle from "../assets/photos/seattle.jpg";
import walk from "../assets/photos/walk.jpg";
import { Billboard } from "../components/organisms/Hero.jsx";
import Reveal from "../lib/Reveal.jsx";
import { usePageTitle } from "../lib/usePageTitle.js";
import ContactForm from "./ContactForm.jsx";

const BIOGRAPHY = [
  "I originally went to CU Boulder for computer science because I really liked the problem-solving aspect. After some time in the program, though, I realized it wasn’t fulfilling the creative side of my personality as much as I wanted. I switched to the Creative Technology and Design (CTD) major at CU, which was the perfect mix of technology and design.",
  "That’s ultimately what led me toward UX. I still get to solve technical problems, but there’s more of a reason behind what I’m solving. I like being able to talk to people, understand their pain points, and figure out the “why” before jumping into the “how.”",
  "Outside of work, I like gaming, spending time with my cat and friends, coming up with overly creative gift ideas, and going out and finding random things to do around Seattle. I’m naturally curious, so whether it’s design, technology, a game, or something completely random, I usually end up wanting to figure out how it works and whether there’s a way to make it better.",
];

const PHOTOS = [
  {
    src: seattle,
    width: 1200,
    height: 1600,
    alt: "Flowers along the water, with mountains on the horizon",
  },
  {
    src: walk,
    width: 1200,
    height: 1600,
    alt: "Charlie Koepke on a walkway above the tracks, with the Space Needle and Seattle skyline behind him",
  },
  {
    src: cat,
    width: 1200,
    height: 1600,
    alt: "A black and white cat lying beside a cat-shaped container",
  },
];

export default function About() {
  usePageTitle("About");
  return (
    <>
      <Billboard pattern="circles" title="About Me" titleId="about-title" />
      <div className="canvas">
        <Reveal as="section" className="about-story" aria-labelledby="story-heading">
          <div>
            <h2 id="story-heading">Biography</h2>
            {BIOGRAPHY.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="about-photos">
            {PHOTOS.map((photo) => (
              <li key={photo.src}>
                <div className="photo-slot">
                  <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal as="section" className="about-contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Let's Connect</h2>
          <ContactForm />
        </Reveal>
      </div>
    </>
  );
}
