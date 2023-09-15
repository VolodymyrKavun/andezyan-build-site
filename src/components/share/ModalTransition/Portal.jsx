// 'use client';
// import { useState, useEffect } from 'react';
// import { createPortal } from 'react-dom';

// const Portal = ({ children }) => {
//   const [isBrowser, setIsBrowser] = useState(false);
//   const rootModal = document.getElementById('modal');

//   useEffect(() => {
//     setIsBrowser(true);
//   }, []);

//   if (isBrowser) {
//     return createPortal(children, rootModal);
//   } else {
//     return null;
//   }
// };

// export default Portal;
