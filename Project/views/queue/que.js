var list = document.getElementById('pushlist');
var list1 = document.getElementById('poplist');
var text = document.getElementById('text');
var push = document.getElementById('push');
var stack = document.getElementById('stack');
var length=document.getElementById('len');
var range=document.getElementById('ran');

list1.innerHTML = '';
class Queue extends Array {
	constructor(...elem) {
		super(...elem);
	}
	unshift_element(ele) {
		super.unshift(ele);
	}
	shift_element(s2) {
		if (this.length == 0) {
			document.getElementById("status").innerHTML =`Queue is Empty`;
		} else {
			let low=0;
            let high=this.length -1;
            while(low<=high)
            {
                let temp=s2[low];
                s2[low]=s2[high];
                s2[high]=temp;
                low++;
                high--;
            }
            var ele = list.childNodes[this.length-1];
			super.shift();
			list.removeChild(ele);
			return ele;
		}
	}
	display_elements(s2) {
		for (let i = 0; i < s2.length; i++) {
			var x = document.createElement('li');
			var t = document.createTextNode(s2[i]);
			x.appendChild(t);
			list.appendChild(x);
		}
	}
}
const s1 = new Queue();
s1.display_elements(s1);
function Push() {
	var info = text.value;
	if (info == '') {
		document.getElementById("status").innerHTML ='Please Enter Value!! Empty Values cannot be inserted into the queue';
		
	} else {
		s1.unshift_element(info);
		var y = document.createElement('li');
		var u = document.createTextNode(info);
		y.appendChild(u);
		list.appendChild(y);
		list.insertBefore(y, list.childNodes[0]);
        document.getElementById("status").innerHTML =`${info} is pushed into the queue<br>Queue Front Element: ${s1[s1.length-1]}<br>Queue Rear Element: ${s1[0]}`;
	}

}
function Pop() {
	var value = s1.shift_element(s1).textContent;
	var k = document.createElement('li');
	var l = document.createTextNode(value);
	k.appendChild(l);
	list1.appendChild(k);

	for (let i = 0; i < s1.length; i++) {
		console.log(s1[i]);
	}
	document.getElementById("status").innerHTML =`${value} is popped out from the queue <br>Queue Front Element: ${s1[s1.length-1]}<br>Queue Rear Element: ${s1[0]}`;
}


/*const s2 = new Stack();
s2.display_elements(s2);
function Push1()
{
	var info = text.value;
	if (info == '') {
		console.log('Empty Values cannot be inserted');
	} else {
		
	}
}
*/
function RandomQueue()
{ 
    for (let index = 0; index < length.value; index++) 
    {
        var number = random(range.value);

        s1.unshift_element(number);
		var y = document.createElement('li');
		var u = document.createTextNode(number);
		y.appendChild(u);
		list.appendChild(y);
		list.insertBefore(y, list.childNodes[0]);
    }
}

function random(range) 
{
    return Math.floor(Math.random() * range + 1);
}