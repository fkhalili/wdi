# Testing with RSPEC

## Part One - What is TDD?

Test Driven Development (TDD) is the practie of writing tests which
match what you, the developer, expects your code to do, and then writing
the code that passes those tests. In other words, if I want to write an
application that solves a problem, I write the solutions out piece by
piece as tests, and then write an application which can pass all of
these tests.

A simple example would be a calculator application. Let's say my
calculator app will have a method called `add` which takes 2 numbers as
arguments and return their sum. I would first want to write a test which
expects `add(2, 2)` to return with `4`.

I can then write out my add method:

```rb
def add(num1, num2)
  return num1 + num2
end
```

## Part Two - What makes up a full test suite?

#### White Box Testing

White Box Testing is the process of testing all of the components of an
application that the user will never see. Test engineers aim to cover
100% or as close to 100% of the codebase as possible. Although 100% is
always the goal, most test suites never get far past 90% coverage. White
Box Testing does **NOT** test for user functionality. Once every
statement in the codebase gets tested, the test engineer has achieved
100% test coverage.

#### Black Box Testing

Black Box Testing, as the names imply, is the opposite of White Box
Testing. These tests have no knowledge of the intricacies of the
codebase. The tests are only written with expectations that the code
will do something, not that each piece of the application fires off
properly.

***Think of a clock***

If we were to write tests for a clock, the White Box Tests would check
to see that each individual cog, spring, etc. is working properly. The
Black Box Tests would check to see if the clock is showing the correct
time, if the clock's alarm goes off at the time scheduled, etc.

#### Gray Box Testing

This is a hybrid of White Box and Black Box testing. The test engineer
usually has some access to the code being tested and the documentation,
as well as the ability to write a full suite of Black Box tests.

#### Putting it all together

* Unit Tests - Tests that are run on individual pieces of a module. This
  is the smallest test and is run on anything as large as an entire
  class, to as small as an individual method in a class. (usually white box)
* Integration Tests - This is the next step after Unit testing.
  Integration tests take the already unit-tested modules, combine them
  into a larger group, and apply tests to ensure that these modules
  are working as expected together. The scale of these tests is limited to
  just the modules needed to accomplish a function. (black box)
* End-to-End Tests/System Tests - These are the largest scale tests. System
  tests take
  all of the aggregated modules from integration tests as input. These
  tests ensure that the environment an application is running on is
  playing nicely with the application itself (ex. a backbone app on
  Internet Explorer). The way these tests are applied in web development is
  usually done with a testing framework similar to Mocha. These frameworks
  simulate a visual environment and run actions specified by the test
  engineer. (black box)
* Regression Tests - These tests ensure that as the codebase expands,
  new bugs don't show up in old code (white or black box)

## Part Three - Unit testing with RSPEC

Let's actually write some simple tests for our calculator app. First,
we'll need to install the most popular testing framework for Ruby.

```
$ gem install rspec
$ rspec --init
```

Running the init function creates some simple helper and config files
which will make the testing process quicker and easier for us.

Let's also create a models directory and create a calculator.rb file. Go
into that file and create an empty class called `Calculator`

Now, let's create the first few tests for our calculator. In specs,
touch a file named calculator_spec.rb and add the following

```rb
require_relative "../models/calculator.rb"

describe Calculator do

  describe "#add" do
    it "should add 2 numbers"
  end

end
```

Let's run our test by typing `rspec` into the terminal. We should see
that we have 1 pending test. We can queue tests without running them by
writing the `it` test without a `do` block. Let's actually write the
test now.

```rb
it "should add 2 numbers" do
  expect(subject.add(2, 2)).to eq 4
end
```

Here, we are using `subject`. When we have a class name in a describe
block, `subject` is just a new instantiation of that class.

This test will fail as there is no .add method. Let's write that method
now.

```rb
class Calculator

  def add(num1, num2)
    return num1 + num2
  end

end
```

And now our test passes. But what if we expect 2 + 2 to equal 5. Try it!
RSPEC tells us that 5 is what was expected, but we got 4 instead which
resulted in a failure.

***Exercise - 10 mins***

**Prompt:** Write out tests for subtract, multiply, and divide, *then*
add those methods to the calculator class

```rb
describe "#subtract" do
  it "should subtract 2 numbers" do
    expect(subject.subtract(4, 2)).to eq 2
  end
end

describe "#multiply" do
  it "should multiply 2 numbers" do
    expect(subject.multiply(2, 5)).to eq 10
  end
end

describe "#divide" do
  it "should divide 2 numbers" do
    expect(subject.divide(10, 5)).to eq 2
  end
end
```

