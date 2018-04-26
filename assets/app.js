var customers = [
    {
      firstName: "Johnny",
      lastName: "Gorilla",
      email: "stillStanding@gorilla.net"
    },
    {
      firstName: "Gunther",
      lastName: "Da Pig",
      email: "dancingKing@gmail.com"
    },
    {
      firstName: "Ash",
      lastName: "Rocker",
      email: "drama@sing.com"
    }
  ];
  
  
  function drawTable(arr) {
    //var arr = customers
    var template = '<tr><th>First Name</th><th>Last Name</th><th>Email</th></tr>'
    for (var i = 0; i < arr.length; i++) {
      var cust = arr[i];
      template += `
      <tr>
      <td>${cust.firstName}</td>
      <td>${cust.lastName}</td>
      <td>${cust.email}</td>
      </tr>
      `
    }
    document.getElementById("customers").innerHTML = template;
  }
  
  function newCustomer (){
      event.preventDefault();
  }
  
  
  
  drawTable(customers);