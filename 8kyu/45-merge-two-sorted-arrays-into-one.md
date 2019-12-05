### Problem:
<p>You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in <strong>ascending order</strong>. Complete the function <code>mergeArrays(arr1, arr2)</code>, where <code>arr1</code> and <code>arr2</code> are the original sorted arrays.</p>
<p>You don&apos;t need to worry about validation, since <code>arr1</code> and <code>arr2</code> must be arrays with 0 or more Integers. If both <code>arr1</code> and <code>arr2</code> are empty, then just return an empty array.</p>
<p><strong>Note:</strong> <code>arr1</code> and <code>arr2</code> may be sorted in different orders. Also <code>arr1</code> and <code>arr2</code> may have same integers. Remove duplicated in the returned result.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-javascript">arr1 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
arr2 = [<span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>];
mergeArrays(arr1, arr2);  <span class="hljs-comment">// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>

arr3 = [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">9</span>];
arr4 = [<span class="hljs-number">10</span>, <span class="hljs-number">8</span>, <span class="hljs-number">6</span>, <span class="hljs-number">4</span>, <span class="hljs-number">2</span>];
mergeArrays(arr3, arr4);  <span class="hljs-comment">// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span>

arr5 = [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">9</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>];
arr6 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">10</span>, <span class="hljs-number">12</span>];
mergeArrays(arr5, arr6);  <span class="hljs-comment">// [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]</span></code></pre>
<p>Happy coding!</p>

### Solution