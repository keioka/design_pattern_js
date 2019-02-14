# Factory Method Pattern


#### What is it?
#### When to use?
you can save a video position and then return to that position using the Memento pattern. (States are saved in the Caretaker participant.)

##### Example


Prototype pattarn allows to copy an object easily in order to create new object.

Copying would be preferred due to a lot of process to create an new object and you don't want to generate it from scratch.

|Class|Type|Description|
|---|---|---|
|Prototype|Interface|Interface that has clone method|
|Concreate Prototype|Class|Class that should implement clone method|
|Prototype Manager|Class|Handle prototype|
|Client|N/A|Asking prototype manager to copy of the prototype|