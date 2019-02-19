/**
╔╦╗┌─┐┌┐ ┬┬  ┌─┐  ╔╦╗┌─┐┬  ┬┌─┐┬  ┌─┐┌─┐┌┬┐┌─┐┌┐┌┌┬┐  ╦═╗┌─┐┌─┐┌─┐┌┬┐
║║║│ │├┴┐││  ├┤    ║║├┤ └┐┌┘├┤ │  │ │├─┘│││├┤ │││ │   ╠╦╝├┤ ├─┤│   │ 
╩ ╩└─┘└─┘┴┴─┘└─┘  ═╩╝└─┘ └┘ └─┘┴─┘└─┘┴  ┴ ┴└─┘┘└┘ ┴   ╩╚═└─┘┴ ┴└─┘ ┴ 
╔═╗┬─┐┌─┐ ┬┌─┐┌─┐┌┬┐  ╔═╗  ╔╗ ┬ ┬┌─┐  ╦ ╦┬ ┬┌┐┌┌┬┐                   
╠═╝├┬┘│ │ │├┤ │   │   ║ ║  ╠╩╗│ ││ ┬  ╠═╣│ ││││ │                    
╩  ┴└─└─┘└┘└─┘└─┘ ┴   ╚═╝  ╚═╝└─┘└─┘  ╩ ╩└─┘┘└┘ ┴    
                
* The program below contains 7 bugs. Follow the instructions in the 
 * setup your environment. Once you have completed setting up your
 * environment. Fix all 7 bugs in the program below. 
 * 
 * You will need to remember the line numbers that you changed
 * Because this is what you will submit. 
 * 
 * This program is not design to be optimal it is designed to 
 * demonstrate the concepts from lecture
 * 
 * Remember to install the request module
 * npm install request@2.x.x
 * 
 */

 var APP = {
     version: '0.0.1',
     author:'Dsg2dm',
     url: 'http://www.cs.virginia.edu/~dgg6b/encoded.html'
 }


 class Networking{

    /**
     * 
     * @param {*} url specifys the url to retreive the object
     * returns the object that was fetched. 
     * 
     */
    constructor(){
        APP.Networking = this 
    }
 }


 class Cloner extends Networking{
    /**
     * 
     * @param {*} encodedObject 
     * convernts the based 64 object to 
     */
    constructor(responseText){
        //Hint the line below is missing something :) 
        super() //add
        this.obj = JSON.parse(Buffer.from(responseText, 'base64').toString())//fixed removed this from this.responseText
    }


    deepClone(obj){
        let clone = {}
        let prop = null
        for(prop in obj){
            if(typeof obj[prop] == 'object' ){ 
                clone[prop] = this.deepClone(obj[prop]) //changed
            }else{
             
                clone[prop] = obj[prop] //changed to prop
            }
        }
        return clone
    }


    sameNames(){
        return this.obj.name === this.obj.friends.name //added another =
    }
 }


    const request = require('request')
    console.log(APP.url)
    request(APP.url, { json: true }, (err, res, body) => {
    if (err) { return console.log(err) }
        var cloningClass = new Cloner(body) //fix
        var cloned = cloningClass.deepClone(cloningClass) //fix added var and parameter
        console.log(cloningClass.sameNames())
        console.log(JSON.stringify(cloned)) 
    
    });

/** Your programs output should look like this. 
 * 
 * false 
 * {
    grit: '9.0', 
    name: '', 
    friends: {
        name: 0, 
        age: '22', 
    },
    family: null,
}
 * 
 */

