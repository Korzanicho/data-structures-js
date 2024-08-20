const LinkedList = require('./LinkedList');

const seasons = new LinkedList();

seasons.addToHead('test');
seasons.addToHead('test');
seasons.addToHead('summer');
seasons.addToHead('test');
seasons.addToHead('spring');
seasons.addToHead('test');

seasons.printList();

seasons.addToTail('fall');
seasons.addToHead('test');
seasons.addToHead('test');
seasons.addToTail('winter');
seasons.addToHead('test');
seasons.addToHead('test');

seasons.printList();

// seasons.removeHead();
seasons.removeData('test');

seasons.printList();