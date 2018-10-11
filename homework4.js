//1. TriangleStar
const getSt = function(n1){
  let stars = "";
  while(n1 > 0){
    n1 = n1 - 1;
    stars = stars + '*';
  };
  return stars;
};
const getSp = function(n2){
  let space = "";
  while(n2 > 0){
    n2 = n2 - 1;
    space = space + " ";
  };
  return space;
};
const triangleStars = function(height){
  let line = "";
  let spacenum = height;
  while(height > 0){
    line = getSp(spacenum - height) + getSt(height * 2 - 1);
    height = height - 1;
    console.log(line);
  };
}
triangleStars(5);

//2. multiToSingle

const multiToSingle = function(arr){
	let newArr = [];
	let anotherOne = 0;
	
	while(anotherOne < arr.length){
    let anotheranotherOne = 0;
    while(anotheranotherOne < arr[anotherOne].length){
		newArr[newArr.length] = arr[anotherOne][anotheranotherOne];
    anotheranotherOne = anotheranotherOne + 1;
	};
  anotherOne = anotherOne + 1;
	};
  return newArr;
  };

console.log(multiToSingle([[4,5,6], [7,8,9]]));



//3. findMinMax

const findMinMax = function(arr, trfa){
  let index = 1;
  let minmax = arr[0];
  if(trfa){
    while(index < arr.length){
      if (minmax < arr[index]){
        minmax = arr[index];
      };
      index = index + 1;
    };
    return minmax;
  }
  else{
    while(index < arr.length){
      if(minmax > arr[index]){
        minmax = arr[index];
      };
      index = index + 1;
    }
    return minmax;
  };
};
console.log(findMinMax([2, -65, 34, 7], true));
console.log(findMinMax([2, -65, 34, 7], false));


//4. forEach
const forEach = function(array, miban){
  let index = 0;
  while (index < array.length){
    miban(array[index]);
    index = index + 1;
  };
};
forEach([5,4,3], function(num){
  console.log(num);
});


//5. sum
const sum = function(arr){
	let z = 0;
	let newVal = 0;
	while(arr.length > z){
		newVal = newVal + arr[z];
		z = z + 1;
	}
	return newVal;
};
console.log(sum([4, 3, 2]));

//6. reverse
const reverse = function(string){
	let newStr = "";
	let index = string.length -1;

	while(index >= 0){

	newStr = newStr + string[index];
  
		index = index - 1;
	}
	return newStr;
};

console.log(reverse("abcd"));

//7. checkboard

const firstFunction = function(val){
  let index = 0; 
  let line = "";
  while(index < val){
    line = line + "*";
    index = index + 1;
  }
  return line;
};
const checkboard = function(height){
  let againIndex = 0;
  while(againIndex < height){
  let raw = firstFunction(height)
  if(againIndex % 2 === 0){
    raw = " " + raw;
    console.log(raw);
  }
  else{ console.log(raw); }
  againIndex = againIndex + 1;
  };
};
console.log(checkboard(5));