### Problem:
<p><i>Special thanks to <b>SteffenVogel_79</b> for the idea</i>.</p>
<p>Challenge:
Given a null-terminated string and a pre-allocated buffer that has enough memory to store the full null-terminated copy of the passed string, copy the entire string into the buffer with its vowels&apos; case swapped, and return the pointer to the beginning of the copied string (buffer). For this kata, assume that vowels are in the set &quot;aeouiAEOUI&quot;.</p>
<p>Example:
Given a string &quot;C is alive!&quot; and a buffer of size strlen(&quot;C is alive!&quot;) + 1, after the call to swapCase(), the function should return the pointer to the buffer which now contains &quot;C Is AlIvE!&quot; and is properly null-terminated.</p>
<p>Addendum:
Your solution is only required to work for the ASCII character set.</p>
<p>Please make sure you only swap cases for the vowels.</p>
<p>Your solution should not allocate or de-allocate any memory. The buffer has already been pre-allocated before the call.</p>
<p>The buffer has enough memory to hold the passed string and its null terminator entirely.</p>

### Solution