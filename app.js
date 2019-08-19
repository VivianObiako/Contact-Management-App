// to add contacts
let contacts = [];


        const add = () => {
            const name = document.querySelector("#name").value;
            const num = document.querySelector("#num").value;
            let addContact = {
                newName: name,
                newNum: num
            };
            
            contacts.push(addContact);

            updateContacts();  
            
        };
        // updating cotact list
        const updateContacts = () => {
            let list = "";
            for ( let i = 0; i < contacts.length; i++) {
                list += "<p><br/><br/>Name: " + contacts[i].newName + "<br/>" + "Number: " + contacts[i].newNum + "</p>"
                + "<button onclick='del("+ i +")' class= 'editButton'>Delete</button>";
            }

            document.querySelector("#contacts").innerHTML = list;
        };
        //deleting contact 
        const del = (i) => {
            contacts.splice(i, 1);
            updateContacts();
        };

        