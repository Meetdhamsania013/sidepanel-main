import { useState, useCallback } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Button from "react-bootstrap/Button";
import "./App.scss";
import NewTable from "./component/NewTable/NewTable";

import SidebarItem from "../src/component/SidebarItem/SidebarItem";
import items from "../src/data/sidebar.json";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [_isResizing, setIsResizing] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const startResizing = useCallback(
    (mouseDownEvent) => {
      setIsResizing(true);

      const startWidth = sidebarWidth;
      const startPosition = mouseDownEvent.clientX;

      const onMouseMove = (mouseMoveEvent) => {
        const diff = mouseMoveEvent.clientX - startPosition;
        const newWidth = startWidth + diff;
        setSidebarWidth(Math.max(100, newWidth));
      };

      const onMouseUp = () => {
        setIsResizing(false);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [sidebarWidth]
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //  Hover
  const handleMouseEnter = useCallback(() => {
    !isSidebarOpen && setIsHover(true);
    setIsSidebarOpen(true);
  }, [isSidebarOpen]);
  const handleMouseOut = useCallback(() => {
    isHover && setIsSidebarOpen(!isSidebarOpen);
    setIsHover(false);
  }, [isHover, isSidebarOpen]);

  return (
    <div className="App">
      <div className="page-container">
        <div
          className={`sidebar ${!isSidebarOpen ? "hide" : ""}`}
          style={{
            width: `${sidebarWidth}px`,
            transform: `translateX(${
              !isSidebarOpen ? `-${sidebarWidth - 30}px` : "0"
            })`,
          }}
        >
          <div
            className="sidebar-links"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
          >
           <div className="sidebar_inner_wrap">
              { items.map((item, index) => <SidebarItem key={index} item={item} />) }
            </div>
          </div>
          <div
            className={`resize-handle ${!isSidebarOpen ? "rotate180" : ""}`}
            onMouseDown={startResizing}
          >
            <Button
              variant="dark"
              className="toggle-btn"
              onClick={toggleSidebar}
            >
              <IoIosArrowDropleftCircle />
            </Button>
          </div>
        </div>
        <div
          className="page-content"
          style={{ paddingLeft: `${sidebarWidth}px` }}
        >
          <div className="main-content">
            {/* <h3 className="mb-20 mt-20">User Details</h3>
            <DataTable /> */}
            <NewTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
