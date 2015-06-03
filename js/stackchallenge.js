var linkedList = (function(){

  var head = null;
  var tail = null;

    return {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert
  };

  function _getHead(){
    console.log(head);
    return head;
  }

  function _getTail(){
    return tail;
  }

  function _add(data){
        var newNode = {
          value : data,
          next : null
        };

        if(head === null){
          head = newNode;
          tail = head;
          return head;
        }else{
          tail.next = newNode;
          tail = newNode;
          return head;
        }
      }

  function _get(num){
    var count = 0;
      var current  = head;
        while (current !== null && count <= num){
          if(count === num){
            return current;
          }else{
            current = current.next;
            count++;
          }
        }
      return false;
  }

  function _remove(num){
    var count = 0;
    var current  = head;
    var previous;
    var nextNode;

    if(num === 0 ){
          head = head.next;
          return head;
    }else{
      while (current !== null && count <= num){
        if(count < num){
          if(nextNode === null){
            return false;
          }
          previous = current; //this is what gives previous
          current = current.next;
          nextNode = current.next;// this is what give next
          count++;
        }else{
          if(current.next === null){
            previous.next = null;
            tail = previous;
            return false;
          }else{
            previous.next = nextNode;
            return previous.current;
          }
        }
      }
    return false;
    }
  }

  function _insert(value, index){
      var count = 0;
      var current  = head;
      var previous;
      var nextNode;
      var newNode = {
        value : value,
        next : null
      };

      if(index === 0 ){
        newNode.next = head;
        head = newNode;
        return head;
      }else{
        while (current !== null && count <= index){
          if(count === index){
            newNode.next = current;
            previous.next = newNode;
            return head;
          }else{
            previous = current; //this is what gives previous
            current = current.next;
              if(current !== null){
                nextNode = current.next;// this is what give next
              }else{
                _add(value);
              }
            count++;
          }
        }
      }
    return false;
    }

})();




document.getElementById('save').addEventListener("click", function(){

var x = linkedList.add(document.getElementById("input").value);

console.log(x);
document.getElementById("input").value = "";

});

var count= 0;


document.getElementById('dump').addEventListener("click", function(){
console.log('out of loop');


var node = linkedList.getHead();
while(node !== null){
  console.log('inside of loop');
  document.getElementById('output').innerHTML += (node.value + '<br />');
  node = node.next;

}


});
