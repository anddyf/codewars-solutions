### Problem:
<p>Given a list of rows of a square matrix, find the product of the main diagonal.</p>
<p>Examples:</p>
<pre><code class="language-python">main_diagonal_product([[1,0],[0,1]]) =&gt; 1

main_diagonal_product([[1,2,3],[4,5,6],[7,8,9]]) =&gt; 45</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">mainDiagonalProduct</span> []                        `shouldBe` <span class="hljs-number">1</span>          <span class="hljs-comment">-- matrix: 0x0</span>
<span class="hljs-title">mainDiagonalProduct</span> [[<span class="hljs-number">1</span>]]                     `shouldBe` <span class="hljs-number">1</span>          <span class="hljs-comment">-- matrix: 1x1</span>
<span class="hljs-title">mainDiagonalProduct</span> [[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>],[<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>],[<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>]] `shouldBe` <span class="hljs-number">1</span> * <span class="hljs-number">5</span> * <span class="hljs-number">9</span>  <span class="hljs-comment">-- matrix: 3x3</span></code></pre>
<pre style="display: none;"><code class="language-javascript">mainDiagonalProduct([[<span class="hljs-number">1</span>,<span class="hljs-number">0</span>],[<span class="hljs-number">0</span>,<span class="hljs-number">1</span>]]) =&gt; <span class="hljs-number">1</span>

mainDiagonalProduct([[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>],[<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>],[<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>]]) =&gt; <span class="hljs-number">45</span></code></pre>
<pre style="display: none;"><code class="language-coffeescript">mainDiagonalProduct([[<span class="hljs-number">1</span>,<span class="hljs-number">0</span>],[<span class="hljs-number">0</span>,<span class="hljs-number">1</span>]]) =&gt; <span class="hljs-number">1</span>

mainDiagonalProduct([[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>],[<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>],[<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>]]) =&gt; <span class="hljs-number">45</span></code></pre>
<pre style="display: none;"><code class="language-ruby">main_diagonal_product([[<span class="hljs-number">1</span>,<span class="hljs-number">0</span>],[<span class="hljs-number">0</span>,<span class="hljs-number">1</span>]]) =&gt; <span class="hljs-number">1</span>

main_diagonal_product([[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>],[<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>],[<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>]]) =&gt; <span class="hljs-number">45</span></code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="hljs-title">mainDiagonalProduct</span> []                        `shouldBe` <span class="hljs-number">1</span>          <span class="hljs-comment">-- matrix: 0x0</span>
<span class="hljs-title">mainDiagonalProduct</span> [[<span class="hljs-number">1</span>]]                     `shouldBe` <span class="hljs-number">1</span>          <span class="hljs-comment">-- matrix: 1x1</span>
<span class="hljs-title">mainDiagonalProduct</span> [[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>],[<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>],[<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>]] `shouldBe` <span class="hljs-number">1</span> * <span class="hljs-number">5</span> * <span class="hljs-number">9</span>  <span class="hljs-comment">-- matrix: 3x3</span></code></pre>
<p><a href="http://en.wikipedia.org/wiki/Main_diagonal" target="_blank">http://en.wikipedia.org/wiki/Main_diagonal</a></p>

### Solution