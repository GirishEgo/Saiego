// import React from "react";
// import SeoData from "../components/SEO/SeoData";

// const KeyWords = () => {
//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       {SeoData.map((p, Key) => (
//         <div key={Key} style={{ marginBottom: "30px" }}>
//           {p.seoInfo.map((words, i) => (
//             <div key={i}>
//               <h2
//                 style={{
//                   fontSize: "24px",
//                   color: "#333",
//                   marginBottom: "10px",
//                 }}
//               >
//                 {words.title}
//               </h2>
//               <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#555" }}>
//                 {words.description}
//               </p>

//               <h3
//                 style={{ fontSize: "20px", color: "#444", marginTop: "20px" }}
//               >
//                 Keywords:
//               </h3>
//               {Array.isArray(words.keywords) ? (
//                 words.keywords.map((x, xi) => (
//                   <div key={xi}>
//                     <p style={{ fontSize: "16px", color: "#666" }}>{x}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No keywords available</p>
//               )}

//               <h3
//                 style={{ fontSize: "20px", color: "#444", marginTop: "20px" }}
//               >
//                 Product Information:
//               </h3>
//               <div>
//                 <p style={{ fontSize: "16px", color: "#444" }}>
//                   <strong>Product Name:</strong> {words.product.name}
//                 </p>
//                 <p style={{ fontSize: "16px", color: "#444" }}>
//                   <strong>Price:</strong> {words.product.price}
//                 </p>
//                 <p style={{ fontSize: "16px", color: "#444" }}>
//                   <strong>Availability:</strong> {words.product.availability}
//                 </p>
//                 <p style={{ fontSize: "16px", color: "#444" }}>
//                   <strong>Currency:</strong> {words.product.currency}
//                 </p>
//                 <p style={{ fontSize: "16px", color: "#444" }}>
//                   <strong>Brand:</strong> {words.product.brand}
//                 </p>
//                 <p style={{ fontSize: "16px", color: "#444" }}>
//                   <strong>Description:</strong> {words.product.description}
//                 </p>
//               </div>

//               {/* <h3
//                 style={{ fontSize: "20px", color: "#444", marginTop: "20px" }}
//               >
//                 Breadcrumb:
//               </h3>
//               <ul style={{ paddingLeft: "20px" }}>
//                 {words.breadcrumb.map((bc, bcIndex) => (
//                   <li key={bcIndex} style={{ fontSize: "16px" }}>
//                     <a
//                       href={bc.url}
//                       style={{ color: "#0066cc", textDecoration: "none" }}
//                     >
//                       {bc.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul> */}

//               <h3
//                 style={{ fontSize: "20px", color: "#444", marginTop: "20px" }}
//               >
//                 FAQs:
//               </h3>
//               {words.faqs.map((faq, faqIndex) => (
//                 <div key={faqIndex}>
//                   <p style={{ fontSize: "16px", color: "#444" }}>
//                     <strong>Q:</strong> {faq.question}
//                   </p>
//                   <p style={{ fontSize: "16px", color: "#444" }}>
//                     <strong>A:</strong> {faq.answer}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           h2 {
//             font-size: 20px;
//           }
//           p,
//           li {
//             font-size: 14px;
//           }
//           h3 {
//             font-size: 18px;
//           }
//         }
//         @media (max-width: 480px) {
//           h2 {
//             font-size: 18px;
//           }
//           p,
//           li {
//             font-size: 12px;
//           }
//           h3 {
//             font-size: 16px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default KeyWords;
