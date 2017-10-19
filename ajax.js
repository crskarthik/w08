(function ($) {
    
      $('#btnLoadText').click(function () { $("#showResult").load("show.txt"); });
      $('#btnAjax').click(function () { callRestAPI() });
    
      // Perform an asynchronous HTTP (Ajax) API request.
      function callRestAPI() {
        // var root = 'https://jsonplaceholder.typicode.com';
        var text = document.getElementById('text').value;
        var root = ' http://md5.jsontest.com';
        $.ajax({
          url: root+'/?text='+text,
          method: 'GET'
        }).then(function (response) {
          console.log(response);
          var md5=response.md5;
          var oText =  response.original;
          $('#showResult').html("<h4>Original Text: "+oText+"<br>MD5 ecrypted text:  "+md5+"</h4>");
        });
      }
    })($);