let a = 0;
const app = new Vue ({
	delimiters: ['${', '}'], //change delimiters
	el : '#page-views',

	date : {
		count : 0
	},
	computed :{
		counter  : function(){
			window.onload = (){count += 1};
			document.getElementById('page-views').innerHTML = this.count;
			return this.count + " views"

		}
	}
})