

function YesClick (){
    window.location.href = `level.html`;
}



document.addEventListener('DOMContentLoaded', function () {                                    

    const submitNamebutton = document.getElementById('submit-Name-button');
	

            // const url = `http://localhost:8000/load`
			
			// fetch(url, { method: 'GET' })                                                           
            //     .then(function (response) { 
            //         return response.json();                                                       
            //     })
            //     .then(function (json) {                                                            
            //         if (json.error) {
            //             throw new Error(json.error);
            //         }
            //         const attempts = json.attempts
            //         console.log(attempts)

            //         if (attempts.length > 0){
                        
            //             var add = '<ul>'
            //             for(let i = 0; i < attempts.length ;i++ ){
            //                 add +='<li>Attempt '+ (i+1) +' ' + attempts[i]+' Clicks</li>' 
            //             }
            //             add += '</ul>'
            //             const changes = document.getElementById('attempts')
            //             changes.innerHTML = add
            //             console.log(add)

            //             const changesTop = document.getElementById('top')
            //             changesTop.innerHTML = '<h4 class="login100-form-title p-b-34 p-t-27">Current Top Click counts : ' + json.topScore 
            //         }
                    
                    
            //     })
            //     .catch(function (err) {
            //         alert(err.message);
            //     });


	submitNamebutton.addEventListener('click', function () { 

		const NameInput = document.getElementById('Name-input');
		const Name = NameInput.value;

		const submitNamebutton_feedback = '<script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script> <lord-icon src="https://cdn.lordicon.com/osralwsf.json" trigger="loop"colors="primary:#000000,secondary:#000000"stroke="100"style="width:25px;height:25px"></lord-icon>'
        submitNamebutton.innerHTML = submitNamebutton_feedback

		const url = `http://localhost:8000/?Name=${Name}`
		setTimeout(() => {
			
			fetch(url, { method: 'POST' })                                                           
                .then(function (response) { 
                    return response.json();                                                       
                })
                .then(function (json) {                                                            
                    if (json.error) {
                        throw new Error(json.error);
                    }
                    
					var changeBox = '<h3 class="login100-form-title p-b-34 p-t-27">'+json.Name+'</h3>' + '<p class="login100-form-title p-b-34 p-t-27">GO GO GO</p>' + "<div class='container-login100-form-btn'><button class='login100-form-btn' onclick='YesClick()'>GO!</button></div>"
     

					var changeTest = document.getElementById('Name-to-level')
					changeTest.innerHTML = changeBox;
                    
                })
                .catch(function (err) {
                    alert(err.message);
                });

			

		}, 1000);
	 })

	
	


})