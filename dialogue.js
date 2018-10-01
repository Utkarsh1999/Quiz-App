// document.onload = CustomConfirm.show();

	var CustomConfirm = new function()
    {

		this.show = function (msg, callback)
        {
					var dlg = document.getElementById('dialogCont');
					var dlgBody = dlg.querySelector('#dlgBody');
					dlg.style.top = '30%';
					dlg.style.opacity = 1;
					dlgBody.textContent = msg;
					this.callback = callback;
					document.getElementById('freezeLayer').style.display = '';
		};

		// this.okay = function ()
  		// {
		// 			this.callback();
		// 			this.close();
		// };

		this.cancel = function ()
        {
					var dlg = document.getElementById('dialogCont');
					dlg.style.top = '-30%';
					dlg.style.opacity = 0;
					var regForm = document.getElementById('regForm');
					var name = regForm.elements[0].value;
					var email = regForm.elements[1].value;
					document.getElementById('welcomeH').innerHTML +=  name;
					document.getElementById('freezeLayer').style.display =  'block';
		};
		this.submit = function()
		{	console.log("submit called");
			var regForm = document.getElementById('regForm');
			var name = regForm.elements[0].value;
			console.log(name);

			var email = regForm.elements[1].value;
			console.log(email);
		var fs = require('fs')

		var currentSearchResult = 'example'

		fs.readFile('data.json', function (err, data) {
		    var json = JSON.parse(data)
		    json.push('search result: ' + currentSearchResult)

   			 fs.writeFile("data.json", JSON.stringify(json))		
})
		}
	}

