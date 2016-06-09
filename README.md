#date-helper

date-helper is a basic javascript date utility module.

##Usage
```javascript
// Import the entire module
import * as dateHelper from 'date-helper';

let nextMonth = dateHelper.getNextMonth(2016, 6);


// or import individual functions
import { getNextMonth, getPreviousMonth} from 'date-helper'

let nextMonth = getNextMonth(2016, 6);
````

## Tests

To run tests in Node:
```bash
    $ npm install
    $ npm test
```
## Authors

  - [Jody Boucher](http://github.com/jodyboucher)

## License
Copyright (c) 2016 Jody Boucher <[https://jodyboucher.com/](https://jodyboucher.com/)>
Released under [The MIT License](http://opensource.org/licenses/MIT)
