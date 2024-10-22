import Head from 'next/head';
import React, { ChangeEvent, useRef, useState } from 'react';
import { ReactSketchCanvas, type ReactSketchCanvasRef } from 'react-sketch-canvas';


const BoardGame: React.FC = () => {
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [strokeColor, setStrokeColor] = useState("#000000");
    const [canvasColor, setCanvasColor] = useState("#ffffff");
    
    const [eraseMode, setEraseMode] = useState(false);
    
    const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handleStrokeColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStrokeColor(event.target.value);
  };

  const handleCanvasColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCanvasColor(event.target.value);
  };
    
//     const handleEraserWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setEraserWidth(+event.target.value);
//   };
    return (
      <>
      <Head>
        <title>Papan Tulis</title>
        <meta name="description" content="Privacy Policy for children under 13 years old" />
      </Head>
        <div className="d-flex flex-column gap-2 p-2">
      <h1>Tools</h1>
      <div className="d-flex gap-2 align-items-center ">
        <label htmlFor="color">Stroke color</label>
        <input
          type="color"
          value={strokeColor}
          onChange={handleStrokeColorChange}
        />
        <label htmlFor="color">Canvas color</label>
        <input
          type="color"
          value={canvasColor}
          onChange={handleCanvasColorChange}
                    />
                    <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          disabled={eraseMode}
          onClick={handleEraserClick}
        >
          Eraser
        </button>
      </div>
      <h1>Canvas</h1>
      <ReactSketchCanvas
        ref={canvasRef}
        strokeColor={strokeColor}
        canvasColor={canvasColor}
      />
    </div>
      </>
  );
};

export default BoardGame;

