
// Linked List
function taskLinkedList() {


    /** 
     * declarations
     **/
    var length = 0;
    var head = null;
    var count = 0;


    /** 
     * Node
     **/
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };


    /**
     * Node head
     **/
    this.head = function () {
        return head;
    };


    /**
     * Node length
     **/
    this.size = function () {
        return length;
    };


    /**
     * Node - empty (yes/no) ?
     **/
    this.isEmpty = function () {
        return length === 0;
    };


    /**
     * Node - add
     **/

    this.add = function (element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            // ! // while 'currentNode' != null
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    };


    /**
     * Node - element At
     **/
    this.elementAt = function (index) {
        var currentNode = head;
        var count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next
        }
        return currentNode.element;
    };


    /**
     * count all element in LinkedList (taskLinkedList)
     **/
    this.countLinks = function () {

        var currentNode = head;
        var tc = 1;

        if (head === null) {
            tc = (-1);
        }
        else {
            while (currentNode.next) {
                currentNode = currentNode.next;
                tc++;
            }
        }
        count = tc;

        return tc;
    }


     /**
     * printLinkedList - print all element in LinkedList (taskLinkedList)
     **/
    this.printLinkedList = function () {

        var currentNode = head;
        var tc = 1;
        var index = 0;

        if (head === null) {
            tc = (-1);
        }
        else {

            console.log(`print all linked list element `);
            while (currentNode.next !== null) {
                console.log(`_[ ${index} ]_ ===> ${currentNode.element}`);
                currentNode = currentNode.next;
                index++;
            }    
            console.log(`_[ ${index} ]_ ===> ${currentNode.element}`); //print the last element.

        }
        return tc;
    }


     /**
     * printLinkedListOBO - print all element in LinkedList One By One (taskLinkedList)
     **/
    this.printLinkedListOBO = function () {

            console.log(`print all linked list element One By One `);
            var index = 0;

            for (index = 0; index < count; index++) {
                console.log(`[ ${index} ] ===> ${this.elementAt(index)}`)
            }

        return index;
    }


    /**
     * printResult
     * @param {*} tc  --> output variable.
     **/
    this.printResult = function (tc) {
        console.log(`total nodes in linkedList:: <[${tc}]>`);

    }


    /**
     * average - sum / count = average
     **/
    this.average = function() {

        var averageValue = 0;
        let sum = 0;

        currentNode = head;

        while (currentNode.next !== null) {
            console.log(sum);
            sum += currentNode.element ;
            currentNode = currentNode.next;
        }
        sum += currentNode.element ;

        averageValue = sum / count;
        console.log(`${sum} / ${count} ===> ${averageValue}`);

        return averageValue;
    }


    /**
     * function
     * create a random number generator function
     **/



    /**
     * 
     **/
    this.insertValueIntoLinkedList = function(numbers) {
        
        var currentNode = head;
        var sum = 0;
        var numberOne = 0;
        var index = 0;

        console.log(`numbers === \n ${numbers}  \n number = ${number} `);

        for(index=0; index < numbers.length; index++) {

            console.warn(numbers[index]);
        }
    } //

    
//-----------------------------------------------------------//
//   main() 
//-----------------------------------------------------------//
    this.main = function(numbers, number) {

        var index = 0;
        var prev = 0;
        for (prev = 0 , index=0; index < numbers.length; index++) {

            // write first array
            if (index === 0) {
                this.add(numbers[index])
            }
            else {
               prev = index -1;
               if( ((numbers[index] + numbers[prev]) / 2 === number )  )
               {
                   this.add(number);
                //    console.log(`number is equal add 10 between this value = ${number} `);
               }
               this.add(numbers[index]);
            }

            // console.log(` prev ==> ${numbers[prev]}  index ==> ${numbers[index]} `);
        }
        
        // print all linked list array.
        this.printLinkedList();

    // step #1: insert value to linked list.
    // step #2: find value within 2 numbers


    } /// main ///



//-----------------------------------------------------------//
//   Temp Code  //
//-----------------------------------------------------------//        

    // add numbers[] to linkedList
    // print source array
    // print total record
    // sort the array

    // if (currentNode === null) {
    //     return -1;
    // }
    // else {
    //     while (currentNode !== null) {
    //         numberOne = currentNode.element;        
    //         sum = sum + numberOne;
    //         // sum = sum + (currentNode.element + currentNode.next.element);
    //         // console.log(" *** " + currentNode.element + " **** " + (numberOne + numberOne) );
    //         currentNode = currentNode.next;
    //     }
        
    //     console.log(`sum:: ${sum}`);
    // }

//-----------------------------------------------------------//
//-----------------------------------------------------------//        





//// taskLinkedList ////
}

//-----------------------------------------------------------//
//   variables
//-----------------------------------------------------------//    
var number = 5;
var numbers = [20, -10, 30, -10];

var task = new taskLinkedList();
task.main(numbers, number);


// console.log(`number == ${number}`);
// console.table({numbers});
//task.insertValueIntoLinkedList(numbers, number);

