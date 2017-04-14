# Sort
通过JS实现各种排序方法（更新中）
======
本文档将所有排序方法统一写入Sort对象中，减少全局变量。

一.快速排列。
----
1. 首先判断待排序的数组长度，当其长度小于等于1时直接返回，同时作为递归的结束条件。
	
2. 选取一个基准（pivot），将其作为参考，可将任一数字选为基准值。
	
3. 然后声明两个数组，left和right，遍历整个数组，将小于等于基准数的值放入left，大于基准数的值放入right。在遍历过程中，需要注意的是，**当取出某一元素时，要将其从原数组中删除**，再放入新的left或者right数组，以能够达到递归结束的条件

4. 最终返回left和right数组，并将其进行再排序，完成递归。
