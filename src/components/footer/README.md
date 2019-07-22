# The Footer Component

### The Footer functional component contains the actual, physical footer of the application that reads "@2019 Code Fellows". See below:

```
<Footer />
```

```
import React from "react";

function Footer() {
  return (
    <footer>
      <section>
        <p>&copy;2019 Code Fellows</p>
      </section>
    </footer>
  );
}

export default Footer;

```