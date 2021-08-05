# Cat shelter web application

## In our application you can use:

- Authentication module
    - Login/Register
    - Profile page - you can see the name of cats you gave to the shelter

- Cats module
    - See all the cats on the home page
    - Give cat to the shelter
    - See cat details
    - Edit cat details
    - Delete cat


## API Endpoints:

User related

    Register    >>> POST /users/register
    Login       >>> POST /users/login
    Logout      >>> GET /users/logout

Cats related

    All cats       >>> GET    /cats
    Create cat     >>> POST   /cats
    Cat Details    >>> GET    /cats/:id
    Update cat     >>> PUT    /cats/:id
    Delete cat     >>> DELETE /cats/:id