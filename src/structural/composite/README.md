# Composite Pattern

A common usage is the one used as a motivating example in the book, a display system of graphic windows which can contain other windows and graphic elements such as images, text. The composite can be composed at run-time, and the client code can manipulate all the elements without concern for which type it is for common operations such as drawing.


Adapter pattarn allows to copy an object easily in order to create new object.

Copying would be preferred due to a lot of process to create an new object and you don't want to generate it from scratch.


#### What is it?
#### When to use?

##### Example

|Class|Type|Description|
|---|---|---|
|Adapter|Interface|Interface that has clone method|
|Concreate Prototype|Class|Class that should implement clone method|
|Prototype Manager|Class|Handle prototype|
|Client|N/A|Asking prototype manager to copy of the prototype|