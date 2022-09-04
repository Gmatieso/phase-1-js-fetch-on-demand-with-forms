const init = () => {

    // Target the form DOM element 
    const inputForm = document.querySelector('form');
    /*
    When the event is triggered, the call back function, we've provided 
    will execute an object representing the event will be passed in
    as an argument.We can expect this to happen and can write a parameter
    in our code to store the event. 
    */
    inputForm.addEventListener('submit',(event) => {
        event.preventDefault();
        // console.log(event);
        // event.target.children[1].value - This is the same as the next line of code 
        const input = document.querySelector('input#searchByID')
       // console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            // Access the DOM and store the two elements in JavaScript
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            // changing the contents of our title and summary elements based on 
            // retrieved data using the innerText 

            title.innerText = data.title;
            summary.innerText = data.summary;
        })

    });
  
}

document.addEventListener('DOMContentLoaded', init);

/*
In this lesson, we've gone through the basic mechanisms for providing a better experience.
By capturing user input via event listener, using fetch requests, and DOM manipulation, we can update
page content as a user requests it. Although this won't be the case for all events,
we also overode HTML's default behaviour.
*/

