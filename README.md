array_flatten
=============

Converts all sub-arrays into one level array

  `array_flatten([1,[2,3]]) -> [1,2,3]`

If you specified not necessary param `level`, then function will be limited. For example:

  `array_flatten([1,[2,[3,[4]]]], 2)     -> [1,2,3,[4]]`
  
  `array_flatten([1,[[2]],[3],[[4]]], 1) -> [1,[2],3,[4]]`
  
  `array_flatten([1,[[2],[3],[[4]]]], 0) -> [1,[[2],[3],[[4]]]]`
