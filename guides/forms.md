###Forms!

- Forms are a great way for us to user input into our web applications.

###How They Work
- Forms work by collecting data from different `inputs` and sending that data to the server in the form of an `HTTP request`. Forms have two main attributes that we need to concern ourselves with: `method` and `action`.
  - `method` pertains to the `HTTP request Verb` that we want to form to make to the server. If we use a `get` the data will be sent over to the server as a query in the URL. If we use `post`, the data will be sent in the body of an HTTP `post` request. Forms default to `post` if no method is specified. We will talk about `delete` and `put` later.
  - `action` pertains to the path in the server.
    - For example, a form with a `method` of `get` and a `path` of `/cats` would send a get request to the server with any form data as a query. This request would be sent to the `GET /cats` route in the server.
    - A form with a `method` of `post` and a route of '/horses' would send any form data over in the body of a post request. The request would be sent to the `POST /horses` route.

###Types of Inputs
- There are several types of inputs we can use in forms. We specify the type of input with the `type` property in our `input` tag. The most common  types are:
  - `text` - this creates a text box
  - `select` - this creates a dropdown menu
  - `radio` - these inputs are radio buttons that can be toggled
  - `checkbox` - creates a checkbox
  - `textfield` - creates a more customizable text field
  - `submit` - creates a submit button. Clicking this button wraps up everything within the accompanying `form` tag and sends it off to the server at the route specified by `action` and `method`

###Properties of inputs
- `name`
  - The `name` of the form corresponds (generally) as the key for the data it contains as sent to the server. For example, if we have a form text input with the `name` of `president`, and the text entered is 'obama', the data will be parsed by the server as `{name: 'obama'}`. If the form is sending a GET request, the query string in the URL will be `name=obama`.
  - The `value` of the form is the value that the user intends to send to the server for a form input in which they don't dynamically enter the form value. Basically, users only declare the value of a form input with text inputs. Other inputs have a pre-assigned 'value' that is sent to the server.  
  
  
###Labels

- Inputs can have labels. We can use the `for` attribute in a label tag to tie the label to the id of an input. This is used to help accessibility and for DOM manipulation (it will have a better application later in the course).

###Further Reading

- A more in-depth forms guide can be found <a href="https://gist.github.com/h4w5/8848398">Here </a>. Please keep in mind that this guide contains plenty of things we haven't touched on yet in class.
