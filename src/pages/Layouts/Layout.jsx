import { Outlet, Link, useLocation } from "react-router-dom";
import "../../index.css";
import Navbar from "../../components/Navbar.jsx";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./styles.css";
import { useRef } from "react";
function App() {
  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <>
      <Navbar />
      <SwitchTransition>
        <CSSTransition
          timeout={200}
          classNames="fade"
          key={location.pathname}
          in={true}
          nodeRef={nodeRef}
        >
          <div className="max-w-5xl mx-auto px-3 " ref={nodeRef}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
