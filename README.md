# number-in-words-global (Number in Words)
Converts Numbers from digits to words

## Install

```
npm install number-in-words-global or yarn add number-in-words-global
```

**Conversion Examples**  
123 - one hundred and twenty three  
0.6 - zero point sixty     
1001 - one thousand and one     
109434034 - one hundred and nine million four hundred and thirty four thousand and thirty four

#### Input Parameters
**number:** number or string (e.g. 11022, '245')

#### Usage - Javascript
```javascript
const ntwp = require('number-in-words-global');
const ntw = new ntwp.NumberToWords();
...
console.log(ntw.toWords(111));
```

#### Usage - Typescript
```typescript
import { NumberToWords } from "number-in-words-global";
const ntw = new NumberToWords();
...
console.log(ntw.toWords(123));
```

---