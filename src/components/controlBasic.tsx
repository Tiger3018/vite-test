import { Joystick } from "react-joystick-component";
import moveApi from "../func";

function dirtyFunc () {

}

export default function ControlPannel() {
  return (
    <Joystick size={100} sticky={true} baseColor="red" stickColor="blue" move={moveApi} stop={moveApi}></Joystick>
  )
}
