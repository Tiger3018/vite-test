import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";

let waitUntilFlag = false;

export default function moveApi(e: IJoystickUpdateEvent) {
  //console.log(e.x, e.y, e.distance);
  const x_max = 50,
    y_max = 50;
  if (!waitUntilFlag) {
    waitUntilFlag = true;
    setTimeout(() => {
      waitUntilFlag = false;
    }, 300);
    fetch("http://localhost:12121/", {
      body: JSON.stringify({
        x: (e.y / y_max) * 1,
        y: (e.x / x_max) * 100,
        z_motor: 0,
        z_tower: 0,
      }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors"
    })
      .then((r) => {})
      .catch((e) => {
        // console.log("Can't connect to server.");
      });
  }
  return 0;
}
