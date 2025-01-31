FindPairThatSumsUpToK---------------------------
Given an array of integers arr and an integer k, 
create a boolean function that checks if there exist 
two elements in arr such that we get k when we add them together.
Example 1:
Input: arr = [4, 5, 1, -3, 6], k = 11
Output: true
Explanation: 5 + 6 is equal to 11
Example 2:
Input: arr = [4, 5, 1, -3, 6], k = -2
Output: true
Explanation: 1 + (-3) is equal to -2
Example 3:
Input: arr = [4, 5, 1, -3, 6], k = 8
Output: false
Explanation: there is no pair that sums up to 8
FirstRepeatingCharacter-----------------------------
Given a string str, create a function that returns the first repeating character.
If such character doesn't exist, return the null character '\0'.
Example 1:
Input: str = "inside code"
Output: 'i'
Example 2:
Input: str = "programming"
Output: 'r'
Example 3:
Input: str = "abcd"
Output: '\0'
Example 4:
Input: str = "abba"
Output: 'b'
RemoveDupes------------------------------------------
Given an array of integers arr, create a function that returns an array containing the values of arr without duplicates (the order doesn't matter).
Example 1:
Input: arr = [4, 2, 5, 3, 3, 1, 2, 4, 1, 5, 5, 5, 3, 1]
Output: [4, 2, 5, 3, 1]
Example 2:
Input: arr = [1, 1, 1, 1, 1, 1, 1, 1]
Output: [1]
Example 3:
Input: arr = [4, 4, 2, 3, 2, 2, 4, 3]
Output: [4, 2, 3]
FindTheDupes------------------------------------------
Given an array of integers arr that contains n+1 elements between 1 and n inclusive, create a function that returns the duplicate element (the element that appears more than once). Assume that:
- There is only one duplicate number
- The duplicate number can be repeated more than once
Example 1:
Input: arr = [4, 2, 1, 3, 1]
Output: 1
Example 2:
Input: arr = [1, 4, 2, 2, 5, 2]
Output: 2
DFS----------------------------------------------------
Given a binary tree of integers root, create 3 functions to print the tree nodes in preorder, inorder, and postorder traversal.
Preorder: print the root value, then print the left subtree, then print the right subtree.
Inorder: print the left subtree, then print the root value, then print the right subtree.
Postorder: print the left subtree, then print the right subtree, then print the root value.
Example 1:
Input: root = [1, 2, 3, 4, 5, 6, 7]
Output:
Preorder: 1 2 4 5 3 6 7
Inorder: 4 2 5 1 6 3 7
Postorder: 4 5 2 6 7 3 1
Example 2:
Input: root = [6, 8, 13, 2, 1, 5, null, 7]
Output:
Preorder: 6 8 2 7 1 13 5
Inorder: 7 2 8 1 6 5 13
Postorder: 7 2 1 8 5 13 6
MaxSubArray--------------------------------------------
Given a non-empty array of integers arr, create a function that returns the sum of the subarray that has the greatest sum.
We don't consider the empty array [] as a subarray.
Example 1:
Input: arr = [2, 3, -6, 4, 2, -8, 3]
Output: 6
Explanation: the maximum subarray is [4, 2], its sum is 6
Example 2:
Input: arr = [2, 3, -1, 4, -10, 2, 5]
Output: 8
Explanation: the maximum subarray is [2, 3, -1, 4], its sum is 8
Example 3:
Input: arr = [-3, -1, -2]
Output: -1
Explanation: the maximum subarray is [-1], its sum is -1
ReverseBinaryTree---------------------------------------
Given a binary tree of integers root, create a function that reverses it left to right in-place.
Example 1:
Input: root = [1, 2, 3, 4, 5, 6, 7]
Output: [1, 3, 2, 7, 6, 5, 4]
Explanation:
Example 2:
Input: root = [6, 8, 13, 2, 1, 5, null, 7]
Output: [6, 13, 8, null, 5, 1, 2, null, null, null, null, null, 7]
LongestWithoutRepeats-----------------------------------
Given a string str made of alphabetical letters only, create a function that returns the length of the longest substring without repeating characters.
Example 1:
Input: str = "abcdbeghef"
Output: 6
Explanation: the longest substring without repeating characters is "cdbegh", its length is 6
Example 2:
Input: str = "aaaaa"
Output: 1
Explanation: the longest substring without repeating characters is "a", its length is 1
Example 3:
Input: str = "eddy"
Output: 2
Explanation: the longest substring without repeating characters is "ed" (or "dy"), its length is 2
ReverseLinkLists-------------------------------------------
Given a linked list of integers list, create a function that reverses it in-place without using an additional data structure.
Example 1:
Input: list = 5 -> 3 -> 6 -> 4 -> 7 -> null
Output: 7 -> 4 -> 6 -> 3 -> 5 -> null
Example 2:
Input: list = 1 -> 2 -> 3 -> null
Output: 3 -> 2 -> 1 -> null
PeakFinding------------------------------------------------
Given a non-empty array of integers arr, create a function that returns the index of a peak element. We consider an element as peak if it's greater than or equal to its neighbors, the next and previous element (assume that arr[-1] and arr[n] are equal to -∞). And if there are multiple peaks in arr, just return the index of one of them.
Example 1:
Input: arr = [4, 5, 8, 3]
Output: 2
Explanation: arr[2] is a peak element because it's greater than or equal to arr[1], and greater than or equal to arr[3]
Example 2:
Input: arr = [1, 3, 4, 7, 8]
Output: 4
Explanation: arr[4] is a peak element because it's greater than or equal to arr[3], which is it's only neighbor
Example 3:
Input: arr = [1, 5, 2, 6, 6, 3]
Output: 3
Explanation: arr[3] is a peak element because it's greater than or equal to arr[2] and greater than or equal to arr[4] (other valid outputs would be 1 and 4, because arr[1] and arr[4] are also peak elements)
PalindromeLists-------------------------------------------------
Given a linked list of integers list, create a boolean function that checks if it's a palindrome linked list in constant space complexity.
Example 1:
Input: list = 1 -> 4 -> 6 -> 5 -> 6 -> 4 -> 1 -> null
Output: true
Example 2:
Input: list = 8 -> 3 -> 1 -> 8 -> null
Output: false
Example 3:
Input: list = 6 -> null
Output: true
LongestPalindrome------------------------------------------------
Given a string str made of alphabetical letters only, create a function that returns the length of the longest palindrome string that can be made from letters of str
Example 1:
Input: str = "abbaba"
Output: 5
Explanation: one of the longest palindromes that can be made is "baaab", its length is 5
Example 2:
Input: str = "abbaaa"
Output: 6
Explanation: one of the longest palindromes that can be made is "baaaab", its length is 6
Example 3:
Input: str = "abbabab"
Output: 7
Explanation: one of the longest palindromes that can be made is "bbaaabb", its length is 7
Example 4:
Input: str = "abdccdceeebebc"
Output: 13
Explanation: one of the longest palindromes that can be made is "eedccbabccdee", its length is 13
GetSubstringIndex--------------------------------------------------
Given two strings str1 and str2, create a function that returns the first index where we can find str2 in str1. If we cannot find str2 in str1, the function must return -1.
Try to solve the problem without using the built-in .indexOf() method.
Example 1:
Input: str1 = "inside", str2 = "side"
Output: 2
Explanation: we can find "side" in "inside" by starting from the index 2
Example 2:
Input: str1 = "inside", str2 = "in"
Output: 0
Explanation: we can find "in" in "inside" by starting from the index 0
Example 3:
Input: str1 = "inside", str2 = "code"
Output: -1
Explanation: we can't find "code" in "inside"
BFS-------------------------------------------------------------------
Given a binary tree root, create a function that prints its nodes in level order (level by level).
Example 1:
Input: root = [5, 10, 3, 4, 6, null, 7, null, 8, 9, 1, 2]
Output: 5 10 3 4 6 7 8 9 1 2
SortList--------------------------------------------------------------
Given a linked list of integers list, create a function that sorts it.
Note that the function returns nothing, the linked list must be sorted in-place.
Example 1:
Input: list = 4 -> 8 -> 1 -> 6 -> 2 -> 5 -> null
Output: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> null
BST-------------------------------------------------------------------
Given a binary tree root, create a boolean function that checks if it's a binary search tree. Note that in a binary search tree, every node must be strictly greater than all nodes on its left subtree, and strictly smaller than all nodes on its right subtree.
Example 1:
Input: root = [16, 8, 22, 3, 11, null, null, 1, 6]
Output: true
Explanation: every node is strictly greater than all nodes on its left subtree, and strictly smaller than all nodes on its right subtree
Example 2:
Input: root = [16, 8, 22, 3, 19, null, null, 1, 6]
Output: false
Explanation: it's not a valid binary search tree because 16 is smaller than 19
MinPath-----------------------------------------------------------------
Given a matrix of integers matrix of size n*m, where each element matrix[i][j] represents the cost of passing from that cell, create a function that returns the cost of the minimum cost path to go from the top left cell to the right bottom cell, knowing that you can only move to the right or to the bottom.
Example 1:
Input: matrix = [[3, 12, 4, 7, 10], [6, 8, 15, 11, 4], [19, 5, 14, 32, 21], [1, 20, 2, 9, 7]]
Output: 54
Explanation:
BalancedBiTree-----------------------------------------------------------
Given a binary tree if integers root, create a boolean function that checks if it's a balanced binary tree. A binary tree is considered as balanced if its left and right subtree are balanced, and the difference between their heights is at most 1
Example 1:
Input: root = [5, 8, 1, 6, 7, 2, 3, 9, null, null, null, null, null, null, 4]
Output: true
Example 2:
Input: root = [5, 8, null, 6, 7, 9]
Output: false
Explanation: the height of the left subtree is 3, but the height of the right subtree is 0, the difference is greater than 1, we deduce that the tree is not balanced
MatrixPaths----------------------------------------------------------------
Given a matrix of size n*m that contains only 0s and 1s, where 0 means that the cell is empty and 1 means that there is a wall in that cell, create a function that returns the number of paths that we can take to go from the top left cell to the right bottom cell, knowing that you can move to the right or to the bottom only.
Example 1:
Input: matrix = [[0, 0, 0, 0, 1], [1, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]
Output: 4
Explanation:
TreeBFS--------------------------------------------------------------------
Given a binary tree of integers root, create a function that returns an array where each element represents an array that contains the elements at the level i.
Example 1:
Input: root = [5, 10, 3, 4, 6, null, 7, null, 8, 9, 1, 2]
Output: [[5], [10, 3], [4, 6, 7], [8, 9, 1, 2]]
Explanation:
ProductOfArr------------------------------------------------------------------
Given an array of integers arr that has at least two elements, create a function that returns an array output where output[i] represents the product of all elements of arr except arr[i], and you are not allowed to use the division operator.
Example 1:
Input: arr = [2, 5, 3, 4]
Output: [60, 24, 40, 30]
Explanation: output[0] = 5*3*4 = 60, output[1] = 2*3*4 = 24, output[2] = 2*5*4 = 40, output[3] = 2*5*3 = 30
LastIndex-----------------------------------------------------------------
Given a non-empty array of non-negative integers arr, where each element represents the maximum jump that we can perform from that index, create a boolean function that checks if we can reach the last index starting from the first one.
Example 1:
Input: arr = [3, 0, 2, 0, 2, 1, 4, 3]
Output: true
Explanation: we can for example jump from arr[0] to arr[2], then from arr[2] to arr[4], then from arr[4] to arr[6], then from arr[6] to arr[7] (the last index)
Example 2:
Input: arr = [5, 3, 2, 0, 1, 0, 4]
Output: false
Explanation: we have no way to reach the last index
GraphDFS-----------------------------------------------------------------
Given an undirected graph of integers graph, represented by an adjacency list, and an integer root, create a function that prints its values in depth first search, by considering the vertex whose value is root as the arbitrary node.
Example 1:
Input: graph = {"5" : [8, 1, 12], "8" : [5, 12, 14, 4], "12" : [5, 8, 14], "14" : [8, 12, 4], "4" : [8, 14], "1" : [5, 7], "7" : [1, 16], "16" : [7]}, root = 5
Output: 5 8 12 14 4 1 7 16
GraphBFS-------------------------------------------------------------------
Given an undirected graph of integers graph, represented by an adjacency list, and an integer root, create a function that prints its values in breadth first search, by considering the vertex whose value is root as the arbitrary node.
Example 1:
Input: graph = {"5" : [8, 1, 12], "8" : [5, 12, 14, 4], "12" : [5, 8, 14], "14" : [8, 12, 4], "4" : [8, 14], "1" : [5, 7], "7" : [1, 16], "16" : [7]}, root = 5
Output: 5 8 1 12 14 4 7 16








