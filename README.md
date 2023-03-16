# chartjs-community-adapter-dayjs

## Overview

This adapter allows the use of dayjs with Chart.js. 

Requires [Chart.js](https://github.com/chartjs/Chart.js/releases) **2.8.0** or later and [dayjs](https://day.js.org/) **1.11.0** or later.

**Note:** once loaded, this adapter overrides the default date-adapter provided in Chart.js (as a side-effect).

## Installation

### npm

```bash
npm install date-fns chartjs-adapter-date-fns --save
```

```javascript
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
```

## Development

You first need to install node dependencies (requires [Node.js](https://nodejs.org/)):

```bash
> npm install
```

The following commands will then be available from the repository root:

```bash
> npm run build         // build dist files
> npm run lint          // perform code linting
```
