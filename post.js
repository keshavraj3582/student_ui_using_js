        // JavaScript code for handling form submission
        const form=document.getElementById('postDataForm');
        form.addEventListener('submit',function(e){
            e.preventDefault();
            const payload=new FormData(form);
            console.log([...payload]);
            fetch('https://localhost:7124/api/Studentapi/',{
                method:'POST',
                body: payload
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
        })
        // document.getElementById('postDataForm').addEventListener('submit', function(event) {
        //     event.preventDefault(); // Prevent the default form submission
        //     console.log('Form submitted');
        //     const formData = new FormData(this);
        //     const postData = {};
           
            
        //     formData.forEach((value, key) => {
        //         postData[key] = value;
        //     });
            
        //     fetch('https://localhost:7124/api/Studentapi/', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json', // Set appropnoriate content type
        //         },
        //         body: JSON.stringify(postData), // Convert the data to JSON
        //     })
        //     .then(response => {
        //         if (response.ok) {
        //             alert('Data successfully posted to the API.');
        //         } else {
        //             alert('Error posting data to the API.');
        //         }``
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //         alert('An error occurred while posting data to the API.');
        //     });
        // });