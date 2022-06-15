import ControlPannel from "@/components/controlBasic";
import { Navbar, Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/vite.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container><ControlPannel></ControlPannel></Container>
      </main>
      <footer></footer>
    </>
  );
}
