// import React, { ReactNode } from "react";

// interface GlobalButtonProps {
//   children: ReactNode;
//   bgColor: string;
//   title: string;
//   onclick?: () => void;
// }

// const GlobalButton: React.FC<GlobalButtonProps> = ({
//   children,
//   bgColor,
//   title,
//   onclick,
// }) => {
//   return (
//     <button
//       className={`px-4 py-2 rounded-md ${bgColor}`}
//       title={title}
//       onClick={onclick}
//     >
//       {children}
//     </button>
//   );
// };

// export const GreenBtn = ({ onclick }: { onclick?: () => void }) => {
//   return (
//     <div className="flex justify-between items-center mt-4">
//       <div>
//         <h1>NOT/USDT🔸</h1>
//         <h5>13.39M USDT</h5>
//       </div>
//       <div>
//         <h1>0.0000345</h1>
//         <p>0.18USD</p>
//       </div>
//       <div>
//         <GlobalButton
//           bgColor="bg-green-500"
//           title="Increase Value"
//           onClick={onclick}
//         >
//           +4.945
//         </GlobalButton>
//       </div>
//     </div>
//   );
// };

// GreenBtn.tsx

import GlobalButton from "./GlobalButton";

export const GreenBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div>
        <h1>NOT/USDT🔸</h1>
        <h5>13.39M USDT</h5>
      </div>
      <div>
        <h1>0.0000345</h1>
        <p>0.18USD</p>
      </div>
      <div>
        <GlobalButton
          bgColor="bg-green-500"
          title="Increase Value"
          onClick={onClick} // Pass onClick prop
        >
          +4.945
        </GlobalButton>
      </div>
    </div>
  );
};
