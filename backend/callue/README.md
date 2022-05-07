# Callue - A Preprocessor of Sorts
Callue is a preprocessor for Bottle.py, designed because I do not need a whole NGINX server for every tiny project I do, so this provides an exceedingly simple way to easily write an HTTP server.

## Get Started
```py
import callue

callue.setup(homepage='example_folder/index.html')

@callue.route('/test')
def test():
  return 'test'

callue.run()
```
In this example, we're setting the homepage to a file in a directory
named `example_folder` in the `frontend` folder (which you can also
customize with the `frontend=` argument of the `setup` function.
Then, we proceed to manually create a route to `/test`. Callue by default will serve files statically that are in the frontend folder.

## .routemap
This file exists in the frontend folder, and makes it easier to write custom routes
Syntax:
```
# This is a comment
/ ->
  renders /example_folder/example.html
  where placeholder is {'hello'}
  and placeholder_2 is {1+1};

/static_file ->
  serves /example_folder/static.html;
```
- Comments are written with `#`
- Serve static files at a route with `serves`
- Serve templates at a route with `renders`
- Define template parameters with `where [param1] is [value] and [param2] is [value2]` etc.
- Before calling `setup()`, if you add values to the `callue.routemap`, they will be accessible in `.routemap`. This is how you would communicate between your backend and `.routemap`
- Code encapsulated in `{...}` will be evaluated as Python