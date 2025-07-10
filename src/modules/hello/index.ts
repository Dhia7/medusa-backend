import { Module } from "@medusajs/framework/utils";
import helloWorldLoader from "./loaders/hello-world"

// Create a simple service class
class HelloService {
  async sayHello() {
    return "Hello World!";
  }
}

export default Module("hello", {
  service: HelloService,
  loaders: [helloWorldLoader],
})