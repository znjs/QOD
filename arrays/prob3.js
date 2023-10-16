/**
 *  @company : facebook
 *  @inputSample : [-23,40,55,1,27,2,37,-89,Infinity,Infinity,Infinity,Infinity,....., Infinity]
 *  @outputSample : 7
 *  @question : Find the first occurrence of Infinity in the infinite length unsorted number array
 *  @solution : segment the array into smaller array and find the first occurrence of Infinity in each segment, taking exponential spacing as segment size
 * first segment size = 2^0 = 1 -> index 0
 * second segment size = 2^1 = 2 -> index 1-2
 * third segment size = 2^2 = 4 -> index 3-6
 * fourth segment size = 2^3 = 8 -> index 7-14
 * and so on
 */
