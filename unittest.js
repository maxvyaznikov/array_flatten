
var flatten = require('./index');

module.exports["Flattend function"] = {
    "Base1": function(test) {
        var res = flatten([1,2,3,4]);
        test.ok(JSON.stringify(res) === JSON.stringify([1,2,3,4]));
        test.done();
    },
    "Base2": function(test) {
        var res = flatten([1,2,[3,4]]);
        test.ok(JSON.stringify(res) === JSON.stringify([1,2,3,4]));
        test.done();
    },
    "Base3": function(test) {
        var res = flatten([1,2,[3,[4]]]);
        test.ok(JSON.stringify(res) === JSON.stringify([1,2,3,4]));
        test.done();
    },
    "Level1": function(test) {
        var res = flatten([1,2,[3,[4]]], 1);
        test.ok(JSON.stringify(res) === JSON.stringify([1,2,3,[4]]));
        test.done();
    },
    "Level2": function(test) {
        var res = flatten([1,2,[3,[4]]], 1);
        test.ok(JSON.stringify(res) === JSON.stringify([1,2,3,[4]]));
        test.done();
    },
    "Level3": function(test) {
        var res = flatten([1,[2,[3,[4]]]], 2);
        test.ok(JSON.stringify(res) === JSON.stringify([1,2,3,[4]]));
        test.done();
    },
    "Level4": function(test) {
        var res = flatten([1,[2,[3,[4]]]], 0);
        test.ok(JSON.stringify(res) === JSON.stringify([1,[2,[3,[4]]]]));
        test.done();
    },
    "Level5": function(test) {
        var res = flatten([1,[[2]],[3],[[4]]], 1);
        test.ok(JSON.stringify(res) === JSON.stringify([1,[2],3,[4]]));
        test.done();
    },
    "Level6": function(test) {
        var res = flatten([1,[[2],[3],[[4]]]], 0);
        test.ok(JSON.stringify(res) === JSON.stringify([1,[[2],[3],[[4]]]]));
        test.done();
    }
};
