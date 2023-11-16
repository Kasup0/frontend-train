import React from "react";
import NavigationBar from "./components/Navigationbar";
import mountainBackground from "./assets/mountainbackground.jpg";

const sectionStyle: React.CSSProperties = {
  height: "100vh",
  width: "100%",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "2em",
  scrollSnapType: "y mandatory",
  overflowY: "scroll",
  scrollBehavior: "smooth",
};

function App() {
  return (
    <>
      <div
        style={{
          ...sectionStyle,
          backgroundColor: "black",
          backgroundImage: `url(${mountainBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="window1"
      >
        <div>
          <NavigationBar />
        </div>
        <div style={{ textAlign: "center", margin: 0, marginBottom: "10px" }}>
          <h1 style={{ margin: 0 }}>The Great Outdoors</h1>
          <h3 style={{ margin: 0 }}>Wonder Often, Wonder Always</h3>
        </div>
      </div>
      <div style={{ ...sectionStyle, backgroundColor: "black" }} id="window2">
        Section 2
      </div>
      <div style={{ ...sectionStyle, backgroundColor: "black" }} id="window3">
        Section 3
      </div>
      <div style={{ ...sectionStyle, backgroundColor: "black" }} id="window4">
        Section 4
      </div>
    </>
  );
}

export default App;
