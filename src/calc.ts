// ---- calc.ts ----
import { powerOf2, sum, sub, mul} from './math';

const r1 = sum(42, 1);
const r2 = powerOf2(42);
const r3 = sub(42, 3);
const r4 = mul(42, 5);

console.log(`Result of sum(42, 1) is ${r1}`);
console.log(`Result of powerOf2(42) is ${r2}`);
console.log(`Result of sub(42, 3) is ${r3}`);
console.log(`Result of mul(42, 5) is ${r4}`);
