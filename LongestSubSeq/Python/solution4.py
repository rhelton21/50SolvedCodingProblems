# Dynamic programming solution:

# Time complexity: O(nm)
# Space complexity: O(nm)

def lcs(str1, str2):
  n = len(str1)
  m = len(str2)
  dp = [[0] * (m+1) for i in range(n+1)]
  for i in range(1, n+1):
    for j in range(1, m+1):
      if str1[i-1] == str2[j-1]:
        dp[i][j] = 1 + dp[i-1][j-1]
      else:
        dp[i][j] = max(dp[i-1][j], dp[i][j-1])
  return dp[n][m]


