import styled from "styled-components";
import { useState, useEffect } from "react";

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f8fafc;
  color: #64748b;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(20px)'};

  &:hover {
    background: #e0f2fe;
    color: #3b82f6;
    // border-color: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 767px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollToTopButton 
      $isVisible={isVisible}
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
    >
      ↑
    </ScrollToTopButton>
  );
}

export default ScrollToTop;
