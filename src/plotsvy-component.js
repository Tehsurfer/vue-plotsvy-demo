import Plotsvy from 'plotsvy'
import Vue from 'vue'
// import 'plotsvy/css/main.css'
// import 'plotsvy/css/util.css'

// Define a new component called button-counter
Vue.component('plotsvy-container', {
  data: function () {
    return {
      msg: 'Plotsvy will Load below'
    }
  },
  mounted () {
    console.log(this)
    Object.defineProperty(this, 'myPanel', {
      value: new Plotsvy(document.getElementById('plotsvy-div'), 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/csv-data/use-case-4/RNA_Seq.csv'),
      writable: false,
      enumerable: true,
      configurable: true
    })
  },
  template: '<div id="plotsvy-div">{{msg}}</div>'
})
