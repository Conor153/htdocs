# Data Exercise 2

## Clone the Remote Repository

This will copy some program files to your ``htdocs`` folder.  

Go to [this link](https://github.com/barcaxi/csd2024) and download the repository ZIP file.  Copy the folder ``data`` into your XAMPP ``htdocs`` folder.

Check your ``htdocs`` folder.  You should have a new folder called ``data`` with some files in it.



## Part 1 - More Array Functions

1.	In your `data` folder create a new program file `myPushPop.html` and `myPushPop.js` that pushes three names - `Alice`, `Bob`, `Charlie` - onto the empty `names` array below:

	```
	var names = [];
	```
	
	Then print the array contents using a `for of`:

	Expected output:
	```
	Alice
	Bob
	Charlie
	```

	View [here](http://localhost/data/myPushPop.html) when done

1.	Modify `myPushPop.html` and `myPushPop.js` to remove `Charlie` and `Bob` using a `pop()` and print the array contents using a `for of`:

	Expected output:
	```
	Alice
	```

	View [here](http://localhost/data/myPushPop.html) when done

1.	View the Netflix JSON sorting program [here](http://localhost/data/netflixTitlesSort.html)

1.	Modify the Netflix JSON programs `netflixTitlesSort.html` and `netflixTitlesSort.js` so titles are sorted by running time in ascending order.

1.	Modify the Netflix JSON programs so titles are sorted by IMDB score in descending order.

1.	Lastly, modify the Netflix JSON programs so titles are sorted by title in ascending order.  The code [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_array_of_objects) might help you.

	![](images/sortByTitle.gif)

