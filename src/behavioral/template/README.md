# Template method Pattern

Template method avoids you to write similar process among classes. It makes your code DRY and extendable.

Suppose you would like to get user info from multiple Oauth service such as Facebook, Twitter, and so on, you will write similar process on each service.

1. Send request to the Oauth server
2. Clean up response data

We don't have to write these operation multiple times but we make a template of same process on super class and implement different operation on sub classes.

- Subclass method will be invoked from super class
- Define a new abstract base class to host the "don't call us, we'll call you" framework.
- Each of the existing classes declares an "is-a" relationship to the new abstract base class.


#### What is it?
#### When to use?
you can save a video position and then return to that position using the Memento pattern. (States are saved in the Caretaker participant.)

##### Example

https://sourcemaking.com/design_patterns/template_method

|Class|Type|Description|
|---|---|---|
|Abstract Class|Class|Abstract class that has clone method|
|Concreate Class|Class|Class that should implement clone method|
