import { noop } from "lodash"

export function helloBar() {
  noop(1)
  console.log("helloBar")
}