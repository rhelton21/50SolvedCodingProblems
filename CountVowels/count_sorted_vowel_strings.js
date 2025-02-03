// Solution 1 (Backtracking):
// Time complexity: O(n^5)
// Space complexity: O(n) (because of the call stack size)
function count(n, last=""){
    if(n == 0) return 1;
    else{
        let nb = 0;
        for(let vowel of ['a', 'e', 'i', 'o', 'u'])
            if(last <= vowel) nb += count(n-1, vowel);
        return nb;
    }
}


// Solution 2 (Dynamic programming):
// Time complexity: O(n)
// Space complexity: O(n) (because of the dp array)
function count(n){
    const NB_VOWELS = 5;
    let dp = [...Array(n)].map(x => [...Array(NB_VOWELS)]);
    dp[0] = dp[0].map(x => 1);
    for(let i = 1; i < dp.length; i++){
        dp[i][0] = dp[i-1][0] + dp[i-1][1] + dp[i-1][2] + dp[i-1][3] + dp[i-1][4];
        dp[i][1] = dp[i-1][1] + dp[i-1][2] + dp[i-1][3] + dp[i-1][4];
        dp[i][2] = dp[i-1][2] + dp[i-1][3] + dp[i-1][4];
        dp[i][3] = dp[i-1][3] + dp[i-1][4];
        dp[i][4] = dp[i-1][4];
    }
    return dp[dp.length-1].reduce((a, b) => a + b, 0);
}

// BONUS: Space-optimized dynamic programming solution:
// Time complexity: O(n)
// Space complexity: O(1)
// Explanation: you could notice that we were working with only 2 rows at once and not the whole array, 
// so we can just work with 2 rows of 5 elements, the extra space would be 10, which is a constant
function count(n){
    const NB_VOWELS = 5;
    let prev = [...Array(NB_VOWELS)].map(x => 1);
    let curr = [...Array(NB_VOWELS)].map(x => 0);
    for(let i = 1; i < n; i++){
        curr[0] = prev[0] + prev[1] + prev[2] + prev[3] + prev[4];
        curr[1] = prev[1] + prev[2] + prev[3] + prev[4];
        curr[2] = prev[2] + prev[3] + prev[4];
        curr[3] = prev[3] + prev[4];
        curr[4] = prev[4];
        for(let j = 0; j < NB_VOWELS; j++)
          prev[j] = curr[j];
    }
    return prev.reduce((a, b) => a + b, 0);
}

// Solution 3 (Math):
// Time complexity: O(1)
// Space complexity: O(1)
function count(n){
    return (n+4)*(n+3)*(n+2)*(n+1)/24;
}
