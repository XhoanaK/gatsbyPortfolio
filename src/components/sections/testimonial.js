import React, { useState, useContext } from "react"
import styled from "styled-components"

import Context from "../../context/"
import ContentWrapper from "../../styles/contentWrapper"

const TESTIMONIALS = [
  {
    quote:
      "I can say without reservation that she is one of the strongest analysts and team players I have worked with. Her creativity in finding straightforward solutions to genuinely complex problems made her someone the team could always count on. Her communication is consistently clear, thoughtful, and impactful.",
    name: "Raghuveer Gaddam",
    title: "VP, Compliance & Legal Technology at Citi",
    link: "/citi-recommendation.pdf",
  },
  {
    quote:
      "She brings technical skills, adaptability, initiative, leadership experience, and a strong commitment to continued learning. In recognition of her work and willingness to go above and beyond, we awarded Xhoana the Extra Mile Award for excellence in web development.",
    name: "Amil Khanzada",
    title: "Founder & President, Virufy",
    link: "/recommendation.pdf",
  },
]

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    .section-title {
      margin-bottom: 2rem;
    }
    .carousel {
      max-width: 44rem;
      position: relative;
    }
    .testimonial-card {
      background: ${({ theme }) => theme.colors.tertiary};
      border-radius: 0.5rem;
      padding: 2rem 2.5rem;
      min-height: 13rem;
    }
    .quote-mark {
      font-size: 4rem;
      line-height: 1;
      font-family: Georgia, serif;
      color: ${({ theme }) => theme.colors.subtext};
      opacity: 0.4;
      margin-bottom: -1rem;
      display: block;
    }
    .quote-text {
      font-size: 1.05rem;
      line-height: 1.75;
      font-style: italic;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 1.25rem;
    }
    .attribution {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.subtext};
      font-weight: 600;
    }
    .attribution span {
      font-weight: 400;
    }
    .letter-link {
      display: inline-block;
      margin-top: 1rem;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.subtext};
      text-decoration: underline;
      text-underline-offset: 3px;
      &:hover {
        color: ${({ theme }) => theme.colors.text};
      }
    }
    .carousel-controls {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1.25rem;
    }
    .carousel-btn {
      background: none;
      border: 1px solid ${({ theme }) => theme.colors.subtext};
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.subtext};
      font-size: 1rem;
      line-height: 1;
      transition: all 0.15s ease;
      &:hover {
        border-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.text};
      }
    }
    .carousel-dots {
      display: flex;
      gap: 0.5rem;
    }
    .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.subtext};
      opacity: 0.3;
      cursor: pointer;
      transition: opacity 0.15s ease;
      &.active {
        opacity: 1;
        background: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

const Testimonial = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i === 0 ? TESTIMONIALS.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === TESTIMONIALS.length - 1 ? 0 : i + 1))

  const t = TESTIMONIALS[current]

  return (
    <StyledSection id="testimonial">
      <StyledContentWrapper>
        <h3 className="section-title">Recommendations</h3>
        <div className="carousel">
          <div className="testimonial-card">
            <span className="quote-mark">"</span>
            <p className="quote-text">{t.quote}</p>
            <div className="attribution">
              {t.name} <span>— {t.title}</span>
            </div>
            <a
              className="letter-link"
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View full letter →
            </a>
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev} aria-label="Previous">&#8592;</button>
            <button className="carousel-btn" onClick={next} aria-label="Next">&#8594;</button>
            <div className="carousel-dots">
              {TESTIMONIALS.map((_, i) => (
                <div
                  key={i}
                  className={`dot${i === current ? " active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Testimonial
