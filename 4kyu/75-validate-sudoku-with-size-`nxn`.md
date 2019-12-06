### Problem:
<p>Given a Sudoku data structure with size <code>NxN, N &gt; 0 and &#x221A;N == integer</code>, write a method to validate if it has been filled out correctly.</p>
<p>The data structure is a multi-dimensional Array(in Rust: <code>Vec&lt;Vec&lt;u32&gt;&gt;</code>) , ie:</p>
<pre><code>[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],

  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],

  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]</code></pre><p><strong>Rules for validation</strong></p>
<ul>
<li>Data structure dimension: <code>NxN</code> where <code>N &gt; 0</code> and <code>&#x221A;N == integer</code></li>
<li>Rows may only contain integers: <code>1..N (N included)</code></li>
<li>Columns may only contain integers: <code>1..N (N included)</code></li>
<li><em>&apos;Little squares&apos;</em> (<code>3x3</code> in example above) may also only contain integers: <code>1..N (N included)</code></li>
</ul>
<p>Note: the matrix may include non-integer elements.</p>

### Solution