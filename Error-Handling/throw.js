console.clear();

//throws an error for no reason because its called
throw 'error5';

throw true;

throw { toString: function () { return false; } }

