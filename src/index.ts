
import { version } from './node_version';
import Greeter from './greeter'

let greeter = new Greeter<string>("Hello, world");
console.log(greeter.greet())
