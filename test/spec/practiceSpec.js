const isNode = new Function(`
  try {
    return this === global;
  } catch (e) {
    return false;
  }
`);

if (isNode()) {
  // test if file is running in a node process
  const fs = require('fs');
  const path = require('path');

  const filePath = path.resolve(__dirname, '../../'); // this should be the root dir
  fs.readdirSync(filePath) // eval all of the js files faking how a browser would execute
    .filter(path => {
      if (path) {
        return /\.js$/.test(path);
      } else {
        return false;
      }
    })
    .forEach(file => {
      global.eval(fs.readFileSync(`${filePath}/${file}`) + '');
    });
}

describe('arraysPractice', function() {
  describe('first', function() {
    it('should exist', function() {
      expect(first).toBeDefined();
    });
    it('should be a function', function() {
      expect(first).toEqual(jasmine.any(Function));
    });
    it('should return the first value of a passed array', function() {
      var arr = [1, 2, 3];
      expect(first(arr)).toBe(1);
      expect(first([])).not.toBeDefined();
    });
  });
  describe('last', function() {
    it('should exist', function() {
      expect(last).toBeDefined();
    });
    it('should be a function', function() {
      expect(last).toEqual(jasmine.any(Function));
    });
    it('should return the last value of a passed array', function() {
      var arr = [1, 2, 3];
      expect(last(arr)).toBe(3);
      expect(last([])).not.toBeDefined();
    });
  });
  describe('looper', function() {
    it('should exist', function() {
      expect(looper).toBeDefined();
    });
    it('should console log each item in the array', function() {
      var consoleLog = spyOn(console, 'log');
      var arr = [1, 2, 3];
      looper(arr);
      expect(consoleLog.calls.count()).toBe(arr.length);
    });
    it('should call the items in order from first to last', function() {
      var consoleLog = spyOn(console, 'log');
      var arr = [1, 2, 3];
      looper(arr);
      for (var i = 0; i < arr.length; i++) {
        expect(consoleLog.calls.argsFor(i)[0]).toBe(arr[i]);
      }
    });
  });
  describe('reversedLooper', function() {
    it('should exist', function() {
      expect(reversedLooper).toBeDefined();
    });
    it('should console log each item in the array', function() {
      var consoleLog = spyOn(console, 'log');
      var arr = [1, 2, 3];
      reversedLooper(arr);
      expect(consoleLog.calls.count()).toBe(arr.length);
    });
    it('should call the items in order from last to first', function() {
      var consoleLog = spyOn(console, 'log');
      var arr = [1, 2, 3];
      reversedLooper(arr);
      for (var i = 0; i < arr.length; i++) {
        expect(consoleLog.calls.argsFor(i)[0]).toBe(arr[arr.length - 1 - i]);
      }
    });
  });
  describe('evenFinder', function() {
    it('should exist', function() {
      expect(evenFinder).toBeDefined();
    });
    it('should be a function', function() {
      expect(evenFinder).toEqual(jasmine.any(Function));
    });
    it('should return an array', function() {
      expect(evenFinder([])).toEqual(jasmine.any(Array));
    });
    it('should return an array with only even numbers', function() {
      var arr = [1, 2, 3, 4, 5, 6];
      var evens = evenFinder(arr);
      expect(evens).toEqual([2, 4, 6]);
    });
  });
  describe('divider', function() {
    it('should exist', function() {
      expect(divider).toBeDefined();
    });
    it('should be a function', function() {
      expect(divider).toEqual(jasmine.any(Function));
    });
    it('should return an array of two arrays', function() {
      expect(divider([])).toEqual([jasmine.any(Array), jasmine.any(Array)]);
    });
    it('should have even numbers in the first array and odd numbers in the second array', function() {
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var divided = divider(arr);
      var expected = [[2, 4, 6, 8], [1, 3, 5, 7, 9]];
      expect(divided).toEqual(expected);
    });
  });
  describe('finder', function() {
    it('should exist', function() {
      expect(finder).toBeDefined();
    });
    it('should be a function', function() {
      expect(finder).toEqual(jasmine.any(Function));
    });
    it('should return a boolean', function() {
      expect(finder([])).toEqual(jasmine.any(Boolean));
    });
    it('should return true if the random number is found in the array', function() {
      var rand = spyOn(console, 'getRandomArbitrary').and.returnValue(3);
      var arr = [1, 2, 3];
      expect(finder(arr)).toBe(true);
    });
    it('should return false if the random number is not found in the array', function() {
      var rand = spyOn(console, 'getRandomArbitrary').and.returnValue(4);
      var arr = [1, 2, 3];
      expect(finder(arr)).toBe(false);
    });
  });

  describe('removeItem', function() {
    it('should exist', function() {
      expect(removeItem).toBeDefined();
    });
    it('should be a function', function() {
      expect(removeItem).toEqual(jasmine.any(Function));
    });
    it('should return an array', function() {
      expect(removeItem([])).toEqual(jasmine.any(Array));
    });
    it('should check for that the groceryList argument is truthy', function() {
      expect(removeItem()).toEqual(jasmine.any(Array));
    });
    it('if the item argument is falsy it return an empty array', function() {
      expect(removeItem([1]).length).toEqual(0);
    });
    it('should remove an item from a groceryList array (if it is in the array)', function() {
      var groceryList = ['chips', 'soda', 'celery', 'pizza'];
      var item = 'chips';
      var expected = ['soda', 'celery', 'pizza'];
      var itemExists = removeItem(groceryList, item);
      expect(itemExists).toEqual(expected);
    });
    it('should return the original list if the item is not in the list', function() {
      var groceryList = ['chips', 'soda', 'celery', 'pizza'];
      var item = 'mustard';
      var expected = groceryList;
      var itemDoesntExist = removeItem(groceryList, item);
      expect(itemDoesntExist).toEqual(expected);
    });
  });
  describe('addItem', function() {
    it('should exist', function() {
      expect(addItem).toBeDefined();
    });
    it('should be a function', function() {
      expect(addItem).toEqual(jasmine.any(Function));
    });
    it('should return an array', function() {
      expect(addItem([])).toEqual(jasmine.any(Array));
    });
    it('should add an item to an array', function() {
      var groceryList = [];
      var item = 'pizza';
      var result = addItem(groceryList, item);
      expect(result).toEqual(['pizza']);
    });
    it('should check for that the groceryList argument is truthy', function() {
      expect(addItem()).toEqual(jasmine.any(Array));
    });
    it('if the item argument is falsy it return an empty array', function() {
      expect(addItem([1])).toEqual([]);
    });
  });
  describe('maker', function() {
    it('should exist', function() {
      expect(maker).toBeDefined();
    });
    it('should be a function', function() {
      expect(maker).toEqual(jasmine.any(Function));
    });
    it('should return an array', function() {
      expect(maker()).toEqual(jasmine.any(Array));
    });
    it('should contain the numbers from 1 to 215', function() {
      var expected = (function() {
        var arr = [];
        for (var i = 1; i < 216; i++) {
          arr.push(i);
        }
        return arr;
      })();
      expect(maker()).toEqual(expected);
    });
  });
  describe('addTen', function() {
    it('should exist', function() {
      expect(addTen).toBeDefined();
    });
    it('should be a function', function() {
      expect(addTen).toEqual(jasmine.any(Function));
    });
    it('should return an array', function() {
      expect(addTen([])).toEqual(jasmine.any(Array));
    });
    it('should add ten to each item in the array', function() {
      //could be passed numbers as numbers or strings
      var arr = [1, '2', 3];
      var expected = [11, 12, 13];
      expect(addTen(arr)).toEqual(expected);
    });
  });
  describe('longer', function() {
    it('should exist', function() {
      expect(longer).toBeDefined();
    });
    it('should be a function', function() {
      expect(longer).toEqual(jasmine.any(Function));
    });
    it('should return an array', function() {
      expect(longer([], [])).toEqual(jasmine.any(Array));
    });
    it('should return the longer of two arrays', function() {
      var short = [1, 2, 3];
      var long = [4, 5, 6, 7];
      expect(longer(short, long)).toEqual(long);
    });
  });
  describe('both', function() {
    it('should exist', function() {
      expect(both).toBeDefined();
    });
    it('should be a function', function() {
      expect(both).toEqual(jasmine.any(Function));
    });
    it('should return an array', function() {
      expect(both([], [])).toEqual(jasmine.any(Array));
    });
    it('should return an array of numbers that are in both passed arrays', function() {
      var firstArr = [1, 2, 3, 4];
      var secondArr = [2, 5, 6, 4];
      var expected = [2, 4];
      expect(both(firstArr, secondArr)).toEqual(expected);
    });
  });
  describe('employees', function() {
    it('should exist and contain items', function() {
      expect(employees).toBeDefined();
      expect(employees.length).not.toBe(0);
    });
    it('(when completed) should not have Jim in it', function() {
      var hasJim = false;
      for (var i = 0; i < employees.length; i++) {
        if (employees[i].name === 'Jim') {
          hasJim = true;
        }
      }
      expect(hasJim).toBe(false);
    });
    it('(when completed) should have a length of 3', function() {
      expect(employees.length).toBe(3);
    });
  });
  describe('users', function() {
    it('should exist and contain items', function() {
      expect(users).toBeDefined();
      expect(users.length).not.toBe(0);
    });
    it('(when complete) should not contain Mark', function() {
      var hasMark = false;
      for (var i = 0; i < users.length; i++) {
        if (users[i].name === 'Mark Mouser') {
          hasMark = true;
        }
      }
      expect(hasMark).toBe(false);
    });
  });
});
