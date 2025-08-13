import React, { useState } from "react";
import "./MobileMenu.css";

const MobileMenu = ({ menuItems, onClose }) => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleSubmenu = (key) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderMenuItems = (items, parentKey = "") => {
    return items.map((item, index) => {
      const key = parentKey ? `${parentKey}-${index}` : `${index}`;
      const isOpen = openIndexes[key];
      const hasSubmenu =
        (item.megaData && item.megaData.length > 0) ||
        (item.links && item.links.length > 0);

      return (
        <li key={key}>
          <div
            className="menu-header"
            onClick={() => hasSubmenu && toggleSubmenu(key)}
          >
            {item.label || item.name}
            {hasSubmenu && (
              <span className="submenu-toggle">{isOpen ? "−" : "+"}</span>
            )}
          </div>

          {hasSubmenu && isOpen && (
            <ul className={`submenu open`}>
              {/* If megaData, recursively render */}
              {item.megaData && renderMenuItems(item.megaData, key)}
              {/* If links, render links */}
              {item.links &&
                item.links.map((link, lIndex) => (
                  <li key={`${key}-link-${lIndex}`}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className="mobile-menu-overlay open">
      <div className="mobile-menu open">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <ul>{renderMenuItems(menuItems)}</ul>
      </div>
    </div>
  );
};

export default MobileMenu;

// import React, { useState } from "react";
// import "./MobileMenu.css";

// const MobileMenu = ({ menuItems, onClose }) => {
//   const [openIndexes, setOpenIndexes] = useState({});

//   const toggleSubmenu = (key) => {
//     setOpenIndexes((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const renderMenuItems = (items, parentKey = "") => {
//     return items.map((item, index) => {
//       const key = parentKey ? `${parentKey}-${index}` : `${index}`;
//       const isOpen = openIndexes[key];

//       return (
//         <li key={key}>
//           <div
//             className="menu-header"
//             onClick={() => item.hasChildren && toggleSubmenu(key)}
//           >
//             {item.label || item.name}
//             {item.hasChildren || item.links ? (
//               <span
//                 style={{
//                   marginLeft: "auto",
//                   fontWeight: "700",
//                   fontSize: "18px",
//                   cursor: "pointer",
//                 }}
//               >
//                 {isOpen ? "−" : "+"}
//               </span>
//             ) : null}
//           </div>

//           {(item.hasChildren || item.links) && isOpen && (
//             <ul className={`submenu open`}>
//               {item.megaData
//                 ? renderMenuItems(item.megaData, key)
//                 : item.links
//                 ? item.links.map((link, lIndex) => (
//                     <li key={`${key}-link-${lIndex}`}>
//                       <a href={link.url}>{link.label}</a>
//                     </li>
//                   ))
//                 : null}
//             </ul>
//           )}
//         </li>
//       );
//     });
//   };

//   return (
//     <div className="mobile-menu-overlay open">
//       <div className="mobile-menu open">
//         <button className="close-btn" onClick={onClose}>
//           &times;
//         </button>
//         <ul>{renderMenuItems(menuItems)}</ul>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;
