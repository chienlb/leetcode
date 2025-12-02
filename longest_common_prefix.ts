/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
**/

/**
Ý tưởng bài toán:
Prefix tối đa = độ dài chuỗi ngắn nhất
Ta thử kiểm tra prefix dài mid có hợp lệ không
Dùng binary search để thu nhỏ khoảng tìm kiếm
**/

function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";

    let minLen = Math.min(...strs.map(s => s.length));
    let low = 1, high = minLen;

    function isCommonPrefix(len) {
        const prefix = strs[0].slice(0, len);
        return strs.every(s => s.startsWith(prefix));
    }

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (isCommonPrefix(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return strs[0].slice(0, high);
};
