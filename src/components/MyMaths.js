import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function MyMaths() {
  const text = `\\frac{x^5}{8}  + \\sum_{12}^{13}{e^x}+\\int_{0}^{2\pi}{3x^6}`
  return (
    <MathJaxContext>
      <h2>Basic MathJax example with Latex</h2>
      <MathJax>{text}</MathJax>
    </MathJaxContext>
  );
}