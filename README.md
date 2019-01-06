# This project is a Markdown Previewer, was bootstrapped with [Create React App]

It contains two main components: INPUT and OUTPUT
The input component listens to any type event with the onChange method
As soon as input receives any input it stores it in the main components state
Output components receives the value of the state and using marked library it turns the string to html
This received HMTL gets passed onto a div with dangerouslySetInnerHTML and gets displayed