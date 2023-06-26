import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import HomeScreen from "./screens/HomeScreen";
import RoomsScreen from "./screens/RoomScreen";
import PhotoGalleryScreen from "./screens/PhotoGalleryScreen";
import LocationScreen from "./screens/LocationScreen";
import NearAroundScreen from "./screens/NearAroundScreen";
import ContactScreen from "./screens/ContactScreen";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./assets/png/logo-black-1.png";
import "./App.scss";
const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

const App = () => {
  return (
    <Router>
      <Nav
        variant="tabs"
        cclassName="custom-nav justify-content-end"
        style={{justifyContent: "right"}}
      >
        <div className="navbar-logo-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <NavDropdown
          title="Guest Options"
          id="nav-dropdown"
          onSelect={handleSelect}
        >
          <NavDropdown.Item eventKey="4.1">Login</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Book Room</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Book a cab</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Request Refund</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link href="/"> Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/rooms"> Rooms</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/photo-gallery"> Photo Gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/location"> Location & Directions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/near-around"> Near & Around Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact"> Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/rooms" element={<RoomsScreen />} />
        <Route path="/photo-gallery" element={<PhotoGalleryScreen />} />
        <Route path="/location" element={<LocationScreen />} />
        <Route path="/near-around" element={<NearAroundScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
