function handleSubmit(event) {
    event.preventDefault()

    const postData = async ( url = '', data = {})=>{
      console.log(data);
        const response = await fetch('', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
       // Body data type must match "Content-Type" header
        body: JSON.stringify(data),
      });

        try {
          const newData = await response.json();
          console.log(newData);
          return newData;
        }catch(error) {
        console.log();
        }
    }

export { handleSubmit }
