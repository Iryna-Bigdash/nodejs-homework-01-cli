<h1>Simple Command-Line Interface<h1>
<hr>

**CLI (Command-Line Interface)** is a command-line interface that allows interacting with a program by entering commands and receiving responses. Users can input commands from the keyboard or use scripts to interact with the program, perform operations, and manage its functions.

CLI enables users to execute various tasks by invoking commands and passing parameters through the command line.
<hr>

This project describes the creation of a simple CLI for working with a contact list.
The description of the functionality of each method is documented and can be found in the contacts.js file.
<hr>

The result of each command is captured in a screenshot available through the corresponding link:

 1. Get all contact list (command `node index.js --action="list"`):
  ![watch screenshot](https://monosnap.com/file/DyXKGn0b1AjVYDWNYJ2QfSgWIBanrH)

 2. Get contact by ID (command `node index.js --action="get" --id idCode`).If idCode is wrong we  will get error massage;
 ![watch screenshot](https://monosnap.com/file/tfQW1lKR5vHxfiwirqh2PWA7RpZgS8)

 3. Add new contact ('command `node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22`):
 ![watch screenshot](https://monosnap.com/file/B98rfIgSj4RNpBDBUpG3ZsVK8iwgH8)

 4. Remove contact (command `node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH`).If idcode is wrond we will see 'null'.
 ![watch screenshot](https://monosnap.com/file/GwuEOYTUXXDsaNcVdfhgEg0Uwycfo8)
<hr>

The entire code is available in the repository  at the given address:
<https://github.com/Iryna-Bigdash/nodejs-homework-01-cli.git>



 

