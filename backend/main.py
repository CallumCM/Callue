import callue

callue.routemap['example_variable'] = "This was defined outside of the module"

callue.setup(homepage='learn_programming/index.html')

@callue.route('/test')
def test():
  return 'test'

callue.run()