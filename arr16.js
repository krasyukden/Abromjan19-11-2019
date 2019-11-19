var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var n = 10;
var k = 1;
var m = 1;
 mark: for(var i = 0; i < n; i++){
	console.log(a[i]);
	k++;
		if(k % 2 == 1){
			for(var j = n; j >= 1; j--){
			console.log(a[j]);// показ только 10
			m++;
			//console.log(m);
				if(m % 2 == 0){
				//break; тоже что и continue с меткой
				continue mark;
				}
			}
	}
	
}


/*Array16. Дан массив A размера N. Вывести его элементы в следующем порядке: A1, AN, A2, AN−1, A3, AN−2, ... */