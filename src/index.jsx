import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './components/ColorSlider';

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const handleRedSlide = (value) => {
    setRedValue(value)
  }

  const handleGreenSlide = (value) => {
    setGreenValue(value)
  }

  const handleBlueSlide = (value) => {
    setBlueValue(value)
  }

  const finalColor = () => {
    return (redValue + ',' + greenValue + ',' + blueValue)
  }

  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider baseColor='red' colorName='Červená' onValueChange={handleRedSlide} value={redValue} />
        <ColorSlider baseColor='green' colorName='Zelená' onValueChange={handleGreenSlide} value={greenValue} />
        <ColorSlider baseColor='blue' colorName='Modrá' onValueChange={handleBlueSlide} value={blueValue} />
      </div>
      <div className="color-box" id="color-box" style={{ backgroundColor: 'rgb(' + finalColor() + ')' }}></div>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