Nice! Now our calculator app has a set of tests for each possible method
we can call. We should try to protect for some edge cases now. What if
someone tries to divide by 0? Let's write a test for what our calculator
should respond with, then, let's add the logic to our .divide method.

spec:
```rb
it "should protect from 0 as a divisor" do
  expect(subject.divide(10, 0)).to eq "You can't divide by 0!"
end
```

app:
```rb
def divide(num1, num2)
  return "You can't divide by 0!" if num2 == 0
  return num1 / num2
end
```

## Part Four - Testing with Rails
Lets create a new Rails app
`rails new blog`

Add the following gem to our Gemfile (inside of `group :development, :test`)

```rb
gem 'rspec-rails'
```

Let's also add a new gem

```rb
gem 'guard-rspec'
```

`bundle install`

Run `bundle install` to install the `rspec-rails` and `guard-rspec` gems.

Now we can run `rails generate rspec:install` to set up rspec in our project.

This creates a `.rspec` file and a `spec_helper` file (which specifies a configuration for our specs). It also creates a `spec` directory, where our specs will go.  It will also create some other files, but we don't need to concern ourselves with that right now.

In that `.rspec` file, add `--format=documentation` after `--color`.  This will give us nice "documentation" formatting when we run our tests.

Inside the `spec` directory, make a directory called `models`.  This is where our model specs will go.

Inside here, make a file called `post_spec.rb`.

Let's add some pending specs to our post spec file.
Note: Although these tests are not being run before we write our code,
planning out your tests is still considered TDD.

```rb
require "rails_helper"

describe Post do
  it "should be invalid without an author"
  it "should be invalid with blank content"
  it "should not have content longer than 500 characters"
  it "should not allow duplicate titles to be persisted"
end
```

Let's start up Guard
```
$ guard init rspec
$ guard
```

This will run our tests whenever we have a change to our application.

Time to create a Post model

```
rails generate model Post title:text author:text content:text
```
Note: Rails will try to create a `post_spec` file. We've already created that, so we can just enter `n` for no at the prompt.

Now we need to run `rake db:migrate` to generate the table.

Finally when we save our document we see 4 pending (yellow) tests.

Let's implement our first test:

```rb
it "should be invalid without an author" do
  post = Post.new
  expect(post).to be_invalid
end
```

Our test will fail because we haven't added any validations (so our post is valid).

Let's fix that.

In our model:
```rb
class Post < ActiveRecord::Base
  validates :author, presence: true
end
```

Guard will run our tests again, this passes!

We can also be more specific in our test:

```rb
it 'should be invalid without an author' do
  post = Post.new
  expect(post).to be_invalid
  expect(post.errors[:author]).to eq ['can't be blank']
end
```

Here we actually specify the error we want to receive.

Now let's move onto the next spec.

```rb
it 'should be invalid with blank content' do
  post = Post.new
  expect(post).to be_invalid
end
```

Yay! It passes!
But wait a second, we didn't do anything!  It's only passing because there is no author.  Let's add an author and see if it still passes.

```rb
it 'should be invalid with blank content' do
  post = Post.new(author: 'Sam')
  expect(post).to be_invalid
end
```

Now it fails again.  Let's go back to the implementation and fix this.

```rb
validates :content, presence: true
```

That's all you have to do to make this test pass, but it wouldn't hurt to be a little more explicit:

```rb
it 'should be invalid with blank content' do
  post = Post.new(author: 'Paul')
  expect(post).to be_invalid
  expect(post.errors[:content]).to eq ["can't be blank"]
end
```

On to the next test!

```rb
it 'should not have content longer than 500 characters' do
  post = Post.new(author: 'Paul', content: 'a' * 501)
  expect(post).to be_invalid
  expect(post.errors[:content]).to eq ['is too long (maximum is 500 characters)']
end
```

```rb
validates :content, length: {maximum: 500}
```

And the last test:

```rb
it 'should not allow duplicate titles to be persisted' do
  post1 = Post.create(author: 'Paul', title: 'my_title', content: 'something')
  expect(Post.count).to eq 1
  post2 = Post.new(author: 'Paul', title: 'my_title', content: 'another thing')
  expect(post2).to be_invalid
  expect(post2.errors[:title]).to eq ['has already been taken']
end
```

First we create a `Post`.  We check the database using `Post.count` to verify that it was persisted.  Note that this uses your "test database" that Rails creates for you.  You can do whatever you want in here because it won't affect your development or production environments.

Then we initialize a new `Post`.  We give it the same title and we expect it to be invalid (which is why we didn't save it).

This test fails, so let's make it pass.

```rb
validates :title, uniqueness: true
```

Save your tests and watch them run!
