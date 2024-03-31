import { useState, useCallback } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./App.scss";
import DataTable from "./component/Table/Table";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(200);
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
            <Link to="/">
              <FaHome />
              Home
            </Link>
            <Dropdown className="custmenu-dropdown">
              <Dropdown.Toggle id="dropdown-basic">
                <Link to="/">
                  <FaAngular />
                  Angular
                </Link>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/">Action</Dropdown.Item>
                <Dropdown.Item href="#/">Another action</Dropdown.Item>
                <Dropdown.Item href="#/">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="">
              <RiReactjsLine />
              React
            </Link>
            <Link to="">
              <SiPhp />
              PHP
            </Link>
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
            <h3 className="mb-20 mt-20">User Details</h3>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
