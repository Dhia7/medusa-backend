import { Module } from "@medusajs/framework/utils";
import helloWorldLoader from "./loaders/hello-world"


export default Module("hello", {
  // ...
  loaders: [helloWorldLoader],
})