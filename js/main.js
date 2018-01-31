//listen for form s

document.getElementById('myForm').addEventListener('submit',saveBookmark);


function saveBookmark(e) {
	//console.log("it works");

	//get from value;

	var sitename = document.getElementById('siteName').value;
	console.log(sitename);

	var url = document.getElementById('siteUrl').value;
	console.log(url);

       document.getElementById('siteName').value='';
       document.getElementById('siteUrl').value='';

	  if(!sitename || !url )
	  {
        
           alert('Please fill in the form');
           return false;
	  }

    var bookmark = {

    	name:sitename,
    	url:url
    }

    console.log(bookmark);

    //local storage demo

    //console.log(localStorage.getItem("lastname"));

    //localStorage.removeItem('lastname');
    //console.log(localStorage.getItem("lastname"));

    if(localStorage.getItem('bookmarks') === null)
    {
          var bookmarks = [];
          bookmarks.push(bookmark);
          localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
          //fetchBookmarks();
    }else{

    	//get bookmarks

    	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    	bookmarks.push(bookmark);
    	localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
      

    }

 fetchBookmarks();
	e.preventDefault();
}


 function deletebookmark(url)
 {
 	console.log(url);

 	//get bookmarks
 	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

 	//loop through book marks for url

 	for(var i=0;i<bookmarks.length;i++)
 	{
 		if(bookmarks[i].url == url)
 		{
 			bookmarks.splice(i,1);
 		}
 	}
 	localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

 	fetchBookmarks();


 }

//fetch bookmarks

function fetchBookmarks(){

var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            //console.log(bookmarks);

            var bookmarksresults = document.getElementById('bookmarksResults');

            bookmarksresults.innerHTML ='';

            for(var i=0;i<bookmarks.length;i++)
            	  {

            	  	var name = bookmarks[i].name;
            	  	var url = bookmarks[i].url;


            	  	bookmarksresults.innerHTML+='<div class="well">' + '<h3>' + name + 

                         '<a class="btn btn-default" target="_blank" id="delete" href="'+url+'">Visit </a>'+
                         '<a onclick="deletebookmark(\''+url+'\')" class="btn btn-danger" id="delete" href="#">Delete </a>'
            	  	'</h3>' + '</div>';
            	  }

}