// import { Vue, Component } from 'vue-property-decorator'
import Vue from 'vue'
import template from './component.html'
import './component.scss'

// @Component({
// 	template 
// })
export default class PageOneComponent extends Vue {
	// template,
	mounted () {
		console.log(111)
	}
}