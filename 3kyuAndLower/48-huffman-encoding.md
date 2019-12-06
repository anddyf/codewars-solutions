### Problem:
<h2 id="motivation">Motivation</h2>
<p>Natural language texts often have a very high frequency of certain letters, in German for example, almost every 5th letter is an E, but only every 500th is a Q. It would then be clever to choose a very small representation for E. This is exactly what the Huffman compression is about, choosing the length of the representation based on the frequencies of the symbol in the text.</p>
<h2 id="algorithm">Algorithm</h2>
<p>Let&apos;s assume we want to encode the word <code>&quot;aaaabcc&quot;</code>, then we calculate the frequencies of the letters in the text:</p>
<table>
<thead>
<tr>
<th>Symbol</th>
<th>Frequency</th>
</tr>
</thead>
<tbody><tr>
<td>a</td>
<td>4</td>
</tr>
<tr>
<td>b</td>
<td>1</td>
</tr>
<tr>
<td>c</td>
<td>2</td>
</tr>
</tbody></table>
<p>Now we choose a smaller representation the more often it occurs, to minimize the overall space needed. The algorithm uses a tree for encoding and decoding:</p>
<pre><code>  .
 / \
a   .
   / \
   b  c</code></pre><p>Usually we choose <code>0</code> for the left branch and <code>1</code> for the right branch (but it might also be swapped). By traversing from the root to the symbol leaf, we want to encode, we get the matching representation. To decode a sequence of binary digits into a symbol, we start from the root and just follow the path in the same way, until we reach a symbol.</p>
<p>Considering the above tree, we would encode <strong>a</strong> with <code>0</code>, <strong>b</strong> with <code>10</code> and <strong>c</strong> with <code>11</code>. Therefore encoding <code>&quot;aaaabcc&quot;</code> will result in <code>0000101111</code>.</p>
<p>(<strong>Note:</strong> As you can see the encoding is not optimal, since the code for <strong>b</strong> and <strong>c</strong> have same length, but that is topic of another data compression Kata.)</p>
<h2 id="tree-construction">Tree construction</h2>
<p>To build the tree, we turn each symbol into a <em>leaf</em> and sort them by their frequency. In every step, we remove 2 trees with the <strong>smallest</strong> frequency and put them under a node. This node gets reinserted and has the sum of the frequencies of both trees as new frequency. We are finished, when there is only 1 tree left.</p>
<p>(<strong>Hint:</strong> Maybe you can do it without sorting in every step?)</p>
<h2 id="goal">Goal</h2>
<p>Write functions <code>frequencies</code>, <code>encode</code> and <code>decode</code>.</p>
<p>Bits are represented as a list of <code>Z</code> (zero) and <code>O</code> (one).<br>(<strong>Hint:</strong> You can assume that symbols can be ordered.)</p>
<p><strong>Note:</strong> Frequency lists with just one or less elements should get rejected. (Because then there is no information we could encode, but the length.)</p>

### Solution