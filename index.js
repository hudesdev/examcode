function Chapter(name,objectives){
    this.name = name;
    this.objectives = objectives;
}

function Objective(description , tooltip){
    this.description = description;
    this.tooltip = tooltip;
}
const chapters = [
    new Chapter("Part 1 : Implement and manipulate document \
    structures and objects" , 
    [   
        new Objective('Create the document structure',
        ['Using HTML5 semantic markup' , 
        'Creating a layout container in HTML',
        'Optimizing for search engines' , 
        'Optimizing for screen readers']),
        
        new Objective('Write code that interacts with UI controls' , 
        ['Adding or modifying HTML elements',
            'Implementing media controls',
            'Implementing graphics with HTML5 <canvas> and SVG 39']),
    
        new Objective('Apply styling to HTML elements programmatically',
        ['Changing the location of an element',
          'Applying a transform',
          'Showing and hiding elements']),
    

        new Objective('Implement HTML5 APIs',
        ['Using the storage API',
            'Using the AppCache API',
            'Using the Geolocation API']),
    
        new Objective('Establish the scope of objects and variables',
        ['Establishing the lifetime of variables and variable scope',
            'Avoiding using the global namespace',
            'Leveraging the this keyword']),
    
        new Objective('Create and implement objects',
        ['Implementing native objects' ,
         'Creating custom objects',
         'Implementing inheritance'])]) ,
    
        new Chapter("Part 2 : Implement program flow" ,
    
        [new Objective('Implement program flow' , 
        ['Evaluating expressions',
        'Working with arrays',
        'Implementing special types of arrays',
        'Using advanced array methods',
        'Implementing iterative control flow']),
    
        new Objective('Raise and handle an event',[
        'Using events',
        'Handling DOM events ',
        'Creating custom events '
        ]),
        
        new Objective('Implement exception handling',[
        'Implementing try…catch…finally constructs',
        'Checking for null values'
        ]),
        
        new Objective('Implement a callback' , [
        'Implementing bidirectional communication with the',
        'WebSocket API ',
        'Making webpages dynamic with jQuery and AJAX ',
        'Wiring up an event with jQuery ',
        'Implementing a callback with an anonymous function ',
        'Using the this pointer'
        ]),
        
        new Objective('Create a web worker process' , [
        'Getting started with a web worker process',
        'Creating a worker process with the Web Worker API ',
        'Using web workers ',
        'Understanding web worker limitations ',
        'Configuring timeouts and intervals '
        ])
    ]) ,
    
    new Chapter("Part 3 : Access and secure data",[
        new Objective('Validate user input by using HTML5 elements',
        [
        'Choosing input controls',
        'Implementing content attributes'
        ]),

    new Objective('Validate user input by using JavaScript',[
        'Evaluating regular expressions',
        'Evaluating regular expressions in JavaScript',
        'Validating data with built-in functions',
        'Preventing code injection'
        ]),
    
    new Objective('Consume data',[
        'Consuming JSON and XML data by using web services',
        'Using the XMLHttpRequest object'
    ]),
    
    new Objective('Serialize, deserialize, and transmit data',[
        'Sending data by using XMLHttpRequest',
        'Serializing and deserializing JSON data',
        'Serializing and deserializing binary data'
    ])]) ,
    
    new Chapter("Part 4 : Use CSS3 in applications",[
    
        new Objective('Style HTML text properties',[
        'Apply styles to text appearance',
        'Apply styles to text font',
        'Applying styles to text alignment, spacing, and indentation',
        'Applying styles to text hyphenation',
        'Applying styles for a text drop shadow'
    ]),
    
    new Objective('Style HTML box properties',[
        'Applying styles to alter appearance attributes',
        'Applying styles to alter graphic effects',
        'Apply styles to establish and change an element’s position'
    ]),
    
    new Objective('Create a flexible content layout',[
        'Implement a layout using a flexible box model',
        'Implementing a layout using multi-column',
        'Implementing a layout using position, floating, and exclusions',
        'Implementing a layout using grid alignment',
        'Implementing a layout using regions, grouping, and nesting'
    ]),
    
    new Objective('Create an animated and adaptive UI',[
        'Animating objects by applying CSS transitions',
        'Applying 3-D and 2-D transformations',
        'Adjusting UI based on media queries',
        'Hiding or disabling controls'
    ]),
    
    new Objective('Find elements by using CSS selectors and jQuery',[
        'Defining element, style, and attribute selectors',
        'Choosing the correct selector to reference an element',
        'Finding elements by using pseudo-elements \
        and pseudo-classes'
    ]),
    
    new Objective('Structure a CSS file by using CSS selectors',[
        'Referencing elements correctly',
        'Implementing inheritance',
        'Overriding inheritance using !important',
        'Styling an element based on pseudo-elements',
        'pseudo-classes'
    ])])
];
const parent = document.querySelector('ul');
chapters.forEach(chapter => {
    const chapterElement = document.createElement('li');
    chapterElement.className = "list-group-item";
    chapterElement.innerHTML = `<p class="text-primary">${chapter.name}</p>`;
    chapterElement.innerHTML += '<ul></ul>';
    parent.appendChild(chapterElement);          
    const parentObjectives = chapterElement.querySelector('ul');
    chapter.objectives.forEach(objective => {
        parentObjectives.innerHTML += 
        `<li><span data-toggle="tooltip" data-placement="right" \
         title data-original-title="${objective.tooltip}">${objective.description}</span></li>`                     
    });
});        

  $(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

