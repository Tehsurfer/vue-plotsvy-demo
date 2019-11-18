# jesses-project

> A Vue.js project

## Current import method
```javascript
import Plotsvy from 'plotsvy'
import Vue from 'vue'
import 'plotsvy/css/main.css'
import 'plotsvy/css/util.css'

// Define a new component called plotsvy-container
Vue.component('plotsvy-container', {
  data: function () {
    return {
      msg: 'Plotsvy will Load below'
    }
  },
  mounted () {
    var myPanel = new Plotsvy(document.getElementById('plotsvy-div'), 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/csv-data/use-case-4/RNA_Seq.csv')
  },
  template: '<div id="plotsvy-div">{{msg}}</div>'
})
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

