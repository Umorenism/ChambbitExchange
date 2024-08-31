import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Footer } from "../component/footer/Footer";
import { RiTicketFill } from "react-icons/ri";

interface Slice {
  color: string;
  text: string;
}

export const Spingame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [winningText, setWinningText] = useState<string | null>(null);
  const [winningSliceIndex, setWinningSliceIndex] = useState<number | null>(
    null
  );
  const slices: Slice[] = [
    { color: "#FF5733", text: "1 NOT" },
    { color: "#33FF57", text: "0.01 TON" },
    { color: "#3357FF", text: "1 000 AP" },
    { color: "#F33FFF", text: "10 000 AP" },
    { color: "#FF33C7", text: "5 NOT" },
    { color: "#FFD733", text: "4 TON" },
  ];

  const wheelRadius = 100;
  let startAngle = 0;
  let angularVelocity = 0; // Initial velocity of spin
  const angularFriction = 0.995; // Friction to slow down the wheel

  // Draw the wheel
  const drawWheel = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const sliceAngle = (2 * Math.PI) / slices.length;
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;

    slices.forEach((slice, index) => {
      const angle = startAngle + index * sliceAngle;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, wheelRadius, angle, angle + sliceAngle);
      ctx.fillStyle = slice.color;
      ctx.fill();
      ctx.stroke();

      // Draw the text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle + sliceAngle / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "white";
      ctx.font = "14px Arial";
      ctx.fillText(slice.text, wheelRadius - 10, 5);
      ctx.restore();

      // Highlight the winning slice
      if (winningSliceIndex !== null && index === winningSliceIndex) {
        ctx.strokeStyle = "gold";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.lineWidth = 1; // Reset line width
      }
    });

    // Draw the indicator
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - wheelRadius - 10);
    ctx.lineTo(centerX - 10, centerY - wheelRadius - 20);
    ctx.lineTo(centerX + 10, centerY - wheelRadius - 20);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
  };

  // Animation loop
  const animate = (ctx: CanvasRenderingContext2D) => {
    startAngle += angularVelocity;
    angularVelocity *= angularFriction; // Apply friction

    drawWheel(ctx);

    if (angularVelocity > 0.002) {
      requestAnimationFrame(() => animate(ctx));
    } else {
      determinePrize();
    }
  };

  // Determine which slice the wheel stopped on
  const determinePrize = () => {
    // const sliceAngle = (2 * Math.PI) / slices.length;
    const winningIndex = Math.floor(
      ((startAngle % (2 * Math.PI)) / (2 * Math.PI)) * slices.length
    );
    const winningSlice = slices[slices.length - winningIndex - 1];
    setWinningText(winningSlice.text);
    setWinningSliceIndex(slices.length - winningIndex - 1); // Save the winning slice index
  };

  const spinWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setWinningSliceIndex(null); // Reset the winning slice index before spinning
    angularVelocity = Math.random() * 0.2 + 0.2; // Random spin speed
    requestAnimationFrame(() => animate(ctx));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawWheel(ctx);
  });

  return (
    <div className="flex flex-col h-screen bg-gray-950">
      {/* Header */}
      <div className="fixed bg-black text-white w-full top-0 p-4 z-10 left-0 right-0">
        <div className="flex justify-between items-center">
          <FaArrowLeft />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow pt-16 text-white pb-16 overflow-y-auto p-4 min-h-screen">
        <div className="bg-gray-800 flex justify-center items-center rounded-md text-xl font-semibold py-4 flex-col p-2">
          <div className="bg-slate-500 w-full py-1 p-4 rounded-full mb-4 text-center">
            <p className="text-sm">Invite Friend</p>
          </div>
          <h1 className="font-serif text-xl">Your tickets</h1>
          <div className="flex gap-2 mt-4">
            <h1 className="text-3xl font-semibold">0</h1>
          </div>
          <div className="flex gap-2 mt-4 justify-between items-center w-[80%]">
            <button className="bg-slate-500 p-1 py-2 rounded-md w-full text-sm">
              0 TON
            </button>
            <button className="bg-slate-500 p-1 py-2 text-sm rounded-md w-full">
              0 CON
            </button>
          </div>
          <div className="flex gap-2 mt-4 justify-between items-center w-[80%]">
            <button className="bg-slate-900 p-1 py-2 rounded-xl w-full text-sm">
              <p>
                <RiTicketFill />
              </p>
              <h1>ticket:</h1>
            </button>
            <button className="bg-slate-900 p-1 py-2 text-sm rounded-xl w-full">
              <p></p>
              <h1>withdraw</h1>
            </button>
            <button className="bg-slate-900 p-1 py-2 text-sm rounded-xl w-full">
              <p></p>
              <h1>Gifts</h1>
            </button>
          </div>
        </div>

        <div className="bg-gray-800 flex  justify-center items-center rounded-md text-xl font-semibold py-4 flex-col mt-5 p-4 mb-10">
          <canvas
            ref={canvasRef}
            width={200}
            height={200}
            className="bg-black rounded-full"
          ></canvas>
          <button
            onClick={spinWheel}
            className="bg-orange-500 mt-4 p-1 text-sm rounded-md"
          >
            Spin to Earn
          </button>
        </div>

        {/* Popup Message */}
        {winningText && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white p-8 rounded-md text-black text-center">
              <h2 className="text-2xl font-semibold mb-4">Congratulations!</h2>
              <p className="mb-4">You won {winningText}!</p>
              <button
                onClick={() => setWinningText(null)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="fixed bottom-0 bg-pink-700 w-full left-0 right-0 p-4 z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};
